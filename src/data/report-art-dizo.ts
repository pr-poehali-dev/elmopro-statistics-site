// ── Данные отчёта клиента Art-Dizo ──
import { NEON, AGENCY } from '@/data/report';

export { NEON, AGENCY };

export const CLIENT = {
  name: 'Art-Dizo',
  id: 'porg-nckmeu3n',
  site: 'https://art-dizo.ru',
  period: 'Июль-Август 2026',
  weeklyStats: 'https://docs.google.com/spreadsheets/d/1a8xktBFGY9LQ3JmvH2xFAFDej5prR-FpDy-fOOWfyIM/edit?usp=sharing',
  paybackFunnel: 'https://docs.google.com/spreadsheets/d/1a8xktBFGY9LQ3JmvH2xFAFDej5prR-FpDy-fOOWfyIM/edit?usp=sharing',
};

export const aboutLinks = [
  { icon: 'CalendarRange', label: 'Понедельная статистика', desc: 'Расход, заявки и стоимость лида по неделям месяца.', href: CLIENT.weeklyStats, cta: 'Открыть таблицу' },
  { icon: 'TrendingUp', label: 'Воронка окупаемости', desc: 'Путь от лида до сделки и юнит-экономика проекта.', href: CLIENT.paybackFunnel, cta: 'Открыть таблицу' },
  { icon: 'Globe', label: 'Сайт', desc: 'Посадочная страница, на которую ведёт реклама.', href: CLIENT.site, cta: 'art-dizo.ru' },
];

// ── Блок: план / факт за июль 2026 ──
export const planFact = [
  { param: 'Рекламный бюджет, с НДС', planNum: 50000, factNum: 51644, planLabel: '50 000 ₽', factLabel: '51 644 ₽', isCost: false },
  { param: 'Уникальные лиды, ед.', planNum: 17, factNum: 49, planLabel: '17', factLabel: '49', isCost: false },
  { param: 'Стоимость заявки, с НДС', planNum: 3000, factNum: 1054, planLabel: '3 000 ₽', factLabel: '1 054 ₽', isCost: true },
  { param: '% чистых заявок от общего числа', planNum: 80, factNum: 77.55, planLabel: '80%', factLabel: '77,55%', isCost: false },
  { param: 'Чистые уник. лиды, ед.', planNum: 13, factNum: 38, planLabel: '13', factLabel: '38', isCost: false },
  { param: 'Стоимость чистой заявки, с НДС', planNum: 3750, factNum: 1359, planLabel: '3 750 ₽', factLabel: '1 359 ₽', isCost: true },
  { param: 'Квалифицированные лиды, ед.', planNum: 6, factNum: 26, planLabel: '6', factLabel: '26', isCost: false },
  { param: 'Стоимость квал. заявки, с НДС', planNum: 8333, factNum: 1986, planLabel: '8 333 ₽', factLabel: '1 986 ₽', isCost: true },
];

export const planFactNotes = [
  '* Период: 20.07.2026 – 31.07.2026',
  '* Необработанных заявок за июль — 1',
];

// ── Блок: факт июль vs факт август ──
export const monthCompare = [
  { param: 'Рекламный бюджет, руб.', mayNum: 0, junNum: 51644, mayLabel: '0 ₽', junLabel: '51 644 ₽', isCost: false },
  { param: 'Заявки, ед.', mayNum: 0, junNum: 49, mayLabel: '0', junLabel: '49', isCost: false },
  { param: 'Стоимость заявки (с НДС), руб.', mayNum: 0, junNum: 1054, mayLabel: '0 ₽', junLabel: '1 054 ₽', isCost: true },
  { param: '% чистых заявок от общего числа', mayNum: 0, junNum: 77.55, mayLabel: '0%', junLabel: '77,55%', isCost: false },
  { param: 'Чистые заявки, ед.', mayNum: 0, junNum: 38, mayLabel: '0', junLabel: '38', isCost: false },
  { param: 'Стоимость чистой заявки (с НДС), руб.', mayNum: 0, junNum: 1359, mayLabel: '0 ₽', junLabel: '1 359 ₽', isCost: true },
  { param: 'Квалифицированные лиды, ед.', mayNum: 0, junNum: 26, mayLabel: '0', junLabel: '26', isCost: false },
  { param: 'Стоимость квал. заявки (с НДС), руб.', mayNum: 0, junNum: 1986, mayLabel: '0 ₽', junLabel: '1 986 ₽', isCost: true },
];

// ── Блок: помесячная динамика — работы ведутся с июля 2026 ──
export const monthlyTrend = [
  { m: 'Июл', cost: 51644, leads: 49, cpl: 1054, clean: 38, ccpl: 1359, cleanPct: 77.55, qual: 26, qcpl: 1986 },
];

// ── Работы ──
export const workDone = [
  'Анализ рекламных объявлений конкурентов',
  'Подготовка сильных заголовков и текстов, отражающих выгоды предложения и направленных на закрытие болей и потребностей целевой аудитории',
  'Сбор семантического ядра',
  'Создание и запуск рекламных кампаний',
  'Отслеживание показателей рекламы',
  'Оптимизация рекламного бюджета под задачи',
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

// ── План на новый месяц (август 2026) ──
export const nextPlan = [
  { param: 'Инвестиции / период', plan: 'с 01.08.2026' },
  { param: 'Рекламный бюджет, с НДС', plan: '120 000 ₽' },
  { param: 'Заявки, ед.', plan: '56' },
  { param: 'Стоимость заявки, с НДС', plan: '1 700 ₽' },
  { param: '% чистых заявок от общего числа', plan: '80%' },
  { param: 'Чистые заявки, ед.', plan: '56' },
  { param: 'Стоимость чистой заявки, с НДС', plan: '2 125 ₽' },
  { param: 'Квалифицированные лиды, ед.', plan: '39' },
  { param: 'Стоимость квал. заявки, с НДС', plan: '3 077 ₽' },
];
