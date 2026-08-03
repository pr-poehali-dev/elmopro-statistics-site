// ── Палитра Tolka Digital design system (копия для независимости отчёта) ──
export const NEON = {
  cyan: 'hsl(208.8, 100%, 60%)',
  violet: 'hsl(12.8, 69.4%, 61.6%)',
  lime: 'hsl(83.6, 82.9%, 39%)',
  amber: 'hsl(12.8, 69.4%, 61.6%)',
  grid: 'hsl(0, 0%, 20%)',
  pos: 'hsl(83.6, 82.9%, 39%)',
  neg: 'hsl(3.6, 65.5%, 54.5%)',
  gray: 'hsl(240, 4%, 65%)',
};

export const PIE_COLORS = [NEON.cyan, 'hsl(3.6, 65.5%, 54.5%)', NEON.violet, NEON.lime, 'hsl(240,4%,65%)', 'hsl(280,50%,60%)'];

export const CLIENT = {
  name: 'Астон.Шесть звёзд',
  id: 'aston-nsk',
  period: 'Июль 2026',
  weeklyStats: 'https://docs.google.com/spreadsheets/d/1d66U4Hqe-0RfQQqBt_cTCkiI6JOZcn84cUY5jzANYpU/edit?gid=1832537755#gid=1832537755',
  site1: 'https://novosib.aston-shest-zvezd.ru/',
  site2: 'https://shest-zvezd.astondom.ru/',
};

export const aboutLinks = [
  { icon: 'CalendarRange', label: 'Понедельная статистика', desc: 'Расход, заявки и стоимость лида по неделям месяца.', href: CLIENT.weeklyStats, cta: 'Открыть таблицу' },
  { icon: 'Globe', label: 'Сайт 1', desc: 'Посадочная страница, на которую ведёт реклама.', href: CLIENT.site1, cta: 'novosib.aston-shest-zvezd.ru' },
  { icon: 'Globe', label: 'Сайт 2', desc: 'Посадочная страница, на которую ведёт реклама.', href: CLIENT.site2, cta: 'shest-zvezd.astondom.ru' },
];

// ── Блок: план / факт за Июль 2026 ──
// isCost=true → выполнение считается как plan/fact (дороже плана — хуже)
// isCost=false → выполнение считается как fact/plan (больше плана — лучше)
export const planFact = [
  { param: 'Бюджет, ₽', planNum: 1750000, factNum: 1739968, planLabel: '1 750 000', factLabel: '1 739 968 ₽', isCost: false },
  { param: 'Лиды', planNum: 92, factNum: 112, planLabel: '92', factLabel: '112', isCost: false },
  { param: 'CPL, ₽', planNum: 19022, factNum: 15535, planLabel: '19 022', factLabel: '15 535 ₽', isCost: true },
  { param: 'Целевые лиды', planNum: 38, factNum: 40, planLabel: '38', factLabel: '40', isCost: false },
  { param: 'CPTL, ₽', planNum: 46053, factNum: 43499, planLabel: '46 053', factLabel: '43 499 ₽', isCost: true },
  { param: 'CR цел/лид, %', planNum: 41, factNum: 36, planLabel: '41%', factLabel: '36%', isCost: false },
  { param: 'Горячих клиентов', planNum: 9, factNum: 7, planLabel: '9', factLabel: '7', isCost: false },
  { param: 'Цена горячего, ₽', planNum: 194444, factNum: 248567, planLabel: '194 444', factLabel: '248 567 ₽', isCost: true },
];

