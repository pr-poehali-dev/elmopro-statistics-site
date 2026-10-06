// ── Данные отчёта клиента Zetaprint ──
import { NEON, AGENCY } from '@/data/report';

export { NEON, AGENCY };

export const CLIENT = {
  name: 'Zetaprint',
  id: 'zetaprint',
  site: 'https://zetaprint.ru/',
  siteCards: 'https://cards.zetaprint.ru/',
  period: 'Сентябрь 2026',
  weeklyStats: 'https://docs.google.com/spreadsheets/d/1RrkboNllfCyDSe0eq061yBbdGdoXmMHMXSkBorJvTLo/edit?gid=1743674009#gid=1743674009',
  paybackFunnel: 'https://docs.google.com/spreadsheets/d/15Vu8LHCrDtOxoFDR2YyPJuShi1UpMwZz6xSjCHVBFHQ/edit?gid=660690295#gid=660690295',
};

export const aboutLinks = [
  { icon: 'CalendarRange', label: 'Понедельная статистика', desc: 'Расход, заявки и стоимость лида по неделям месяца.', href: CLIENT.weeklyStats, cta: 'Открыть таблицу' },
  { icon: 'TrendingUp', label: 'Воронка окупаемости', desc: 'Путь от лида до сделки и юнит-экономика проекта.', href: CLIENT.paybackFunnel, cta: 'Открыть таблицу' },
  {
    icon: 'Globe',
    label: 'Сайты',
    desc: 'Посадочные страницы, на которые ведёт реклама.',
    links: [
      { href: CLIENT.site, cta: 'zetaprint.ru', note: 'Основной многостраничный сайт типографии' },
      { href: CLIENT.siteCards, cta: 'cards.zetaprint.ru', note: 'Посадочная страница направления «Карты игральные»' },
    ],
  },
];

// ── Сегменты рекламы (без сводного — используются в разделах 03 и 04) ──
export const segments = [
  { key: 'notbrand', label: 'Не Бренд', icon: 'Search' },
  { key: 'brand', label: 'Бренд', icon: 'Star' },
  { key: 'cards', label: 'Карты', icon: 'Map' },
] as const;

export type SegmentKey = typeof segments[number]['key'];

// ── Сегменты со сводным направлением (используются в разделах 02 и 07) ──
export const segmentsWithTotal = [
  ...segments,
  { key: 'total', label: 'Все направления', icon: 'LayoutGrid' },
] as const;

export type SegmentKeyTotal = typeof segmentsWithTotal[number]['key'];

// Единый регламент: бюджет указывается без учёта 3% комиссии eLama.
// Порядок строк воронки: бюджет → уники → CPL → % чистых → чистые → цена чистого →
// конверсия чист→квал → квалы → CPQL.

