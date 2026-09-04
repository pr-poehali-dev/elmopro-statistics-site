// ── Данные отчёта клиента Выкуп Автобумс МСК ──
import { NEON, AGENCY } from '@/data/report';

export { NEON, AGENCY };

export const CLIENT = {
  name: 'Выкуп Автобумс МСК',
  id: 'vikup_msk',
  site1: 'https://выкуп-авто-мск.рф/',
  site2: 'https://центр-выкупа-авто-мск.рф/',
  site3: 'https://выкуп-авто-срочно-мск.рф/',
  period: 'Август 2026',
  weeklyStats: 'https://docs.google.com/spreadsheets/d/1F9Rj5pt4D4VTYdkDlIVI3qDuSS9ZFX4D6nhqVc36hCw/edit?gid=1882095314#gid=1882095314',
  paybackFunnel: 'https://docs.google.com/spreadsheets/d/1F9Rj5pt4D4VTYdkDlIVI3qDuSS9ZFX4D6nhqVc36hCw/edit?gid=374539239#gid=374539239',
};

export const aboutLinks = [
  { icon: 'CalendarRange', label: 'Понедельная статистика', desc: 'Расход, заявки и стоимость лида по неделям месяца.', href: CLIENT.weeklyStats, cta: 'Открыть таблицу' },
  { icon: 'TrendingUp', label: 'Воронка окупаемости', desc: 'Путь от лида до сделки и юнит-экономика проекта.', href: CLIENT.paybackFunnel, cta: 'Открыть таблицу' },
  {
    icon: 'Car',
    label: 'Сайты',
    desc: 'Посадочные страницы по направлениям МСК1, МСК2 и МСК3, на которые ведёт реклама.',
    links: [
      { href: CLIENT.site1, cta: 'выкуп-авто-мск.рф' },
      { href: CLIENT.site2, cta: 'центр-выкупа-авто-мск.рф' },
      { href: CLIENT.site3, cta: 'выкуп-авто-срочно-мск.рф' },
    ],
  },
];

// ── Сегменты рекламы ──
export const segments = [
  { key: 'msk1', label: 'МСК1', icon: 'MapPin' },
  { key: 'msk2', label: 'МСК2', icon: 'MapPin' },
  { key: 'msk3', label: 'МСК3', icon: 'MapPin' },
] as const;

export type SegmentKey = typeof segments[number]['key'];

