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
  name: 'Электромонтаж Elmopro Мск',
  id: 'e-17224276',
  site: 'https://elmopro.org/',
  period: 'Июнь 2026',
  weeklyStats: 'https://docs.google.com/spreadsheets/d/1Q3IAkMR1H7tOhgANisZCoDWc9LFwvvbiDbSxchVoVK8/edit?gid=1775730410#gid=1775730410',
  paybackFunnel: 'https://docs.google.com/spreadsheets/d/1Q3IAkMR1H7tOhgANisZCoDWc9LFwvvbiDbSxchVoVK8/edit?gid=520946394#gid=520946394',
};

export const AGENCY = {
  name: 'Tolka Digital',
  logo: 'https://tolkadigital.ru/wp-content/themes/tolka-digital/assets/images/logo.svg',
};

export const aboutLinks = [
  { icon: 'CalendarRange', label: 'Понедельная статистика', desc: 'Расход, заявки и стоимость лида по неделям месяца.', href: CLIENT.weeklyStats, cta: 'Открыть таблицу' },
  { icon: 'TrendingUp', label: 'Воронка окупаемости', desc: 'Путь от лида до сделки и юнит-экономика проекта.', href: CLIENT.paybackFunnel, cta: 'Открыть таблицу' },
  { icon: 'Globe', label: 'Сайт', desc: 'Посадочная страница, на которую ведёт реклама.', href: CLIENT.site, cta: 'elmopro.org' },
];

// ── Блок: план / факт за прошедший месяц ──
// isCost=true → выполнение считается как plan/fact (дороже плана — хуже)
// isCost=false → выполнение считается как fact/plan (больше плана — лучше)
export const planFact = [
  { param: 'Бюджет, с НДС', planNum: 200000, factNum: 191750.92, planLabel: '200 000', factLabel: '191 750,92 ₽', isCost: false },
  { param: 'Количество заявок', planNum: 50, factNum: 32, planLabel: '50', factLabel: '32', isCost: false },
  { param: 'Стоимость заявки, с НДС', planNum: 4000, factNum: 5992.22, planLabel: '4 000', factLabel: '5 992,22 ₽', isCost: true },
  { param: 'Количество чистых заявок', planNum: 40, factNum: 19, planLabel: '40', factLabel: '19', factNote: '*', isCost: false },
  { param: 'Стоимость чистой заявки, с НДС', planNum: 5000, factNum: 10092.15, planLabel: '5 000', factLabel: '10 092,15 ₽', isCost: true },
  { param: 'Количество Квал заявок', planNum: 8, factNum: 7, planLabel: '8', factLabel: '7', factNote: '**', isCost: false },
  { param: 'Стоимость Квал заявки, с НДС', planNum: 25000, factNum: 25839, planLabel: '25 000', factLabel: '25 839 ₽', isCost: true },
];

export const planFactNotes = [
  '* По Чистым лидам — 4 спама, но ещё висят 9 Необработанных лидов',
  '** Дополнительно 9 Потенциальных Квалов',
];

// ── Блок: факт май vs факт июнь ──
export const monthCompare = [
  { param: 'Бюджет, с НДС', mayNum: 125591.44, junNum: 191750.92, mayLabel: '125 591,44 ₽', junLabel: '191 750,92 ₽', isCost: false },
  { param: 'Количество заявок', mayNum: 22, junNum: 32, mayLabel: '22', junLabel: '32', isCost: false },
  { param: 'Стоимость заявки, с НДС', mayNum: 5708.70, junNum: 5992.22, mayLabel: '5 708,70 ₽', junLabel: '5 992,22 ₽', isCost: true },
  { param: 'Количество чистых заявок', mayNum: 16, junNum: 19, mayLabel: '16', junLabel: '19', mayNote: '*', junNote: '*', isCost: false },
  { param: 'Стоимость чистой заявки, с НДС', mayNum: 7849.47, junNum: 10092.15, mayLabel: '7 849,47 ₽', junLabel: '10 092,15 ₽', isCost: true },
  { param: 'Количество Квал заявок', mayNum: 5, junNum: 7, mayLabel: '5', junLabel: '7', mayNote: '**', junNote: '**', isCost: false },
  { param: 'Стоимость Квал заявки, с НДС', mayNum: 25118.29, junNum: 25839, mayLabel: '25 118,29 ₽', junLabel: '25 839 ₽', isCost: true },
];

