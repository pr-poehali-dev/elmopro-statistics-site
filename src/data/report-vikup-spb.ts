// ── Данные отчёта клиента Выкуп Автобумс СПб ──
import { NEON, AGENCY } from '@/data/report';

export { NEON, AGENCY };

export const CLIENT = {
  name: 'Выкуп Автобумс СПб',
  id: 'vikup_spb',
  site1: 'https://выкуп-премиум.рф',
  site2: 'https://быстрый-выкуп-авто-спб.com',
  site3: 'https://выкуп-авто-спб-быстро.рф/',
  period: 'Сентябрь 2026',
  weeklyStats: 'https://docs.google.com/spreadsheets/d/1F9Rj5pt4D4VTYdkDlIVI3qDuSS9ZFX4D6nhqVc36hCw/edit?usp=sharing',
  paybackFunnel: 'https://docs.google.com/spreadsheets/d/1F9Rj5pt4D4VTYdkDlIVI3qDuSS9ZFX4D6nhqVc36hCw/edit?usp=sharing',
};

export const aboutLinks = [
  { icon: 'CalendarRange', label: 'Понедельная статистика', desc: 'Расход, заявки и стоимость лида по неделям месяца.', href: CLIENT.weeklyStats, cta: 'Открыть таблицу' },
  { icon: 'TrendingUp', label: 'Воронка окупаемости', desc: 'Путь от лида до сделки и юнит-экономика проекта.', href: CLIENT.paybackFunnel, cta: 'Открыть таблицу' },
  {
    icon: 'Car',
    label: 'Сайты',
    desc: 'Посадочные страницы, на которые ведёт реклама.',
    links: [
      { href: CLIENT.site1, cta: 'выкуп-премиум.рф' },
      { href: CLIENT.site2, cta: 'быстрый-выкуп-авто-спб.com' },
      { href: CLIENT.site3, cta: 'выкуп-авто-спб-быстро.рф (работал до 01.10.2026)' },
    ],
  },
];

// ── Сегменты рекламы ──
export const segments = [
  { key: 'premium', label: 'СПб-1 (Премиум)', icon: 'MapPin' },
  { key: 'spb', label: 'СПб-2', icon: 'MapPin' },
] as const;

export type SegmentKey = typeof segments[number]['key'];

// ── Блок: план / факт за сентябрь 2026 по сегментам ──
export const planFactBySegment: Record<SegmentKey, Array<{ param: string; planNum: number; factNum: number; planLabel: string; factLabel: string; isCost: boolean }>> = {
  spb: [
    { param: 'Рекламный бюджет, руб.', planNum: 0, factNum: 0, planLabel: '0 ₽', factLabel: '0 ₽', isCost: false },
    { param: 'Заявки, ед.', planNum: 0, factNum: 0, planLabel: '0', factLabel: '0', isCost: false },
    { param: 'Стоимость заявки (с НДС), руб.', planNum: 0, factNum: 0, planLabel: '0 ₽', factLabel: '0 ₽', isCost: true },
    { param: '% спама от общего числа', planNum: 0, factNum: 0, planLabel: '0%', factLabel: '0%', isCost: true },
    { param: 'Спам, ед. (всё что не попадает в чистые)', planNum: 0, factNum: 0, planLabel: '0', factLabel: '0', isCost: true },
    { param: '% чистых заявок', planNum: 0, factNum: 0, planLabel: '0%', factLabel: '0%', isCost: false },
    { param: 'Чистые заявки, ед.', planNum: 0, factNum: 0, planLabel: '0', factLabel: '0', isCost: false },
    { param: 'Стоимость чистой заявки (с НДС), руб.', planNum: 0, factNum: 0, planLabel: '0 ₽', factLabel: '0 ₽', isCost: true },
    { param: 'Конверсия из заявки в квал. заявку, %', planNum: 0, factNum: 0, planLabel: '0%', factLabel: '0%', isCost: false },
    { param: 'Квал. заявки, ед.', planNum: 0, factNum: 0, planLabel: '0', factLabel: '0', isCost: false },
    { param: 'Стоимость квал. заявки (с НДС), руб.', planNum: 0, factNum: 0, planLabel: '0 ₽', factLabel: '0 ₽', isCost: true },
    { param: 'Продажи (выкупы), ед.', planNum: 0, factNum: 0, planLabel: '0', factLabel: '0', isCost: false },
  ],
  premium: [
    { param: 'Рекламный бюджет, руб.', planNum: 294900, factNum: 283581, planLabel: '294 900 ₽', factLabel: '283 581 ₽', isCost: false },
    { param: 'Заявки, ед.', planNum: 134, factNum: 247, planLabel: '134', factLabel: '247', isCost: false },
    { param: 'Стоимость заявки (с НДС), руб.', planNum: 2200, factNum: 1148, planLabel: '2 200 ₽', factLabel: '1 148 ₽', isCost: true },
    { param: '% спама от общего числа', planNum: 24, factNum: 8.91, planLabel: '24%', factLabel: '8,91%', isCost: true },
    { param: 'Спам, ед. (всё что не попадает в чистые)', planNum: 32, factNum: 22, planLabel: '32', factLabel: '22', isCost: true },
    { param: '% чистых заявок', planNum: 76, factNum: 73.68, planLabel: '76%', factLabel: '73,68%', isCost: false },
    { param: 'Чистые заявки, ед.', planNum: 102, factNum: 182, planLabel: '102', factLabel: '182', isCost: false },
    { param: 'Стоимость чистой заявки (с НДС), руб.', planNum: 2896, factNum: 1558, planLabel: '2 896 ₽', factLabel: '1 558 ₽', isCost: true },
    { param: 'Конверсия из заявки в квал. заявку, %', planNum: 90, factNum: 90.66, planLabel: '90%', factLabel: '90,66%', isCost: false },
    { param: 'Квал. заявки, ед.', planNum: 92, factNum: 165, planLabel: '92', factLabel: '165', isCost: false },
    { param: 'Стоимость квал. заявки (с НДС), руб.', planNum: 3205.43, factNum: 1719, planLabel: '3205,43 ₽', factLabel: '1 719 ₽', isCost: true },
    { param: 'Продажи (выкупы), ед.', planNum: 7, factNum: 30, planLabel: '7', factLabel: '30', isCost: false },
  ],
};