// ── Блок: план / факт за август 2026 по сегментам ──
export const planFactBySegment: Record<SegmentKey, Array<{ param: string; planNum: number; factNum: number; planLabel: string; factLabel: string; isCost: boolean }>> = {
  msk1: [
    { param: 'Рекламный бюджет, руб.', planNum: 291900, factNum: 311487, planLabel: '291 900 ₽', factLabel: '311 487 ₽', isCost: false },
    { param: 'Заявки, ед.', planNum: 195, factNum: 263, planLabel: '195', factLabel: '263', isCost: false },
    { param: 'Стоимость заявки (с НДС), руб.', planNum: 1500, factNum: 1184, planLabel: '1 500 ₽', factLabel: '1 184 ₽', isCost: true },
    { param: '% спама от общего числа', planNum: 15, factNum: 20.15, planLabel: '15%', factLabel: '20,15%', isCost: true },
    { param: 'Спам, ед. (всё что не попадает в чистые)', planNum: 30, factNum: 53, planLabel: '30', factLabel: '53', isCost: true },
    { param: '% чистых заявок', planNum: 84.58, factNum: 79.85, planLabel: '84,58%', factLabel: '79,85%', isCost: false },
    { param: 'Чистые заявки, ед.', planNum: 165, factNum: 210, planLabel: '165', factLabel: '210', isCost: false },
    { param: 'Стоимость чистой заявки (с НДС), руб.', planNum: 1773.39, factNum: 1483, planLabel: '1 773,39 ₽', factLabel: '1 483 ₽', isCost: true },
    { param: 'Конверсия из чистой в квал. заявку, %', planNum: 80, factNum: 76.67, planLabel: '80%', factLabel: '76,67%', isCost: false },
    { param: 'Квал. заявки, ед.', planNum: 132, factNum: 161, planLabel: '132', factLabel: '161', isCost: false },
    { param: 'Стоимость квал. заявки (с НДС), руб.', planNum: 2211.36, factNum: 1935, planLabel: '2 211,36 ₽', factLabel: '1 935 ₽', isCost: true },
    { param: 'Продажи (выкупы), ед.', planNum: 7, factNum: 5, planLabel: '7', factLabel: '5', isCost: false },
  ],
  msk2: [
    { param: 'Рекламный бюджет, руб.', planNum: 291900, factNum: 286927, planLabel: '291 900 ₽', factLabel: '286 927 ₽', isCost: false },
    { param: 'Заявки, ед.', planNum: 209, factNum: 219, planLabel: '209', factLabel: '219', isCost: false },
    { param: 'Стоимость заявки (с НДС), руб.', planNum: 1400, factNum: 1310, planLabel: '1 400 ₽', factLabel: '1 310 ₽', isCost: true },
    { param: '% спама от общего числа', planNum: 12.47, factNum: 6.39, planLabel: '12,47%', factLabel: '6,39%', isCost: true },
    { param: 'Спам, ед. (всё что не попадает в чистые)', planNum: 26, factNum: 14, planLabel: '26', factLabel: '14', isCost: true },
    { param: '% чистых заявок', planNum: 87.53, factNum: 93.61, planLabel: '87,53%', factLabel: '93,61%', isCost: false },
    { param: 'Чистые заявки, ед.', planNum: 183, factNum: 205, planLabel: '183', factLabel: '205', isCost: false },
    { param: 'Стоимость чистой заявки (с НДС), руб.', planNum: 1599, factNum: 1400, planLabel: '1 599 ₽', factLabel: '1 400 ₽', isCost: true },
    { param: 'Конверсия из чистой в квал. заявку, %', planNum: 75, factNum: 65.37, planLabel: '75%', factLabel: '65,37%', isCost: false },
    { param: 'Квал. заявки, ед.', planNum: 137, factNum: 134, planLabel: '137', factLabel: '134', isCost: false },
    { param: 'Стоимость квал. заявки (с НДС), руб.', planNum: 2131, factNum: 2141, planLabel: '2 131 ₽', factLabel: '2 141 ₽', isCost: true },
    { param: 'Продажи (выкупы), ед.', planNum: 10, factNum: 14, planLabel: '10', factLabel: '14', isCost: false },
  ],
  msk3: [
    { param: 'Рекламный бюджет, руб.', planNum: 291900, factNum: 306629, planLabel: '291 900 ₽', factLabel: '306 629 ₽', isCost: false },
    { param: 'Заявки, ед.', planNum: 162, factNum: 206, planLabel: '162', factLabel: '206', isCost: false },
    { param: 'Стоимость заявки (с НДС), руб.', planNum: 1800, factNum: 1488, planLabel: '1 800 ₽', factLabel: '1 488 ₽', isCost: true },
    { param: '% спама от общего числа', planNum: 17, factNum: 19.42, planLabel: '17%', factLabel: '19,42%', isCost: true },
    { param: 'Спам, ед. (всё что не попадает в чистые)', planNum: 27, factNum: 40, planLabel: '27', factLabel: '40', isCost: true },
    { param: '% чистых заявок', planNum: 83.35, factNum: 80.58, planLabel: '83,35%', factLabel: '80,58%', isCost: false },
    { param: 'Чистые заявки, ед.', planNum: 135, factNum: 166, planLabel: '135', factLabel: '166', isCost: false },
    { param: 'Стоимость чистой заявки (с НДС), руб.', planNum: 2160, factNum: 1847, planLabel: '2 160 ₽', factLabel: '1 847 ₽', isCost: true },
    { param: 'Конверсия из чистой в квал. заявку, %', planNum: 80, factNum: 63.25, planLabel: '80%', factLabel: '63,25%', isCost: false },
    { param: 'Квал. заявки, ед.', planNum: 108, factNum: 105, planLabel: '108', factLabel: '105', isCost: false },
    { param: 'Стоимость квал. заявки (с НДС), руб.', planNum: 2703, factNum: 2920, planLabel: '2 703 ₽', factLabel: '2 920 ₽', isCost: true },
    { param: 'Продажи (выкупы), ед.', planNum: 6, factNum: 5, planLabel: '6', factLabel: '5', isCost: false },
  ],
};

