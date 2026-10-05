// ── Данные отчёта клиента АРТБОКС (РайтБокс) ──
import { NEON, AGENCY } from '@/data/report';

export { NEON, AGENCY };

export const CLIENT = {
  name: 'АРТБОКС (РайтБокс)',
  id: 'rightbox',
  site: 'https://right-box.ru/',
  siteMirror: 'https://райтбокс.рф/',
  period: 'Сентябрь 2026',
  weeklyStats: 'https://docs.google.com/spreadsheets/d/11PjUYEiMB0omnL7poTXnIQqw-a-jBRKixHlVE6fHMbk/edit?gid=107427889',
  paybackFunnel: 'https://docs.google.com/spreadsheets/d/11PjUYEiMB0omnL7poTXnIQqw-a-jBRKixHlVE6fHMbk/edit?gid=1267657330',
};

export const aboutLinks = [
  { icon: 'CalendarRange', label: 'Понедельная статистика', desc: 'Расход, заявки и стоимость лида по неделям месяца.', href: CLIENT.weeklyStats, cta: 'Открыть таблицу' },
  { icon: 'TrendingUp', label: 'Воронка окупаемости', desc: 'Путь от лида до сделки и юнит-экономика проекта.', href: CLIENT.paybackFunnel, cta: 'Открыть таблицу' },
  {
    icon: 'Globe',
    label: 'Сайты',
    desc: 'Посадочные страницы, на которые ведёт реклама.',
    links: [
      { href: CLIENT.site, cta: 'right-box.ru', note: 'Основной обновлённый сайт производства картонной упаковки' },
      { href: CLIENT.siteMirror, cta: 'райтбокс.рф', note: 'Официальное зеркало сайта' },
    ],
  },
];

export const segmentsWithTotal = [
  { key: 'search', label: 'Поиск: Общие и Макс. конверсий', icon: 'Search' },
  { key: 'industry', label: 'Отраслевые категории упаковки', icon: 'Package' },
  { key: 'total', label: 'Все направления', icon: 'LayoutGrid' },
] as const;

export type SegmentKeyTotal = typeof segmentsWithTotal[number]['key'];

