// ── Данные отчёта клиента Алюмика (Чистые помещения) ──
import { NEON, AGENCY } from '@/data/report';

export { NEON, AGENCY };

export const CLIENT = {
  name: 'Чистые помещения Алюмика',
  id: 'porg-lvtwfid3',
  site: 'https://al-clean.ru/',
  period: 'Август 2026',
  weeklyStats: 'https://docs.google.com/spreadsheets/d/1Totb54rPLb2ZMhABI6I9JWsGM7rlzui9CL2CD9UQUVU/edit?gid=0#gid=0',
  paybackFunnel: 'https://docs.google.com/spreadsheets/d/1Totb54rPLb2ZMhABI6I9JWsGM7rlzui9CL2CD9UQUVU/edit?gid=798063211#gid=798063211',
};

export const aboutLinks = [
  { icon: 'CalendarRange', label: 'Понедельная статистика', desc: 'Расход, заявки и стоимость лида по неделям месяца.', href: CLIENT.weeklyStats, cta: 'Открыть таблицу' },
  { icon: 'TrendingUp', label: 'Воронка окупаемости', desc: 'Путь от лида до сделки и юнит-экономика проекта.', href: CLIENT.paybackFunnel, cta: 'Открыть таблицу' },
  { icon: 'Globe', label: 'Сайт', desc: 'Посадочная страница, на которую ведёт реклама.', href: CLIENT.site, cta: 'al-clean.ru' },
];

// ── Блок: план / факт за август 2026 ──
export const planFact = [
  { param: 'Бюджет, с НДС', planNum: 80000, factNum: 91200, planLabel: '80 000 ₽', factLabel: '91 200 ₽', isCost: false },
  { param: 'Уникальные лиды, ед.', planNum: 44, factNum: 46, planLabel: '44', factLabel: '46', isCost: false },
  { param: 'Стоимость заявки, с НДС', planNum: 1800, factNum: 1983, planLabel: '1 800 ₽', factLabel: '1 983 ₽', isCost: true },
  { param: '% чистых заявок от общего числа', planNum: 68, factNum: 45.65, planLabel: '68%', factLabel: '45,65%', isCost: false },
  { param: 'Чистые уник. лиды, ед.', planNum: 30, factNum: 21, planLabel: '30', factLabel: '21', isCost: false },
  { param: 'Стоимость чистой заявки, с НДС', planNum: 2674, factNum: 4343, planLabel: '2 674 ₽', factLabel: '4 343 ₽', isCost: true },
];

export const planFactNotes = [
  '* Период: 01.08.2026 – 31.08.2026',
  '* Необработанных заявок за август — 21',
];

// ── Блок: факт июль vs факт август ──
export const monthCompare = [
  { param: 'Рекламный бюджет, руб.', mayNum: 148041, junNum: 91200, mayLabel: '148 041 ₽', junLabel: '91 200 ₽', isCost: false },
  { param: 'Заявки, ед.', mayNum: 60, junNum: 46, mayLabel: '60', junLabel: '46', isCost: false },
  { param: 'Стоимость заявки (с НДС), руб.', mayNum: 2467, junNum: 1983, mayLabel: '2 467 ₽', junLabel: '1 983 ₽', isCost: true },
  { param: '% чистых заявок от общего числа', mayNum: 55.00, junNum: 45.65, mayLabel: '55,00%', junLabel: '45,65%', isCost: false },
  { param: 'Чистые заявки, ед.', mayNum: 33, junNum: 21, mayLabel: '33', junLabel: '21', isCost: false },
  { param: 'Стоимость чистой заявки (с НДС), руб.', mayNum: 4486, junNum: 4343, mayLabel: '4 486 ₽', junLabel: '4 343 ₽', isCost: true },
];

// ── Блок: помесячная динамика — работы ведутся с апреля 2026 ──
export const monthlyTrend = [
  { m: 'Апр', cost: 21010, leads: 3, cpl: 7003, clean: 1, ccpl: 21010, cleanPct: 33.33 },
  { m: 'Май', cost: 204525, leads: 54, cpl: 3788, clean: 27, ccpl: 7575, cleanPct: null },
  { m: 'Июн', cost: 183590, leads: 53, cpl: 3464, clean: 45, ccpl: 4080, cleanPct: 84.91 },
  { m: 'Июл', cost: 148041, leads: 60, cpl: 2467, clean: 33, ccpl: 4486, cleanPct: 55.00 },
  { m: 'Авг', cost: 91200, leads: 46, cpl: 1983, clean: 21, ccpl: 4343, cleanPct: 45.65 },
  { m: 'Сен', cost: null, leads: null, cpl: null, clean: null, ccpl: null, cleanPct: null },
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
  { m: 'Авг', y24: 4604, y25: 5768, y26: null },
  { m: 'Сен', y24: 5128, y25: 6712, y26: null },
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
  'Корректировки по типу устройств, географии размещения, группам',
  'Контроль расходов, ставок, корректное распределение бюджета',
  'Выход в топ 1 поисковой выдачи на поиске по Услугам (120% объёма трафика)',
  'Перезапуск Поисковой РК по Материалам на Мини-лендинг',
  'Запуск Товарной РК по материалам и услугам',
];

// ── План на новый месяц (сентябрь 2026) ──
export const nextPlan = [
  { param: 'Бюджет, с НДС', plan: '80 000' },
  { param: 'Заявки, ед.', plan: '40' },
  { param: 'Стоимость заявки, с НДС', plan: '2 000' },
  { param: '% чистых заявок от общего числа', plan: '60%' },
  { param: 'Чистые заявки, ед.', plan: '24' },
  { param: 'Стоимость чистой заявки, с НДС', plan: '3 333' },
];