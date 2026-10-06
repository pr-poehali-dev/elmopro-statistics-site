// ── Данные отчёта клиента Выкуп Автобумс МСК ──
import { NEON, AGENCY } from '@/data/report';

export { NEON, AGENCY };

export const CLIENT = {
  name: 'Выкуп Автобумс МСК',
  id: 'vikup_msk',
  site1: 'https://выкуп-авто-мск.рф/',
  site2: 'https://центр-выкупа-авто-мск.рф/',
  site3: 'https://выкуп-авто-срочно-мск.рф/',
  period: 'Сентябрь 2026',
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
      { href: CLIENT.site1, cta: '1.выкуп-авто-мск.рф' },
      { href: CLIENT.site2, cta: 'центр-выкупа-авто-мск.рф' },
      { href: CLIENT.site3, cta: '2.выкуп-авто-срочно-мск.рф' },
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

// ── Блок: план / факт за сентябрь 2026 по сегментам ──
export const planFactBySegment: Record<SegmentKey, Array<{ param: string; planNum: number; factNum: number; planLabel: string; factLabel: string; isCost: boolean }>> = {
  msk1: [
    { param: 'Рекламный бюджет, руб.', planNum: 291900, factNum: 165839, planLabel: '291 900 ₽', factLabel: '165 839 ₽', isCost: false },
    { param: 'Заявки, ед.', planNum: 225, factNum: 105, planLabel: '225', factLabel: '105', isCost: false },
    { param: 'Стоимость заявки (с НДС), руб.', planNum: 1300, factNum: 1579, planLabel: '1 300 ₽', factLabel: '1 579 ₽', isCost: true },
    { param: '% спама от общего числа', planNum: 16, factNum: 20.95, planLabel: '16%', factLabel: '20,95%', isCost: true },
    { param: 'Спам, ед. (всё что не попадает в чистые)', planNum: 35, factNum: 22, planLabel: '35', factLabel: '22', isCost: true },
    { param: '% чистых заявок', planNum: 84.41, factNum: 79.05, planLabel: '84,41%', factLabel: '79,05%', isCost: false },
    { param: 'Чистые заявки, ед.', planNum: 190, factNum: 83, planLabel: '190', factLabel: '83', isCost: false },
    { param: 'Стоимость чистой заявки (с НДС), руб.', planNum: 1540.06, factNum: 1998, planLabel: '1 540,06 ₽', factLabel: '1 998 ₽', isCost: true },
    { param: 'Конверсия из чистой в квал. заявку, %', planNum: 75, factNum: 71.08, planLabel: '75%', factLabel: '71,08%', isCost: false },
    { param: 'Квал. заявки, ед.', planNum: 142, factNum: 59, planLabel: '142', factLabel: '59', isCost: false },
    { param: 'Стоимость квал. заявки (с НДС), руб.', planNum: 2055.63, factNum: 2811, planLabel: '2 055,63 ₽', factLabel: '2 811 ₽', isCost: true },
    { param: 'Продажи (выкупы), ед.', planNum: 5, factNum: 3, planLabel: '5', factLabel: '3', isCost: false },
  ],
  msk2: [
    { param: 'Рекламный бюджет, руб.', planNum: 291900, factNum: 255871, planLabel: '291 900 ₽', factLabel: '255 871 ₽', isCost: false },
    { param: 'Заявки, ед.', planNum: 209, factNum: 177, planLabel: '209', factLabel: '177', isCost: false },
    { param: 'Стоимость заявки (с НДС), руб.', planNum: 1400, factNum: 1446, planLabel: '1 400 ₽', factLabel: '1 446 ₽', isCost: true },
    { param: '% спама от общего числа', planNum: 6.71, factNum: 9.04, planLabel: '6,71%', factLabel: '9,04%', isCost: true },
    { param: 'Спам, ед. (всё что не попадает в чистые)', planNum: 14, factNum: 16, planLabel: '14', factLabel: '16', isCost: true },
    { param: '% чистых заявок', planNum: 93.29, factNum: 90.96, planLabel: '93,29%', factLabel: '90,96%', isCost: false },
    { param: 'Чистые заявки, ед.', planNum: 195, factNum: 161, planLabel: '195', factLabel: '161', isCost: false },
    { param: 'Стоимость чистой заявки (с НДС), руб.', planNum: 1501, factNum: 1589, planLabel: '1 501 ₽', factLabel: '1 589 ₽', isCost: true },
    { param: 'Конверсия из чистой в квал. заявку, %', planNum: 72, factNum: 65.22, planLabel: '72%', factLabel: '65,22%', isCost: false },
    { param: 'Квал. заявки, ед.', planNum: 140, factNum: 105, planLabel: '140', factLabel: '105', isCost: false },
    { param: 'Стоимость квал. заявки (с НДС), руб.', planNum: 2085, factNum: 2437, planLabel: '2 085 ₽', factLabel: '2 437 ₽', isCost: true },
    { param: 'Продажи (выкупы), ед.', planNum: 12, factNum: 5, planLabel: '12', factLabel: '5', isCost: false },
  ],
  msk3: [
    { param: 'Рекламный бюджет, руб.', planNum: 291900, factNum: 217681, planLabel: '291 900 ₽', factLabel: '217 681 ₽', isCost: false },
    { param: 'Заявки, ед.', planNum: 182, factNum: 111, planLabel: '182', factLabel: '111', isCost: false },
    { param: 'Стоимость заявки (с НДС), руб.', planNum: 1600, factNum: 1961, planLabel: '1 600 ₽', factLabel: '1 961 ₽', isCost: true },
    { param: '% спама от общего числа', planNum: 19, factNum: 13.51, planLabel: '19%', factLabel: '13,51%', isCost: true },
    { param: 'Спам, ед. (всё что не попадает в чистые)', planNum: 35, factNum: 15, planLabel: '35', factLabel: '15', isCost: true },
    { param: '% чистых заявок', planNum: 80.82, factNum: 86.49, planLabel: '80,82%', factLabel: '86,49%', isCost: false },
    { param: 'Чистые заявки, ед.', planNum: 147, factNum: 96, planLabel: '147', factLabel: '96', isCost: false },
    { param: 'Стоимость чистой заявки (с НДС), руб.', planNum: 1980, factNum: 2268, planLabel: '1 980 ₽', factLabel: '2 268 ₽', isCost: true },
    { param: 'Конверсия из чистой в квал. заявку, %', planNum: 80, factNum: 61.46, planLabel: '80%', factLabel: '61,46%', isCost: false },
    { param: 'Квал. заявки, ед.', planNum: 118, factNum: 59, planLabel: '118', factLabel: '59', isCost: false },
    { param: 'Стоимость квал. заявки (с НДС), руб.', planNum: 2474, factNum: 3690, planLabel: '2 474 ₽', factLabel: '3 690 ₽', isCost: true },
    { param: 'Продажи (выкупы), ед.', planNum: 5, factNum: 1, planLabel: '5', factLabel: '1', isCost: false },
  ],
};

// ── Блок: факт август vs факт сентябрь ──
export const monthCompareBySegment: Record<SegmentKey, Array<{ param: string; mayNum: number; junNum: number; mayLabel: string; junLabel: string; isCost: boolean }>> = {
  msk1: [
    { param: 'Рекламный бюджет, руб.', mayNum: 311487, junNum: 165839, mayLabel: '311 487 ₽', junLabel: '165 839 ₽', isCost: false },
    { param: 'Заявки, ед.', mayNum: 263, junNum: 105, mayLabel: '263', junLabel: '105', isCost: false },
    { param: 'Стоимость заявки (с НДС), руб.', mayNum: 1184, junNum: 1579, mayLabel: '1 184 ₽', junLabel: '1 579 ₽', isCost: true },
    { param: '% спама от общего числа', mayNum: 20.15, junNum: 20.95, mayLabel: '20,15%', junLabel: '20,95%', isCost: true },
    { param: 'Спам, ед. (всё что не попадает в чистые)', mayNum: 53, junNum: 22, mayLabel: '53', junLabel: '22', isCost: true },
    { param: '% чистых заявок', mayNum: 79.85, junNum: 79.05, mayLabel: '79,85%', junLabel: '79,05%', isCost: false },
    { param: 'Чистые заявки, ед.', mayNum: 210, junNum: 83, mayLabel: '210', junLabel: '83', isCost: false },
    { param: 'Стоимость чистой заявки (с НДС), руб.', mayNum: 1483, junNum: 1998, mayLabel: '1 483 ₽', junLabel: '1 998 ₽', isCost: true },
    { param: 'Конверсия из чистой в квал. заявку, %', mayNum: 76.67, junNum: 71.08, mayLabel: '76,67%', junLabel: '71,08%', isCost: false },
    { param: 'Квал. заявки, ед.', mayNum: 161, junNum: 59, mayLabel: '161', junLabel: '59', isCost: false },
    { param: 'Стоимость квал. заявки (с НДС), руб.', mayNum: 1935, junNum: 2811, mayLabel: '1 935 ₽', junLabel: '2 811 ₽', isCost: true },
    { param: 'Продажи (выкупы), ед.', mayNum: 5, junNum: 3, mayLabel: '5', junLabel: '3', isCost: false },
  ],
  msk2: [
    { param: 'Рекламный бюджет, руб.', mayNum: 286927, junNum: 255871, mayLabel: '286 927 ₽', junLabel: '255 871 ₽', isCost: false },
    { param: 'Заявки, ед.', mayNum: 219, junNum: 177, mayLabel: '219', junLabel: '177', isCost: false },
    { param: 'Стоимость заявки (с НДС), руб.', mayNum: 1310, junNum: 1446, mayLabel: '1 310 ₽', junLabel: '1 446 ₽', isCost: true },
    { param: '% спама от общего числа', mayNum: 6.39, junNum: 9.04, mayLabel: '6,39%', junLabel: '9,04%', isCost: true },
    { param: 'Спам, ед. (всё что не попадает в чистые)', mayNum: 14, junNum: 16, mayLabel: '14', junLabel: '16', isCost: true },
    { param: '% чистых заявок', mayNum: 93.61, junNum: 90.96, mayLabel: '93,61%', junLabel: '90,96%', isCost: false },
    { param: 'Чистые заявки, ед.', mayNum: 205, junNum: 161, mayLabel: '205', junLabel: '161', isCost: false },
    { param: 'Стоимость чистой заявки (с НДС), руб.', mayNum: 1400, junNum: 1589, mayLabel: '1 400 ₽', junLabel: '1 589 ₽', isCost: true },
    { param: 'Конверсия из чистой в квал. заявку, %', mayNum: 65.37, junNum: 65.22, mayLabel: '65,37%', junLabel: '65,22%', isCost: false },
    { param: 'Квал. заявки, ед.', mayNum: 134, junNum: 105, mayLabel: '134', junLabel: '105', isCost: false },
    { param: 'Стоимость квал. заявки (с НДС), руб.', mayNum: 2141, junNum: 2437, mayLabel: '2 141 ₽', junLabel: '2 437 ₽', isCost: true },
    { param: 'Продажи (выкупы), ед.', mayNum: 14, junNum: 5, mayLabel: '14', junLabel: '5', isCost: false },
  ],
  msk3: [
    { param: 'Рекламный бюджет, руб.', mayNum: 306629, junNum: 217681, mayLabel: '306 629 ₽', junLabel: '217 681 ₽', isCost: false },
    { param: 'Заявки, ед.', mayNum: 206, junNum: 111, mayLabel: '206', junLabel: '111', isCost: false },
    { param: 'Стоимость заявки (с НДС), руб.', mayNum: 1488, junNum: 1961, mayLabel: '1 488 ₽', junLabel: '1 961 ₽', isCost: true },
    { param: '% спама от общего числа', mayNum: 19.42, junNum: 13.51, mayLabel: '19,42%', junLabel: '13,51%', isCost: true },
    { param: 'Спам, ед. (всё что не попадает в чистые)', mayNum: 40, junNum: 15, mayLabel: '40', junLabel: '15', isCost: true },
    { param: '% чистых заявок', mayNum: 80.58, junNum: 86.49, mayLabel: '80,58%', junLabel: '86,49%', isCost: false },
    { param: 'Чистые заявки, ед.', mayNum: 166, junNum: 96, mayLabel: '166', junLabel: '96', isCost: false },
    { param: 'Стоимость чистой заявки (с НДС), руб.', mayNum: 1847, junNum: 2268, mayLabel: '1 847 ₽', junLabel: '2 268 ₽', isCost: true },
    { param: 'Конверсия из чистой в квал. заявку, %', mayNum: 63.25, junNum: 61.46, mayLabel: '63,25%', junLabel: '61,46%', isCost: false },
    { param: 'Квал. заявки, ед.', mayNum: 105, junNum: 59, mayLabel: '105', junLabel: '59', isCost: false },
    { param: 'Стоимость квал. заявки (с НДС), руб.', mayNum: 2920, junNum: 3690, mayLabel: '2 920 ₽', junLabel: '3 690 ₽', isCost: true },
    { param: 'Продажи (выкупы), ед.', mayNum: 4, junNum: 1, mayLabel: '4', junLabel: '1', isCost: false },
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
    { m: 'Сен', cost: 165839, uniq: 105, costUniq: 1579, clean: 83, costClean: 1998, qual: 59, costQual: 2811, sales: 3 },
    { m: 'Окт', cost: null, uniq: null, costUniq: null, clean: null, costClean: null, qual: null, costQual: null, sales: null },
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
    { m: 'Сен', cost: 255871, uniq: 177, costUniq: 1446, clean: 161, costClean: 1589, qual: 105, costQual: 2437, sales: 5 },
    { m: 'Окт', cost: null, uniq: null, costUniq: null, clean: null, costClean: null, qual: null, costQual: null, sales: null },
  ],
  msk3: [
    { m: 'Янв', cost: 253313, uniq: 251, costUniq: 1009, clean: 183, costClean: 1384, qual: 116, costQual: 2184, sales: 2 },
    { m: 'Фев', cost: 260171, uniq: 181, costUniq: 1437, clean: 144, costClean: 1807, qual: 45, costQual: 5782, sales: 7 },
    { m: 'Мар', cost: 267778, uniq: 144, costUniq: 1860, clean: 124, costClean: 2159, qual: 37, costQual: 7237, sales: 3 },
    { m: 'Апр', cost: 317336, uniq: 171, costUniq: 1856, clean: 144, costClean: 2204, qual: 47, costQual: 6752, sales: 6 },
    { m: 'Май', cost: 365321, uniq: 222, costUniq: 1646, clean: 181, costClean: 2018, qual: 42, costQual: 8698, sales: 7 },
    { m: 'Июн', cost: 292922, uniq: 165, costUniq: 1775, clean: 138, costClean: 2123, qual: 11, costQual: 26629, sales: 6 },
    { m: 'Июл', cost: 266091, uniq: 125, costUniq: 2129, clean: 90, costClean: 2957, qual: 79, costQual: 3368, sales: 4 },
    { m: 'Авг', cost: 306629, uniq: 206, costUniq: 1488, clean: 166, costClean: 1847, qual: 105, costQual: 2920, sales: 4 },
    { m: 'Сен', cost: 217681, uniq: 111, costUniq: 1961, clean: 96, costClean: 2268, qual: 59, costQual: 3690, sales: 1 },
    { m: 'Окт', cost: null, uniq: null, costUniq: null, clean: null, costClean: null, qual: null, costQual: null, sales: null },
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
  { m: 'Сен', y24: 18401, y25: 26056, y26: 17477 },
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
  'Перезаливка МСК3 на новую посадочную страницу и аккаунт',
];

// ── План на новый месяц (октябрь 2026) по сегментам ──
export const nextPlanBySegment: Record<SegmentKey, Array<{ param: string; plan: string }>> = {
  msk1: [
    { param: 'Рекламный бюджет, руб.', plan: '291 900 ₽' },
    { param: 'Заявки, ед.', plan: '209' },
    { param: 'Стоимость заявки (с НДС), руб.', plan: '1 400 ₽' },
    { param: '% спама от общего числа', plan: '17%' },
    { param: 'Спам, ед. (всё что не попадает в чистые)', plan: '35' },
    { param: '% чистых заявок', plan: '83,21%' },
    { param: 'Чистые заявки, ед.', plan: '174' },
    { param: 'Стоимость чистой заявки (с НДС), руб.', plan: '1 682,42 ₽' },
    { param: 'Конверсия из чистой в квал. заявку, %', plan: '76%' },
    { param: 'Квал. заявки, ед.', plan: '132' },
    { param: 'Стоимость квал. заявки (с НДС), руб.', plan: '2 211,36 ₽' },
    { param: 'Продажи (выкупы), ед.', plan: '5' },
  ],
  msk2: [
    { param: 'Рекламный бюджет, руб.', plan: '291 900 ₽' },
    { param: 'Заявки, ед.', plan: '209' },
    { param: 'Стоимость заявки (с НДС), руб.', plan: '1 400 ₽' },
    { param: '% спама от общего числа', plan: '7,67%' },
    { param: 'Спам, ед. (всё что не попадает в чистые)', plan: '16' },
    { param: '% чистых заявок', plan: '92,33%' },
    { param: 'Чистые заявки, ед.', plan: '193' },
    { param: 'Стоимость чистой заявки (с НДС), руб.', plan: '1 516 ₽' },
    { param: 'Конверсия из чистой в квал. заявку, %', plan: '70%' },
    { param: 'Квал. заявки, ед.', plan: '135' },
    { param: 'Стоимость квал. заявки (с НДС), руб.', plan: '2 162 ₽' },
    { param: 'Продажи (выкупы), ед.', plan: '9' },
  ],
  msk3: [
    { param: 'Рекламный бюджет, руб.', plan: '291 900 ₽' },
    { param: 'Заявки, ед.', plan: '162' },
    { param: 'Стоимость заявки (с НДС), руб.', plan: '1 800 ₽' },
    { param: '% спама от общего числа', plan: '15%' },
    { param: 'Спам, ед. (всё что не попадает в чистые)', plan: '25' },
    { param: '% чистых заявок', plan: '84,58%' },
    { param: 'Чистые заявки, ед.', plan: '137' },
    { param: 'Стоимость чистой заявки (с НДС), руб.', plan: '2 128 ₽' },
    { param: 'Конверсия из чистой в квал. заявку, %', plan: '70%' },
    { param: 'Квал. заявки, ед.', plan: '96' },
    { param: 'Стоимость квал. заявки (с НДС), руб.', plan: '3 041 ₽' },
    { param: 'Продажи (выкупы), ед.', plan: '4' },
  ],
};