// ── Блок: факт июль vs факт август по сегментам ──
export const monthCompareBySegment: Record<SegmentKey, Array<{ param: string; mayNum: number; junNum: number; mayLabel: string; junLabel: string; isCost: boolean }>> = {
  msk1: [
    { param: 'Рекламный бюджет, руб.', mayNum: 300153, junNum: 311487, mayLabel: '300 153 ₽', junLabel: '311 487 ₽', isCost: false },
    { param: 'Заявки, ед.', mayNum: 209, junNum: 263, mayLabel: '209', junLabel: '263', isCost: false },
    { param: 'Стоимость заявки (с НДС), руб.', mayNum: 1436, junNum: 1184, mayLabel: '1 436 ₽', junLabel: '1 184 ₽', isCost: true },
    { param: '% спама от общего числа', mayNum: 19.62, junNum: 20.15, mayLabel: '19,62%', junLabel: '20,15%', isCost: true },
    { param: 'Спам, ед. (всё что не попадает в чистые)', mayNum: 41, junNum: 53, mayLabel: '41', junLabel: '53', isCost: true },
    { param: '% чистых заявок', mayNum: 80.38, junNum: 79.85, mayLabel: '80,38%', junLabel: '79,85%', isCost: false },
    { param: 'Чистые заявки, ед.', mayNum: 168, junNum: 210, mayLabel: '168', junLabel: '210', isCost: false },
    { param: 'Стоимость чистой заявки (с НДС), руб.', mayNum: 1787, junNum: 1483, mayLabel: '1 787 ₽', junLabel: '1 483 ₽', isCost: true },
    { param: 'Конверсия из чистой в квал. заявку, %', mayNum: 82.14, junNum: 76.67, mayLabel: '82,14%', junLabel: '76,67%', isCost: false },
    { param: 'Квал. заявки, ед.', mayNum: 138, junNum: 161, mayLabel: '138', junLabel: '161', isCost: false },
    { param: 'Стоимость квал. заявки (с НДС), руб.', mayNum: 2175, junNum: 1935, mayLabel: '2 175 ₽', junLabel: '1 935 ₽', isCost: true },
    { param: 'Продажи (выкупы), ед.', mayNum: 5, junNum: 5, mayLabel: '5', junLabel: '5', isCost: false },
  ],
  msk2: [
    { param: 'Рекламный бюджет, руб.', mayNum: 276150, junNum: 286927, mayLabel: '276 150 ₽', junLabel: '286 927 ₽', isCost: false },
    { param: 'Заявки, ед.', mayNum: 174, junNum: 219, mayLabel: '174', junLabel: '219', isCost: false },
    { param: 'Стоимость заявки (с НДС), руб.', mayNum: 1587, junNum: 1310, mayLabel: '1 587 ₽', junLabel: '1 310 ₽', isCost: true },
    { param: '% спама от общего числа', mayNum: 9.77, junNum: 6.39, mayLabel: '9,77%', junLabel: '6,39%', isCost: true },
    { param: 'Спам, ед. (всё что не попадает в чистые)', mayNum: 17, junNum: 14, mayLabel: '17', junLabel: '14', isCost: true },
    { param: '% чистых заявок', mayNum: 90.23, junNum: 93.61, mayLabel: '90,23%', junLabel: '93,61%', isCost: false },
    { param: 'Чистые заявки, ед.', mayNum: 157, junNum: 205, mayLabel: '157', junLabel: '205', isCost: false },
    { param: 'Стоимость чистой заявки (с НДС), руб.', mayNum: 1759, junNum: 1400, mayLabel: '1 759 ₽', junLabel: '1 400 ₽', isCost: true },
    { param: 'Конверсия из чистой в квал. заявку, %', mayNum: 78.34, junNum: 65.37, mayLabel: '78,34%', junLabel: '65,37%', isCost: false },
    { param: 'Квал. заявки, ед.', mayNum: 123, junNum: 134, mayLabel: '123', junLabel: '134', isCost: false },
    { param: 'Стоимость квал. заявки (с НДС), руб.', mayNum: 2245, junNum: 2141, mayLabel: '2 245 ₽', junLabel: '2 141 ₽', isCost: true },
    { param: 'Продажи (выкупы), ед.', mayNum: 12, junNum: 14, mayLabel: '12', junLabel: '14', isCost: false },
  ],
  msk3: [
    { param: 'Рекламный бюджет, руб.', mayNum: 266091, junNum: 306629, mayLabel: '266 091 ₽', junLabel: '306 629 ₽', isCost: false },
    { param: 'Заявки, ед.', mayNum: 125, junNum: 206, mayLabel: '125', junLabel: '206', isCost: false },
    { param: 'Стоимость заявки (с НДС), руб.', mayNum: 2129, junNum: 1488, mayLabel: '2 129 ₽', junLabel: '1 488 ₽', isCost: true },
    { param: '% спама от общего числа', mayNum: 28, junNum: 19.42, mayLabel: '28%', junLabel: '19,42%', isCost: true },
    { param: 'Спам, ед. (всё что не попадает в чистые)', mayNum: 35, junNum: 40, mayLabel: '35', junLabel: '40', isCost: true },
    { param: '% чистых заявок', mayNum: 72, junNum: 80.58, mayLabel: '72%', junLabel: '80,58%', isCost: false },
    { param: 'Чистые заявки, ед.', mayNum: 90, junNum: 166, mayLabel: '90', junLabel: '166', isCost: false },
    { param: 'Стоимость чистой заявки (с НДС), руб.', mayNum: 2957, junNum: 1847, mayLabel: '2 957 ₽', junLabel: '1 847 ₽', isCost: true },
    { param: 'Конверсия из чистой в квал. заявку, %', mayNum: 87.78, junNum: 63.25, mayLabel: '87,78%', junLabel: '63,25%', isCost: false },
    { param: 'Квал. заявки, ед.', mayNum: 79, junNum: 105, mayLabel: '79', junLabel: '105', isCost: false },
    { param: 'Стоимость квал. заявки (с НДС), руб.', mayNum: 3368, junNum: 2920, mayLabel: '3 368 ₽', junLabel: '2 920 ₽', isCost: true },
    { param: 'Продажи (выкупы), ед.', mayNum: 4, junNum: 5, mayLabel: '4', junLabel: '5', isCost: false },
  ],
};

