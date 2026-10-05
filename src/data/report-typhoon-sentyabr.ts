// ── Данные отчёта клиента Тайфун за Сентябрь 2026 ──
import { NEON, AGENCY } from '@/data/report';

export { NEON, AGENCY };

export const CLIENT = {
  name: 'Тайфун',
  id: 'e-17404401, e-17483896',
  site1: 'https://taifun.tech/',
  site2: 'https://вездеход-тайфун.рф/',
  site3: 'https://taifun-vezdehod.com/',
  period: 'Сентябрь 2026',
  weeklyStats: 'https://docs.google.com/spreadsheets/d/1kqfQXoZWcl4G29RqW3-c67R8jgHARCrHZ0-SFoxB-p4/edit?usp=sharing',
  paybackFunnel: 'https://docs.google.com/spreadsheets/d/1kqfQXoZWcl4G29RqW3-c67R8jgHARCrHZ0-SFoxB-p4/edit?usp=sharing',
};

export const aboutLinks = [
  { icon: 'CalendarRange', label: 'Понедельная статистика', desc: 'Расход, заявки и стоимость лида по неделям месяца.', href: CLIENT.weeklyStats, cta: 'Открыть таблицу' },
  { icon: 'TrendingUp', label: 'Воронка окупаемости', desc: 'Путь от лида до сделки и юнит-экономика проекта.', href: CLIENT.paybackFunnel, cta: 'Открыть таблицу' },
  {
    icon: 'Globe',
    label: 'Сайты',
    desc: 'Посадочные страницы, на которые ведёт реклама.',
    links: [
      { href: CLIENT.site1, cta: 'taifun.tech' },
      { href: CLIENT.site2, cta: 'вездеход-тайфун.рф' },
      { href: CLIENT.site3, cta: 'taifun-vezdehod.com' },
    ],
  },
];

// ── Блок: план / факт за август 2026 ──
export const planFact = [
  { param: 'Рекламный бюджет, руб.', planNum: 500000, factNum: 399887, planLabel: '500 000 ₽', factLabel: '399 887 ₽', isCost: false },
  { param: 'Заявки, ед.', planNum: 80, factNum: 104, planLabel: '80', factLabel: '104', isCost: false },
  { param: 'Стоимость заявки (с НДС), руб.', planNum: 6269, factNum: 3845, planLabel: '6 269 ₽', factLabel: '3 845 ₽', isCost: true },
  { param: '% чистых заявок', planNum: 48.24, factNum: 56.73, planLabel: '48,24%', factLabel: '56,73%', isCost: false },
  { param: 'Чистые заявки, ед.', planNum: 38, factNum: 59, planLabel: '38', factLabel: '59', isCost: false },
  { param: 'Стоимость чистой заявки (с НДС), руб.', planNum: 12995, factNum: 6778, planLabel: '12 995 ₽', factLabel: '6 778 ₽', isCost: true },
  { param: 'Конверсия из заявки в квал. заявку', planNum: 51.98, factNum: 32.2, planLabel: '51,98%', factLabel: '32,20%', isCost: false },
  { param: 'Квал. заявки, ед.', planNum: 20, factNum: 19, planLabel: '20', factLabel: '19', isCost: false },
  { param: 'Стоимость квал. заявки (с НДС), руб.', planNum: 25000, factNum: 21047, planLabel: '25 000 ₽', factLabel: '21 047 ₽', isCost: true },
];

export const planFactNotes = [
  '* Инвестиции / Период: 01.09.2026 – 30.09.2026',
];

// ── Блок: факт июль vs факт август ──
export const monthCompare = [
  { param: 'Рекламный бюджет, руб.', mayNum: 344540, junNum: 399887, mayLabel: '344 540 ₽', junLabel: '399 887 ₽', isCost: false },
  { param: 'Заявки, ед.', mayNum: 48, junNum: 104, mayLabel: '48', junLabel: '104', isCost: false },
  { param: 'Стоимость заявки (с НДС), руб.', mayNum: 7178, junNum: 3845, mayLabel: '7 178 ₽', junLabel: '3 845 ₽', isCost: true },
  { param: '% чистых заявок', mayNum: 56.25, junNum: 56.73, mayLabel: '56,25%', junLabel: '56,73%', isCost: false },
  { param: 'Чистые заявки, ед.', mayNum: 27, junNum: 59, mayLabel: '27', junLabel: '59', isCost: false },
  { param: 'Стоимость чистой заявки (с НДС), руб.', mayNum: 12761, junNum: 6778, mayLabel: '12 761 ₽', junLabel: '6 778 ₽', isCost: true },
  { param: 'Конверсия из заявки в квал. заявку', mayNum: 55.56, junNum: 32.2, mayLabel: '55,56%', junLabel: '32,20%', isCost: false },
  { param: 'Квал. заявки, ед.', mayNum: 15, junNum: 19, mayLabel: '15', junLabel: '19', isCost: false },
  { param: 'Стоимость квал. заявки (с НДС), руб.', mayNum: 22969, junNum: 21047, mayLabel: '22 969 ₽', junLabel: '21 047 ₽', isCost: true },
];

