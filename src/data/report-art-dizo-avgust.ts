// ── Данные отчёта клиента Art-Dizo за август 2026 ──
import { NEON, AGENCY } from '@/data/report';

export { NEON, AGENCY };

export const CLIENT = {
  name: 'Art-Dizo',
  id: 'porg-nckmeu3n',
  site: 'https://art-dizo.ru',
  period: 'Август 2026',
  weeklyStats: 'https://docs.google.com/spreadsheets/d/1a8xktBFGY9LQ3JmvH2xFAFDej5prR-FpDy-fOOWfyIM/edit?usp=sharing',
  paybackFunnel: 'https://docs.google.com/spreadsheets/d/1a8xktBFGY9LQ3JmvH2xFAFDej5prR-FpDy-fOOWfyIM/edit?usp=sharing',
};

export const aboutLinks = [
  { icon: 'CalendarRange', label: 'Понедельная статистика', desc: 'Расход, заявки и стоимость лида по неделям месяца.', href: CLIENT.weeklyStats, cta: 'Открыть таблицу' },
  { icon: 'TrendingUp', label: 'Воронка окупаемости', desc: 'Путь от лида до сделки и юнит-экономика проекта.', href: CLIENT.paybackFunnel, cta: 'Открыть таблицу' },
  { icon: 'Globe', label: 'Сайт', desc: 'Посадочная страница, на которую ведёт реклама.', href: CLIENT.site, cta: 'art-dizo.ru' },
];

// ── Блок: план / факт за август 2026 ──
export const planFact = [
  { param: 'Рекламный бюджет, с НДС', planNum: 120000, factNum: 129249, planLabel: '120 000 ₽', factLabel: '129 249 ₽', isCost: false },
  { param: 'Уникальные лиды, ед.', planNum: 71, factNum: 117, planLabel: '71', factLabel: '117', isCost: false },
  { param: 'Стоимость заявки, с НДС', planNum: 1700, factNum: 1105, planLabel: '1 700 ₽', factLabel: '1 105 ₽', isCost: true },
  { param: '% чистых заявок от общего числа', planNum: 80, factNum: 95.73, planLabel: '80%', factLabel: '95,73%', isCost: false },
  { param: 'Чистые уник. лиды, ед.', planNum: 56, factNum: 112, planLabel: '56', factLabel: '112', isCost: false },
  { param: 'Стоимость чистой заявки, с НДС', planNum: 2125, factNum: 1154, planLabel: '2 125 ₽', factLabel: '1 154 ₽', isCost: true },
  { param: 'Квалифицированные лиды, ед.', planNum: 39, factNum: 73, planLabel: '39', factLabel: '73', isCost: false },
  { param: 'Стоимость квал. заявки, с НДС', planNum: 3077, factNum: 1771, planLabel: '3 077 ₽', factLabel: '1 771 ₽', isCost: true },
];

export const planFactNotes = [
  '* Период: 01.08.2026 – 31.08.2026',
  '* Необработанных заявок за август — 14',
];

// ── Блок: факт июль vs факт август ──
export const monthCompare = [
  { param: 'Рекламный бюджет, руб.', mayNum: 51644, junNum: 129249, mayLabel: '51 644 ₽', junLabel: '129 249 ₽', isCost: false },
  { param: 'Заявки, ед.', mayNum: 49, junNum: 117, mayLabel: '49', junLabel: '117', isCost: false },
  { param: 'Стоимость заявки (с НДС), руб.', mayNum: 1054, junNum: 1105, mayLabel: '1 054 ₽', junLabel: '1 105 ₽', isCost: true },
  { param: '% чистых заявок от общего числа', mayNum: 77.55, junNum: 95.73, mayLabel: '77,55%', junLabel: '95,73%', isCost: false },
  { param: 'Чистые заявки, ед.', mayNum: 38, junNum: 112, mayLabel: '38', junLabel: '112', isCost: false },
  { param: 'Стоимость чистой заявки (с НДС), руб.', mayNum: 1359, junNum: 1154, mayLabel: '1 359 ₽', junLabel: '1 154 ₽', isCost: true },
  { param: 'Квалифицированные лиды, ед.', mayNum: 26, junNum: 73, mayLabel: '26', junLabel: '73', isCost: false },
  { param: 'Стоимость квал. заявки (с НДС), руб.', mayNum: 1986, junNum: 1771, mayLabel: '1 986 ₽', junLabel: '1 771 ₽', isCost: true },
];

// ── Блок: помесячная динамика — работы ведутся с июля 2026 ──
export const monthlyTrend = [
  { m: 'Июл', cost: 51644, leads: 49, cpl: 1054, clean: 38, ccpl: 1359, cleanPct: 77.55, qual: 26, qcpl: 1986 },
  { m: 'Авг', cost: 129249, leads: 117, cpl: 1105, clean: 112, ccpl: 1154, cleanPct: 95.73, qual: 73, qcpl: 1771 },
  { m: 'Сен', cost: null, leads: null, cpl: null, clean: null, ccpl: null, cleanPct: null, qual: null, qcpl: null },
  { m: 'Окт', cost: null, leads: null, cpl: null, clean: null, ccpl: null, cleanPct: null, qual: null, qcpl: null },
  { m: 'Ноя', cost: null, leads: null, cpl: null, clean: null, ccpl: null, cleanPct: null, qual: null, qcpl: null },
  { m: 'Дек', cost: null, leads: null, cpl: null, clean: null, ccpl: null, cleanPct: null, qual: null, qcpl: null },
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
];

// ── План на новый месяц (сентябрь 2026) ──
export const nextPlan = [
  { param: 'Рекламный бюджет, с НДС', plan: '80 000 ₽' },
  { param: 'Заявки, ед.', plan: '67' },
  { param: 'Стоимость заявки, с НДС', plan: '1 200 ₽' },
  { param: '% чистых заявок от общего числа', plan: '85%' },
  { param: 'Чистые заявки, ед.', plan: '57' },
  { param: 'Стоимость чистой заявки, с НДС', plan: '1 412 ₽' },
];