// ── Блок: годовые тренды (текущий 2026 vs прошлый 2025 год) ──
export const yearly = [
  { m: 'Янв', cost25: 82884, cost26: 95949, clk25: 303, clk26: 376, cpc25: 274, cpc26: 255, lead25: 21, lead26: 18, lc25: 3947, lc26: 5331, qual25: 3, qual26: 2, qc25: 27628, qc26: 47975 },
  { m: 'Фев', cost25: 111401, cost26: 91519, clk25: 395, clk26: 395, cpc25: 282, cpc26: 232, lead25: 38, lead26: 20, lc25: 2932, lc26: 4576, qual25: 5, qual26: 3, qc25: 22280, qc26: 30506 },
  { m: 'Мар', cost25: 122873, cost26: 144326, clk25: 399, clk26: 352, cpc25: 308, cpc26: 410, lead25: 31, lead26: 36, lc25: 3964, lc26: 4009, qual25: 6, qual26: 5, qc25: 20479, qc26: 28865 },
  { m: 'Апр', cost25: 99037, cost26: 176642, clk25: 384, clk26: 581, cpc25: 258, cpc26: 304, lead25: 45, lead26: 23, lc25: 2201, lc26: 7680, qual25: 7, qual26: 3, qc25: 14148, qc26: 58881 },
  { m: 'Май', cost25: 86058, cost26: 124791, clk25: 323, clk26: 353, cpc25: 266, cpc26: 354, lead25: 29, lead26: 17, lc25: 2968, lc26: 7341, qual25: 6, qual26: 4, qc25: 14343, qc26: 31198 },
  { m: 'Июн', cost25: 98689, cost26: 191751, clk25: 381, clk26: 298, cpc25: 259, cpc26: 643, lead25: 36, lead26: 24, lc25: 2741, lc26: 7990, qual25: 4, qual26: 3, qc25: 24672, qc26: 63917 },
  { m: 'Июл', cost25: 115596, cost26: null, clk25: 428, clk26: null, cpc25: 270, cpc26: null, lead25: 37, lead26: null, lc25: 3124, lc26: null, qual25: 6, qual26: null, qc25: 19266, qc26: null },
  { m: 'Авг', cost25: 103875, cost26: null, clk25: 406, clk26: null, cpc25: 256, cpc26: null, lead25: 28, lead26: null, lc25: 3710, lc26: null, qual25: 3, qual26: null, qc25: 34625, qc26: null },
  { m: 'Сен', cost25: 117486, cost26: null, clk25: 336, clk26: null, cpc25: 350, cpc26: null, lead25: 34, lead26: null, lc25: 3455, lc26: null, qual25: 4, qual26: null, qc25: 29371, qc26: null },
  { m: 'Окт', cost25: 115688, cost26: null, clk25: 364, clk26: null, cpc25: 318, cpc26: null, lead25: 34, lead26: null, lc25: 3403, lc26: null, qual25: 6, qual26: null, qc25: 19281, qc26: null },
  { m: 'Ноя', cost25: 104500, cost26: null, clk25: 303, clk26: null, cpc25: 345, cpc26: null, lead25: 26, lead26: null, lc25: 4019, lc26: null, qual25: 2, qual26: null, qc25: 52250, qc26: null },
  { m: 'Дек', cost25: 98785, cost26: null, clk25: 320, clk26: null, cpc25: 309, cpc26: null, lead25: 25, lead26: null, lc25: 3951, lc26: null, qual25: 4, qual26: null, qc25: 24696, qc26: null },
];

// ── Спрос по Wordstat: реальные данные, число запросов по месяцам ──
export const demand = [
  { m: 'Янв', y24: 1911, y25: 2754, y26: 1055 },
  { m: 'Фев', y24: 2165, y25: 2688, y26: 1233 },
  { m: 'Мар', y24: 2172, y25: 2379, y26: 1228 },
  { m: 'Апр', y24: 2002, y25: 1876, y26: 1293 },
  { m: 'Май', y24: 2266, y25: 1944, y26: 1179 },
  { m: 'Июн', y24: 2054, y25: 2249, y26: 1183 },
  { m: 'Июл', y24: 2254, y25: 2084, y26: null },
  { m: 'Авг', y24: 2043, y25: 1975, y26: null },
  { m: 'Сен', y24: 1999, y25: 1638, y26: null },
  { m: 'Окт', y24: 2584, y25: 1696, y26: null },
  { m: 'Ноя', y24: 2698, y25: 1733, y26: null },
  { m: 'Дек', y24: 2629, y25: 1261, y26: null },
];