// ── Блок: помесячная динамика — проект в работе с апреля 2026 ──
export const monthlyTrend = [
  { m: 'Апр', cost: 442006, leads: 96, costLead: 4604, cleanPct: 38.54, clean: 37, costClean: 11946, qualConvPct: 51.35, qual: 19, costQual: 23263 },
  { m: 'Май', cost: 493885, leads: 104, costLead: 4749, cleanPct: 17.31, clean: 18, costClean: 27438, qualConvPct: 72.22, qual: 13, costQual: 37991 },
  { m: 'Июн', cost: 367748, leads: 66, costLead: 5572, cleanPct: 28.79, clean: 19, costClean: 19355, qualConvPct: 42.11, qual: 8, costQual: 45968 },
  { m: 'Июл', cost: 482554, leads: 58, costLead: 8320, cleanPct: 50.00, clean: 29, costClean: 16640, qualConvPct: 48.28, qual: 14, costQual: 34468.11 },
  { m: 'Авг', cost: 344540, leads: 48, costLead: 7178, cleanPct: 56.25, clean: 27, costClean: 12761, qualConvPct: 55.56, qual: 15, costQual: 22969 },
  { m: 'Сен', cost: 399887, leads: 104, costLead: 3845, cleanPct: 56.73, clean: 59, costClean: 6778, qualConvPct: 32.20, qual: 19, costQual: 21047 },
  { m: 'Окт', cost: null, leads: null, costLead: null, cleanPct: null, clean: null, costClean: null, qualConvPct: null, qual: null, costQual: null },
];

// ── Спрос по Wordstat: помесячно, январь 2025 — сентябрь 2026 (единый непрерывный ряд) ──
export const demand = [
  { m: 'Янв 25', v: 300 },
  { m: 'Фев 25', v: 282 },
  { m: 'Мар 25', v: 255 },
  { m: 'Апр 25', v: 145 },
  { m: 'Май 25', v: 133 },
  { m: 'Июн 25', v: 138 },
  { m: 'Июл 25', v: 145 },
  { m: 'Авг 25', v: 161 },
  { m: 'Сен 25', v: 267 },
  { m: 'Окт 25', v: 241 },
  { m: 'Ноя 25', v: 236 },
  { m: 'Дек 25', v: 236 },
  { m: 'Янв 26', v: 279 },
  { m: 'Фев 26', v: 237 },
  { m: 'Мар 26', v: 265 },
  { m: 'Апр 26', v: 202 },
  { m: 'Май 26', v: 139 },
  { m: 'Июн 26', v: 183 },
  { m: 'Июл 26', v: 161 },
  { m: 'Авг 26', v: 240 },
  { m: 'Сен 26', v: 271 },
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
  'Запуск А/Б теста с новой посадочной страницей на квиз',
];

export const workPlan = [
  'Ежедневный мониторинг показателей рекламных кампаний и анализ качества трафика',
  'Оптимизация и перераспределение рекламного бюджета в пользу наиболее эффективных кампаний',
  'Работа над увеличением объёма целевых заявок',
  'Исключение неэффективных ключевых запросов и дальнейшая очистка трафика',
  'Оптимизация рекламных кампаний для снижения стоимости заявки при сохранении качества лидов',
  'Увеличение бюджета согласно спросу',
];

// ── План на новый месяц (октябрь 2026) по направлениям ──
export const nextPlanMain = [
  { param: 'Рекламный бюджет, руб.', plan: '350 000 ₽' },
  { param: 'Заявки, ед.', plan: '88' },
  { param: 'Стоимость заявки (с НДС), руб.', plan: '4 000 ₽' },
  { param: '% чистых заявок', plan: '52,00%' },
  { param: 'Чистые заявки, ед.', plan: '46' },
  { param: 'Стоимость чистой заявки (с НДС), руб.', plan: '7 692 ₽' },
  { param: 'Конверсия из заявки в квал. заявку', plan: '40,00%' },
  { param: 'Квал. заявки, ед.', plan: '18' },
  { param: 'Стоимость квал. заявки (с НДС), руб.', plan: '19 444 ₽' },
];

export const nextPlanQuiz = [
  { param: 'Рекламный бюджет, руб.', plan: '150 000 ₽' },
  { param: 'Заявки, ед.', plan: '21' },
  { param: 'Стоимость заявки (с НДС), руб.', plan: '7 000 ₽' },
  { param: '% чистых заявок', plan: '52,00%' },
  { param: 'Чистые заявки, ед.', plan: '11' },
  { param: 'Стоимость чистой заявки (с НДС), руб.', plan: '13 462 ₽' },
  { param: 'Конверсия из чистой в квал. заявку', plan: '50,00%' },
  { param: 'Квал. заявки, ед.', plan: '6' },
  { param: 'Стоимость квал. заявки (с НДС), руб.', plan: '25 000 ₽' },
];
