// ── Данные отчёта клиента ПК Запад (сентябрь) ──
import { NEON, AGENCY } from '@/data/report';

export { NEON, AGENCY };

export const CLIENT = {
  name: 'ПК Запад',
  id: 'pk_zapad',
  site: 'https://pkzapad-pechat.ru/',
  siteUpakovka: 'https://pkzapad-upakovka.ru/',
  period: 'Сентябрь 2026',
  weeklyStats: 'https://docs.google.com/spreadsheets/d/1yjkny2kJbNS3PVz1Zk18_8f0JbX_ZJMs-hf-cHa4L9k/edit?gid=0#gid=0',
  paybackFunnel: 'https://docs.google.com/spreadsheets/d/1yjkny2kJbNS3PVz1Zk18_8f0JbX_ZJMs-hf-cHa4L9k/edit?gid=798063211#gid=798063211',
};

export const aboutLinks = [
  { icon: 'CalendarRange', label: 'Понедельная статистика', desc: 'Расход, заявки и стоимость лида по неделям месяца.', href: CLIENT.weeklyStats, cta: 'Открыть таблицу' },
  { icon: 'TrendingUp', label: 'Воронка окупаемости', desc: 'Путь от лида до сделки и юнит-экономика проекта.', href: CLIENT.paybackFunnel, cta: 'Открыть таблицу' },
  {
    icon: 'Map',
    label: 'Сайты',
    desc: 'Сайты по направлениям Полиграфия и Упаковка, на которые ведёт реклама.',
    links: [
      { href: CLIENT.site, cta: 'pkzapad-pechat.ru' },
      { href: CLIENT.siteUpakovka, cta: 'pkzapad-upakovka.ru' },
    ],
  },
];

export const planFact = [
  { param: 'Рекламный бюджет, руб.', planNum: 350000, factNum: 215808, planLabel: '350 000 ₽', factLabel: '215 808 ₽', isCost: false },
  { param: 'Заявки, ед.', planNum: 140, factNum: 109, planLabel: '140', factLabel: '109', isCost: false },
  { param: 'Стоимость заявки (с НДС), руб.', planNum: 2500, factNum: 1980, planLabel: '2 500 ₽', factLabel: '1 980 ₽', isCost: true },
  { param: '% чистых заявок от общего числа', planNum: 85, factNum: 73.39, planLabel: '85%', factLabel: '73,39%', isCost: false },
  { param: 'Чистые заявки, ед.', planNum: 119, factNum: 80, planLabel: '119', factLabel: '80', isCost: false },
  { param: 'Стоимость чистой заявки (с НДС), руб.', planNum: 2941, factNum: 2698, planLabel: '2 941 ₽', factLabel: '2 698 ₽', isCost: true },
  { param: 'Конверсия из чистой в квал. заявку, %', planNum: 40, factNum: 35, planLabel: '40%', factLabel: '35,00%', isCost: false },
  { param: 'Квал. заявки, ед.', planNum: 47, factNum: 28, planLabel: '47', factLabel: '28', isCost: false },
  { param: 'Стоимость квал. заявки (с НДС), руб.', planNum: 7447, factNum: 7707, planLabel: '7 447 ₽', factLabel: '7 707 ₽', isCost: true },
];

export const monthCompare = [
  { param: 'Рекламный бюджет, руб.', mayNum: 397720, junNum: 215808, mayLabel: '397 720 ₽', junLabel: '215 808 ₽', isCost: false },
  { param: 'Заявки, ед.', mayNum: 150, junNum: 109, mayLabel: '150', junLabel: '109', isCost: false },
  { param: 'Стоимость заявки (с НДС), руб.', mayNum: 2651, junNum: 1980, mayLabel: '2 651 ₽', junLabel: '1 980 ₽', isCost: true },
  { param: '% чистых заявок от общего числа', mayNum: 84.67, junNum: 73.39, mayLabel: '84,67%', junLabel: '73,39%', isCost: false },
  { param: 'Чистые заявки, ед.', mayNum: 127, junNum: 80, mayLabel: '127', junLabel: '80', isCost: false },
  { param: 'Стоимость чистой заявки (с НДС), руб.', mayNum: 3132, junNum: 2698, mayLabel: '3 132 ₽', junLabel: '2 698 ₽', isCost: true },
  { param: 'Конверсия из чистой в квал. заявку, %', mayNum: 30.71, junNum: 35, mayLabel: '30,71%', junLabel: '35,00%', isCost: false },
  { param: 'Квал. заявки, ед.', mayNum: 39, junNum: 28, mayLabel: '39', junLabel: '28', isCost: false },
  { param: 'Стоимость квал. заявки (с НДС), руб.', mayNum: 10198, junNum: 7707, mayLabel: '10 198 ₽', junLabel: '7 707 ₽', isCost: true },
];

export const monthlyTrend: Array<{ m: string; cost: number | null; uniq: number | null; costUniq: number | null; clean: number | null; costClean: number | null; qual: number | null; costQual: number | null }> = [
  { m: 'Июл', cost: 408817, uniq: 116, costUniq: 3524, clean: 105, costClean: 3893, qual: 35, costQual: 11680 },
  { m: 'Авг', cost: 397720, uniq: 150, costUniq: 2651, clean: 127, costClean: 3132, qual: 39, costQual: 10198 },
  { m: 'Сен', cost: 215808, uniq: 109, costUniq: 1980, clean: 80, costClean: 2698, qual: 28, costQual: 7707 },
  { m: 'Окт', cost: null, uniq: null, costUniq: null, clean: null, costClean: null, qual: null, costQual: null },
];

export const demand: Array<{ m: string; y24: number | null; y25: number | null; y26: number | null }> = [
    { m: 'Янв', y24: 9739, y25: 7496, y26: 5123 },
    { m: 'Фев', y24: 10503, y25: 7984, y26: 5309 },
    { m: 'Мар', y24: 9251, y25: 7498, y26: 5617 },
    { m: 'Апр', y24: 7936, y25: 6225, y26: 4968 },
    { m: 'Май', y24: 8278, y25: 6391, y26: 4418 },
    { m: 'Июн', y24: 7220, y25: 6761, y26: 5807 },
    { m: 'Июл', y24: 6784, y25: 7033, y26: 5858 },
    { m: 'Авг', y24: 6476, y25: 7261, y26: 7007 },
    { m: 'Сен', y24: 7021, y25: 6174, y26: 5931 },
    { m: 'Окт', y24: 8263, y25: 6753, y26: null },
    { m: 'Ноя', y24: 8344, y25: 7177, y26: null },
    { m: 'Дек', y24: 10443, y25: 8352, y26: null },
];

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
  'Перераспределение бюджета с Полиграфии на Упаковку (как приоритетное направление)',
];

export const nextPlan = [
  { param: 'Рекламный бюджет, руб.', plan: '350 000 ₽' },
  { param: 'Заявки, ед.', plan: '175' },
  { param: 'Стоимость заявки (с НДС), руб.', plan: '2 000 ₽' },
  { param: '% чистых заявок от общего числа', plan: '80%' },
  { param: 'Чистые заявки, ед.', plan: '140' },
  { param: 'Стоимость чистой заявки (с НДС), руб.', plan: '2 500 ₽' },
  { param: 'Конверсия из чистой в квал. заявку, %', plan: '38%' },
  { param: 'Квал. заявки, ед.', plan: '53' },
  { param: 'Стоимость квал. заявки (с НДС), руб.', plan: '6 604 ₽' },
];