// ── Блок: помесячная динамика с начала года по сегментам ──
export const monthlyTrendBySegment: Record<SegmentKey, Array<{ m: string; cost: number | null; uniq: number | null; costUniq: number | null; clean: number | null; costClean: number | null; qual: number | null; costQual: number | null; sales: number | null }>> = {
  msk1: [
    { m: 'Янв', cost: 253479, uniq: 130, costUniq: 1950, clean: 100, costClean: 2535, qual: 56, costQual: 4526, sales: 3 },
    { m: 'Фев', cost: 225358, uniq: 84, costUniq: 2683, clean: 53, costClean: 4252, qual: 16, costQual: 14085, sales: 1 },
    { m: 'Мар', cost: 297038, uniq: 153, costUniq: 1941, clean: 127, costClean: 2339, qual: 40, costQual: 7426, sales: 4 },
    { m: 'Апр', cost: 342732, uniq: 166, costUniq: 2065, clean: 143, costClean: 2397, qual: 46, costQual: 7451, sales: 6 },
    { m: 'Май', cost: 296618, uniq: 166, costUniq: 1786.86, clean: 123, costClean: 2412, qual: 30, costQual: 9887, sales: 7 },
    { m: 'Июн', cost: 287987, uniq: 150, costUniq: 1920, clean: 120, costClean: 2400, qual: 13, costQual: 22153, sales: 3 },
    { m: 'Июл', cost: 300153, uniq: 209, costUniq: 1436, clean: 168, costClean: 1787, qual: 138, costQual: 2175, sales: 5 },
    { m: 'Авг', cost: 311487, uniq: 263, costUniq: 1184, clean: 210, costClean: 1483, qual: 161, costQual: 1935, sales: 5 },
    { m: 'Сен', cost: null, uniq: null, costUniq: null, clean: null, costClean: null, qual: null, costQual: null, sales: null },
  ],
  msk2: [
    { m: 'Янв', cost: 255269, uniq: 146, costUniq: 1748, clean: 118, costClean: 2163, qual: 91, costQual: 2805, sales: 10 },
    { m: 'Фев', cost: 301870, uniq: 190, costUniq: 1589, clean: 153, costClean: 1973, qual: 38, costQual: 7944, sales: 3 },
    { m: 'Мар', cost: 249509, uniq: 194, costUniq: 1286, clean: 162, costClean: 1540, qual: 38, costQual: 6566, sales: 8 },
    { m: 'Апр', cost: 291618, uniq: 296, costUniq: 985, clean: 268, costClean: 1088, qual: 55, costQual: 5302, sales: 19 },
    { m: 'Май', cost: 305716, uniq: 262, costUniq: 1167, clean: 226, costClean: 1353, qual: 52, costQual: 5879, sales: 13 },
    { m: 'Июн', cost: 265725, uniq: 179, costUniq: 1484, clean: 165, costClean: 1610, qual: 49, costQual: 5423, sales: 11 },
    { m: 'Июл', cost: 276150, uniq: 174, costUniq: 1587, clean: 157, costClean: 1759, qual: 123, costQual: 2245, sales: 12 },
    { m: 'Авг', cost: 286927, uniq: 219, costUniq: 1310, clean: 205, costClean: 1400, qual: 134, costQual: 2141, sales: 14 },
    { m: 'Сен', cost: null, uniq: null, costUniq: null, clean: null, costClean: null, qual: null, costQual: null, sales: null },
  ],
  msk3: [
    { m: 'Янв', cost: 253313, uniq: 251, costUniq: 1009, clean: 183, costClean: 1384, qual: 116, costQual: 2184, sales: 2 },
    { m: 'Фев', cost: 260171, uniq: 181, costUniq: 1437, clean: 144, costClean: 1807, qual: 45, costQual: 5782, sales: 7 },
    { m: 'Мар', cost: 267778, uniq: 144, costUniq: 1860, clean: 124, costClean: 2159, qual: 37, costQual: 7237, sales: 3 },
    { m: 'Апр', cost: 317336, uniq: 171, costUniq: 1856, clean: 144, costClean: 2204, qual: 47, costQual: 6752, sales: 6 },
    { m: 'Май', cost: 365321, uniq: 222, costUniq: 1646, clean: 181, costClean: 2018, qual: 42, costQual: 8698, sales: 7 },
    { m: 'Июн', cost: 292922, uniq: 165, costUniq: 1775, clean: 138, costClean: 2123, qual: 11, costQual: 26629, sales: 6 },
    { m: 'Июл', cost: 266091, uniq: 125, costUniq: 2129, clean: 90, costClean: 2957, qual: 79, costQual: 3368, sales: 4 },
    { m: 'Авг', cost: 306629, uniq: 206, costUniq: 1488, clean: 166, costClean: 1847, qual: 105, costQual: 2920, sales: 5 },
    { m: 'Сен', cost: null, uniq: null, costUniq: null, clean: null, costClean: null, qual: null, costQual: null, sales: null },
  ],
};

