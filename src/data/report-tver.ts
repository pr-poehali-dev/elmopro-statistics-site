export const NEON = {
  cyan: 'hsl(175, 84%, 52%)',
  violet: 'hsl(265, 84%, 66%)',
  lime: 'hsl(88, 80%, 55%)',
  amber: 'hsl(38, 92%, 58%)',
  grid: 'hsl(231, 22%, 18%)',
  pos: 'hsl(152,70%,50%)',
  neg: 'hsl(355,80%,62%)',
  gray: 'hsl(220,10%,55%)',
};

export const PIE_COLORS = [NEON.cyan, NEON.violet, NEON.amber, NEON.lime, 'hsl(210,10%,50%)', 'hsl(340,70%,60%)'];

export const CLIENT = {
  name: 'ЖК Новая Тверь',
  site: 'https://new-twer-talan.ru/',
  period: 'Июнь 2026',
  weeklyStats: 'https://docs.google.com/spreadsheets/d/10_PZaKMT3z2H5ACMmeqTLrJJ0iD2Lt4Q0SW2JME1bXk/edit?gid=701138399#gid=701138399',
  paybackFunnel: 'https://docs.google.com/spreadsheets/d/10_PZaKMT3z2H5ACMmeqTLrJJ0iD2Lt4Q0SW2JME1bXk/edit?gid=701138399#gid=701138399',
};

export const AGENCY = {
  name: 'Tolka Digital',
  logo: 'https://tolkadigital.ru/wp-content/themes/tolka-digital/assets/images/logo.svg',
};

export const aboutLinks = [
  { icon: 'CalendarRange', label: 'Понедельная статистика', desc: 'Расход, заявки и стоимость лида по неделям месяца.', href: CLIENT.weeklyStats, cta: 'Открыть таблицу' },
  { icon: 'TrendingUp', label: 'Воронка окупаемости', desc: 'Путь от лида до сделки и юнит-экономика проекта.', href: CLIENT.paybackFunnel, cta: 'Открыть таблицу' },
  { icon: 'Globe', label: 'Сайт', desc: 'Посадочная страница, на которую ведёт реклама.', href: CLIENT.site, cta: 'new-twer-talan.ru' },
];

// ── Блок: план / факт за прошедший месяц (июнь 2026) ──
// isCost=true → выполнение считается как plan/fact (дороже плана — хуже)
// isCost=false → выполнение считается как fact/plan (больше плана — лучше)
export const planFact = [
  { param: 'Расход, ₽', planNum: 156000, factNum: 163325, planLabel: '156 000', factLabel: '163 325 ₽', isCost: false },
  { param: 'Лиды', planNum: 38, factNum: 24, planLabel: '38', factLabel: '24', isCost: false },
  { param: 'CPL, ₽', planNum: 4105, factNum: 6805, planLabel: '4 105', factLabel: '6 805 ₽', isCost: true },
  { param: 'Целевые лиды', planNum: 19, factNum: 9, planLabel: '19', factLabel: '9', isCost: false },
  { param: 'CPTL, ₽', planNum: 8211, factNum: 18147, planLabel: '8 211', factLabel: '18 147 ₽', isCost: true },
  { param: 'CR лид→цел, %', planNum: 50, factNum: 38, planLabel: '50%', factLabel: '38%', isCost: false },
];

export const planFactNotes: string[] = [];

// ── Блок: факт май vs факт июнь ──
export const monthCompare = [
  { param: 'Расход, ₽', mayNum: 159633, junNum: 163325, mayLabel: '159 633 ₽', junLabel: '163 325 ₽', isCost: false },
  { param: 'Лиды', mayNum: 32, junNum: 24, mayLabel: '32', junLabel: '24', isCost: false },
  { param: 'CPL, ₽', mayNum: 4989, junNum: 6805, mayLabel: '4 989 ₽', junLabel: '6 805 ₽', isCost: true },
  { param: 'Целевые лиды', mayNum: 17, junNum: 9, mayLabel: '17', junLabel: '9', isCost: false },
  { param: 'CPTL, ₽', mayNum: 9390, junNum: 18147, mayLabel: '9 390 ₽', junLabel: '18 147 ₽', isCost: true },
  { param: 'CR лид→цел, %', mayNum: 53, junNum: 38, mayLabel: '53%', junLabel: '38%', isCost: false },
];