// ── Блок: факт июнь vs факт июль ──
export const monthCompare = [
  { param: 'Бюджет, ₽', mayNum: 1490445, junNum: 1739968, mayLabel: '1 490 445 ₽', junLabel: '1 739 968 ₽', isCost: false },
  { param: 'Лиды', mayNum: 46, junNum: 112, mayLabel: '46', junLabel: '112', isCost: false },
  { param: 'CPL, ₽', mayNum: 32401, junNum: 15535, mayLabel: '32 401 ₽', junLabel: '15 535 ₽', isCost: true },
  { param: 'Целевые лиды', mayNum: 15, junNum: 40, mayLabel: '15', junLabel: '40', isCost: false },
  { param: 'CPTL, ₽', mayNum: 99363, junNum: 43499, mayLabel: '99 363 ₽', junLabel: '43 499 ₽', isCost: true },
  { param: 'CR цел/лид, %', mayNum: 33, junNum: 36, mayLabel: '33%', junLabel: '36%', isCost: false },
  { param: 'Горячих клиентов', mayNum: 3, junNum: 7, mayLabel: '3', junLabel: '7', isCost: false },
  { param: 'Цена горячего, ₽', mayNum: 496815, junNum: 248567, mayLabel: '496 815 ₽', junLabel: '248 567 ₽', isCost: true },
];

// ── Блок: тренды Июнь → Июль 2026 (только 2 месяца — данные до этого периода не запрашивались) ──
export const trends = [
  { m: 'Июн', cost: 1490445, leads: 46, leadCost: 32401, targetLeads: 15, targetCost: 99363, leadToTargetCR: 33, hotClients: 3, hotCost: 496815, targetToHotCR: 20.0 },
  { m: 'Июл', cost: 1739968, leads: 112, leadCost: 15535, targetLeads: 40, targetCost: 43499, leadToTargetCR: 36, hotClients: 7, hotCost: 248567, targetToHotCR: 17.5 },
];

// ── Спрос по Wordstat: реальные данные, число запросов по месяцам ──
export const demand = [
  { m: 'Янв', y24: 252150, y25: 200173, y26: 181472 },
  { m: 'Фев', y24: 233371, y25: 176460, y26: 160109 },
  { m: 'Мар', y24: 216839, y25: 186777, y26: 187880 },
  { m: 'Апр', y24: 200496, y25: 163748, y26: 180065 },
  { m: 'Май', y24: 193766, y25: 147455, y26: 159600 },
  { m: 'Июн', y24: 201224, y25: 151266, y26: 158927 },
  { m: 'Июл', y24: 194252, y25: 178894, y26: 190355 },
  { m: 'Авг', y24: 183646, y25: 183075, y26: null },
  { m: 'Сен', y24: 169678, y25: 169253, y26: null },
  { m: 'Окт', y24: 193265, y25: 190566, y26: null },
  { m: 'Ноя', y24: 182042, y25: 178604, y26: null },
  { m: 'Дек', y24: 158560, y25: 150859, y26: null },
];

// ── Работы ──
export const workDone = [
  'Отслеживание показателей рекламы',
  'Работа с корректировками пола/возраста и устройств',
  'Тестирование элементов рекламы (УТП объявлений и их форматов)',
  'Исключение неэффективных площадок',
  'Исключение неэффективных ключевых запросов',
  'Перераспределение бюджета с неэффективных запросов на результативные',
  'Отключение неэффективных групп объявлений/фраз',
];

// ── Раздел 5: статистика по 2 рекламным аккаунтам Директа, июль 2026 ──
// Каждый срез — топ-10 позиций по расходу, остальное объединено в строку «Прочее»
type RawRow = { name: string; cost: number; clicks: number; conv: number };

const withMetrics = (rows: RawRow[]) =>
  rows.map((r) => ({
    ...r,
    cpc: r.clicks ? r.cost / r.clicks : null,
    cr: r.clicks ? (r.conv / r.clicks) * 100 : 0,
    cpa: r.conv ? r.cost / r.conv : null,
  }));