// ── Блок: план / факт за сентябрь 2026 ──
export const planFactBySegment: Record<SegmentKeyTotal, Array<{ param: string; planNum: number; factNum: number; planLabel: string; factLabel: string; isCost: boolean }>> = {
  search: [
    { param: 'Рекламный бюджет, руб.', planNum: 95000, factNum: 61432, planLabel: '95 000 ₽', factLabel: '61 432 ₽', isCost: false },
    { param: 'Уникальные лиды (заявки), ед.', planNum: 32, factNum: 52, planLabel: '32', factLabel: '52', isCost: false },
    { param: 'Стоимость уникального лида, руб.', planNum: 2969, factNum: 1181, planLabel: '2 969 ₽', factLabel: '1 181 ₽', isCost: true },
    { param: '% чистых заявок', planNum: 78.13, factNum: 75.0, planLabel: '78,13%', factLabel: '75,00%', isCost: false },
    { param: 'Чистые заявки, ед.', planNum: 25, factNum: 39, planLabel: '25', factLabel: '39', isCost: false },
    { param: 'Стоимость чистой заявки, руб.', planNum: 3800, factNum: 1575, planLabel: '3 800 ₽', factLabel: '1 575 ₽', isCost: true },
    { param: 'Квал. заявки, ед.', planNum: 17, factNum: 23, planLabel: '17', factLabel: '23', isCost: false },
    { param: 'Стоимость квал. заявки, руб.', planNum: 5588, factNum: 2671, planLabel: '5 588 ₽', factLabel: '2 671 ₽', isCost: true },
    { param: 'Конверсия из уникальной в чистую, %', planNum: 78.13, factNum: 75.0, planLabel: '78,13%', factLabel: '75,00%', isCost: false },
    { param: 'Конверсия из чистой в квал, %', planNum: 68.0, factNum: 58.97, planLabel: '68,00%', factLabel: '58,97%', isCost: false },
  ],
  industry: [
    { param: 'Рекламный бюджет, руб.', planNum: 55000, factNum: 40677, planLabel: '55 000 ₽', factLabel: '40 677 ₽', isCost: false },
    { param: 'Уникальные лиды (заявки), ед.', planNum: 18, factNum: 28, planLabel: '18', factLabel: '28', isCost: false },
    { param: 'Стоимость уникального лида, руб.', planNum: 3056, factNum: 1453, planLabel: '3 056 ₽', factLabel: '1 453 ₽', isCost: true },
    { param: '% чистых заявок', planNum: 83.33, factNum: 50.0, planLabel: '83,33%', factLabel: '50,00%', isCost: false },
    { param: 'Чистые заявки, ед.', planNum: 15, factNum: 14, planLabel: '15', factLabel: '14', isCost: false },
    { param: 'Стоимость чистой заявки, руб.', planNum: 3667, factNum: 2906, planLabel: '3 667 ₽', factLabel: '2 906 ₽', isCost: true },
    { param: 'Квал. заявки, ед.', planNum: 10, factNum: 8, planLabel: '10', factLabel: '8', isCost: false },
    { param: 'Стоимость квал. заявки, руб.', planNum: 5500, factNum: 5085, planLabel: '5 500 ₽', factLabel: '5 085 ₽', isCost: true },
    { param: 'Конверсия из уникальной в чистую, %', planNum: 83.33, factNum: 50.0, planLabel: '83,33%', factLabel: '50,00%', isCost: false },
    { param: 'Конверсия из чистой в квал, %', planNum: 66.67, factNum: 57.14, planLabel: '66,67%', factLabel: '57,14%', isCost: false },
  ],
  total: [
    { param: 'Рекламный бюджет, руб.', planNum: 150000, factNum: 102366, planLabel: '150 000 ₽', factLabel: '102 366 ₽', isCost: false },
    { param: 'Уникальные лиды (заявки), ед.', planNum: 50, factNum: 80, planLabel: '50', factLabel: '80', isCost: false },
    { param: 'Стоимость уникального лида, руб.', planNum: 3000, factNum: 1280, planLabel: '3 000 ₽', factLabel: '1 280 ₽', isCost: true },
    { param: '% чистых заявок', planNum: 80.0, factNum: 66.25, planLabel: '80,00%', factLabel: '66,25%', isCost: false },
    { param: 'Чистые заявки, ед.', planNum: 40, factNum: 53, planLabel: '40', factLabel: '53', isCost: false },
    { param: 'Стоимость чистой заявки, руб.', planNum: 3750, factNum: 1931, planLabel: '3 750 ₽', factLabel: '1 931 ₽', isCost: true },
    { param: 'Квал. заявки, ед.', planNum: 27, factNum: 31, planLabel: '27', factLabel: '31', isCost: false },
    { param: 'Стоимость квал. заявки, руб.', planNum: 5556, factNum: 3302, planLabel: '5 556 ₽', factLabel: '3 302 ₽', isCost: true },
    { param: 'Конверсия из уникальной в чистую, %', planNum: 80.0, factNum: 66.25, planLabel: '80,00%', factLabel: '66,25%', isCost: false },
    { param: 'Конверсия из чистой в квал, %', planNum: 67.5, factNum: 58.49, planLabel: '67,50%', factLabel: '58,49%', isCost: false },
  ],
};