// ── Блок: план / факт за сентябрь 2026 по сегментам ──
export const planFactBySegment: Record<SegmentKeyTotal, Array<{ param: string; planNum: number; factNum: number; planLabel: string; factLabel: string; isCost: boolean }>> = {
  notbrand: [
    { param: 'Рекламный бюджет, руб.', planNum: 407400, factNum: 466165, planLabel: '407 400 ₽', factLabel: '466 165 ₽', isCost: false },
    { param: 'Уникальные лиды (заявки), ед.', planNum: 185, factNum: 264, planLabel: '185', factLabel: '264', isCost: false },
    { param: 'Стоимость уникального лида, руб.', planNum: 2200, factNum: 1766, planLabel: '2 200 ₽', factLabel: '1 766 ₽', isCost: true },
    { param: '% чистых заявок (1-й уровень)', planNum: 98.0, factNum: 93.94, planLabel: '98,00%', factLabel: '93,94%', isCost: false },
    { param: 'Чистые заявки, ед. (1-й уровень)', planNum: 181, factNum: 248, planLabel: '181', factLabel: '248', isCost: false },
    { param: 'Стоимость чистой заявки (1-й уровень), руб.', planNum: 2245, factNum: 1880, planLabel: '2 245 ₽', factLabel: '1 880 ₽', isCost: true },
    { param: '% чистых заявок (2-й уровень)', planNum: 80.17, factNum: 88.64, planLabel: '80,17%', factLabel: '88,64%', isCost: false },
    { param: 'Чистые заявки, ед. (2-й уровень)', planNum: 146, factNum: 234, planLabel: '146', factLabel: '234', isCost: false },
    { param: 'Стоимость чистой заявки (2-й уровень), руб.', planNum: 2800, factNum: 1992, planLabel: '2 800 ₽', factLabel: '1 992 ₽', isCost: true },
    { param: 'Квал. заявки, ед.', planNum: 65, factNum: 76, planLabel: '65', factLabel: '76', isCost: false },
    { param: 'Стоимость квал. заявки, руб.', planNum: 6222, factNum: 6134, planLabel: '6 222 ₽', factLabel: '6 134 ₽', isCost: true },
    { param: 'Конверсия из чистой 1-го ур. в квал, %', planNum: 35.91, factNum: 30.65, planLabel: '35,91%', factLabel: '30,65%', isCost: false },
    { param: 'Конверсия из чистой 2-го ур. в квал, %', planNum: 44.52, factNum: 32.48, planLabel: '44,52%', factLabel: '32,48%', isCost: false },
  ],
  brand: [
    { param: 'Рекламный бюджет, руб.', planNum: 9400, factNum: 4959, planLabel: '9 400 ₽', factLabel: '4 959 ₽', isCost: false },
    { param: 'Уникальные лиды (заявки), ед.', planNum: 12, factNum: 24, planLabel: '12', factLabel: '24', isCost: false },
    { param: 'Стоимость уникального лида, руб.', planNum: 800, factNum: 207, planLabel: '800 ₽', factLabel: '207 ₽', isCost: true },
    { param: '% чистых заявок (1-й уровень)', planNum: 98.0, factNum: 91.67, planLabel: '98,00%', factLabel: '91,67%', isCost: false },
    { param: 'Чистые заявки, ед. (1-й уровень)', planNum: 12, factNum: 22, planLabel: '12', factLabel: '22', isCost: false },
    { param: 'Стоимость чистой заявки (1-й уровень), руб.', planNum: 816, factNum: 225, planLabel: '816 ₽', factLabel: '225 ₽', isCost: true },
    { param: '% чистых заявок (2-й уровень)', planNum: 27.21, factNum: 79.17, planLabel: '27,21%', factLabel: '79,17%', isCost: false },
    { param: 'Чистые заявки, ед. (2-й уровень)', planNum: 3, factNum: 19, planLabel: '3', factLabel: '19', isCost: false },
    { param: 'Стоимость чистой заявки (2-й уровень), руб.', planNum: 3000, factNum: 261, planLabel: '3 000 ₽', factLabel: '261 ₽', isCost: true },
    { param: 'Квал. заявки, ед.', planNum: 3, factNum: 9, planLabel: '3', factLabel: '9', isCost: false },
    { param: 'Стоимость квал. заявки, руб.', planNum: 3000, factNum: 551, planLabel: '3 000 ₽', factLabel: '551 ₽', isCost: true },
    { param: 'Конверсия из чистой 1-го ур. в квал, %', planNum: 25.0, factNum: 40.91, planLabel: '25,00%', factLabel: '40,91%', isCost: false },
    { param: 'Конверсия из чистой 2-го ур. в квал, %', planNum: 100.0, factNum: 47.37, planLabel: '100,00%', factLabel: '47,37%', isCost: false },
  ],
  cards: [
    { param: 'Рекламный бюджет, руб.', planNum: 140650, factNum: 129584, planLabel: '140 650 ₽', factLabel: '129 584 ₽', isCost: false },
    { param: 'Уникальные лиды (заявки), ед.', planNum: 85, factNum: 114, planLabel: '85', factLabel: '114', isCost: false },
    { param: 'Стоимость уникального лида, руб.', planNum: 1650, factNum: 1137, planLabel: '1 650 ₽', factLabel: '1 137 ₽', isCost: true },
    { param: '% чистых заявок (1-й уровень)', planNum: 85.0, factNum: 91.23, planLabel: '85,00%', factLabel: '91,23%', isCost: false },
    { param: 'Чистые заявки, ед. (1-й уровень)', planNum: 72, factNum: 104, planLabel: '72', factLabel: '104', isCost: false },
    { param: 'Стоимость чистой заявки (1-й уровень), руб.', planNum: 1941, factNum: 1246, planLabel: '1 941 ₽', factLabel: '1 246 ₽', isCost: true },
    { param: '% чистых заявок (2-й уровень)', planNum: 84.4, factNum: 81.58, planLabel: '84,40%', factLabel: '81,58%', isCost: false },
    { param: 'Чистые заявки, ед. (2-й уровень)', planNum: 61, factNum: 93, planLabel: '61', factLabel: '93', isCost: false },
    { param: 'Стоимость чистой заявки (2-й уровень), руб.', planNum: 2300, factNum: 1393, planLabel: '2 300 ₽', factLabel: '1 393 ₽', isCost: true },
    { param: 'Квал. заявки, ед.', planNum: 31, factNum: 32, planLabel: '31', factLabel: '32', isCost: false },
    { param: 'Стоимость квал. заявки, руб.', planNum: 4600, factNum: 4050, planLabel: '4 600 ₽', factLabel: '4 050 ₽', isCost: true },
    { param: 'Конверсия из чистой 1-го ур. в квал, %', planNum: 43.06, factNum: 30.77, planLabel: '43,06%', factLabel: '30,77%', isCost: false },
    { param: 'Конверсия из чистой 2-го ур. в квал, %', planNum: 50.82, factNum: 34.41, planLabel: '50,82%', factLabel: '34,41%', isCost: false },
  ],
  total: [
    { param: 'Рекламный бюджет, руб.', planNum: 557450, factNum: 600708, planLabel: '557 450 ₽', factLabel: '600 708 ₽', isCost: false },
    { param: 'Уникальные лиды (заявки), ед.', planNum: 282, factNum: 402, planLabel: '282', factLabel: '402', isCost: false },
    { param: 'Стоимость уникального лида, руб.', planNum: 1977, factNum: 1494, planLabel: '1 977 ₽', factLabel: '1 494 ₽', isCost: true },
    { param: '% чистых заявок (1-й уровень)', planNum: 93.97, factNum: 93.03, planLabel: '93,97%', factLabel: '93,03%', isCost: false },
    { param: 'Чистые заявки, ед. (1-й уровень)', planNum: 265, factNum: 374, planLabel: '265', factLabel: '374', isCost: false },
    { param: 'Стоимость чистой заявки (1-й уровень), руб.', planNum: 2104, factNum: 1606, planLabel: '2 104 ₽', factLabel: '1 606 ₽', isCost: true },
    { param: '% чистых заявок (2-й уровень)', planNum: 74.47, factNum: 86.07, planLabel: '74,47%', factLabel: '86,07%', isCost: false },
    { param: 'Чистые заявки, ед. (2-й уровень)', planNum: 210, factNum: 346, planLabel: '210', factLabel: '346', isCost: false },
    { param: 'Стоимость чистой заявки (2-й уровень), руб.', planNum: 2655, factNum: 1736, planLabel: '2 655 ₽', factLabel: '1 736 ₽', isCost: true },
    { param: 'Квал. заявки, ед.', planNum: 99, factNum: 117, planLabel: '99', factLabel: '117', isCost: false },
    { param: 'Стоимость квал. заявки, руб.', planNum: 5631, factNum: 5134, planLabel: '5 631 ₽', factLabel: '5 134 ₽', isCost: true },
    { param: 'Конверсия из чистой 1-го ур. в квал, %', planNum: 37.36, factNum: 31.28, planLabel: '37,36%', factLabel: '31,28%', isCost: false },
    { param: 'Конверсия из чистой 2-го ур. в квал, %', planNum: 47.14, factNum: 33.82, planLabel: '47,14%', factLabel: '33,82%', isCost: false },
  ],
};