export const accounts = {
  acc1: {
    label: '1 аккаунт Директ',
    device: withMetrics([
      { name: 'Смартфоны', cost: 537687.27, clicks: 39300, conv: 1 },
      { name: 'Десктопы', cost: 315264.64, clicks: 2581, conv: 21 },
    ]),
    age: withMetrics([
      { name: '35-44 года', cost: 240392.93, clicks: 12817, conv: 3 },
      { name: 'Не определен', cost: 221410.15, clicks: 12297, conv: 9 },
      { name: '45-54 года', cost: 179121.55, clicks: 7396, conv: 4 },
      { name: '25-34 года', cost: 166364.99, clicks: 8116, conv: 2 },
      { name: 'Старше 55', cost: 26687.3, clicks: 791, conv: 1 },
      { name: '18-24 года', cost: 15741.09, clicks: 454, conv: 3 },
      { name: 'Младше 18', cost: 3233.91, clicks: 10, conv: 0 },
    ]),
    geo: withMetrics([
      { name: 'Новосибирск', cost: 814184.92, clicks: 40479, conv: 22 },
      { name: 'Искитим', cost: 10792.85, clicks: 79, conv: 0 },
      { name: 'Не определено', cost: 8051.06, clicks: 497, conv: 0 },
      { name: 'Татарск', cost: 5805.36, clicks: 30, conv: 0 },
      { name: 'Бердск', cost: 2204.58, clicks: 37, conv: 0 },
      { name: 'Кемерово', cost: 1244.17, clicks: 63, conv: 0 },
      { name: 'Тогучин', cost: 884.4, clicks: 13, conv: 0 },
      { name: 'Купино', cost: 879.68, clicks: 25, conv: 0 },
      { name: 'Красноярск', cost: 864.1, clicks: 54, conv: 0 },
      { name: 'Барнаул', cost: 724.05, clicks: 26, conv: 0 },
      { name: 'Прочее', cost: 7316.77, clicks: 578, conv: 0 },
    ]),
    campaigns: withMetrics([
      { name: 'Сети / РСЯ - astondom.ru / Новосибирск', cost: 276323.89, clicks: 34193, conv: 0 },
      { name: 'Поиск - astondom.ru / Семантика / Новосибирск', cost: 109025.87, clicks: 717, conv: 0 },
      { name: 'РСЯ | Общая (Июль) | Скидка 20% | НСК', cost: 101139.78, clicks: 2104, conv: 0 },
      { name: 'Макс | Интересы | НСК', cost: 87163.08, clicks: 282, conv: 12 },
      { name: 'Телеграм | Интересы | НСК', cost: 71782.56, clicks: 339, conv: 9 },
      { name: 'Поиск | Общая (Июль) | Скидка 20% | НСК', cost: 65275.66, clicks: 330, conv: 1 },
      { name: 'Сети / Ретаргетинг - shest-zvezd.astondom.ru', cost: 55285.31, clicks: 1191, conv: 0 },
      { name: 'MAX - astondom.ru/nsk', cost: 47182.0, clicks: 77, conv: 0 },
      { name: 'Сети / Таргетинг + LaL - shest-zvezd.astondom.ru', cost: 37804.61, clicks: 2642, conv: 0 },
      { name: 'Поиск - astondom.ru / Бренд / Новосибирск', cost: 1969.16, clicks: 6, conv: 0 },
    ]),
    groups: withMetrics([
      { name: 'Ремонт / отделка', cost: 172306.08, clicks: 26742, conv: 0 },
      { name: 'Целевая аудитория (Макс)', cost: 87163.08, clicks: 282, conv: 12 },
      { name: 'Целевая аудитория (Телеграм)', cost: 71782.56, clicks: 339, conv: 9 },
      { name: 'Квартира от застройщика', cost: 66987.88, clicks: 491, conv: 0 },
      { name: 'Ключи общая (РСЯ)', cost: 65752.07, clicks: 1378, conv: 0 },
      { name: 'Ключи общая (Поиск)', cost: 56127.09, clicks: 281, conv: 1 },
      { name: 'Ретаргетинг', cost: 49593.61, clicks: 1091, conv: 0 },
      { name: 'Квартира в ипотеку 11,9%', cost: 46601.81, clicks: 2656, conv: 0 },
      { name: 'Гео / район', cost: 37069.1, clicks: 3460, conv: 0 },
      { name: 'Интересы', cost: 35387.71, clicks: 726, conv: 0 },
      { name: 'Прочее', cost: 164180.9, clicks: 4435, conv: 0 },
    ]),
    ads: withMetrics([
      { name: 'ПСК 19,499–22,333% Квартиры с отделкой в ипотеку 0,1%', cost: 134576.96, clicks: 502, conv: 17 },
      { name: 'Квартира с отделкой в Новосибирске — успей купить! (1)', cost: 48962.97, clicks: 5977, conv: 0 },
      { name: 'Квартира с отделкой в Новосибирске — успей купить! (2)', cost: 33092.32, clicks: 5472, conv: 0 },
      { name: 'Просторные квартиры от 5,2 млн в ЖК Астон.Шесть Звезд (1)', cost: 32824.13, clicks: 2936, conv: 0 },
      { name: 'Видовые квартиры в ЖК Астон.Шесть звёзд. От 5,2 млн ₽', cost: 32436.47, clicks: 1827, conv: 0 },
      { name: 'Квартира с отделкой в Новосибирске — успей купить! (3)', cost: 27432.46, clicks: 4875, conv: 0 },
      { name: 'Квартира с отделкой в Новосибирске — успей купить! (4)', cost: 24225.91, clicks: 4039, conv: 0 },
      { name: 'Просторные квартиры от 5,2 млн в ЖК Астон.Шесть Звезд (2)', cost: 22609.46, clicks: 554, conv: 0 },
      { name: 'Последние квартиры в ЖК комфорт+ класса по спеццене! (1)', cost: 22031.1, clicks: 166, conv: 0 },
      { name: 'Последние квартиры в ЖК комфорт+ класса по спеццене! (2)', cost: 19846.28, clicks: 143, conv: 0 },
      { name: 'Прочее (524 объявления)', cost: 454913.94, clicks: 15390, conv: 5 },
    ]),
  },
  acc2: {
    label: '2 аккаунт Директ',
    device: withMetrics([
      { name: 'Смартфоны', cost: 749398.01, clicks: 24816, conv: 29 },
      { name: 'Десктопы', cost: 123834.8, clicks: 977, conv: 6 },
      { name: 'Планшеты', cost: 13783.64, clicks: 1053, conv: 0 },
    ]),
    age: withMetrics([
      { name: '35-44 года', cost: 232226.62, clicks: 5803, conv: 10 },
      { name: '25-34 года', cost: 226038.26, clicks: 5267, conv: 12 },
      { name: '45-54 года', cost: 167904.29, clicks: 4033, conv: 6 },
      { name: 'Старше 55', cost: 166075.78, clicks: 8395, conv: 6 },
      { name: 'Не определен', cost: 94771.51, clicks: 3348, conv: 1 },
    ]),
    geo: withMetrics([
      { name: 'Новосибирск', cost: 864027.43, clicks: 26515, conv: 33 },
      { name: 'Не определено', cost: 12672.57, clicks: 162, conv: 0 },
      { name: 'Татарск', cost: 969.26, clicks: 2, conv: 0 },
      { name: 'Ростов-на-Дону', cost: 964.6, clicks: 5, conv: 0 },
      { name: 'Магадан', cost: 711.92, clicks: 1, conv: 0 },
      { name: 'Ангарск', cost: 662.92, clicks: 1, conv: 0 },
      { name: 'Бердск', cost: 621.45, clicks: 14, conv: 0 },
      { name: 'Волгоград', cost: 587.87, clicks: 1, conv: 1 },
      { name: 'Москва', cost: 540.34, clicks: 11, conv: 0 },
      { name: 'Ялта', cost: 500.16, clicks: 1, conv: 0 },
      { name: 'Прочее', cost: 4757.86, clicks: 133, conv: 1 },
    ]),
    campaigns: withMetrics([
      { name: 'SODA|ЕПК|Сети|Квиз|Ключи|Новосибирск|Квартиры с отделкой', cost: 166668.43, clicks: 2498, conv: 14 },
      { name: 'SODA|ЕПК|Поиск|Квиз|Ключи|Новосибирск|Выгода', cost: 162367.79, clicks: 990, conv: 11 },
      { name: 'SODA|ЕПК|Поиск|Квиз|Бренд|Новосибирск|Квартиры с отделкой', cost: 134137.79, clicks: 287, conv: 4 },
      { name: 'SODA|ЕПК|Сети|Квиз|Аудитории|Новосибирск|Квартиры с отделкой', cost: 125555.67, clicks: 2151, conv: 5 },
      { name: 'SODA|ЕПК|Сети|Квиз|Автотаргет|Новосибирск|Квартиры с отделкой', cost: 83174.59, clicks: 2743, conv: 0 },
      { name: 'SODA|ЕПК|Сети|Квиз|Интересы|Новосибирск|База с ценой', cost: 49123.32, clicks: 3969, conv: 0 },
      { name: 'SODA|ЕПК|Сети|Квиз|Автотаргет|Новосибирск|База с ценой', cost: 45300.23, clicks: 3902, conv: 1 },
      { name: 'SODA|ЕПК|Сети|Квиз|Ключи|Новосибирск|Квартиры с отделкой-2', cost: 34018.81, clicks: 3983, conv: 0 },
      { name: 'SODA|ЕПК|Сети|Квиз|Интересы|Новосибирск|Квартиры с отделкой', cost: 31556.29, clicks: 618, conv: 0 },
      { name: 'SODA|ЕПК|Сети|Квиз|Интересы|Новосибирск|Семейная ипотека 4%', cost: 27624.39, clicks: 3067, conv: 0 },
      { name: 'Прочее', cost: 27489.16, clicks: 2638, conv: 0 },
    ]),
    groups: withMetrics([
      { name: 'Бренд', cost: 134137.79, clicks: 287, conv: 4 },
      { name: 'Ключи-Новосибирск (1)', cost: 127917.09, clicks: 1978, conv: 12 },
      { name: 'Аудитории-LAL Целевые', cost: 120189.0, clicks: 2113, conv: 5 },
      { name: 'Ключи-Новосибирск (2)', cost: 86041.35, clicks: 570, conv: 8 },
      { name: 'Общая (Автотаргет)', cost: 83174.59, clicks: 2743, conv: 0 },
      { name: 'Ключи-Новостройки', cost: 59143.59, clicks: 317, conv: 1 },
      { name: 'Общая (База с ценой)', cost: 45300.23, clicks: 3902, conv: 1 },
      { name: 'Интересы-Недвижимость', cost: 35100.29, clicks: 3182, conv: 0 },
      { name: 'Ключи-Коммерческие', cost: 31685.89, clicks: 364, conv: 2 },
      { name: 'Общая (Ключи-2)', cost: 27489.16, clicks: 2638, conv: 0 },
      { name: 'Прочее', cost: 136837.48, clicks: 8752, conv: 2 },
    ]),
    ads: withMetrics([
      { name: 'Квартира с отделкой в Новосибирске — успей купить!', cost: 101577.47, clicks: 1541, conv: 10 },
      { name: 'Квартиры с чистовой отделкой в ЖК Астон.Шесть звёзд! (1)', cost: 49441.03, clicks: 107, conv: 2 },
      { name: 'Квартиры от застройщика с отделкой в Новосибирске! (1)', cost: 43187.33, clicks: 1503, conv: 0 },
      { name: 'Последние квартиры в ЖК комфорт+ класса по спеццене! (1)', cost: 31241.85, clicks: 200, conv: 2 },
      { name: 'Квартиры с чистовой отделкой в ЖК Астон.Шесть звёзд! (2)', cost: 30247.07, clicks: 52, conv: 2 },
      { name: 'Квартиры от застройщика с отделкой в Новосибирске! (2)', cost: 30029.01, clicks: 262, conv: 2 },
      { name: 'Просторные квартиры комфорт-плюс в Новосибирске', cost: 27161.53, clicks: 2841, conv: 1 },
      { name: 'Купите квартиру с отделкой в ЖК Астон.Шесть звёзд!', cost: 25565.89, clicks: 53, conv: 0 },
      { name: 'Последние квартиры в ЖК комфорт+ класса по спеццене! (2)', cost: 24629.67, clicks: 126, conv: 1 },
      { name: 'ПСК 19,499–22,333% Квартиры с отделкой в ипотеку 0,1%', cost: 19146.18, clicks: 2095, conv: 0 },
      { name: 'Прочее (371 объявление)', cost: 504789.47, clicks: 18066, conv: 15 },
    ]),
  },
};

export type AccountKey = keyof typeof accounts;