// ── Блок: тренды 2026 года. Работа по проекту началась в апреле — до этого и за 2025 год данных нет (нули) ──
export const yearly = [
  { m: 'Янв', cost26: 0, lead26: 0, lc26: 0, qual26: 0, qc26: 0, cr26: 0 },
  { m: 'Фев', cost26: 0, lead26: 0, lc26: 0, qual26: 0, qc26: 0, cr26: 0 },
  { m: 'Мар', cost26: 0, lead26: 0, lc26: 0, qual26: 0, qc26: 0, cr26: 0 },
  { m: 'Апр', cost26: 77821, lead26: 15, lc26: 5188, qual26: 5, qc26: 15564, cr26: 33 },
  { m: 'Май', cost26: 159633, lead26: 32, lc26: 4989, qual26: 17, qc26: 9390, cr26: 53 },
  { m: 'Июн', cost26: 163325, lead26: 24, lc26: 6805, qual26: 9, qc26: 18147, cr26: 38 },
  { m: 'Июл', cost26: 0, lead26: 0, lc26: 0, qual26: 0, qc26: 0, cr26: 0 },
  { m: 'Авг', cost26: 0, lead26: 0, lc26: 0, qual26: 0, qc26: 0, cr26: 0 },
  { m: 'Сен', cost26: 0, lead26: 0, lc26: 0, qual26: 0, qc26: 0, cr26: 0 },
  { m: 'Окт', cost26: 0, lead26: 0, lc26: 0, qual26: 0, qc26: 0, cr26: 0 },
  { m: 'Ноя', cost26: 0, lead26: 0, lc26: 0, qual26: 0, qc26: 0, cr26: 0 },
  { m: 'Дек', cost26: 0, lead26: 0, lc26: 0, qual26: 0, qc26: 0, cr26: 0 },
];

// ── Вывод маркетолога (Раздел 04): 3 месяца работы 2026 года ──
export const yearlyInsight =
  'За 3 месяца работы в 2026 году (апрель-июнь) расход вырос более чем в 2 раза — с 77 821 ₽ до 163 325 ₽ — ' +
  'на фоне роста числа лидов с 15 до пикового значения 32 в мае и последующего отката до 24 в июне. ' +
  'CPL заметно вырос в июне — до 6 805 ₽ против 4 989 ₽ в мае, при этом CR из лида в целевой упал с 53% до 38%, ' +
  'а CPTL почти удвоился (9 390 → 18 147 ₽). Ключевая причина — рост стоимости трафика при снижении качества конверсии в целевые лиды. ' +
  'Рекомендация: усилить квалификацию лидов на входе, скорректировать таргетинги по устройствам и полу/возрасту (см. раздел «Разрезы»), ' +
  'не наращивать бюджет без предварительной работы над конверсией в целевой лид.';

// ── Спрос по Wordstat: реальные данные, число запросов по месяцам, 2024-2026 ──
export const demand = [
  { m: 'Янв', y24: 95119, y25: 75422, y26: 73314 },
  { m: 'Фев', y24: 85564, y25: 64112, y26: 65537 },
  { m: 'Мар', y24: 80949, y25: 64221, y26: 73441 },
  { m: 'Апр', y24: 73575, y25: 55888, y26: 75949 },
  { m: 'Май', y24: 70019, y25: 54580, y26: 62742 },
  { m: 'Июн', y24: 67602, y25: 58280, y26: 65272 },
  { m: 'Июл', y24: 74195, y25: 65169, y26: null },
  { m: 'Авг', y24: 73222, y25: 70087, y26: null },
  { m: 'Сен', y24: 65918, y25: 63221, y26: null },
  { m: 'Окт', y24: 71083, y25: 75991, y26: null },
  { m: 'Ноя', y24: 69330, y25: 72378, y26: null },
  { m: 'Дек', y24: 61114, y25: 64264, y26: null },
];

// ── Разрезы за июнь 2026: расход / конверсии по каждому измерению ──
export const deviceDim = [
  { name: 'Смартфоны', cost: 121853.24, leads: 15 },
  { name: 'Десктопы', cost: 38794.93, leads: 2 },
  { name: 'Планшеты', cost: 2582.44, leads: 0 },
];

export const genderDim = [
  { name: 'Женский', cost: 112680.5, leads: 10 },
  { name: 'Мужской', cost: 46882.34, leads: 7 },
  { name: 'Не определён', cost: 3667.76, leads: 0 },
];

export const ageDim = [
  { name: '25-34 года', cost: 53675.24, leads: 7 },
  { name: '35-44 года', cost: 49404.94, leads: 7 },
  { name: '45-54 года', cost: 32496.37, leads: 2 },
  { name: 'Старше 55', cost: 22973.85, leads: 1 },
  { name: 'Не опр.', cost: 4680.20, leads: 0 },
];

export const platformDim = [
  { name: 'Сети', cost: 82719.19, leads: 10 },
  { name: 'Поиск', cost: 80511.42, leads: 7 },
];

// ── География: доля, расход, конверсии ──
export const byGeo = [
  { name: 'Тверь', share: 68.7, cost: 112096.63, leads: 13 },
  { name: 'Не определено', share: 16.2, cost: 26384.21, leads: 3 },
  { name: 'Другие города обл.', share: 15.2, cost: 24749.75, leads: 1 },
];

// ── Кампании ──
export const campaigns = [
  'novaya-tver_yd_tvr_master_interests_semeinaya-ipoteka-6',
  'novaya-tver_yd_tvr_master_interests_semeinaya-klychi',
  'novaya-tver_yd_tvr_master_interests_platezh-po-it-ipoteka',
];