// ── Блок: факт август vs факт сентябрь по сегментам ──
export const monthCompareBySegment: Record<SegmentKeyTotal, Array<{ param: string; mayNum: number; junNum: number; mayLabel: string; junLabel: string; isCost: boolean }>> = {
  notbrand: [
    { param: 'Рекламный бюджет, руб.', mayNum: 432953, junNum: 466165, mayLabel: '432 953 ₽', junLabel: '466 165 ₽', isCost: false },
    { param: 'Уникальные лиды, ед.', mayNum: 199, junNum: 264, mayLabel: '199', junLabel: '264', isCost: false },
    { param: 'Стоимость уникального лида, руб.', mayNum: 2176, junNum: 1766, mayLabel: '2 176 ₽', junLabel: '1 766 ₽', isCost: true },
    { param: 'Конверсия в чистые лиды (1-й ур.), %', mayNum: 89.45, junNum: 93.94, mayLabel: '89,45%', junLabel: '93,94%', isCost: false },
    { param: 'Чистые лиды, ед. (1-й уровень)', mayNum: 178, junNum: 248, mayLabel: '178', junLabel: '248', isCost: false },
    { param: 'Стоимость чистого лида 1-го ур., руб.', mayNum: 2432, junNum: 1880, mayLabel: '2 432 ₽', junLabel: '1 880 ₽', isCost: true },
    { param: 'Квалифицированные лиды, ед.', mayNum: 72, junNum: 76, mayLabel: '72', junLabel: '76', isCost: false },
    { param: 'Стоимость квалифицированного лида, руб.', mayNum: 6013, junNum: 6134, mayLabel: '6 013 ₽', junLabel: '6 134 ₽', isCost: true },
    { param: 'Конверсия из чистой 1-го ур. в квал, %', mayNum: 40.45, junNum: 30.65, mayLabel: '40,45%', junLabel: '30,65%', isCost: false },
  ],
  brand: [
    { param: 'Рекламный бюджет, руб.', mayNum: 10300, junNum: 4959, mayLabel: '10 300 ₽', junLabel: '4 959 ₽', isCost: false },
    { param: 'Уникальные лиды, ед.', mayNum: 13, junNum: 24, mayLabel: '13', junLabel: '24', isCost: false },
    { param: 'Стоимость уникального лида, руб.', mayNum: 792, junNum: 207, mayLabel: '792 ₽', junLabel: '207 ₽', isCost: true },
    { param: 'Конверсия в чистые лиды (1-й ур.), %', mayNum: 92.31, junNum: 91.67, mayLabel: '92,31%', junLabel: '91,67%', isCost: false },
    { param: 'Чистые лиды, ед. (1-й уровень)', mayNum: 12, junNum: 22, mayLabel: '12', junLabel: '22', isCost: false },
    { param: 'Стоимость чистого лида 1-го ур., руб.', mayNum: 858, junNum: 225, mayLabel: '858 ₽', junLabel: '225 ₽', isCost: true },
    { param: 'Квалифицированные лиды, ед.', mayNum: 3, junNum: 9, mayLabel: '3', junLabel: '9', isCost: false },
    { param: 'Стоимость квалифицированного лида, руб.', mayNum: 3433, junNum: 551, mayLabel: '3 433 ₽', junLabel: '551 ₽', isCost: true },
    { param: 'Конверсия из чистой 1-го ур. в квал, %', mayNum: 25.0, junNum: 40.91, mayLabel: '25,00%', junLabel: '40,91%', isCost: false },
  ],
  cards: [
    { param: 'Рекламный бюджет, руб.', mayNum: 161886, junNum: 129584, mayLabel: '161 886 ₽', junLabel: '129 584 ₽', isCost: false },
    { param: 'Уникальные лиды, ед.', mayNum: 88, junNum: 114, mayLabel: '88', junLabel: '114', isCost: false },
    { param: 'Стоимость уникального лида, руб.', mayNum: 1839, junNum: 1137, mayLabel: '1 839 ₽', junLabel: '1 137 ₽', isCost: true },
    { param: 'Конверсия в чистые лиды (1-й ур.), %', mayNum: 94.32, junNum: 91.23, mayLabel: '94,32%', junLabel: '91,23%', isCost: false },
    { param: 'Чистые лиды, ед. (1-й уровень)', mayNum: 83, junNum: 104, mayLabel: '83', junLabel: '104', isCost: false },
    { param: 'Стоимость чистого лида 1-го ур., руб.', mayNum: 1950, junNum: 1246, mayLabel: '1 950 ₽', junLabel: '1 246 ₽', isCost: true },
    { param: 'Квалифицированные лиды, ед.', mayNum: 32, junNum: 32, mayLabel: '32', junLabel: '32', isCost: false },
    { param: 'Стоимость квалифицированного лида, руб.', mayNum: 5058, junNum: 4050, mayLabel: '5 058 ₽', junLabel: '4 050 ₽', isCost: true },
    { param: 'Конверсия из чистой 1-го ур. в квал, %', mayNum: 38.55, junNum: 30.77, mayLabel: '38,55%', junLabel: '30,77%', isCost: false },
  ],
  total: [
    { param: 'Рекламный бюджет, руб.', mayNum: 605139, junNum: 600708, mayLabel: '605 139 ₽', junLabel: '600 708 ₽', isCost: false },
    { param: 'Уникальные лиды, ед.', mayNum: 300, junNum: 402, mayLabel: '300', junLabel: '402', isCost: false },
    { param: 'Стоимость уникального лида, руб.', mayNum: 2017, junNum: 1494, mayLabel: '2 017 ₽', junLabel: '1 494 ₽', isCost: true },
    { param: 'Конверсия в чистые лиды (1-й ур.), %', mayNum: 91.0, junNum: 93.03, mayLabel: '91,00%', junLabel: '93,03%', isCost: false },
    { param: 'Чистые лиды, ед. (1-й уровень)', mayNum: 273, junNum: 374, mayLabel: '273', junLabel: '374', isCost: false },
    { param: 'Стоимость чистого лида 1-го ур., руб.', mayNum: 2217, junNum: 1606, mayLabel: '2 217 ₽', junLabel: '1 606 ₽', isCost: true },
    { param: 'Квалифицированные лиды, ед.', mayNum: 107, junNum: 117, mayLabel: '107', junLabel: '117', isCost: false },
    { param: 'Стоимость квалифицированного лида, руб.', mayNum: 5655, junNum: 5134, mayLabel: '5 655 ₽', junLabel: '5 134 ₽', isCost: true },
    { param: 'Конверсия из чистой 1-го ур. в квал, %', mayNum: 39.19, junNum: 31.28, mayLabel: '39,19%', junLabel: '31,28%', isCost: false },
  ],
};