// ── Блок: факт август vs факт сентябрь ──
export const monthCompareBySegment: Record<SegmentKeyTotal, Array<{ param: string; mayNum: number; junNum: number; mayLabel: string; junLabel: string; isCost: boolean }>> = {
  search: [
    { param: 'Рекламный бюджет, руб.', mayNum: 25781, junNum: 61432, mayLabel: '25 781 ₽', junLabel: '61 432 ₽', isCost: false },
    { param: 'Уникальные лиды, ед.', mayNum: 9, junNum: 52, mayLabel: '9', junLabel: '52', isCost: false },
    { param: 'Стоимость уникального лида, руб.', mayNum: 2865, junNum: 1181, mayLabel: '2 865 ₽', junLabel: '1 181 ₽', isCost: true },
    { param: 'Чистые лиды, ед.', mayNum: 4, junNum: 39, mayLabel: '4', junLabel: '39', isCost: false },
    { param: 'Стоимость чистого лида, руб.', mayNum: 6445, junNum: 1575, mayLabel: '6 445 ₽', junLabel: '1 575 ₽', isCost: true },
    { param: 'Квалифицированные лиды, ед.', mayNum: 3, junNum: 23, mayLabel: '3', junLabel: '23', isCost: false },
    { param: 'Стоимость квалифицированного лида, руб.', mayNum: 8594, junNum: 2671, mayLabel: '8 594 ₽', junLabel: '2 671 ₽', isCost: true },
    { param: 'Конверсия в чистые лиды, %', mayNum: 44.44, junNum: 75.0, mayLabel: '44,44%', junLabel: '75,00%', isCost: false },
    { param: 'Конверсия из чистой в квал, %', mayNum: 75.0, junNum: 58.97, mayLabel: '75,00%', junLabel: '58,97%', isCost: false },
  ],
  industry: [
    { param: 'Рекламный бюджет, руб.', mayNum: 2318, junNum: 40677, mayLabel: '2 318 ₽', junLabel: '40 677 ₽', isCost: false },
    { param: 'Уникальные лиды, ед.', mayNum: 2, junNum: 28, mayLabel: '2', junLabel: '28', isCost: false },
    { param: 'Стоимость уникального лида, руб.', mayNum: 1159, junNum: 1453, mayLabel: '1 159 ₽', junLabel: '1 453 ₽', isCost: true },
    { param: 'Чистые лиды, ед.', mayNum: 1, junNum: 14, mayLabel: '1', junLabel: '14', isCost: false },
    { param: 'Стоимость чистого лида, руб.', mayNum: 2318, junNum: 2906, mayLabel: '2 318 ₽', junLabel: '2 906 ₽', isCost: true },
    { param: 'Квалифицированные лиды, ед.', mayNum: 0, junNum: 8, mayLabel: '0', junLabel: '8', isCost: false },
    { param: 'Стоимость квалифицированного лида, руб.', mayNum: 0, junNum: 5085, mayLabel: '0 ₽', junLabel: '5 085 ₽', isCost: true },
    { param: 'Конверсия в чистые лиды, %', mayNum: 50.0, junNum: 50.0, mayLabel: '50,00%', junLabel: '50,00%', isCost: false },
    { param: 'Конверсия из чистой в квал, %', mayNum: 0.0, junNum: 57.14, mayLabel: '0,00%', junLabel: '57,14%', isCost: false },
  ],
  total: [
    { param: 'Рекламный бюджет, руб.', mayNum: 28587, junNum: 102366, mayLabel: '28 587 ₽', junLabel: '102 366 ₽', isCost: false },
    { param: 'Уникальные лиды, ед.', mayNum: 12, junNum: 80, mayLabel: '12', junLabel: '80', isCost: false },
    { param: 'Стоимость уникального лида, руб.', mayNum: 2382, junNum: 1280, mayLabel: '2 382 ₽', junLabel: '1 280 ₽', isCost: true },
    { param: 'Чистые лиды, ед.', mayNum: 6, junNum: 53, mayLabel: '6', junLabel: '53', isCost: false },
    { param: 'Стоимость чистого лида, руб.', mayNum: 4765, junNum: 1931, mayLabel: '4 765 ₽', junLabel: '1 931 ₽', isCost: true },
    { param: 'Квалифицированные лиды, ед.', mayNum: 3, junNum: 31, mayLabel: '3', junLabel: '31', isCost: false },
    { param: 'Стоимость квалифицированного лида, руб.', mayNum: 9529, junNum: 3302, mayLabel: '9 529 ₽', junLabel: '3 302 ₽', isCost: true },
    { param: 'Конверсия в чистые лиды, %', mayNum: 50.0, junNum: 66.25, mayLabel: '50,00%', junLabel: '66,25%', isCost: false },
    { param: 'Конверсия из чистой в квал, %', mayNum: 50.0, junNum: 58.49, mayLabel: '50,00%', junLabel: '58,49%', isCost: false },
  ],
};

// ── Блок: помесячная динамика (май — сентябрь 2026) ──
export const monthlyTrend: Array<{ m: string; cost: number | null; uniq: number | null; costUniq: number | null; clean: number | null; costClean: number | null; qual: number | null; costQual: number | null }> = [
  { m: 'Май', cost: 118042, uniq: 43, costUniq: 2745, clean: 32, costClean: 3689, qual: null, costQual: null },
  { m: 'Июн', cost: 150938, uniq: 57, costUniq: 2648, clean: 38, costClean: 3972, qual: null, costQual: null },
  { m: 'Июл', cost: 179929, uniq: 60, costUniq: 2999, clean: 47, costClean: 3828, qual: null, costQual: null },
  { m: 'Авг', cost: 28587, uniq: 12, costUniq: 2382, clean: 6, costClean: 4765, qual: 3, costQual: 9529 },
  { m: 'Сен', cost: 102366, uniq: 80, costUniq: 1280, clean: 53, costClean: 1931, qual: 31, costQual: 3302 },
  { m: 'Окт', cost: null, uniq: null, costUniq: null, clean: null, costClean: null, qual: null, costQual: null },
];