// ── Блок: факт август vs факт сентябрь по сегментам ──
export const monthCompareBySegment: Record<SegmentKey, Array<{ param: string; mayNum: number; junNum: number; mayLabel: string; junLabel: string; isCost: boolean }>> = {
  spb: [
    { param: 'Рекламный бюджет, руб.', mayNum: 40870, junNum: 0, mayLabel: '40 870 ₽', junLabel: '0 ₽', isCost: false },
    { param: 'Заявки, ед.', mayNum: 28, junNum: 0, mayLabel: '28', junLabel: '0', isCost: false },
    { param: 'Стоимость заявки (с НДС), руб.', mayNum: 1460, junNum: 0, mayLabel: '1 460 ₽', junLabel: '0 ₽', isCost: true },
    { param: '% спама от общего числа', mayNum: 21.43, junNum: 0, mayLabel: '21,43%', junLabel: '0%', isCost: true },
    { param: 'Спам, ед. (всё что не попадает в чистые)', mayNum: 6, junNum: 0, mayLabel: '6', junLabel: '0', isCost: true },
    { param: '% чистых заявок', mayNum: 78.57, junNum: 0, mayLabel: '78,57%', junLabel: '0%', isCost: false },
    { param: 'Чистые заявки, ед.', mayNum: 22, junNum: 0, mayLabel: '22', junLabel: '0', isCost: false },
    { param: 'Стоимость чистой заявки (с НДС), руб.', mayNum: 1858, junNum: 0, mayLabel: '1 858 ₽', junLabel: '0 ₽', isCost: true },
    { param: 'Конверсия из заявки в квал. заявку, %', mayNum: 86.36, junNum: 0, mayLabel: '86,36%', junLabel: '0%', isCost: false },
    { param: 'Квал. заявки, ед.', mayNum: 19, junNum: 0, mayLabel: '19', junLabel: '0', isCost: false },
    { param: 'Стоимость квал. заявки (с НДС), руб.', mayNum: 2151, junNum: 0, mayLabel: '2 151 ₽', junLabel: '0 ₽', isCost: true },
    { param: 'Продажи (выкупы), ед.', mayNum: 3, junNum: 0, mayLabel: '3', junLabel: '0', isCost: false },
  ],
  premium: [
    { param: 'Рекламный бюджет, руб.', mayNum: 70039, junNum: 283581, mayLabel: '70 039 ₽', junLabel: '283 581 ₽', isCost: false },
    { param: 'Заявки, ед.', mayNum: 70, junNum: 247, mayLabel: '70', junLabel: '247', isCost: false },
    { param: 'Стоимость заявки (с НДС), руб.', mayNum: 1001, junNum: 1148, mayLabel: '1 001 ₽', junLabel: '1 148 ₽', isCost: true },
    { param: '% спама от общего числа', mayNum: 34.29, junNum: 8.91, mayLabel: '34,29%', junLabel: '8,91%', isCost: true },
    { param: 'Спам, ед. (всё что не попадает в чистые)', mayNum: 24, junNum: 22, mayLabel: '24', junLabel: '22', isCost: true },
    { param: '% чистых заявок', mayNum: 65.71, junNum: 73.68, mayLabel: '65,71%', junLabel: '73,68%', isCost: false },
    { param: 'Чистые заявки, ед.', mayNum: 46, junNum: 182, mayLabel: '46', junLabel: '182', isCost: false },
    { param: 'Стоимость чистой заявки (с НДС), руб.', mayNum: 1523, junNum: 1558, mayLabel: '1 523 ₽', junLabel: '1 558 ₽', isCost: true },
    { param: 'Конверсия из заявки в квал. заявку, %', mayNum: 71.74, junNum: 90.66, mayLabel: '71,74%', junLabel: '90,66%', isCost: false },
    { param: 'Квал. заявки, ед.', mayNum: 33, junNum: 165, mayLabel: '33', junLabel: '165', isCost: false },
    { param: 'Стоимость квал. заявки (с НДС), руб.', mayNum: 2122, junNum: 1719, mayLabel: '2 122 ₽', junLabel: '1 719 ₽', isCost: true },
    { param: 'Продажи (выкупы), ед.', mayNum: 3, junNum: 30, mayLabel: '3', junLabel: '30', isCost: false },
  ],
};