// ── Спрос по Wordstat: помесячно, 2024 / 2025 / 2026 (единый, без сегментации) ──
export const demand = [
  { m: 'Янв', y24: 15827, y25: 30230, y26: 16071 },
  { m: 'Фев', y24: 42474, y25: 23664, y26: 15401 },
  { m: 'Мар', y24: 24722, y25: 26100, y26: 24922 },
  { m: 'Апр', y24: 16278, y25: 22350, y26: 23570 },
  { m: 'Май', y24: 23571, y25: 24644, y26: 19766 },
  { m: 'Июн', y24: 18769, y25: 27462, y26: 16561 },
  { m: 'Июл', y24: 18085, y25: 28572, y26: 17341 },
  { m: 'Авг', y24: 24401, y25: 32345, y26: 17126 },
  { m: 'Сен', y24: 18401, y25: 26056, y26: null },
  { m: 'Окт', y24: 26242, y25: 23524, y26: null },
  { m: 'Ноя', y24: 30678, y25: 20819, y26: null },
  { m: 'Дек', y24: 44132, y25: 16645, y26: null },
];

// ── Работы ──
export const workDone = [
  'Отслеживание показателей рекламы',
  'Оптимизация рекламного бюджета под задачи',
  'Работы с корректировками пола/возраста и устройств',
  'Тестирование элементов рекламы',
  'Исключение неэффективных ключевых запросов',
  'Перераспределение бюджета с неэффективных ключевых запросов на конверсионные',
  'Отключение неэффективных групп объявлений/фраз',
  'Остановка поисковых РК в связи с большим количеством лидов',
];