// ── Работы ──
export const workDone = [
  'Успешный запуск рекламных кампаний на новом сайте right-box.ru и перенос в новый кабинет Директа с 04.09.2026',
  'Быстрое преодоление этапа обучения автостратегий Яндекса (за 10–12 дней)',
  'Масштабирование флагманской связки «right-box/Поиск/cpc/МаксКонв/2», принесшей 32 уникальные и 23 чистые заявки (CPL 1 532 ₽) и 12 квалов (CPQL 2 937 ₽)',
  'Масштабирование связки «right-box/Поиск/cpc/МаксКонв/3» (8 чистых лидов и 6 квалов по цене 1 520 ₽)',
  'Запуск специализированных отраслевых категорий: косметика, техника, продукты, лекарства, БАД',
  'Локализация мощного ядра B2B-заказов в сегменте «Косметика» (7 квалов по цене 1 414 ₽)',
  'Регулярная минусация поискового трафика и чистка мусорных площадок',
  'Настройка сквозной аналитики и фиксация статусов квалифицированных лидов (CPQL) в связке с Calltouch и CRM',
];

export const workPlan = [
  'Масштабирование бюджета до 150 000 ₽ на фоне сезонного пика спроса в октябре-ноябре',
  'Усиление лидирующих поисковых связок: «МаксКонв/2», «МаксКонв/3», «Косметика» и «Общая/2»',
  'Отключение или перераспределение бюджета с нулевых узких категорий (кондитерская, бытовые товары, парфюмерия)',
  'Тестирование сетевых форматов РСЯ и смарт-баннеров с оплатой за чистые лиды (ОЗК)',
  'Расширение семантического ядра под подарочную, новогоднюю и корпоративную тиражную упаковку',
  'Ежедневный контроль аукциона и удержание целевой стоимости чистого лида в рамках 2 000–2 200 ₽',
];

export const growthPoints = [
  'Масштабирование бюджета до 150 000 ₽ в октябре-ноябре под пиковый сезон B2B-заказов корпоративной и подарочной упаковки (прогноз: выход на 70+ чистых и 42+ квал. лидов)',
  'Сегментация и масштабирование ТОП-отрасли «Косметика» с созданием персонализированных посадочных блоков под бьюти-бренды и маркетплейсы',
  'Запуск сетевых кампаний (РСЯ) со стратегией «Оплата за чистую конверсию» (ОЗК) для безопасного привлечения дополнительного объёма заявок',
];

// ── План на новый месяц (октябрь 2026) ──
export const nextPlanBySegment: Record<SegmentKeyTotal, Array<{ param: string; plan: string }>> = {
  search: [
    { param: 'Рекламный бюджет, руб.', plan: '95 000 ₽' },
    { param: 'Уникальные лиды (заявки), ед.', plan: '65' },
    { param: 'Стоимость уникального лида, руб.', plan: '1 462 ₽' },
    { param: 'Чистые лиды, ед.', plan: '48' },
    { param: 'Стоимость чистой заявки, руб.', plan: '1 979 ₽' },
    { param: 'Конверсия в чистые лиды, %', plan: '73,85%' },
    { param: 'Квал. заявки, ед.', plan: '30' },
    { param: 'Стоимость квал. заявки, руб.', plan: '3 167 ₽' },
    { param: 'Конверсия в квал. лиды (от чистых), %', plan: '62,50%' },
  ],
  industry: [
    { param: 'Рекламный бюджет, руб.', plan: '50 000 ₽' },
    { param: 'Уникальные лиды (заявки), ед.', plan: '32' },
    { param: 'Стоимость уникального лида, руб.', plan: '1 563 ₽' },
    { param: 'Чистые лиды, ед.', plan: '20' },
    { param: 'Стоимость чистой заявки, руб.', plan: '2 500 ₽' },
    { param: 'Конверсия в чистые лиды, %', plan: '62,50%' },
    { param: 'Квал. заявки, ед.', plan: '12' },
    { param: 'Стоимость квал. заявки, руб.', plan: '4 167 ₽' },
    { param: 'Конверсия в квал. лиды (от чистых), %', plan: '60,00%' },
  ],
  total: [
    { param: 'Рекламный бюджет, руб.', plan: '150 000 ₽' },
    { param: 'Уникальные лиды (заявки), ед.', plan: '100' },
    { param: 'Стоимость уникального лида, руб.', plan: '1 500 ₽' },
    { param: 'Чистые лиды, ед.', plan: '70' },
    { param: 'Стоимость чистой заявки, руб.', plan: '2 143 ₽' },
    { param: 'Конверсия в чистые лиды, %', plan: '70,00%' },
    { param: 'Квал. заявки, ед.', plan: '42' },
    { param: 'Стоимость квал. заявки, руб.', plan: '3 571 ₽' },
    { param: 'Конверсия в квал. лиды (от чистых), %', plan: '60,00%' },
  ],
};