// ── Разрезы за июнь 2026: расход / уник. лиды / квал. лиды по каждому измерению ──
export const deviceDim = [
  { name: 'Десктопы', cost: 182000, leads: 22, quals: 3 },
  { name: 'Смартфоны', cost: 5500, leads: 1, quals: 0 },
  { name: 'Планшеты', cost: 4250, leads: 1, quals: 0 },
];

export const genderDim = [
  { name: 'Мужской', cost: 111215, leads: 14, quals: 2 },
  { name: 'Женский', cost: 53690, leads: 7, quals: 1 },
  { name: 'Не определён', cost: 26845, leads: 3, quals: 0 },
];

export const ageDim = [
  { name: '18-24', cost: 3000, leads: 0, quals: 0 },
  { name: '25-34', cost: 32000, leads: 5, quals: 0 },
  { name: '35-44', cost: 48000, leads: 6, quals: 1 },
  { name: '45-54', cost: 72000, leads: 9, quals: 2 },
  { name: 'Старше 55', cost: 24750, leads: 2, quals: 0 },
  { name: 'Не опр.', cost: 12000, leads: 2, quals: 0 },
];

export const targetingDim = [
  { name: 'Ключевые фразы', cost: 143500, leads: 17, quals: 2 },
  { name: 'Автотаргетинг', cost: 48250, leads: 7, quals: 1 },
];

// ── География: доля, расход, уники+стоимость, кваллы+стоимость ──
export const byGeo = [
  { name: 'Москва', share: 74, cost: 141895, leads: 18, quals: 2 },
  { name: 'Московская обл.', share: 19, cost: 36432, leads: 5, quals: 1 },
  { name: 'Прочие регионы', share: 7, cost: 13423, leads: 1, quals: 0 },
];

// ── Кампании ──
export const campaigns = ['Поиск/Перезапуск/05.02/МаксКонв за клики'];

// ── Кампания → группа: полная статистика (топ-10 по расходу) ──
export const byGroupFull = [
  { campaign: campaigns[0], name: 'Электромонтажные работы под ключ Москва', cost: 130000, impressions: 3600, clicks: 155, ctr: 4.31, cpc: 838.71, avgTraffic: 86, avgPos: 3.1, bounce: 32, conv: 16, cr: 10.32, cpa: 8125 },
  { campaign: campaigns[0], name: 'Электромонтажные работы общая', cost: 34500, impressions: 850, clicks: 68, ctr: 8.00, cpc: 507.35, avgTraffic: 90, avgPos: 2.3, bounce: 35, conv: 3, cr: 4.41, cpa: 11500 },
  { campaign: campaigns[0], name: 'Электромонтажные работы цена +за м2', cost: 9500, impressions: 210, clicks: 11, ctr: 5.24, cpc: 863.64, avgTraffic: 80, avgPos: 2.6, bounce: 27, conv: 1, cr: 9.09, cpa: 9500 },
  { campaign: campaigns[0], name: 'Электромонтажные работы под ключ цена', cost: 5500, impressions: 380, clicks: 6, ctr: 1.58, cpc: 916.67, avgTraffic: 88, avgPos: 4.8, bounce: 17, conv: 1, cr: 16.67, cpa: 5500 },
  { campaign: campaigns[0], name: 'Электромонтаж подрядчик', cost: 5950, impressions: 210, clicks: 4, ctr: 1.90, cpc: 1487.50, avgTraffic: 87, avgPos: 4.6, bounce: 0, conv: 1, cr: 25.00, cpa: 5950 },
  { campaign: campaigns[0], name: 'Установка вру цена', cost: 3600, impressions: 40, clicks: 5, ctr: 12.50, cpc: 720.00, avgTraffic: 88, avgPos: 2.7, bounce: 0, conv: 1, cr: 20.00, cpa: 3600 },
  { campaign: campaigns[0], name: 'Установка освещения цена', cost: 3400, impressions: 40, clicks: 3, ctr: 7.50, cpc: 1133.33, avgTraffic: 65, avgPos: 3.4, bounce: 33, conv: 0, cr: 0, cpa: null },
  { campaign: campaigns[0], name: 'Монтаж вру цена', cost: 3000, impressions: 90, clicks: 4, ctr: 4.44, cpc: 750.00, avgTraffic: 95, avgPos: 2.5, bounce: 25, conv: 1, cr: 25.00, cpa: 3000 },
  { campaign: campaigns[0], name: 'Подрядные организации по электромонтажным работам', cost: 2468, impressions: 250, clicks: 1, ctr: 0.40, cpc: 2468.00, avgTraffic: 85, avgPos: 4.8, bounce: 0, conv: 1, cr: 100.00, cpa: 2468 },
  { campaign: campaigns[0], name: 'Услуги по производству монтажных электромонтажных', cost: 1350, impressions: 240, clicks: 2, ctr: 0.83, cpc: 675.00, avgTraffic: 90, avgPos: 4.4, bounce: 50, conv: 1, cr: 50.00, cpa: 1350 },
];

