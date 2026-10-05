// ── Данные отчёта клиента Химсервис ──
import { NEON, AGENCY } from '@/data/report';

export { NEON, AGENCY };

export const CLIENT = {
  name: 'Химсервис',
  id: 'e-20078858',
  site: 'https://himservise.ru/',
  period: 'Сентябрь 2026',
  weeklyStats: 'https://docs.google.com/spreadsheets/d/1eeiIiNMeyxe6XB-O3DRwpjCqodwiQODFuIRhTppRKNA/edit?usp=sharing',
  paybackFunnel: 'https://docs.google.com/spreadsheets/d/1eeiIiNMeyxe6XB-O3DRwpjCqodwiQODFuIRhTppRKNA/edit?gid=798063211#gid=798063211',
};

export const aboutLinks = [
  { icon: 'CalendarRange', label: 'Понедельная статистика', desc: 'Расход, заявки и стоимость лида по неделям месяца.', href: CLIENT.weeklyStats, cta: 'Открыть таблицу' },
  { icon: 'TrendingUp', label: 'Воронка окупаемости', desc: 'Путь от лида до сделки и юнит-экономика проекта.', href: CLIENT.paybackFunnel, cta: 'Открыть таблицу' },
  { icon: 'Globe', label: 'Сайт', desc: 'Посадочная страница, на которую ведёт реклама.', href: CLIENT.site, cta: 'himservise.ru' },
];

// ── Блок: план / факт за сентябрь 2026 ──
export const planFact = [
  { param: 'Рекламный бюджет, руб.', planNum: 145500, factNum: 127596, planLabel: '145 500 ₽', factLabel: '127 596 ₽', isCost: false },
  { param: 'Уникальные лиды, ед.', planNum: 41, factNum: 59, planLabel: '41', factLabel: '59', isCost: false },
  { param: 'Стоимость уникального лида, с НДС', planNum: 3500, factNum: 2163, planLabel: '3 500 ₽', factLabel: '2 163 ₽', isCost: true },
  { param: '% чистых заявок от общего числа', planNum: 65, factNum: 57.63, planLabel: '65%', factLabel: '57,63%', isCost: false },
  { param: 'Чистые уник. лиды, ед.', planNum: 27, factNum: 34, planLabel: '27', factLabel: '34', isCost: false },
  { param: 'Стоимость чистого лида, с НДС', planNum: 5460, factNum: 3753, planLabel: '5 460 ₽', factLabel: '3 753 ₽', isCost: true },
  { param: 'Квалифицированные лиды, ед.', planNum: 17, factNum: 29, planLabel: '17', factLabel: '29', isCost: false },
  { param: 'Стоимость квалифицированных лидов, с НДС', planNum: 8559, factNum: 4400, planLabel: '8 559 ₽', factLabel: '4 400 ₽', isCost: true },
];

export const planFactNotes = [
  '* Инвестиции / Период: 01.09.2026 – 30.09.2026',
];

// ── Блок: факт июль vs факт август ──
export const monthCompare = [
  { param: 'Рекламный бюджет, руб.', mayNum: 157163, junNum: 127596, mayLabel: '157 163 ₽', junLabel: '127 596 ₽', isCost: false },
  { param: 'Заявки, ед.', mayNum: 49, junNum: 59, mayLabel: '49', junLabel: '59', isCost: false },
  { param: 'Стоимость уникального лида, с НДС', mayNum: 3207, junNum: 2163, mayLabel: '3 207 ₽', junLabel: '2 163 ₽', isCost: true },
  { param: '% чистых заявок от общего числа', mayNum: 63.27, junNum: 57.63, mayLabel: '63,27%', junLabel: '57,63%', isCost: false },
  { param: 'Чистые заявки, ед.', mayNum: 31, junNum: 34, mayLabel: '31', junLabel: '34', isCost: false },
  { param: 'Стоимость чистого лида, с НДС', mayNum: 5070, junNum: 3753, mayLabel: '5 070 ₽', junLabel: '3 753 ₽', isCost: true },
  { param: 'Квалифицированные лиды, ед.', mayNum: 20, junNum: 29, mayLabel: '20', junLabel: '29', isCost: false },
  { param: 'Стоимость квалифицированных лидов, с НДС', mayNum: 7858, junNum: 4400, mayLabel: '7 858 ₽', junLabel: '4 400 ₽', isCost: true },
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
  { m: 'Сен', cost: 127596, leads: 59, cpl: 2163, clean: 34, ccpl: 3753, cleanPct: 57.63, qual: 29, qcpl: 4400 },
  { m: 'Окт', cost: null, leads: null, cpl: null, clean: null, ccpl: null, cleanPct: null, qual: null, qcpl: null },
];

// ── Работы ──
export const workDone = [
  'Отслеживание показателей рекламы',
  'Оптимизация рекламного бюджета под задачи за счёт:',
  'Работы с корректировками пола/возраста и устройств',
  'Тестирование элементов рекламы',
  'Исключение неэффективных ключевых запросов',
  'Перераспределение бюджета с неэффективных ключевых запросов на конверсионные',
  'Запуск нового товарного фида',
  'Сокращение товарных позиций до выделенных при работе с автоматической выгрузкой товаров с сайта',
];

export const workPlan = [
  'Ежедневный мониторинг показателей рекламных кампаний и анализ качества трафика',
  'Оптимизация и перераспределение рекламного бюджета в пользу наиболее эффективных кампаний',
  'Работа над увеличением объёма целевых заявок',
  'Исключение неэффективных ключевых запросов и дальнейшая очистка трафика',
  'Оптимизация рекламных кампаний для снижения стоимости заявки при сохранении качества лидов',
];

// ── План на новый месяц (октябрь 2026) ──
export const nextPlan = [
  { param: 'Инвестиции / Период', plan: '01.10.2026' },
  { param: 'Рекламный бюджет, руб.', plan: '145 500 ₽' },
  { param: 'Уникальные лиды, ед.', plan: '49' },
  { param: 'Стоимость уникального лида, с НДС', plan: '3 000 ₽' },
  { param: '% чистых заявок от общего числа', plan: '60%' },
  { param: 'Чистые уник. лиды, ед.', plan: '29' },
  { param: 'Стоимость чистого лида, с НДС', plan: '5 000 ₽' },
  { param: 'Квалифицированные лиды, ед.', plan: '20' },
  { param: 'Стоимость квалифицированных лидов, с НДС', plan: '7 275 ₽' },
];
