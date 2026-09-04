// ── Данные отчёта клиента Zetaprint ──
import { NEON, AGENCY } from '@/data/report';

export { NEON, AGENCY };

export const CLIENT = {
  name: 'Zetaprint',
  id: 'zetaprint',
  site: 'https://zetaprint.ru/',
  siteCards: 'https://cards.zetaprint.ru/',
  period: 'Август 2026',
  weeklyStats: 'https://docs.google.com/spreadsheets/d/1RrkboNllfCyDSe0eq061yBbdGdoXmMHMXSkBorJvTLo/edit?gid=1743674009#gid=1743674009',
  paybackFunnel: 'https://docs.google.com/spreadsheets/d/15Vu8LHCrDtOxoFDR2YyPJuShi1UpMwZz6xSjCHVBFHQ/edit?gid=660690295#gid=660690295',
};

export const aboutLinks = [
  { icon: 'CalendarRange', label: 'Понедельная статистика', desc: 'Расход, заявки и стоимость лида по неделям месяца.', href: CLIENT.weeklyStats, cta: 'Открыть таблицу' },
  { icon: 'TrendingUp', label: 'Воронка окупаемости', desc: 'Путь от лида до сделки и юнит-экономика проекта.', href: CLIENT.paybackFunnel, cta: 'Открыть таблицу' },
  {
    icon: 'Map',
    label: 'Сайты',
    desc: 'Основной сайт и лендинг с Картами, на которые ведёт реклама.',
    links: [
      { href: CLIENT.site, cta: 'zetaprint.ru' },
      { href: CLIENT.siteCards, cta: 'cards.zetaprint.ru' },
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

// ── Блок: план / факт за август 2026 по сегментам ──
export const planFactBySegment: Record<SegmentKeyTotal, Array<{ param: string; planNum: number; factNum: number; planLabel: string; factLabel: string; isCost: boolean }>> = {
  notbrand: [
    { param: 'Бюджет с НДС, руб.', planNum: 407400, factNum: 432953, planLabel: '407 400 ₽', factLabel: '432 953 ₽', isCost: false },
    { param: 'Уникальные лиды, ед.', planNum: 170, factNum: 199, planLabel: '170', factLabel: '199', isCost: false },
    { param: 'Стоимость уникального лида, руб.', planNum: 2400, factNum: 2176, planLabel: '2 400 ₽', factLabel: '2 176 ₽', isCost: true },
    { param: 'Конверсия в чистые лиды, %', planNum: 90.00, factNum: 89.45, planLabel: '90,00%', factLabel: '89,45%', isCost: false },
    { param: 'Чистые лиды, ед.', planNum: 153, factNum: 178, planLabel: '153', factLabel: '178', isCost: false },
    { param: 'Стоимость чистого лида, руб.', planNum: 2667, factNum: 2432, planLabel: '2 667 ₽', factLabel: '2 432 ₽', isCost: true },
    { param: 'Конверсия из чистой в квал, %', planNum: 45.00, factNum: 47.68, planLabel: '45,00%', factLabel: '47,68%', isCost: false },
    { param: 'Квалифицированные лиды, ед.', planNum: 69, factNum: 72, planLabel: '69', factLabel: '72', isCost: false },
    { param: 'Стоимость квалифицированного лида, руб.', planNum: 5926, factNum: 6013, planLabel: '5 926 ₽', factLabel: '6 013 ₽', isCost: true },
  ],
  brand: [
    { param: 'Бюджет с НДС, руб.', planNum: 9400, factNum: 10373, planLabel: '9 400 ₽', factLabel: '10 373 ₽', isCost: false },
    { param: 'Уникальные лиды, ед.', planNum: 9, factNum: 13, planLabel: '9', factLabel: '13', isCost: false },
    { param: 'Стоимость уникального лида, руб.', planNum: 1000, factNum: 798, planLabel: '1 000 ₽', factLabel: '798 ₽', isCost: true },
    { param: 'Конверсия в чистые лиды, %', planNum: 90.00, factNum: 100.00, planLabel: '90,00%', factLabel: '100,00%', isCost: false },
    { param: 'Чистые лиды, ед.', planNum: 8, factNum: 13, planLabel: '8', factLabel: '13', isCost: false },
    { param: 'Стоимость чистого лида, руб.', planNum: 1111, factNum: 798, planLabel: '1 111 ₽', factLabel: '798 ₽', isCost: true },
    { param: 'Конверсия из чистой в квал, %', planNum: 40.00, factNum: 100.00, planLabel: '40,00%', factLabel: '100,00%', isCost: false },
    { param: 'Квалифицированные лиды, ед.', planNum: 3, factNum: 3, planLabel: '3', factLabel: '3', isCost: false },
    { param: 'Стоимость квалифицированного лида, руб.', planNum: 2778, factNum: 3458, planLabel: '2 778 ₽', factLabel: '3 458 ₽', isCost: true },
  ],
  cards: [
    { param: 'Бюджет с НДС, руб.', planNum: 140650, factNum: 131227, planLabel: '140 650 ₽', factLabel: '131 227 ₽', isCost: false },
    { param: 'Уникальные лиды, ед.', planNum: 67, factNum: 118, planLabel: '67', factLabel: '118', isCost: false },
    { param: 'Стоимость уникального лида, руб.', planNum: 2100, factNum: 1112, planLabel: '2 100 ₽', factLabel: '1 112 ₽', isCost: true },
    { param: 'Конверсия в чистые лиды, %', planNum: 90.00, factNum: 83.05, planLabel: '90,00%', factLabel: '83,05%', isCost: false },
    { param: 'Чистые лиды, ед.', planNum: 60, factNum: 98, planLabel: '60', factLabel: '98', isCost: false },
    { param: 'Стоимость чистого лида, руб.', planNum: 2333, factNum: 1339, planLabel: '2 333 ₽', factLabel: '1 339 ₽', isCost: true },
    { param: 'Конверсия из чистой в квал, %', planNum: 44.00, factNum: 87.50, planLabel: '44,00%', factLabel: '87,50%', isCost: false },
    { param: 'Квалифицированные лиды, ед.', planNum: 27, factNum: 35, planLabel: '27', factLabel: '35', isCost: false },
    { param: 'Стоимость квалифицированного лида, руб.', planNum: 5303, factNum: 3749, planLabel: '5 303 ₽', factLabel: '3 749 ₽', isCost: true },
  ],
  total: [
    { param: 'Бюджет с НДС, руб.', planNum: 557450, factNum: 574553, planLabel: '557 450 ₽', factLabel: '574 553 ₽', isCost: false },
    { param: 'Уникальные лиды, ед.', planNum: 246, factNum: 330, planLabel: '246', factLabel: '330', isCost: false },
    { param: 'Стоимость уникального лида, руб.', planNum: 2266, factNum: 1741, planLabel: '2 266 ₽', factLabel: '1 741 ₽', isCost: true },
    { param: 'Конверсия в чистые лиды, %', planNum: 89.84, factNum: 87.58, planLabel: '89,84%', factLabel: '87,58%', isCost: false },
    { param: 'Чистые лиды, ед.', planNum: 221, factNum: 289, planLabel: '221', factLabel: '289', isCost: false },
    { param: 'Стоимость чистого лида, руб.', planNum: 2522, factNum: 1988, planLabel: '2 522 ₽', factLabel: '1 988 ₽', isCost: true },
    { param: 'Конверсия из чистой в квал, %', planNum: 44.80, factNum: 56.70, planLabel: '44,80%', factLabel: '56,70%', isCost: false },
    { param: 'Квалифицированные лиды, ед.', planNum: 99, factNum: 110, planLabel: '99', factLabel: '110', isCost: false },
    { param: 'Стоимость квалифицированного лида, руб.', planNum: 5631, factNum: 5223, planLabel: '5 631 ₽', factLabel: '5 223 ₽', isCost: true },
  ],
};

// ── Плашка «Обработка лидов отделом продаж» под таблицей раздела 02 ──
export const opProcessingNote = {
  totalClean: 95,
  bySegment: [
    { label: 'Не Бренд', value: 27 },
    { label: 'Бренд', value: 10 },
    { label: 'Карты', value: 58 },
  ],
  potentialMin: 36,
  potentialMax: 45,
  forecastQualMin: 145,
  forecastQualMax: 155,
  forecastCpqlMin: 3800,
  forecastCpqlMax: 4000,
};

// ── Блок: факт июль vs факт август по сегментам ──
export const monthCompareBySegment: Record<SegmentKey, Array<{ param: string; mayNum: number; junNum: number; mayLabel: string; junLabel: string; isCost: boolean }>> = {
  notbrand: [
    { param: 'Бюджет с НДС, руб.', mayNum: 439374, junNum: 432953, mayLabel: '439 374 ₽', junLabel: '432 953 ₽', isCost: false },
    { param: 'Уникальные лиды, ед.', mayNum: 172, junNum: 199, mayLabel: '172', junLabel: '199', isCost: false },
    { param: 'Стоимость уникального лида, руб.', mayNum: 2555, junNum: 2176, mayLabel: '2 555 ₽', junLabel: '2 176 ₽', isCost: true },
    { param: 'Конверсия в чистые лиды, %', mayNum: 97.09, junNum: 89.45, mayLabel: '97,09%', junLabel: '89,45%', isCost: false },
    { param: 'Чистые лиды, ед.', mayNum: 167, junNum: 178, mayLabel: '167', junLabel: '178', isCost: false },
    { param: 'Стоимость чистого лида, руб.', mayNum: 2631, junNum: 2432, mayLabel: '2 631 ₽', junLabel: '2 432 ₽', isCost: true },
    { param: 'Конверсия из чистой в квал, %', mayNum: 36.72, junNum: 47.68, mayLabel: '36,72%', junLabel: '47,68%', isCost: false },
    { param: 'Квалифицированные лиды, ед.', mayNum: 47, junNum: 72, mayLabel: '47', junLabel: '72', isCost: false },
    { param: 'Стоимость квалифицированного лида, руб.', mayNum: 9348, junNum: 6013, mayLabel: '9 348 ₽', junLabel: '6 013 ₽', isCost: true },
  ],
  brand: [
    { param: 'Бюджет с НДС, руб.', mayNum: 12691, junNum: 10373, mayLabel: '12 691 ₽', junLabel: '10 373 ₽', isCost: false },
    { param: 'Уникальные лиды, ед.', mayNum: 9, junNum: 13, mayLabel: '9', junLabel: '13', isCost: false },
    { param: 'Стоимость уникального лида, руб.', mayNum: 1410, junNum: 798, mayLabel: '1 410 ₽', junLabel: '798 ₽', isCost: true },
    { param: 'Конверсия в чистые лиды, %', mayNum: 100.00, junNum: 100.00, mayLabel: '100,00%', junLabel: '100,00%', isCost: false },
    { param: 'Чистые лиды, ед.', mayNum: 9, junNum: 13, mayLabel: '9', junLabel: '13', isCost: false },
    { param: 'Стоимость чистого лида, руб.', mayNum: 1410, junNum: 798, mayLabel: '1 410 ₽', junLabel: '798 ₽', isCost: true },
    { param: 'Конверсия из чистой в квал, %', mayNum: 100.00, junNum: 100.00, mayLabel: '100,00%', junLabel: '100,00%', isCost: false },
    { param: 'Квалифицированные лиды, ед.', mayNum: 3, junNum: 3, mayLabel: '3', junLabel: '3', isCost: false },
    { param: 'Стоимость квалифицированного лида, руб.', mayNum: 4230, junNum: 3458, mayLabel: '4 230 ₽', junLabel: '3 458 ₽', isCost: true },
  ],
  cards: [
    { param: 'Бюджет с НДС, руб.', mayNum: 157030, junNum: 131227, mayLabel: '157 030 ₽', junLabel: '131 227 ₽', isCost: false },
    { param: 'Уникальные лиды, ед.', mayNum: 88, junNum: 118, mayLabel: '88', junLabel: '118', isCost: false },
    { param: 'Стоимость уникального лида, руб.', mayNum: 1784, junNum: 1112, mayLabel: '1 784 ₽', junLabel: '1 112 ₽', isCost: true },
    { param: 'Конверсия в чистые лиды, %', mayNum: 94.32, junNum: 83.05, mayLabel: '94,32%', junLabel: '83,05%', isCost: false },
    { param: 'Чистые лиды, ед.', mayNum: 83, junNum: 98, mayLabel: '83', junLabel: '98', isCost: false },
    { param: 'Стоимость чистого лида, руб.', mayNum: 1892, junNum: 1339, mayLabel: '1 892 ₽', junLabel: '1 339 ₽', isCost: true },
    { param: 'Конверсия из чистой в квал, %', mayNum: 56.14, junNum: 87.50, mayLabel: '56,14%', junLabel: '87,50%', isCost: false },
    { param: 'Квалифицированные лиды, ед.', mayNum: 32, junNum: 35, mayLabel: '32', junLabel: '35', isCost: false },
    { param: 'Стоимость квалифицированного лида, руб.', mayNum: 4907, junNum: 3749, mayLabel: '4 907 ₽', junLabel: '3 749 ₽', isCost: true },
  ],
};

// ── Блок: помесячная динамика с января 2026 по сегментам ──
export const monthlyTrendBySegment: Record<SegmentKey, Array<{ m: string; cost: number | null; clicks: number | null; uniq: number | null; costUniq: number | null; clean: number | null; costClean: number | null; qual: number | null; costQual: number | null }>> = {
  notbrand: [
    { m: 'Янв', cost: 293788.96, clicks: 23022, uniq: 170, costUniq: 1728.17, clean: 160, costClean: 1836.18, qual: 40, costQual: 7344.72 },
    { m: 'Фев', cost: 263745.65, clicks: 54935, uniq: 107, costUniq: 2464.91, clean: 101, costClean: 2611.34, qual: 31, costQual: 8507.92 },
    { m: 'Мар', cost: 258588.86, clicks: 34936, uniq: 130, costUniq: 1989.15, clean: 120, costClean: 2154.91, qual: 41, costQual: 6307.05 },
    { m: 'Апр', cost: 403024.85, clicks: 33819, uniq: 187, costUniq: 2155.21, clean: 186, costClean: 2166.80, qual: 61, costQual: 6606.96 },
    { m: 'Май', cost: 412571.93, clicks: 20995, uniq: 182, costUniq: 2266.88, clean: 174, costClean: 2371.10, qual: 39, costQual: 10578.77 },
    { m: 'Июн', cost: 502227.92, clicks: 16211, uniq: 225, costUniq: 2232.12, clean: 204, costClean: 2461.90, qual: 55, costQual: 9131.42 },
    { m: 'Июл', cost: 439373.90, clicks: 21792, uniq: 172, costUniq: 2555, clean: 167, costClean: 2631, qual: 47, costQual: 9348 },
    { m: 'Авг', cost: 432952.81, clicks: 22296, uniq: 199, costUniq: 2176, clean: 178, costClean: 2432, qual: 72, costQual: 6013 },
    { m: 'Сен', cost: null, clicks: null, uniq: null, costUniq: null, clean: null, costClean: null, qual: null, costQual: null },
  ],
  brand: [
    { m: 'Янв', cost: 8110.96, clicks: 131, uniq: 21, costUniq: 386.24, clean: 15, costClean: 540.73, qual: 3, costQual: 2703.65 },
    { m: 'Фев', cost: 15594.87, clicks: 201, uniq: 24, costUniq: 649.79, clean: 21, costClean: 742.61, qual: 8, costQual: 1949.36 },
    { m: 'Мар', cost: 11132.19, clicks: 186, uniq: 18, costUniq: 618.46, clean: 18, costClean: 618.46, qual: 8, costQual: 1391.52 },
    { m: 'Апр', cost: 10574.79, clicks: 162, uniq: 20, costUniq: 528.74, clean: 20, costClean: 528.74, qual: 8, costQual: 1321.85 },
    { m: 'Май', cost: 6644.36, clicks: 114, uniq: 12, costUniq: 553.70, clean: 12, costClean: 553.70, qual: 3, costQual: 2214.79 },
    { m: 'Июн', cost: 15078.26, clicks: 190, uniq: 24, costUniq: 628.26, clean: 24, costClean: 628.26, qual: 10, costQual: 1507.83 },
    { m: 'Июл', cost: 12691.25, clicks: 164, uniq: 9, costUniq: 1410, clean: 9, costClean: 1410, qual: 3, costQual: 4230 },
    { m: 'Авг', cost: 10373.00, clicks: 148, uniq: 13, costUniq: 798, clean: 13, costClean: 798, qual: 3, costQual: 3458 },
    { m: 'Сен', cost: null, clicks: null, uniq: null, costUniq: null, clean: null, costClean: null, qual: null, costQual: null },
  ],
  cards: [
    { m: 'Янв', cost: 114746.67, clicks: 6276, uniq: 56, costUniq: 2049.05, clean: 50, costClean: 2294.93, qual: 20, costQual: 5737.33 },
    { m: 'Фев', cost: 130079.92, clicks: 21014, uniq: 55, costUniq: 2365.09, clean: 47, costClean: 2767.66, qual: 14, costQual: 9291.42 },
    { m: 'Мар', cost: 135330.94, clicks: 38954, uniq: 83, costUniq: 1630.49, clean: 70, costClean: 1933.30, qual: 16, costQual: 8458.18 },
    { m: 'Апр', cost: 147782.08, clicks: 24290, uniq: 77, costUniq: 1919.25, clean: 76, costClean: 1944.50, qual: 25, costQual: 5911.28 },
    { m: 'Май', cost: 124253.97, clicks: 14096, uniq: 58, costUniq: 2142.31, clean: 51, costClean: 2436.35, qual: 18, costQual: 6903.00 },
    { m: 'Июн', cost: 156422.23, clicks: 10292, uniq: 63, costUniq: 2482.89, clean: 60, costClean: 2607.04, qual: 16, costQual: 9776.39 },
    { m: 'Июл', cost: 157030.19, clicks: 25590, uniq: 88, costUniq: 1784, clean: 83, costClean: 1892, qual: 32, costQual: 4907 },
    { m: 'Авг', cost: 131226.99, clicks: 42580, uniq: 118, costUniq: 1112, clean: 98, costClean: 1339, qual: 35, costQual: 3749 },
    { m: 'Сен', cost: null, clicks: null, uniq: null, costUniq: null, clean: null, costClean: null, qual: null, costQual: null },
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
  'Проведение оперативных корректировок по средней цене клика в зависимости от текущих результатов и CPL по кампаниям',
  'Отключение неэффективных групп объявлений внутри кампаний с плохими результатами и высокой стоимостью целевого действия',
  'Чистка площадок в сетях (РСЯ), блокировка мобильных приложений и неконвертирующих сайтов',
  'Пополнение списков минус-фраз по поисковым кампаниям',
  'Анализ входящих лидов категорий A и B, выявление закономерностей и подготовка рекомендаций по оптимизации',
  'Исключение спамных баз и нецелевых обращений',
];

export const workPlan = [
  'Тестирование связок и перераспределение бюджета в пользу конверсионных элементов для масштабирования объёма заявок',
  'Минусация и отключение неэффективных поисковых запросов',
  'Чистка и блокировка неконвертирующих площадок в РСЯ',
  'Разработка структуры тематических кампаний и план перераспределения бюджетов с общих РК',
  'Перевод стратегий в кампаниях в ОЗК на оптимизацию по цели уникальные лиды',
];

// ── План на новый месяц (сентябрь 2026) по сегментам ──
export const nextPlanBySegment: Record<SegmentKeyTotal, Array<{ param: string; plan: string }>> = {
  notbrand: [
    { param: 'Бюджет с НДС, руб.', plan: '407 400 ₽' },
    { param: 'Уникальные лиды, ед.', plan: '185' },
    { param: 'Стоимость уникального лида, руб.', plan: '2 200 ₽' },
    { param: 'Конверсия в чистые лиды, %', plan: '98,00%' },
    { param: 'Чистые лиды, ед.', plan: '181' },
    { param: 'Стоимость чистого лида, руб.', plan: '2 245 ₽' },
    { param: 'Конверсия из чистой в квал, %', plan: '45,00%' },
    { param: 'Квалифицированные лиды, ед.', plan: '65' },
    { param: 'Стоимость квалифицированного лида, руб.', plan: '6 222 ₽' },
  ],
  brand: [
    { param: 'Бюджет с НДС, руб.', plan: '9 400 ₽' },
    { param: 'Уникальные лиды, ед.', plan: '12' },
    { param: 'Стоимость уникального лида, руб.', plan: '800 ₽' },
    { param: 'Конверсия в чистые лиды, %', plan: '98,00%' },
    { param: 'Чистые лиды, ед.', plan: '12' },
    { param: 'Стоимость чистого лида, руб.', plan: '816 ₽' },
    { param: 'Конверсия из чистой в квал, %', plan: '100,00%' },
    { param: 'Квалифицированные лиды, ед.', plan: '3' },
    { param: 'Стоимость квалифицированного лида, руб.', plan: '3 000 ₽' },
  ],
  cards: [
    { param: 'Бюджет с НДС, руб.', plan: '140 650 ₽' },
    { param: 'Уникальные лиды, ед.', plan: '85' },
    { param: 'Стоимость уникального лида, руб.', plan: '1 650 ₽' },
    { param: 'Конверсия в чистые лиды, %', plan: '85,00%' },
    { param: 'Чистые лиды, ед.', plan: '72' },
    { param: 'Стоимость чистого лида, руб.', plan: '1 941 ₽' },
    { param: 'Конверсия из чистой в квал, %', plan: '50,00%' },
    { param: 'Квалифицированные лиды, ед.', plan: '31' },
    { param: 'Стоимость квалифицированного лида, руб.', plan: '4 600 ₽' },
  ],
  total: [
    { param: 'Бюджет с НДС, руб.', plan: '557 450 ₽' },
    { param: 'Уникальные лиды, ед.', plan: '282' },
    { param: 'Стоимость уникального лида, руб.', plan: '1 977 ₽' },
    { param: 'Конверсия в чистые лиды, %', plan: '93,97%' },
    { param: 'Чистые лиды, ед.', plan: '265' },
    { param: 'Стоимость чистого лида, руб.', plan: '2 104 ₽' },
    { param: 'Конверсия из чистой в квал, %', plan: '46,04%' },
    { param: 'Квалифицированные лиды, ед.', plan: '99' },
    { param: 'Стоимость квалифицированного лида, руб.', plan: '5 631 ₽' },
  ],
};