// ── Данные отчёта клиента ПК Запад ──
import { NEON, AGENCY } from '@/data/report';

export { NEON, AGENCY };

export const CLIENT = {
  name: 'ПК Запад',
  id: 'pk_zapad',
  site: 'https://pkzapad-pechat.ru/',
  siteUpakovka: 'https://pkzapad-upakovka.ru/',
  period: 'Август 2026',
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

// ── Сегменты рекламы ──
export const segments = [
  { key: 'poligrafiya', label: 'Полиграфия', icon: 'Printer' },
  { key: 'upakovka', label: 'Упаковка', icon: 'Package' },
] as const;

export type SegmentKey = typeof segments[number]['key'];

// ── Блок: план / факт за август 2026 по сегментам ──
export const planFactBySegment: Record<SegmentKey, Array<{ param: string; planNum: number; factNum: number; planLabel: string; factLabel: string; isCost: boolean }>> = {
  poligrafiya: [
    { param: 'Рекламный бюджет, руб.', planNum: 200000, factNum: 202256, planLabel: '200 000 ₽', factLabel: '202 256 ₽', isCost: false },
    { param: 'Заявки, ед.', planNum: 80, factNum: 84, planLabel: '80', factLabel: '84', isCost: false },
    { param: 'Стоимость заявки (с НДС), руб.', planNum: 2500, factNum: 2408, planLabel: '2 500 ₽', factLabel: '2 408 ₽', isCost: true },
    { param: '% чистых заявок от общего числа', planNum: 88, factNum: 83.33, planLabel: '88%', factLabel: '83,33%', isCost: false },
    { param: 'Чистые заявки, ед.', planNum: 70, factNum: 70, planLabel: '70', factLabel: '70', isCost: false },
    { param: 'Стоимость чистой заявки (с НДС), руб.', planNum: 2841, factNum: 2889, planLabel: '2 841 ₽', factLabel: '2 889 ₽', isCost: true },
    { param: 'Конверсия из чистой в квал. заявку, %', planNum: 35, factNum: 34.29, planLabel: '35%', factLabel: '34,29%', isCost: false },
    { param: 'Квал. заявки, ед.', planNum: 24, factNum: 24, planLabel: '24', factLabel: '24', isCost: false },
    { param: 'Стоимость квал. заявки (с НДС), руб.', planNum: 8333, factNum: 8427, planLabel: '8 333 ₽', factLabel: '8 427 ₽', isCost: true },
  ],
  upakovka: [
    { param: 'Рекламный бюджет, руб.', planNum: 150000, factNum: 195464, planLabel: '150 000 ₽', factLabel: '195 464 ₽', isCost: false },
    { param: 'Заявки, ед.', planNum: 50, factNum: 66, planLabel: '50', factLabel: '66', isCost: false },
    { param: 'Стоимость заявки (с НДС), руб.', planNum: 3000, factNum: 2962, planLabel: '3 000 ₽', factLabel: '2 962 ₽', isCost: true },
    { param: '% чистых заявок от общего числа', planNum: 85, factNum: 86.36, planLabel: '85%', factLabel: '86,36%', isCost: false },
    { param: 'Чистые заявки, ед.', planNum: 43, factNum: 57, planLabel: '43', factLabel: '57', isCost: false },
    { param: 'Стоимость чистой заявки (с НДС), руб.', planNum: 3529, factNum: 3429, planLabel: '3 529 ₽', factLabel: '3 429 ₽', isCost: true },
    { param: 'Конверсия из чистой в квал. заявку, %', planNum: 45, factNum: 26.32, planLabel: '45%', factLabel: '26,32%', isCost: false },
    { param: 'Квал. заявки, ед.', planNum: 19, factNum: 15, planLabel: '19', factLabel: '15', isCost: false },
    { param: 'Стоимость квал. заявки (с НДС), руб.', planNum: 7895, factNum: 13031, planLabel: '7 895 ₽', factLabel: '13 031 ₽', isCost: true },
  ],
};

// ── Блок: факт июль vs факт август по сегментам ──
export const monthCompareBySegment: Record<SegmentKey, Array<{ param: string; mayNum: number; junNum: number; mayLabel: string; junLabel: string; isCost: boolean }>> = {
  poligrafiya: [
    { param: 'Рекламный бюджет, руб.', mayNum: 254163, junNum: 202256, mayLabel: '254 163 ₽', junLabel: '202 256 ₽', isCost: false },
    { param: 'Заявки, ед.', mayNum: 77, junNum: 84, mayLabel: '77', junLabel: '84', isCost: false },
    { param: 'Стоимость заявки (с НДС), руб.', mayNum: 3301, junNum: 2408, mayLabel: '3 301 ₽', junLabel: '2 408 ₽', isCost: true },
    { param: '% чистых заявок от общего числа', mayNum: 93.51, junNum: 83.33, mayLabel: '93,51%', junLabel: '83,33%', isCost: false },
    { param: 'Чистые заявки, ед.', mayNum: 72, junNum: 70, mayLabel: '72', junLabel: '70', isCost: false },
    { param: 'Стоимость чистой заявки (с НДС), руб.', mayNum: 3530, junNum: 2889, mayLabel: '3 530 ₽', junLabel: '2 889 ₽', isCost: true },
    { param: 'Конверсия из чистой в квал. заявку, %', mayNum: 29.17, junNum: 34.29, mayLabel: '29,17%', junLabel: '34,29%', isCost: false },
    { param: 'Квал. заявки, ед.', mayNum: 21, junNum: 24, mayLabel: '21', junLabel: '24', isCost: false },
    { param: 'Стоимость квал. заявки (с НДС), руб.', mayNum: 12103, junNum: 8427, mayLabel: '12 103 ₽', junLabel: '8 427 ₽', isCost: true },
  ],
  upakovka: [
    { param: 'Рекламный бюджет, руб.', mayNum: 154654, junNum: 195464, mayLabel: '154 654 ₽', junLabel: '195 464 ₽', isCost: false },
    { param: 'Заявки, ед.', mayNum: 39, junNum: 66, mayLabel: '39', junLabel: '66', isCost: false },
    { param: 'Стоимость заявки (с НДС), руб.', mayNum: 3965, junNum: 2962, mayLabel: '3 965 ₽', junLabel: '2 962 ₽', isCost: true },
    { param: '% чистых заявок от общего числа', mayNum: 84.62, junNum: 86.36, mayLabel: '84,62%', junLabel: '86,36%', isCost: false },
    { param: 'Чистые заявки, ед.', mayNum: 33, junNum: 57, mayLabel: '33', junLabel: '57', isCost: false },
    { param: 'Стоимость чистой заявки (с НДС), руб.', mayNum: 4686, junNum: 3429, mayLabel: '4 686 ₽', junLabel: '3 429 ₽', isCost: true },
    { param: 'Конверсия из чистой в квал. заявку, %', mayNum: 42.42, junNum: 26.32, mayLabel: '42,42%', junLabel: '26,32%', isCost: false },
    { param: 'Квал. заявки, ед.', mayNum: 14, junNum: 15, mayLabel: '14', junLabel: '15', isCost: false },
    { param: 'Стоимость квал. заявки (с НДС), руб.', mayNum: 11047, junNum: 13031, mayLabel: '11 047 ₽', junLabel: '13 031 ₽', isCost: true },
  ],
};

// ── Блок: помесячная динамика — работы ведутся с июля 2026 ──
export const monthlyTrendBySegment: Record<SegmentKey, Array<{ m: string; cost: number | null; uniq: number | null; costUniq: number | null; clean: number | null; costClean: number | null; qual: number | null; costQual: number | null }>> = {
  poligrafiya: [
    { m: 'Июл', cost: 254163, uniq: 77, costUniq: 3301, clean: 72, costClean: 3530, qual: 21, costQual: 12103 },
    { m: 'Авг', cost: 202256, uniq: 84, costUniq: 2408, clean: 70, costClean: 2889, qual: 24, costQual: 8427 },
  ],
  upakovka: [
    { m: 'Июл', cost: 154654, uniq: 39, costUniq: 3965, clean: 33, costClean: 4686, qual: 14, costQual: 11047 },
    { m: 'Авг', cost: 195464, uniq: 66, costUniq: 2962, clean: 57, costClean: 3429, qual: 15, costQual: 13031 },
  ],
};

// ── Спрос по Wordstat: помесячно, 2024 / 2025 / 2026 по сегментам ──
export const demandBySegment: Record<SegmentKey, Array<{ m: string; y24: number | null; y25: number | null; y26: number | null }>> = {
  poligrafiya: [
    { m: 'Янв', y24: 10901, y25: 16533, y26: 8279 },
    { m: 'Фев', y24: 14451, y25: 13124, y26: 9024 },
    { m: 'Мар', y24: 13295, y25: 12803, y26: 11974 },
    { m: 'Апр', y24: 12770, y25: 11478, y26: 11437 },
    { m: 'Май', y24: 11658, y25: 12010, y26: 9750 },
    { m: 'Июн', y24: 10602, y25: 11147, y26: 9317 },
    { m: 'Июл', y24: 10010, y25: 12785, y26: 7960 },
    { m: 'Авг', y24: 11364, y25: 13099, y26: 8053 },
    { m: 'Сен', y24: 11778, y25: 10885, y26: null },
    { m: 'Окт', y24: 13392, y25: 12784, y26: null },
    { m: 'Ноя', y24: 15260, y25: 11552, y26: null },
    { m: 'Дек', y24: 22584, y25: 11160, y26: null },
  ],
  upakovka: [
    { m: 'Янв', y24: 9739, y25: 7496, y26: 5123 },
    { m: 'Фев', y24: 10503, y25: 7984, y26: 5309 },
    { m: 'Мар', y24: 9251, y25: 7498, y26: 5617 },
    { m: 'Апр', y24: 7936, y25: 6225, y26: 4968 },
    { m: 'Май', y24: 8278, y25: 6391, y26: 4418 },
    { m: 'Июн', y24: 7220, y25: 6761, y26: 5807 },
    { m: 'Июл', y24: 6784, y25: 7033, y26: 5858 },
    { m: 'Авг', y24: 6476, y25: 7261, y26: 7007 },
    { m: 'Сен', y24: 7021, y25: 6174, y26: null },
    { m: 'Окт', y24: 8263, y25: 6753, y26: null },
    { m: 'Ноя', y24: 8344, y25: 7177, y26: null },
    { m: 'Дек', y24: 10443, y25: 8352, y26: null },
  ],
};

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
  'Перераспределение бюджета с Полиграфии на Упаковку (как приоритетное направление)',
  'Запуск Товарной кампании по фиду',
];

// ── План на новый месяц (сентябрь 2026) ──
export const nextPlan = [
  { param: 'Рекламный бюджет, руб.', plan: '350 000 ₽' },
  { param: 'Заявки, ед.', plan: '140' },
  { param: 'Стоимость заявки (с НДС), руб.', plan: '2 500 ₽' },
  { param: '% чистых заявок от общего числа', plan: '85%' },
  { param: 'Чистые заявки, ед.', plan: '119' },
  { param: 'Стоимость чистой заявки (с НДС), руб.', plan: '2 941 ₽' },
  { param: 'Конверсия из чистой в квал. заявку, %', plan: '40%' },
  { param: 'Квал. заявки, ед.', plan: '47' },
  { param: 'Стоимость квал. заявки (с НДС), руб.', plan: '7 447 ₽' },
];