// ── Блок: помесячная динамика с января 2026 по сегментам ──
export const monthlyTrendBySegment: Record<SegmentKey, Array<{ m: string; cost: number | null; clicks: number | null; uniq: number | null; costUniq: number | null; clean: number | null; costClean: number | null; qual: number | null; costQual: number | null }>> = {
  notbrand: [
    { m: 'Янв', cost: 300000, clicks: null, uniq: 92, costUniq: 3261, clean: 83, costClean: 3260, qual: 35, costQual: 8571 },
    { m: 'Фев', cost: 260000, clicks: null, uniq: 109, costUniq: 2385, clean: 99, costClean: 2385, qual: 42, costQual: 6190 },
    { m: 'Мар', cost: 258000, clicks: null, uniq: 98, costUniq: 2633, clean: 89, costClean: 2632, qual: 39, costQual: 6615 },
    { m: 'Апр', cost: 410000, clicks: null, uniq: 142, costUniq: 2887, clean: 130, costClean: 2887, qual: 58, costQual: 7069 },
    { m: 'Май', cost: 414000, clicks: null, uniq: 166, costUniq: 2494, clean: 152, costClean: 2493, qual: 64, costQual: 6469 },
    { m: 'Июн', cost: 456000, clicks: null, uniq: 198, costUniq: 2303, clean: 181, costClean: 2303, qual: 74, costQual: 6162 },
    { m: 'Июл', cost: 437000, clicks: null, uniq: 181, costUniq: 2414, clean: 167, costClean: 2414, qual: 71, costQual: 6155 },
    { m: 'Авг', cost: 432953, clicks: null, uniq: 199, costUniq: 2176, clean: 178, costClean: 2432, qual: 72, costQual: 6013 },
    { m: 'Сен', cost: 466165, clicks: null, uniq: 264, costUniq: 1766, clean: 248, costClean: 1880, qual: 76, costQual: 6134 },
    { m: 'Окт', cost: null, clicks: null, uniq: null, costUniq: null, clean: null, costClean: null, qual: null, costQual: null },
  ],
  brand: [
    { m: 'Янв', cost: 8110.96, clicks: 131, uniq: 21, costUniq: 386.24, clean: 15, costClean: 540.73, qual: 3, costQual: 2703.65 },
    { m: 'Фев', cost: 15594.87, clicks: 201, uniq: 24, costUniq: 649.79, clean: 21, costClean: 742.61, qual: 8, costQual: 1949.36 },
    { m: 'Мар', cost: 11132.19, clicks: 186, uniq: 18, costUniq: 618.46, clean: 18, costClean: 618.46, qual: 8, costQual: 1391.52 },
    { m: 'Апр', cost: 10574.79, clicks: 162, uniq: 20, costUniq: 528.74, clean: 20, costClean: 528.74, qual: 8, costQual: 1321.85 },
    { m: 'Май', cost: 6644.36, clicks: 114, uniq: 12, costUniq: 553.70, clean: 12, costClean: 553.70, qual: 3, costQual: 2214.79 },
    { m: 'Июн', cost: 15078.26, clicks: 190, uniq: 24, costUniq: 628.26, clean: 24, costClean: 628.26, qual: 10, costQual: 1507.83 },
    { m: 'Июл', cost: 12691.25, clicks: 164, uniq: 9, costUniq: 1410, clean: 9, costClean: 1410, qual: 3, costQual: 4230 },
    { m: 'Авг', cost: 10300, clicks: 148, uniq: 13, costUniq: 792, clean: 12, costClean: 858, qual: 3, costQual: 3433 },
    { m: 'Сен', cost: 4959, clicks: null, uniq: 24, costUniq: 207, clean: 22, costClean: 225, qual: 9, costQual: 551 },
    { m: 'Окт', cost: null, clicks: null, uniq: null, costUniq: null, clean: null, costClean: null, qual: null, costQual: null },
  ],
  cards: [
    { m: 'Янв', cost: 114746.67, clicks: 6276, uniq: 56, costUniq: 2049.05, clean: 50, costClean: 2294.93, qual: 20, costQual: 5737.33 },
    { m: 'Фев', cost: 130079.92, clicks: 21014, uniq: 55, costUniq: 2365.09, clean: 47, costClean: 2767.66, qual: 14, costQual: 9291.42 },
    { m: 'Мар', cost: 135330.94, clicks: 38954, uniq: 83, costUniq: 1630.49, clean: 70, costClean: 1933.30, qual: 16, costQual: 8458.18 },
    { m: 'Апр', cost: 147782.08, clicks: 24290, uniq: 77, costUniq: 1919.25, clean: 76, costClean: 1944.50, qual: 25, costQual: 5911.28 },
    { m: 'Май', cost: 124253.97, clicks: 14096, uniq: 58, costUniq: 2142.31, clean: 51, costClean: 2436.35, qual: 18, costQual: 6903.00 },
    { m: 'Июн', cost: 156422.23, clicks: 10292, uniq: 63, costUniq: 2482.89, clean: 60, costClean: 2607.04, qual: 16, costQual: 9776.39 },
    { m: 'Июл', cost: 157030.19, clicks: 25590, uniq: 88, costUniq: 1784, clean: 83, costClean: 1892, qual: 32, costQual: 4907 },
    { m: 'Авг', cost: 161886, clicks: 42580, uniq: 88, costUniq: 1839, clean: 83, costClean: 1950, qual: 32, costQual: 5058 },
    { m: 'Сен', cost: 129584, clicks: null, uniq: 114, costUniq: 1137, clean: 104, costClean: 1246, qual: 32, costQual: 4050 },
    { m: 'Окт', cost: null, clicks: null, uniq: null, costUniq: null, clean: null, costClean: null, qual: null, costQual: null },
  ],
};

