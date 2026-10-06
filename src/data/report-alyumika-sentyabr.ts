// ── Данные отчёта клиента Алюмика (Чистые помещения) ──
import { NEON, AGENCY } from '@/data/report';

export { NEON, AGENCY };

export const CLIENT = {
  name: 'Чистые помещения Алюмика',
  id: 'porg-lvtwfid3',
  site: 'https://al-clean.ru/',
  period: 'Сентябрь 2026',
  weeklyStats: 'https://docs.google.com/spreadsheets/d/1Totb54rPLb2ZMhABI6I9JWsGM7rlzui9CL2CD9UQUVU/edit?gid=0#gid=0',
  paybackFunnel: 'https://docs.google.com/spreadsheets/d/1Totb54rPLb2ZMhABI6I9JWsGM7rlzui9CL2CD9UQUVU/edit?gid=798063211#gid=798063211',
};

export const aboutLinks = [
  { icon: 'CalendarRange', label: 'Понедельная статистика', desc: 'Расход, заявки и стоимость лида по неделям месяца.', href: CLIENT.weeklyStats, cta: 'Открыть таблицу' },
  { icon: 'TrendingUp', label: 'Воронка окупаемости', desc: 'Путь от лида до сделки и юнит-экономика проекта.', href: CLIENT.paybackFunnel, cta: 'Открыть таблицу' },
  { icon: 'Globe', label: 'Сайт', desc: 'Посадочная страница, на которую ведёт реклама.', href: CLIENT.site, cta: 'al-clean.ru' },
];

// ── Блок: план / факт за сентябрь 2026 ──
export const planFact = [
  { param: 'Рекламный бюджет, руб.', planNum: 80000, factNum: 89562, planLabel: '80 000 ₽', factLabel: '89 562 ₽', isCost: false },
  { param: 'Заявки, ед.', planNum: 40, factNum: 38, planLabel: '40', factLabel: '38', isCost: false },
  { param: 'Стоимость заявки (с НДС), руб.', planNum: 2000, factNum: 2357, planLabel: '2 000 ₽', factLabel: '2 357 ₽', isCost: true },
  { param: '% чистых заявок от общего числа', planNum: 60, factNum: 78.95, planLabel: '60%', factLabel: '78,95%', isCost: false },
  { param: 'Чистые заявки, ед.', planNum: 24, factNum: 30, planLabel: '24', factLabel: '30', isCost: false },
  { param: 'Стоимость чистой заявки (с НДС), руб.', planNum: 3333, factNum: 2985, planLabel: '3 333 ₽', factLabel: '2 985 ₽', isCost: true },
];

export const planFactNotes = [
  '* Период: 01.09.2026 – 30.09.2026',
  '* Необработанных заявок за сентябрь — 8',
];

// ── Блок: факт август vs факт сентябрь ──
export const monthCompare = [
  { param: 'Рекламный бюджет, руб.', mayNum: 91200, junNum: 89562, mayLabel: '91 200 ₽', junLabel: '89 562 ₽', isCost: false },
  { param: 'Заявки, ед.', mayNum: 46, junNum: 38, mayLabel: '46', junLabel: '38', isCost: false },
  { param: 'Стоимость заявки (с НДС), руб.', mayNum: 1983, junNum: 2357, mayLabel: '1 983 ₽', junLabel: '2 357 ₽', isCost: true },
  { param: '% чистых заявок от общего числа', mayNum: 45.65, junNum: 78.95, mayLabel: '45,65%', junLabel: '78,95%', isCost: false },
  { param: 'Чистые заявки, ед.', mayNum: 21, junNum: 30, mayLabel: '21', junLabel: '30', isCost: false },
  { param: 'Стоимость чистой заявки (с НДС), руб.', mayNum: 4343, junNum: 2985, mayLabel: '4 343 ₽', junLabel: '2 985 ₽', isCost: true },
];

// ── Блок: помесячная динамика — работы ведутся с апреля 2026 ──
export const monthlyTrend = [
  { m: 'Апр', cost: 21010, leads: 3, cpl: 7003, clean: 1, ccpl: 21010, cleanPct: 33.33 },
  { m: 'Май', cost: 204525, leads: 54, cpl: 3788, clean: 27, ccpl: 7575, cleanPct: null },
  { m: 'Июн', cost: 183590, leads: 53, cpl: 3464, clean: 45, ccpl: 4080, cleanPct: 84.91 },
  { m: 'Июл', cost: 148041, leads: 60, cpl: 2467, clean: 33, ccpl: 4486, cleanPct: 55.00 },
  { m: 'Авг', cost: 91200, leads: 46, cpl: 1983, clean: 21, ccpl: 4343, cleanPct: 45.65 },
  { m: 'Сен', cost: 89562, leads: 38, cpl: 2357, clean: 30, ccpl: 2985, cleanPct: 78.95 },
  { m: 'Окт', cost: null, leads: null, cpl: null, clean: null, ccpl: null, cleanPct: null },
  { m: 'Ноя', cost: null, leads: null, cpl: null, clean: null, ccpl: null, cleanPct: null },
];

// ── Спрос по Wordstat: помесячно, 2024 / 2025 / 2026 на одном графике ──
export const demand = [
  { m: 'Янв', y24: 4680, y25: 5633, y26: 4661 },
  { m: 'Фев', y24: 5267, y25: 7454, y26: 5630 },
  { m: 'Мар', y24: 5494, y25: 7215, y26: 6630 },
  { m: 'Апр', y24: 6205, y25: 6901, y26: 6914 },
  { m: 'Май', y24: 5516, y25: 5539, y26: 5719 },
  { m: 'Июн', y24: 4849, y25: 6294, y26: 6917 },
  { m: 'Июл', y24: 5076, y25: 6447, y26: 6511 },
  { m: 'Авг', y24: 4604, y25: 5768, y26: 5746 },
  { m: 'Сен', y24: 5128, y25: 6712, y26: 6061 },
  { m: 'Окт', y24: 6499, y25: 8098, y26: null },
  { m: 'Ноя', y24: 6979, y25: 7112, y26: null },
  { m: 'Дек', y24: 7305, y25: 6507, y26: null },
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
  'Чистка поисковых запросов по Материалам (снижение % отказа)',
  'Контроль расходов, ставок, корректное распределение бюджета',
  'Перезапуск Поисковой РК по Материалам на Мини-лендинг',
  'Запуск Товарной РК по материалам и услугам',
];

// ── План на новый месяц (октябрь 2026) ──
export const nextPlan = [
  { param: 'Рекламный бюджет, руб.', plan: '80 000 ₽' },
  { param: 'Заявки, ед.', plan: '47' },
  { param: 'Стоимость заявки (с НДС), руб.', plan: '1 700 ₽' },
  { param: '% чистых заявок от общего числа', plan: '65%' },
  { param: 'Чистые заявки, ед.', plan: '25' },
  { param: 'Стоимость чистой заявки (с НДС), руб.', plan: '3 200 ₽' },
];
