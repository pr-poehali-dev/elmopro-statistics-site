// ── Данные отчёта клиента Art-Dizo за сентябрь 2026 ──
import { NEON, AGENCY } from '@/data/report';

export { NEON, AGENCY };

export const CLIENT = {
  name: 'Art-Dizo',
  id: 'porg-nckmeu3n',
  site: 'https://art-dizo.ru',
  period: 'Сентябрь 2026',
  weeklyStats: 'https://docs.google.com/spreadsheets/d/1a8xktBFGY9LQ3JmvH2xFAFDej5prR-FpDy-fOOWfyIM/edit?usp=sharing',
  paybackFunnel: 'https://docs.google.com/spreadsheets/d/1a8xktBFGY9LQ3JmvH2xFAFDej5prR-FpDy-fOOWfyIM/edit?usp=sharing',
};

export const aboutLinks = [
  { icon: 'CalendarRange', label: 'Понедельная статистика', desc: 'Расход, заявки и стоимость лида по неделям месяца.', href: CLIENT.weeklyStats, cta: 'Открыть таблицу' },
  { icon: 'TrendingUp', label: 'Воронка окупаемости', desc: 'Путь от лида до сделки и юнит-экономика проекта.', href: CLIENT.paybackFunnel, cta: 'Открыть таблицу' },
  { icon: 'Globe', label: 'Сайт', desc: 'Посадочная страница, на которую ведёт реклама.', href: CLIENT.site, cta: 'art-dizo.ru' },
];

// ── Блок: план / факт за сентябрь 2026 ──
export const planFact = [
  { param: 'Рекламный бюджет, с НДС', planNum: 80000, factNum: 32409, planLabel: '80 000 ₽', factLabel: '32 409 ₽', isCost: false },
  { param: 'Заявки, ед.', planNum: 67, factNum: 49, planLabel: '67', factLabel: '49', isCost: false },
  { param: 'Стоимость заявки, с НДС', planNum: 1200, factNum: 661, planLabel: '1 200 ₽', factLabel: '661 ₽', isCost: true },
  { param: '% чистых заявок от общего числа', planNum: 85, factNum: 102.04, planLabel: '85%', factLabel: '102,04%', isCost: false },
  { param: 'Чистые заявки, ед.', planNum: 57, factNum: 49, planLabel: '57', factLabel: '49', isCost: false },
  { param: 'Стоимость чистой заявки, с НДС', planNum: 1412, factNum: 661, planLabel: '1 412 ₽', factLabel: '661 ₽', isCost: true },
];

export const planFactNotes = [
  '* Период: 01.09.2026 – 20.09.2026',
];

// ── Блок: факт август vs факт сентябрь ──
export const monthCompare = [
  { param: 'Рекламный бюджет, руб.', mayNum: 129249, junNum: 32409, mayLabel: '129 249 ₽', junLabel: '32 409 ₽', isCost: false },
  { param: 'Заявки, ед.', mayNum: 117, junNum: 49, mayLabel: '117', junLabel: '49', isCost: false },
  { param: 'Стоимость заявки (с НДС), руб.', mayNum: 1105, junNum: 661, mayLabel: '1 105 ₽', junLabel: '661 ₽', isCost: true },
  { param: '% чистых заявок от общего числа', mayNum: 95.73, junNum: 102.04, mayLabel: '95,73%', junLabel: '102,04%', isCost: false },
  { param: 'Чистые заявки, ед.', mayNum: 112, junNum: 49, mayLabel: '112', junLabel: '49', isCost: false },
  { param: 'Стоимость чистой заявки (с НДС), руб.', mayNum: 1154, junNum: 661, mayLabel: '1 154 ₽', junLabel: '661 ₽', isCost: true },
  { param: 'Конверсия из чистой в квал. заявку, %', mayNum: 65.18, junNum: 0, mayLabel: '65,18%', junLabel: '—', isCost: false },
  { param: 'Квалифицированные заявки, ед.', mayNum: 73, junNum: 0, mayLabel: '73', junLabel: '—', isCost: false },
  { param: 'Стоимость квал. заявки (с НДС), руб.', mayNum: 1771, junNum: 0, mayLabel: '1 771 ₽', junLabel: '—', isCost: true },
];

// ── Блок: помесячная динамика — работы ведутся с июля 2026 ──
export const monthlyTrend = [
  { m: 'Июл', cost: 51644, leads: 49, cpl: 1054, clean: 38, ccpl: 1359, cleanPct: 77.55, qual: 26, qcpl: 1986 },
  { m: 'Авг', cost: 129249, leads: 117, cpl: 1105, clean: 112, ccpl: 1154, cleanPct: 95.73, qual: 73, qcpl: 1771 },
  { m: 'Сен', cost: 32409, leads: 49, cpl: 661, clean: 49, ccpl: 661, cleanPct: 102.04, qual: null, qcpl: null },
  { m: 'Окт', cost: null, leads: null, cpl: null, clean: null, ccpl: null, cleanPct: null, qual: null, qcpl: null },
  { m: 'Ноя', cost: null, leads: null, cpl: null, clean: null, ccpl: null, cleanPct: null, qual: null, qcpl: null },
  { m: 'Дек', cost: null, leads: null, cpl: null, clean: null, ccpl: null, cleanPct: null, qual: null, qcpl: null },
];

// ── Работы ──
export const workDone = [
  'Отслеживание показателей рекламы',
  'Оптимизация рекламного бюджета под задачи за счёт:',
  'Исключение неэффективных ключевых запросов',
  'Отключение неэффективных площадок в сетевых рекламных кампаниях',
  'Отключение неэффективных групп объявлений/фраз',
];

export const workPlan: string[] = [];

// ── План на новый месяц (октябрь 2026) ──
export const nextPlan = [
  { param: 'Рекламный бюджет, с НДС', plan: '0 ₽' },
  { param: 'Заявки, ед.', plan: '0' },
  { param: 'Стоимость заявки, с НДС', plan: '0 ₽' },
  { param: '% чистых заявок от общего числа', plan: '0%' },
  { param: 'Чистые заявки, ед.', plan: '0' },
  { param: 'Стоимость чистой заявки, с НДС', plan: '0 ₽' },
];