// ── Блок: помесячная динамика с начала года по сегментам ──
export const monthlyTrendBySegment: Record<SegmentKey, Array<{ m: string; cost: number | null; uniq: number | null; costUniq: number | null; clean: number | null; costClean: number | null; qual: number | null; costQual: number | null; sales: number | null }>> = {
  spb: [
    { m: 'Янв', cost: 277323, uniq: 122, costUniq: 2273, clean: 95, costClean: 2919, qual: 69, costQual: 4019, sales: 5 },
    { m: 'Фев', cost: 247523, uniq: 102, costUniq: 2427, clean: 78, costClean: 3173, qual: 35, costQual: 7072, sales: 8 },
    { m: 'Мар', cost: 311226, uniq: 147, costUniq: 2117, clean: 118, costClean: 2638, qual: 53, costQual: 5872, sales: 8 },
    { m: 'Апр', cost: 296749, uniq: 163, costUniq: 1821, clean: 134, costClean: 2215, qual: 93, costQual: 3191, sales: 11 },
    { m: 'Май', cost: 337642, uniq: 166, costUniq: 2034, clean: 120, costClean: 2814, qual: 64, costQual: 5276, sales: 9 },
    { m: 'Июн', cost: 325786, uniq: 160, costUniq: 2036, clean: 119, costClean: 2738, qual: 48, costQual: 6787, sales: 7 },
    { m: 'Июл', cost: 279371, uniq: 139, costUniq: 2010, clean: 107, costClean: 2611, qual: 99, costQual: 2822, sales: 11 },
    { m: 'Авг', cost: 40870, uniq: 28, costUniq: 1460, clean: 22, costClean: 1858, qual: 19, costQual: 2151, sales: 3 },
    { m: 'Сен', cost: 0, uniq: 0, costUniq: 0, clean: 0, costClean: 0, qual: 0, costQual: 0, sales: 0 },
    { m: 'Окт', cost: null, uniq: null, costUniq: null, clean: null, costClean: null, qual: null, costQual: null, sales: null },
  ],
  premium: [
    { m: 'Янв', cost: 259345, uniq: 113, costUniq: 2295, clean: 97, costClean: 2674, qual: 68, costQual: 3814, sales: 8 },
    { m: 'Фев', cost: 284076, uniq: 139, costUniq: 2044, clean: 99, costClean: 2869, qual: 40, costQual: 7102, sales: 5 },
    { m: 'Мар', cost: 296774, uniq: 149, costUniq: 1992, clean: 120, costClean: 2473, qual: 67, costQual: 4429, sales: 11 },
    { m: 'Апр', cost: 288621, uniq: 157, costUniq: 1838, clean: 124, costClean: 2328, qual: 80, costQual: 3608, sales: 15 },
    { m: 'Май', cost: 309775, uniq: 166, costUniq: 1866, clean: 127, costClean: 2439, qual: 64, costQual: 4840, sales: 7 },
    { m: 'Июн', cost: 300362, uniq: 135, costUniq: 2225, clean: 110, costClean: 2731, qual: 45, costQual: 6675, sales: 6 },
    { m: 'Июл', cost: 249864, uniq: 173, costUniq: 1444, clean: 120, costClean: 2082, qual: 118, costQual: 2117, sales: 8 },
    { m: 'Авг', cost: 70039, uniq: 70, costUniq: 1001, clean: 46, costClean: 1523, qual: 33, costQual: 2122, sales: 3 },
    { m: 'Сен', cost: 283581, uniq: 247, costUniq: 1148, clean: 182, costClean: 1558, qual: 165, costQual: 1719, sales: 30 },
    { m: 'Окт', cost: null, uniq: null, costUniq: null, clean: null, costClean: null, qual: null, costQual: null, sales: null },
  ],
};