// ── Спрос по Wordstat: помесячно, 2024 / 2025 / 2026 на одном графике ──
export const demand = [
  { m: 'Янв', y24: 15637, y25: 21961, y26: 12956 },
  { m: 'Фев', y24: 20446, y25: 20357, y26: 14560 },
  { m: 'Мар', y24: 19831, y25: 20299, y26: 19788 },
  { m: 'Апр', y24: 18647, y25: 17516, y26: 17808 },
  { m: 'Май', y24: 17844, y25: 18488, y26: 15977 },
  { m: 'Июн', y24: 14896, y25: 15631, y26: 13294 },
  { m: 'Июл', y24: 14245, y25: 17393, y26: 11321 },
  { m: 'Авг', y24: 15370, y25: 17669, y26: 11327 },
  { m: 'Сен', y24: 17043, y25: 17786, y26: null },
  { m: 'Окт', y24: 20610, y25: 22448, y26: null },
  { m: 'Ноя', y24: 21690, y25: 17698, y26: null },
  { m: 'Дек', y24: 28704, y25: 17208, y26: null },
];

// ── Работы ──
export const workDone = [
  'Перезапуск кампаний при остановке обучения и возврат автостратегий в активную обучающую фазу',
  'Запуск новой кампании под направление «Карты игральные» на основном многостраничном сайте zetaprint.ru',
  'Корректировки средней цены клика (CPC) в зависимости от окупаемости и отдачи сегментов',
  'Отключение неэффективных групп объявлений и ключевых фраз с завышенной стоимостью обращения',
  'Регулярная минусация поисковых запросов и пополнение единого кросс-минус списка',
  'Чистка неконверсионных площадок и мобильных приложений в РСЯ',
  'Сверка и аудит сквозной аналитики Calltouch со статусами лидов CRM (чистые 1-го и 2-го уровней, квалы)',
  'Тестирование обновлённых текстово-графических объявлений под B2B-тиражи',
  'Контроль эффективности и сдерживание стоимости клика в брендовых кампаниях',
  'Масштабирование связок по лендингу cards.zetaprint.ru',
  'Подготовка прогнозов и медиаплана на октябрь 2026 года',
];

