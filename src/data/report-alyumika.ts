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
  { param: 'Бюджет, с НДС', planNum: 80000, factNum: 71845, planLabel: '80 000 ₽', factLabel: '71 845 ₽', isCost: false },
  { param: 'Уникальные лиды, ед.', planNum: 44, factNum: 37, planLabel: '44', factLabel: '37', isCost: false },
  { param: 'Стоимость заявки, с НДС', planNum: 1800, factNum: 1942, planLabel: '1 800 ₽', factLabel: '1 942 ₽', isCost: true },
  { param: '% чистых заявок от общего числа', planNum: 68, factNum: 56.76, planLabel: '68%', factLabel: '56,76%', isCost: false },
  { param: 'Чистые уник. лиды, ед.', planNum: 30, factNum: 21, planLabel: '30', factLabel: '21', isCost: false },
  { param: 'Стоимость чистой заявки, с НДС', planNum: 2674, factNum: 3421, planLabel: '2 674 ₽', factLabel: '3 421 ₽', isCost: true },
];

export const planFactNotes = [
  '* Период: 01.08.2026 – 31.08.2026',
  '* Необработанных заявок за август — 15',
];

// ── Блок: факт июль vs факт август ──
export const monthCompare = [
  { param: 'Рекламный бюджет, руб.', mayNum: 148041, junNum: 71845, mayLabel: '148 041 ₽', junLabel: '71 845 ₽', isCost: false },
  { param: 'Заявки, ед.', mayNum: 60, junNum: 37, mayLabel: '60', junLabel: '37', isCost: false },
  { param: 'Стоимость заявки (с НДС), руб.', mayNum: 2467, junNum: 1942, mayLabel: '2 467 ₽', junLabel: '1 942 ₽', isCost: true },
  { param: '% чистых заявок от общего числа', mayNum: 55.00, junNum: 56.76, mayLabel: '55,00%', junLabel: '56,76%', isCost: false },
  { param: 'Чистые заявки, ед.', mayNum: 33, junNum: 21, mayLabel: '33', junLabel: '21', isCost: false },
  { param: 'Стоимость чистой заявки (с НДС), руб.', mayNum: 4486, junNum: 3421, mayLabel: '4 486 ₽', junLabel: '3 421 ₽', isCost: true },
];

// ── Блок: помесячная динамика — работы ведутся с апреля 2026 ──
export const monthlyTrend = [
  { m: 'Апр', cost: 21010, leads: 3, cpl: 7003, clean: 1, ccpl: 21010, cleanPct: 33.33 },
  { m: 'Май', cost: 204525, leads: 54, cpl: 3788, clean: 27, ccpl: 7575, cleanPct: null },
  { m: 'Июн', cost: 183590, leads: 53, cpl: 3464, clean: 45, ccpl: 4080, cleanPct: 84.91 },
  { m: 'Июл', cost: 148041, leads: 60, cpl: 2467, clean: 33, ccpl: 4486, cleanPct: 55.00 },
  { m: 'Авг', cost: 71845, leads: 37, cpl: 1942, clean: 21, ccpl: 3421, cleanPct: 56.76 },
];

// ── Спрос по Wordstat: помесячно с января 2024 по июль 2026 ──
export const demand = [
  { m: 'янв 24', v: 4680 }, { m: 'фев 24', v: 5267 }, { m: 'мар 24', v: 5494 }, { m: 'апр 24', v: 6205 },
  { m: 'май 24', v: 5516 }, { m: 'июн 24', v: 4849 }, { m: 'июл 24', v: 5076 }, { m: 'авг 24', v: 4604 },
  { m: 'сен 24', v: 5128 }, { m: 'окт 24', v: 6499 }, { m: 'ноя 24', v: 6979 }, { m: 'дек 24', v: 7305 },
  { m: 'янв 25', v: 5633 }, { m: 'фев 25', v: 7454 }, { m: 'мар 25', v: 7215 }, { m: 'апр 25', v: 6901 },
  { m: 'май 25', v: 5539 }, { m: 'июн 25', v: 6294 }, { m: 'июл 25', v: 6447 }, { m: 'авг 25', v: 5768 },
  { m: 'сен 25', v: 6712 }, { m: 'окт 25', v: 8098 }, { m: 'ноя 25', v: 7112 }, { m: 'дек 25', v: 6507 },
  { m: 'янв 26', v: 4661 }, { m: 'фев 26', v: 5630 }, { m: 'мар 26', v: 6630 }, { m: 'апр 26', v: 6914 },
  { m: 'май 26', v: 5719 }, { m: 'июн 26', v: 6917 }, { m: 'июл 26', v: 6511 },
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