// ── Спрос по Wordstat: помесячно, 2024 / 2025 / 2026 ──
export const demand = [
  { m: 'Янв', y24: 6163, y25: 7659, y26: 4120 },
  { m: 'Фев', y24: 19121, y25: 6880, y26: 3899 },
  { m: 'Мар', y24: 8186, y25: 6327, y26: 5685 },
  { m: 'Апр', y24: 4741, y25: 5932, y26: 5695 },
  { m: 'Май', y24: 5855, y25: 7519, y26: 5178 },
  { m: 'Июн', y24: 4680, y25: 12280, y26: 4972 },
  { m: 'Июл', y24: 4875, y25: 9570, y26: 5243 },
  { m: 'Авг', y24: 4997, y25: 8293, y26: 4826 },
  { m: 'Сен', y24: 4536, y25: 6624, y26: 5235 },
  { m: 'Окт', y24: 5834, y25: 6145, y26: null },
  { m: 'Ноя', y24: 7554, y25: 5077, y26: null },
  { m: 'Дек', y24: 10494, y25: 4157, y26: null },
];

// ── Работы ──
export const workDone = [
  'Отслеживание показателей рекламы',
  'Оптимизация рекламного бюджета под задачи за счёт:',
  'Работы с корректировками пола/возраста и устройств',
  'Тестирование элементов рекламы',
  'Исключение неэффективных ключевых запросов',
  'Перераспределение бюджета с неэффективных ключевых запросов на конверсионные',
  'Отключение неэффективных групп объявлений/фраз',
];

export const workPlan = [
  'Ежедневный мониторинг показателей рекламных кампаний и анализ качества трафика',
  'Оптимизация и перераспределение рекламного бюджета в пользу наиболее эффективных кампаний',
  'Работа над увеличением и поддержанием объёма целевых заявок',
  'Исключение неэффективных ключевых запросов и дальнейшая очистка трафика',
  'Оптимизация рекламных кампаний при сохранении качества лидов',
  'Оптимизация запущенных РК на СПб на новом кабинете и домене',
];

// ── План на новый месяц (октябрь 2026) по сегментам ──
export const nextPlanBySegment: Record<SegmentKey, Array<{ param: string; plan: string }>> = {
  spb: [
    { param: 'Рекламный бюджет, руб.', plan: '291 900 ₽' },
    { param: 'Заявки, ед.', plan: '133' },
    { param: 'Стоимость заявки (с НДС), руб.', plan: '2 200 ₽' },
    { param: '% спама от общего числа', plan: '20%' },
    { param: 'Спам, ед. (всё что не попадает в чистые)', plan: '27' },
    { param: '% чистых заявок', plan: '80,00%' },
    { param: 'Чистые заявки, ед.', plan: '106' },
    { param: 'Стоимость чистой заявки (с НДС), руб.', plan: '2 750 ₽' },
    { param: 'Конверсия из заявки в квал. заявку, %', plan: '85%' },
    { param: 'Квал. заявки, ед.', plan: '90' },
    { param: 'Стоимость квал. заявки (с НДС), руб.', plan: '3 243 ₽' },
    { param: 'Продажи (выкупы), ед.', plan: '8' },
  ],
  premium: [
    { param: 'Рекламный бюджет, руб.', plan: '294 900 ₽' },
    { param: 'Заявки, ед.', plan: '196' },
    { param: 'Стоимость заявки (с НДС), руб.', plan: '1 500 ₽' },
    { param: '% спама от общего числа', plan: '20,00%' },
    { param: 'Спам, ед. (всё что не попадает в чистые)', plan: '39' },
    { param: '% чистых заявок', plan: '80,00%' },
    { param: 'Чистые заявки, ед.', plan: '157' },
    { param: 'Стоимость чистой заявки (с НДС), руб.', plan: '1 881 ₽' },
    { param: 'Конверсия из заявки в квал. заявку, %', plan: '90%' },
    { param: 'Квал. заявки, ед.', plan: '141' },
    { param: 'Стоимость квал. заявки (с НДС), руб.', plan: '2 091,49 ₽' },
    { param: 'Продажи (выкупы), ед.', plan: '16' },
  ],
};
