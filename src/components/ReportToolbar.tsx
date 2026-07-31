import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { exportReportToPdf } from '@/lib/pdf-export';

interface ReportToolbarProps {
  targetRef: React.RefObject<HTMLElement>;
  filename: string;
}

const ReportToolbar = ({ targetRef, filename }: ReportToolbarProps) => {
  const [exporting, setExporting] = useState(false);

  const handleExport = async () => {
    if (!targetRef.current || exporting) return;
    setExporting(true);
    try {
      await exportReportToPdf(targetRef.current, filename);
    } finally {
      setExporting(false);
    }
  };

  return (
    <div data-html2canvas-ignore="true" className="fixed bottom-6 right-6 z-[60] flex flex-col gap-2">
      <button onClick={handleExport} disabled={exporting}
        title="Скачать PDF"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 bg-primary text-primary-foreground shadow-lg transition-all hover:scale-105 disabled:opacity-60">
        <Icon name={exporting ? 'Loader2' : 'FileDown'} size={18} className={exporting ? 'animate-spin' : ''} />
      </button>
    </div>
  );
};

export default ReportToolbar;