export const workPlan = [
  'Ежедневный мониторинг показателей рекламных кампаний и анализ качества трафика',
  'Оптимизация и перераспределение рекламного бюджета в пользу наиболее эффективных кампаний',
  'Работа над увеличением и поддержанием объёма целевых заявок',
  'Исключение неэффективных ключевых запросов и дальнейшая очистка трафика',
  'Оптимизация рекламных кампаний при сохранении качества лидов',
  'Переход по МСК1 полностью на новую посадочную страницу',
];

// ── План на новый месяц (сентябрь 2026) по сегментам ──
export const nextPlanBySegment: Record<SegmentKey, Array<{ param: string; plan: string }>> = {
  msk1: [
    { param: 'Рекламный бюджет, руб.', plan: '291 900 ₽' },
    { param: 'Заявки, ед.', plan: '225' },
    { param: 'Стоимость заявки (с НДС), руб.', plan: '1 300 ₽' },
    { param: '% спама от общего числа', plan: '16%' },
    { param: 'Спам, ед. (всё что не попадает в чистые)', plan: '35' },
    { param: '% чистых заявок', plan: '84,41%' },
    { param: 'Чистые заявки, ед.', plan: '190' },
    { param: 'Стоимость чистой заявки (с НДС), руб.', plan: '1 540,06 ₽' },
    { param: 'Конверсия из чистой в квал. заявку, %', plan: '75%' },
    { param: 'Квал. заявки, ед.', plan: '142' },
    { param: 'Стоимость квал. заявки (с НДС), руб.', plan: '2 055,63 ₽' },
    { param: 'Продажи (выкупы), ед.', plan: '5' },
  ],
  msk2: [
    { param: 'Рекламный бюджет, руб.', plan: '291 900 ₽' },
    { param: 'Заявки, ед.', plan: '209' },
    { param: 'Стоимость заявки (с НДС), руб.', plan: '1 400 ₽' },
    { param: '% спама от общего числа', plan: '6,71%' },
    { param: 'Спам, ед. (всё что не попадает в чистые)', plan: '14' },
    { param: '% чистых заявок', plan: '93,29%' },
    { param: 'Чистые заявки, ед.', plan: '195' },
    { param: 'Стоимость чистой заявки (с НДС), руб.', plan: '1 501 ₽' },
    { param: 'Конверсия из чистой в квал. заявку, %', plan: '72%' },
    { param: 'Квал. заявки, ед.', plan: '140' },
    { param: 'Стоимость квал. заявки (с НДС), руб.', plan: '2 085 ₽' },
    { param: 'Продажи (выкупы), ед.', plan: '12' },
  ],
  msk3: [
    { param: 'Рекламный бюджет, руб.', plan: '291 900 ₽' },
    { param: 'Заявки, ед.', plan: '182' },
    { param: 'Стоимость заявки (с НДС), руб.', plan: '1 600 ₽' },
    { param: '% спама от общего числа', plan: '19%' },
    { param: 'Спам, ед. (всё что не попадает в чистые)', plan: '35' },
    { param: '% чистых заявок', plan: '80,82%' },
    { param: 'Чистые заявки, ед.', plan: '147' },
    { param: 'Стоимость чистой заявки (с НДС), руб.', plan: '1 980 ₽' },
    { param: 'Конверсия из чистой в квал. заявку, %', plan: '80%' },
    { param: 'Квал. заявки, ед.', plan: '118' },
    { param: 'Стоимость квал. заявки (с НДС), руб.', plan: '2 474 ₽' },
    { param: 'Продажи (выкупы), ед.', plan: '5' },
  ],
};