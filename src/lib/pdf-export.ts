import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// ── Преобразование CSS-переменной "H S% L%" в RGB для точного фона canvas ──
function hslStringToRgb(hslStr: string): [number, number, number] {
  const match = hslStr.match(/([\d.]+)\s+([\d.]+)%\s+([\d.]+)%/);
  if (!match) return [255, 255, 255];
  const h = parseFloat(match[1]);
  const s = parseFloat(match[2]) / 100;
  const l = parseFloat(match[3]) / 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0, g = 0, b = 0;
  if (h < 60) { r = c; g = x; b = 0; }
  else if (h < 120) { r = x; g = c; b = 0; }
  else if (h < 180) { r = 0; g = c; b = x; }
  else if (h < 240) { r = 0; g = x; b = c; }
  else if (h < 300) { r = x; g = 0; b = c; }
  else { r = c; g = 0; b = x; }
  return [Math.round((r + m) * 255), Math.round((g + m) * 255), Math.round((b + m) * 255)];
}

const rgbToHex = ([r, g, b]: [number, number, number]) =>
  '#' + [r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('');

// ── Проверка: строка пикселей близка к фоновому цвету (значит, тут можно резать страницу) ──
function isRowSafeToCut(ctx: CanvasRenderingContext2D, y: number, width: number, bg: [number, number, number], tolerance = 14) {
  const row = ctx.getImageData(0, y, width, 1).data;
  const step = 24; // проверяем не каждый пиксель, а с шагом — для скорости
  for (let i = 0; i < row.length; i += step) {
    const r = row[i], g = row[i + 1], b = row[i + 2], a = row[i + 3];
    if (a < 10) continue; // прозрачный пиксель — не мешает
    if (Math.abs(r - bg[0]) > tolerance || Math.abs(g - bg[1]) > tolerance || Math.abs(b - bg[2]) > tolerance) {
      return false;
    }
  }
  return true;
}

/**
 * Экспортирует DOM-элемент в многостраничный PDF (A4), стараясь не разрезать
 * карточки/блоки посередине — для этого ищет "безопасную" строку (совпадающую
 * с фоном) рядом с идеальной границей страницы и режет именно по ней.
 */
export async function exportReportToPdf(element: HTMLElement, filename: string) {
  const rootStyle = getComputedStyle(element);
  const bgVar = rootStyle.getPropertyValue('--background').trim();
  const bgRgb = hslStringToRgb(bgVar || '0 0% 100%');
  const bgHex = rgbToHex(bgRgb);

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: bgHex,
    windowWidth: element.scrollWidth,
    windowHeight: element.scrollHeight,
  });

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidthMm = pdf.internal.pageSize.getWidth();
  const pageHeightMm = pdf.internal.pageSize.getHeight();
  const pxPerMm = canvas.width / pageWidthMm;
  const pageHeightPx = Math.floor(pageHeightMm * pxPerMm);

  const totalHeight = canvas.height;
  const searchWindowPx = Math.floor(pageHeightPx * 0.28); // насколько можно "подвинуть" разрез в поисках безопасной строки
  const minSlicePx = Math.floor(pageHeightPx * 0.55); // не делаем страницу короче половины, чтобы не плодить лишние листы

  let y = 0;
  let pageIndex = 0;

  while (y < totalHeight) {
    let sliceEnd = Math.min(y + pageHeightPx, totalHeight);

    if (sliceEnd < totalHeight) {
      const minY = Math.max(y + minSlicePx, sliceEnd - searchWindowPx);
      let safeY: number | null = null;
      for (let cand = sliceEnd; cand > minY; cand -= 3) {
        if (isRowSafeToCut(ctx, cand, canvas.width, bgRgb)) {
          safeY = cand;
          break;
        }
      }
      if (safeY !== null) sliceEnd = safeY;
    }

    const sliceHeight = sliceEnd - y;
    const pageCanvas = document.createElement('canvas');
    pageCanvas.width = canvas.width;
    pageCanvas.height = sliceHeight;
    const pageCtx = pageCanvas.getContext('2d');
    if (pageCtx) {
      pageCtx.fillStyle = bgHex;
      pageCtx.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
      pageCtx.drawImage(canvas, 0, y, canvas.width, sliceHeight, 0, 0, canvas.width, sliceHeight);
    }

    const imgData = pageCanvas.toDataURL('image/jpeg', 0.94);
    const imgHeightMm = sliceHeight / pxPerMm;

    if (pageIndex > 0) pdf.addPage();
    pdf.addImage(imgData, 'JPEG', 0, 0, pageWidthMm, imgHeightMm);

    y = sliceEnd;
    pageIndex++;
  }

  pdf.save(filename);
}
