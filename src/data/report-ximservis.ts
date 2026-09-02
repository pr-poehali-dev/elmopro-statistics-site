// ── Данные отчёта клиента Химсервис ──
import { NEON, AGENCY } from '@/data/report';

export { NEON, AGENCY };

export const CLIENT = {
  name: 'Химсервис',
  id: 'e-20078858',
  site: 'https://himservise.ru/',
  period: 'Август 2026',
  weeklyStats: 'https://docs.google.com/spreadsheets/d/1eeiIiNMeyxe6XB-O3DRwpjCqodwiQODFuIRhTppRKNA/edit?usp=sharing',
  paybackFunnel: 'https://docs.google.com/spreadsheets/d/1eeiIiNMeyxe6XB-O3DRwpjCqodwiQODFuIRhTppRKNA/edit?usp=sharing',
};

export const aboutLinks = [
  { icon: 'CalendarRange', label: 'Понедельная статистика', desc: 'Расход, заявки и стоимость лида по неделям месяца.', href: CLIENT.weeklyStats, cta: 'Открыть таблицу' },
  { icon: 'TrendingUp', label: 'Воронка окупаемости', desc: 'Путь от лида до сделки и юнит-экономика проекта.', href: CLIENT.paybackFunnel, cta: 'Открыть таблицу' },
  { icon: 'Globe', label: 'Сайт', desc: 'Посадочная страница, на которую ведёт реклама.', href: CLIENT.site, cta: 'himservise.ru' },
];

// ── Блок: план / факт за август 2026 ──
export const planFact = [
  { param: 'Бюджет, с НДС', planNum: 145500, factNum: 157163, planLabel: '145 500 ₽', factLabel: '157 163 ₽', isCost: false },
  { param: 'Уникальные лиды, ед.', planNum: 66, factNum: 49, planLabel: '66', factLabel: '49', isCost: false },
  { param: 'Стоимость заявки, с НДС', planNum: 2200, factNum: 3207, planLabel: '2 200 ₽', factLabel: '3 207 ₽', isCost: true },
  { param: '% чистых заявок от общего числа', planNum: 80, factNum: 63.27, planLabel: '80%', factLabel: '63,27%', isCost: false },
  { param: 'Чистые уник. лиды, ед.', planNum: 53, factNum: 31, planLabel: '53', factLabel: '31', isCost: false },
  { param: 'Стоимость чистой заявки, с НДС', planNum: 2756, factNum: 5070, planLabel: '2 756 ₽', factLabel: '5 070 ₽', isCost: true },
  { param: 'Квалифицированные лиды, ед.', planNum: 32, factNum: 20, planLabel: '32', factLabel: '20', isCost: false },
  { param: 'Стоимость квал. заявки, с НДС', planNum: 4279, factNum: 7858, planLabel: '4 279 ₽', factLabel: '7 858 ₽', isCost: true },
];

export const planFactNotes = [
  '* Период: 01.08.2026 – 31.08.2026',
  '* Необработанных заявок за август — 0',
];

// ── Блок: факт июль vs факт август ──
export const monthCompare = [
  { param: 'Рекламный бюджет, руб.', mayNum: 152408, junNum: 157163, mayLabel: '152 408 ₽', junLabel: '157 163 ₽', isCost: false },
  { param: 'Заявки, ед.', mayNum: 68, junNum: 49, mayLabel: '68', junLabel: '49', isCost: false },
  { param: 'Стоимость заявки (с НДС), руб.', mayNum: 2241, junNum: 3207, mayLabel: '2 241 ₽', junLabel: '3 207 ₽', isCost: true },
  { param: '% чистых заявок от общего числа', mayNum: 76.47, junNum: 63.27, mayLabel: '76,47%', junLabel: '63,27%', isCost: false },
  { param: 'Чистые заявки, ед.', mayNum: 52, junNum: 31, mayLabel: '52', junLabel: '31', isCost: false },
  { param: 'Стоимость чистой заявки (с НДС), руб.', mayNum: 2931, junNum: 3421, mayLabel: '2 931 ₽', junLabel: '3 421 ₽', isCost: true },
  { param: 'Квалифицированные лиды, ед.', mayNum: 30, junNum: 20, mayLabel: '30', junLabel: '20', isCost: false },
  { param: 'Стоимость квал. заявки (с НДС), руб.', mayNum: 5080, junNum: 7858, mayLabel: '5 080 ₽', junLabel: '7 858 ₽', isCost: true },
];

// ── Блок: помесячная динамика — работы ведутся с января 2026 ──
export const monthlyTrend = [
  { m: 'Янв', cost: 25780, leads: 3, cpl: 8593, clean: 2, ccpl: 12890, cleanPct: 66.67, qual: 1, qcpl: 25780 },
  { m: 'Фев', cost: 119298, leads: 52, cpl: 2294, clean: 35, ccpl: 3409, cleanPct: 67.31, qual: 24, qcpl: 4971 },
  { m: 'Мар', cost: 183094, leads: 103, cpl: 1778, clean: 64, ccpl: 2861, cleanPct: 62.14, qual: 39, qcpl: 4695 },
  { m: 'Апр', cost: 126979, leads: 51, cpl: 2490, clean: 36, ccpl: 3527, cleanPct: 70.59, qual: 30, qcpl: 4233 },
  { m: 'Май', cost: 152067, leads: 78, cpl: 1950, clean: 63, ccpl: 2414, cleanPct: 80.77, qual: 44, qcpl: 3456 },
  { m: 'Июн', cost: 166618, leads: 64, cpl: 2603, clean: 54, ccpl: 3086, cleanPct: 84.38, qual: 37, qcpl: 4503 },
  { m: 'Июл', cost: 152408, leads: 68, cpl: 2241, clean: 52, ccpl: 2931, cleanPct: 76.47, qual: 30, qcpl: 5080 },
  { m: 'Авг', cost: 157163, leads: 49, cpl: 3207, clean: 31, ccpl: 5070, cleanPct: 63.27, qual: 20, qcpl: 7858 },
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
];

// ── План на новый месяц (сентябрь 2026) ──
export const nextPlan = [
  { param: 'Бюджет, с НДС', plan: '145 500' },
  { param: 'Заявки, ед.', plan: '41' },
  { param: 'Стоимость заявки, с НДС', plan: '3 500' },
  { param: '% чистых заявок от общего числа', plan: '65%' },
  { param: 'Чистые заявки, ед.', plan: '247' },
  { param: 'Стоимость чистой заявки, с НДС', plan: '5 460' },
  { param: 'Квалифицированные лиды, ед.', plan: '17' },
  { param: 'Стоимость квал. заявки, с НДС', plan: '8 559' },
];