// ── Агрегат по кампаниям (реальные данные Яндекс Директ за июнь 2026) ──
export const campaignTotals = [
  { name: campaigns[0], cost: 120567.11, impressions: 515313, clicks: 1336, ctr: 0.26, cpc: 90.24, avgPos: 2.32, bounce: 40.22, conv: 12, cr: 0.90, cpa: 10047.26 },
  { name: campaigns[1], cost: 32589.62, impressions: 97740, clicks: 589, ctr: 0.60, cpc: 55.33, avgPos: 2.83, bounce: 38.63, conv: 3, cr: 0.51, cpa: 10863.21 },
  { name: campaigns[2], cost: 10073.88, impressions: 31623, clicks: 178, ctr: 0.56, cpc: 56.59, avgPos: 3.14, bounce: 33.95, conv: 2, cr: 1.12, cpa: 5036.94 },
];

// ── Объявления: заголовки/тексты и картинки будут добавлены после загрузки файла с креативами ──
export const adsFull: { campaign: string; title: string; text: string; image?: string; cost: number; clicks: number; cpc: number; conv: number; cr: number; cpa: number }[] = [
  { campaign: campaigns[0], title: 'Семейная ипотека', text: 'Заголовок и текст объявления будут добавлены после загрузки файла с креативами.', cost: 120567.11, clicks: 1336, cpc: 90.24, conv: 12, cr: 0.90, cpa: 10047.26 },
  { campaign: campaigns[1], title: 'Семейные ключи', text: 'Заголовок и текст объявления будут добавлены после загрузки файла с креативами.', cost: 32589.62, clicks: 589, cpc: 55.33, conv: 3, cr: 0.51, cpa: 10863.21 },
  { campaign: campaigns[2], title: 'Платёж по ипотеке', text: 'Заголовок и текст объявления будут добавлены после загрузки файла с креативами.', cost: 10073.88, clicks: 178, cpc: 56.59, conv: 2, cr: 1.12, cpa: 5036.94 },
];

// ── Работы ──
export const workDone = [
  'Отслеживание показателей рекламы',
  'Работа с корректировками пола/возраста и устройств',
  'Тестирование элементов рекламы (УТП объявлений и их форматов)',
  'Исключение неэффективных площадок',
  'Исключение неэффективных ключевых запросов',
  'Перераспределение бюджета с неэффективных запросов на конверсионные',
  'Отключение неэффективных групп объявлений/фраз',
];

export const workPlan = [
  'Отслеживание и корректировка поисковых фраз',
  'Чистка семантики (спам, минус-слова)',
  'Держаться в спецразмещении (Топ 1-2 на Поиске) и выкупать 70%+ объёма трафика',
];

// ── План на новый месяц ──
export const nextPlan = [
  { param: 'Расход, ₽', plan: '165 000' },
  { param: 'Лиды', plan: '30' },
  { param: 'CPL, ₽', plan: '5 500' },
  { param: 'Целевые лиды', plan: '12' },
  { param: 'CPTL, ₽', plan: '13 750' },
  { param: 'CR лид→цел, %', plan: '40%' },
];

// ── Выводы и гипотезы по разрезам: 3 группы по важности ──
export const breakdownInsights = [
  {
    level: 'high', label: 'Высокий приоритет', icon: 'AlertTriangle', color: NEON.neg,
    items: [
      { title: 'Устройства', text: 'Смартфоны дают почти все конверсии (15 из 17) с CPA почти в 2,4 раза ниже, чем на десктопах (8 124 ₽ против 19 397 ₽).', hint: 'Сместить бюджет с десктопов в пользу смартфонов, повысить корректировки на mobile' },
      { title: 'Кампании', text: 'Кампания «Платёж по ипотеке» показывает самый низкий CPA (5 037 ₽) при минимальном расходе.', hint: 'Масштабировать эту кампанию, увеличить дневной бюджет' },
    ],
  },
  {
    level: 'mid', label: 'Средний приоритет', icon: 'AlertCircle', color: NEON.amber,
    items: [
      { title: 'Пол и возраст', text: 'Мужчины дают заметно дешевле конверсию (6 697 ₽), чем женщины (11 268 ₽); возраст 25-44 — самый результативный сегмент, 45+ заметно дороже.', hint: 'Повысить ставки на мужскую аудиторию 25-44, снизить на 45+' },
      { title: 'Тип площадки', text: 'Сети дают более дешёвую конверсию (8 272 ₽), чем Поиск (11 502 ₽), несмотря на менее целевой трафик.', hint: 'Перераспределить часть бюджета в РСЯ, сохранив контроль качества' },
    ],
  },
  {
    level: 'low', label: 'Низкий приоритет', icon: 'Info', color: NEON.cyan,
    items: [
      { title: 'География', text: '69% бюджета сосредоточено в Твери с адекватным CPA (8 623 ₽), точечные показы в других городах области пока неэффективны.', hint: 'Сократить показы вне Твери, тестировать точечно' },
      { title: 'Кампании', text: 'Кампания «Семейные ключи» — второй по величине расход, но самый высокий CPA среди активных кампаний (10 863 ₽).', hint: 'Протестировать новые креативы и УТП в этой кампании' },
    ],
  },
];

export const contacts = {
  phone: '+7 (ххх) ххх-хх-хх',
  email: 'info@ххх.ru',
  office: 'г. Москва',
};