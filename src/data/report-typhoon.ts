// ── Данные отчёта клиента Тайфун за Август 2026 ──
import { NEON, AGENCY } from '@/data/report';

export { NEON, AGENCY };

export const CLIENT = {
  name: 'Тайфун',
  id: 'e-17404401, e-17483896',
  site1: 'https://taifun.tech/',
  site2: 'https://вездеход-тайфун.рф/',
  period: 'Август 2026',
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
    ],
  },
];

// ── Блок: план / факт за август 2026 ──
export const planFact = [
  { param: 'Рекламный бюджет, руб.', planNum: 500000, factNum: 344540, planLabel: '500 000 ₽', factLabel: '344 540 ₽', isCost: false },
  { param: 'Заявки, ед.', planNum: 81, factNum: 48, planLabel: '81', factLabel: '48', isCost: false },
  { param: 'Стоимость заявки (с НДС), руб.', planNum: 6176, factNum: 7178, planLabel: '6 176 ₽', factLabel: '7 178 ₽', isCost: true },
  { param: '% чистых заявок', planNum: 39.12, factNum: 52.08, planLabel: '39,12%', factLabel: '52,08%', isCost: false },
  { param: 'Чистые заявки, ед.', planNum: 32, factNum: 25, planLabel: '32', factLabel: '25', isCost: false },
  { param: 'Стоимость чистой заявки (с НДС), руб.', planNum: 15789, factNum: 13782, planLabel: '15 789 ₽', factLabel: '13 782 ₽', isCost: true },
  { param: 'Конверсия из заявки в квал. заявку', planNum: 34.74, factNum: 56.00, planLabel: '34,74%', factLabel: '56,00%', isCost: false },
  { param: 'Квал. заявки, ед.', planNum: 11, factNum: 14, planLabel: '11', factLabel: '14', isCost: false },
  { param: 'Стоимость квал. заявки (с НДС), руб.', planNum: 45455, factNum: 24610, planLabel: '45 455 ₽', factLabel: '24 610 ₽', isCost: true },
];

export const planFactNotes = [
  '* Период: 01.08.2026 – 31.08.2026',
];

// ── Блок: факт июль vs факт август ──
export const monthCompare = [
  { param: 'Рекламный бюджет, руб.', mayNum: 482554, junNum: 344540, mayLabel: '482 554 ₽', junLabel: '344 540 ₽', isCost: false },
  { param: 'Заявки, ед.', mayNum: 58, junNum: 48, mayLabel: '58', junLabel: '48', isCost: false },
  { param: 'Стоимость заявки (с НДС), руб.', mayNum: 8320, junNum: 7178, mayLabel: '8 320 ₽', junLabel: '7 178 ₽', isCost: true },
  { param: '% чистых заявок', mayNum: 50.00, junNum: 52.08, mayLabel: '50,00%', junLabel: '52,08%', isCost: false },
  { param: 'Чистые заявки, ед.', mayNum: 29, junNum: 25, mayLabel: '29', junLabel: '25', isCost: false },
  { param: 'Стоимость чистой заявки (с НДС), руб.', mayNum: 16640, junNum: 13782, mayLabel: '16 640 ₽', junLabel: '13 782 ₽', isCost: true },
  { param: 'Конверсия из заявки в квал. заявку', mayNum: 48.28, junNum: 56.00, mayLabel: '48,28%', junLabel: '56,00%', isCost: false },
  { param: 'Квал. заявки, ед.', mayNum: 14, junNum: 14, mayLabel: '14', junLabel: '14', isCost: false },
  { param: 'Стоимость квал. заявки (с НДС), руб.', mayNum: 34468.11, junNum: 24610, mayLabel: '34 468,11 ₽', junLabel: '24 610 ₽', isCost: true },
];

// ── Блок: помесячная динамика — проект в работе с апреля 2026 ──
export const monthlyTrend = [
  { m: 'Апр', cost: 442006, leads: 96, costLead: 4604, cleanPct: 38.54, clean: 37, costClean: 11946, qualConvPct: 51.35, qual: 19, costQual: 23263 },
  { m: 'Май', cost: 493885, leads: 104, costLead: 4749, cleanPct: 17.31, clean: 18, costClean: 27438, qualConvPct: 72.22, qual: 13, costQual: 37991 },
  { m: 'Июн', cost: 367748, leads: 66, costLead: 5572, cleanPct: 28.79, clean: 19, costClean: 19355, qualConvPct: 42.11, qual: 8, costQual: 45968 },
  { m: 'Июл', cost: 482554, leads: 58, costLead: 8320, cleanPct: 50.00, clean: 29, costClean: 16640, qualConvPct: 48.28, qual: 14, costQual: 34468.11 },
  { m: 'Авг', cost: 344540, leads: 48, costLead: 7178, cleanPct: 52.08, clean: 25, costClean: 13782, qualConvPct: 56.00, qual: 14, costQual: 24610 },
  { m: 'Сен', cost: null, leads: null, costLead: null, cleanPct: null, clean: null, costClean: null, qualConvPct: null, qual: null, costQual: null },
];

// ── Спрос по Wordstat: помесячно, январь 2025 — август 2026 (единый непрерывный ряд) ──
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
  { m: 'Июл 26', v: 162 },
  { m: 'Авг 26', v: 239 },
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
  'Работа над увеличением объёма целевых заявок',
  'Исключение неэффективных ключевых запросов и дальнейшая очистка трафика',
  'Оптимизация рекламных кампаний для снижения стоимости заявки при сохранении качества лидов',
  'Редизайн сайта (квиза)',
];

// ── План на новый месяц (сентябрь 2026) по направлениям ──
export const nextPlanMain = [
  { param: 'Рекламный бюджет, руб.', plan: '350 000 ₽' },
  { param: 'Заявки, ед.', plan: '58' },
  { param: 'Стоимость заявки (с НДС), руб.', plan: '6 000 ₽' },
  { param: '% чистых заявок', plan: '52,00%' },
  { param: 'Чистые заявки, ед.', plan: '30' },
  { param: 'Стоимость чистой заявки (с НДС), руб.', plan: '11 538 ₽' },
  { param: 'Конверсия из чистой в квал. заявку', plan: '48,00%' },
  { param: 'Квал. заявки, ед.', plan: '15' },
  { param: 'Стоимость квал. заявки (с НДС), руб.', plan: '23 333 ₽' },
];

export const nextPlanQuiz = [
  { param: 'Рекламный бюджет, руб.', plan: '150 000 ₽' },
  { param: 'Заявки, ед.', plan: '21' },
  { param: 'Стоимость заявки (с НДС), руб.', plan: '7 000 ₽' },
  { param: '% чистых заявок', plan: '38,00%' },
  { param: 'Чистые заявки, ед.', plan: '8' },
  { param: 'Стоимость чистой заявки (с НДС), руб.', plan: '18 421 ₽' },
  { param: 'Конверсия из чистой в квал. заявку', plan: '60,00%' },
  { param: 'Квал. заявки, ед.', plan: '5' },
  { param: 'Стоимость квал. заявки (с НДС), руб.', plan: '30 000 ₽' },
];