export const workPlan = [
  'Создание сегментов ретаргетинга и LAL-аудиторий на базе базы квалифицированных клиентов из CRM',
  'Расширение таргетингов под тиражные настольные игры и мерч для продавцов маркетплейсов',
  'Тестирование микроконверсий с контролем времени на сайте (>90 сек) для отсечения единичного розничного трафика',
  'Ежедневный мониторинг количества лидов и стоимости уникальных, чистых и квал. лидов',
];

export const growthPoints = [
  'Сегментация РСЯ по LAL-аудиториям квалифицированных лидов из CRM (прогноз: рост доли квалов до 40%+)',
  'Старт продвижения корпоративной новогодней полиграфии и упаковки в октябре до пикового подорожания аукциона в ноябре',
];

// ── План на новый месяц (октябрь 2026) по сегментам ──
export const nextPlanBySegment: Record<SegmentKeyTotal, Array<{ param: string; plan: string }>> = {
  notbrand: [
    { param: 'Рекламный бюджет, руб.', plan: '412 250 ₽' },
    { param: 'Уникальные лиды (заявки), ед.', plan: '217' },
    { param: 'Стоимость уникального лида, руб.', plan: '1 900 ₽' },
    { param: 'Конверсия в чистые лиды (1-й уровень), %', plan: '93,00%' },
    { param: 'Чистые лиды, ед. (1-й уровень)', plan: '202' },
    { param: 'Стоимость чистой заявки (1-й уровень), руб.', plan: '2 043 ₽' },
    { param: 'Конверсия в чистые лиды (2-й уровень), %', plan: '97,29%' },
    { param: 'Чистые лиды, ед. (2-й уровень)', plan: '196' },
    { param: 'Стоимость чистой заявки (2-й уровень), руб.', plan: '2 100 ₽' },
    { param: 'Квал. заявки, ед.', plan: '79' },
    { param: 'Стоимость квал. заявки, руб.', plan: '5 250 ₽' },
    { param: 'Конверсия в квал. лиды (от 2-го ур.), %', plan: '40,31%' },
  ],
  brand: [
    { param: 'Рекламный бюджет, руб.', plan: '4 700 ₽' },
    { param: 'Уникальные лиды (заявки), ед.', plan: '24' },
    { param: 'Стоимость уникального лида, руб.', plan: '200 ₽' },
    { param: 'Конверсия в чистые лиды (1-й уровень), %', plan: '93,00%' },
    { param: 'Чистые лиды, ед. (1-й уровень)', plan: '22' },
    { param: 'Стоимость чистой заявки (1-й уровень), руб.', plan: '215 ₽' },
    { param: 'Конверсия в чистые лиды (2-й уровень), %', plan: '53,76%' },
    { param: 'Чистые лиды, ед. (2-й уровень)', plan: '12' },
    { param: 'Стоимость чистой заявки (2-й уровень), руб.', plan: '400 ₽' },
    { param: 'Квал. заявки, ед.', plan: '11' },
    { param: 'Стоимость квал. заявки, руб.', plan: '444 ₽' },
    { param: 'Конверсия в квал. лиды (от 2-го ур.), %', plan: '91,67%' },
  ],
  cards: [
    { param: 'Рекламный бюджет, руб.', plan: '140 650 ₽' },
    { param: 'Уникальные лиды (заявки), ед.', plan: '94' },
    { param: 'Стоимость уникального лида, руб.', plan: '1 500 ₽' },
    { param: 'Конверсия в чистые лиды (1-й уровень), %', plan: '90,00%' },
    { param: 'Чистые лиды, ед. (1-й уровень)', plan: '84' },
    { param: 'Стоимость чистой заявки (1-й уровень), руб.', plan: '1 667 ₽' },
    { param: 'Конверсия в чистые лиды (2-й уровень), %', plan: '70,00%' },
    { param: 'Чистые лиды, ед. (2-й уровень)', plan: '59' },
    { param: 'Стоимость чистой заявки (2-й уровень), руб.', plan: '2 381 ₽' },
    { param: 'Квал. заявки, ед.', plan: '37' },
    { param: 'Стоимость квал. заявки, руб.', plan: '3 779 ₽' },
    { param: 'Конверсия в квал. лиды (от 2-го ур.), %', plan: '62,71%' },
  ],
  total: [
    { param: 'Рекламный бюджет, руб.', plan: '557 600 ₽' },
    { param: 'Уникальные лиды (заявки), ед.', plan: '335' },
    { param: 'Стоимость уникального лида, руб.', plan: '1 664 ₽' },
    { param: 'Конверсия в чистые лиды (1-й уровень), %', plan: '91,94%' },
    { param: 'Чистые лиды, ед. (1-й уровень)', plan: '308' },
    { param: 'Стоимость чистой заявки (1-й уровень), руб.', plan: '1 810 ₽' },
    { param: 'Конверсия в чистые лиды (2-й уровень), %', plan: '79,70%' },
    { param: 'Чистые лиды, ед. (2-й уровень)', plan: '267' },
    { param: 'Стоимость чистой заявки (2-й уровень), руб.', plan: '2 088 ₽' },
    { param: 'Квал. заявки, ед.', plan: '127' },
    { param: 'Стоимость квал. заявки, руб.', plan: '4 391 ₽' },
    { param: 'Конверсия в квал. лиды (от 2-го ур.), %', plan: '47,57%' },
  ],
};