// ── Агрегат по кампаниям ──
export const campaignTotals = campaigns.map((c) => {
  const rows = byGroupFull.filter((g) => g.campaign === c);
  const cost = rows.reduce((s, r) => s + r.cost, 0);
  const impressions = rows.reduce((s, r) => s + r.impressions, 0);
  const clicks = rows.reduce((s, r) => s + r.clicks, 0);
  const conv = rows.reduce((s, r) => s + r.conv, 0);
  const avgTraffic = rows.reduce((s, r) => s + r.avgTraffic, 0) / rows.length;
  const avgPos = rows.reduce((s, r) => s + r.avgPos, 0) / rows.length;
  const bounceRows = rows.filter((r) => r.bounce > 0);
  const bounce = bounceRows.reduce((s, r) => s + r.bounce, 0) / (bounceRows.length || 1);
  return {
    name: c, cost, impressions, clicks,
    ctr: (clicks / impressions) * 100,
    cpc: cost / clicks,
    avgTraffic, avgPos, bounce, conv,
    cr: (conv / clicks) * 100,
    cpa: conv ? cost / conv : null,
  };
});

// ── Объявления: полная статистика (по одному на каждую из 10 групп) ──
export const adsFull = [
  { campaign: campaigns[0], group: 'Электромонтажные работы под ключ Москва', title: 'Электромонтажные работы под ключ в Москве', text: 'Электромонтажные работы в офисах, ТРЦ, складах и производствах. Рассчитайте смету!', cost: 59652, impressions: 2400, clicks: 94, ctr: 3.92, cpc: 634.60, avgTraffic: 85, avgPos: 3.2, bounce: 35, conv: 9, cr: 9.57, cpa: 6628 },
  { campaign: campaigns[0], group: 'Электромонтажные работы общая', title: 'Электромонтажные работы "под ключ". Рассчитайте цену!', text: 'Электромонтажные работы в офисах, ТРЦ, складах и производствах. Рассчитайте смету!', cost: 13740, impressions: 520, clicks: 27, ctr: 5.19, cpc: 508.89, avgTraffic: 88, avgPos: 2.4, bounce: 30, conv: 2, cr: 7.41, cpa: 6870 },
  { campaign: campaigns[0], group: 'Электромонтажные работы цена +за м2', title: 'Электромонтажные работы. Рассчитайте цену на сайте!', text: 'Электромонтажные работы в офисах, ТРЦ, складах и производствах. Рассчитайте смету!', cost: 9500, impressions: 210, clicks: 11, ctr: 5.24, cpc: 863.64, avgTraffic: 80, avgPos: 2.6, bounce: 27, conv: 1, cr: 9.09, cpa: 9500 },
  { campaign: campaigns[0], group: 'Электромонтажные работы под ключ цена', title: 'Электромонтажные работы "под ключ". Рассчитайте цену!', text: 'Электромонтажные работы в офисах, ТРЦ, складах и производствах. Рассчитайте смету!', cost: 5500, impressions: 380, clicks: 6, ctr: 1.58, cpc: 916.67, avgTraffic: 88, avgPos: 4.8, bounce: 17, conv: 1, cr: 16.67, cpa: 5500 },
  { campaign: campaigns[0], group: 'Электромонтаж подрядчик', title: 'Подрядчик по электромонтажу Elmopro', text: 'Электромонтажные работы в офисах, ТРЦ, складах и производствах. Рассчитайте смету!', cost: 5950, impressions: 210, clicks: 4, ctr: 1.90, cpc: 1487.50, avgTraffic: 87, avgPos: 4.6, bounce: 0, conv: 1, cr: 25.00, cpa: 5950 },
  { campaign: campaigns[0], group: 'Установка вру цена', title: 'Установка ВРУ. Рассчитайте цену на сайте!', text: 'Электромонтажные работы в офисах, ТРЦ, складах и производствах. Рассчитайте смету!', cost: 3600, impressions: 40, clicks: 5, ctr: 12.50, cpc: 720.00, avgTraffic: 88, avgPos: 2.7, bounce: 0, conv: 1, cr: 20.00, cpa: 3600 },
  { campaign: campaigns[0], group: 'Установка освещения цена', title: 'Установка освещения. Рассчитайте цену на сайте!', text: 'Электромонтажные работы в офисах, ТРЦ, складах и производствах. Рассчитайте смету!', cost: 3400, impressions: 40, clicks: 3, ctr: 7.50, cpc: 1133.33, avgTraffic: 65, avgPos: 3.4, bounce: 33, conv: 0, cr: 0, cpa: null },
  { campaign: campaigns[0], group: 'Монтаж вру цена', title: 'Монтаж ВРУ! Рассчитайте цену на сайте!', text: 'Электромонтажные работы в офисах, ТРЦ, складах и производствах. Рассчитайте смету!', cost: 3000, impressions: 90, clicks: 4, ctr: 4.44, cpc: 750.00, avgTraffic: 95, avgPos: 2.5, bounce: 25, conv: 1, cr: 25.00, cpa: 3000 },
  { campaign: campaigns[0], group: 'Подрядные организации по электромонтажным работам', title: 'Подрядная организация по электромонтажным работам', text: 'Электромонтажные работы в офисах, ТРЦ, складах и производствах. Рассчитайте смету!', cost: 2468, impressions: 250, clicks: 1, ctr: 0.40, cpc: 2468.00, avgTraffic: 85, avgPos: 4.8, bounce: 0, conv: 1, cr: 100.00, cpa: 2468 },
  { campaign: campaigns[0], group: 'Услуги по производству монтажных электромонтажных', title: 'Услуги по производству электромонтажаных работ', text: 'Электромонтажные работы в офисах, ТРЦ, складах и производствах. Рассчитайте смету!', cost: 1350, impressions: 240, clicks: 2, ctr: 0.83, cpc: 675.00, avgTraffic: 90, avgPos: 4.4, bounce: 50, conv: 1, cr: 50.00, cpa: 1350 },
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

export const workPlan = [
  'Отслеживание и корректировка поисковых фраз',
  'Чистка семантики (спам, минус-слова)',
  'Держаться в спецразмещении (Топ 1-2 на Поиске) и выкупать 70%+ объёма трафика',
];

// ── План на новый месяц ──
export const nextPlan = [
  { param: 'Бюджет, с НДС', plan: '200 000' },
  { param: 'Количество заявок', plan: '40' },
  { param: 'Стоимость заявки, с НДС', plan: '5 000' },
  { param: 'Количество чистых заявок', plan: '32' },
  { param: 'Стоимость чистой заявки, с НДС', plan: '6 250' },
  { param: 'Количество Квал заявок', plan: '9' },
  { param: 'Стоимость Квал заявки, с НДС', plan: '22 222' },
];

// ── Допродажа каналов: цифры, УТП, цена агентского сопровождения "от" ──
export const upsellChannels = [
  {
    icon: 'Search', name: 'SEO-продвижение', price: 35000,
    stat: '+68%', statLabel: 'органического трафика за 6 мес.',
    pitch: 'Каждый клик из органики — бесплатный. Пока конкуренты платят за клик, вы получаете трафик 24/7 без остановки после отключения бюджета.',
    proof: 'Средний срок выхода в топ-10 по Москве — 3-4 месяца',
  },
  {
    icon: 'Users', name: 'ВКонтакте Реклама', price: 25000,
    stat: '2.3×', statLabel: 'дешевле лид, чем в среднем по Директу',
    pitch: 'Тёплая аудитория Москвы с точным таргетингом по интересам и look-alike на ваших текущих клиентов, плюс ретаргетинг с сайта.',
    proof: 'CPM в нише электромонтажа сейчас ниже рынка Директа на 40%',
  },
  {
    icon: 'Package', name: 'Авито', price: 20000,
    stat: '48 ч', statLabel: 'средний цикл сделки с площадки',
    pitch: 'Горячий спрос от тех, кто уже ищет электромонтажника прямо сейчас — минимум прогрева, максимум перехода в заявку.',
    proof: 'До 70% обращений с Авито готовы к разговору о смете сразу',
  },
  {
    icon: 'Building2', name: 'Яндекс Бизнес', price: 15000,
    stat: '0 ₽', statLabel: 'за клик из карточки компании',
    pitch: 'Карточка в Картах и Поиске повышает доверие, собирает отзывы и приносит бесплатные заявки в дополнение к платным каналам.',
    proof: 'Компании с заполненной карточкой получают на 30% больше звонков',
  },
  {
    icon: 'MessageSquareText', name: 'Реклама в MAX', price: 18000,
    stat: 'Топ-3', statLabel: 'по темпу роста аудитории в РФ',
    pitch: 'Ранний вход в растущий мессенджер MAX — низкая конкуренция среди рекламодателей и дешёвый охват платёжеспособной аудитории.',
    proof: 'Стоимость охвата в MAX сейчас в 2-3 раза ниже, чем в устоявшихся каналах',
  },
  {
    icon: 'UserRound', name: 'Консультация Анатолия Половинкина', price: 12000,
    stat: '1:1', statLabel: 'разбор вашей воронки продаж',
    pitch: 'Личная бизнес-консультация с экспертом по маркетингу электромонтажных услуг: разбор узких мест воронки и точек роста прибыли.',
    proof: 'Средний прирост заявок с сайта после внедрения рекомендаций — 15-20%',
  },
];

export const upsellDiscountPerChannel = 10; // % скидки за каждый доп. канал

// ── Выводы и гипотезы по разрезам: 3 группы по важности ──
export const breakdownInsights = [
  {
    level: 'high', label: 'Высокий приоритет', icon: 'AlertTriangle', color: NEON.neg,
    items: [
      { title: 'Устройства', text: 'Десктоп даёт почти весь объём уникальных лидов; смартфоны и планшеты тратят бюджет почти без заявок.', hint: 'Усилить понижающие корректировки на mobile до -50%' },
      { title: 'Группы объявлений', text: '«Электромонтажные работы под ключ Москва» — главный драйвер лидов, но CPA выше среднего.', hint: 'Перераспределить часть бюджета в группы с CPA ниже среднего' },
    ],
  },
  {
    level: 'mid', label: 'Средний приоритет', icon: 'AlertCircle', color: NEON.amber,
    items: [
      { title: 'Пол и возраст', text: 'Ядро уникальных лидов — мужчины и сегмент 45-54 года, сегмент 18-24 даёт 0 уникальных лидов.', hint: 'Повысить ставки на 45-54, срезать 18-24' },
      { title: 'Условие показа', text: 'Ключевые фразы результативнее автотаргетинга по CPA.', hint: 'Держать автотаргет на контроле, отсекать нерелевантные запросы' },
    ],
  },
  {
    level: 'low', label: 'Низкий приоритет', icon: 'Info', color: NEON.cyan,
    items: [
      { title: 'Площадка', text: '100% бюджета — Поиск, РСЯ не используется.', hint: 'Протестировать РСЯ на ретаргетинг для добора дешёвых лидов' },
      { title: 'Объявления', text: 'Лучший оффер — «под ключ в Москве», остальные заметно слабее по CTR.', hint: 'Добавить УТП с ценой/сроком и быстрые ссылки в топ-объявления' },
    ],
  },
];

export const contacts = {
  phone: '+7 (ххх) ххх-хх-хх',
  email: 'info@ххх.ru',
  office: 'г. Москва, ул. Энергетиков, 12',
};