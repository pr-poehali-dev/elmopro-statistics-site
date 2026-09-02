// ── Данные отчёта клиента Zetaprint ──
import { NEON, AGENCY } from '@/data/report';

export { NEON, AGENCY };

export const CLIENT = {
  name: 'Zetaprint',
  id: 'zetaprint',
  site: 'https://zetaprint.ru/',
  siteCards: 'https://cards.zetaprint.ru/',
  period: 'Август 2026',
  weeklyStats: 'https://docs.google.com/spreadsheets/d/1RrkboNllfCyDSe0eq061yBbdGdoXmMHMXSkBorJvTLo/edit?gid=1743674009#gid=1743674009',
  paybackFunnel: 'https://docs.google.com/spreadsheets/d/15Vu8LHCrDtOxoFDR2YyPJuShi1UpMwZz6xSjCHVBFHQ/edit?gid=660690295#gid=660690295',
};

export const aboutLinks = [
  { icon: 'CalendarRange', label: 'Понедельная статистика', desc: 'Расход, заявки и стоимость лида по неделям месяца.', href: CLIENT.weeklyStats, cta: 'Открыть таблицу' },
  { icon: 'TrendingUp', label: 'Воронка окупаемости', desc: 'Путь от лида до сделки и юнит-экономика проекта.', href: CLIENT.paybackFunnel, cta: 'Открыть таблицу' },
  { icon: 'Globe', label: 'Сайт', desc: 'Основной сайт и лендинг с Яндекс Картами.', href: CLIENT.site, cta: 'zetaprint.ru / cards.zetaprint.ru' },
];

// ── Сегменты рекламы ──
export const segments = [
  { key: 'notbrand', label: 'Не Бренд', icon: 'Search' },
  { key: 'brand', label: 'Бренд', icon: 'Star' },
  { key: 'cards', label: 'Карты', icon: 'MapPin' },
] as const;

export type SegmentKey = typeof segments[number]['key'];

// ── Блок: план / факт за август 2026 по сегментам ──
export const planFactBySegment: Record<SegmentKey, Array<{ param: string; planNum: number; factNum: number; planLabel: string; factLabel: string; isCost: boolean }>> = {
  notbrand: [
    { param: 'Бюджет, с НДС', planNum: 430000, factNum: 432953, planLabel: '430 000 ₽', factLabel: '432 953 ₽', isCost: false },
    { param: 'Уникальные лиды, ед.', planNum: 175, factNum: 199, planLabel: '175', factLabel: '199', isCost: false },
    { param: 'Стоимость уникального лида', planNum: 2457, factNum: 2176, planLabel: '2 457 ₽', factLabel: '2 176 ₽', isCost: true },
    { param: 'Чистые лиды, ед.', planNum: 157, factNum: 178, planLabel: '157', factLabel: '178', isCost: false },
    { param: 'Стоимость чистого лида', planNum: 2739, factNum: 2432, planLabel: '2 739 ₽', factLabel: '2 432 ₽', isCost: true },
    { param: 'Квалифицированные лиды, ед.', planNum: 71, factNum: 72, planLabel: '71', factLabel: '72', isCost: false },
    { param: 'Стоимость квалифицированного лида', planNum: 6056, factNum: 6013, planLabel: '6 056 ₽', factLabel: '6 013 ₽', isCost: true },
    { param: 'Конверсия из уник. в квал. лид', planNum: 40.57, factNum: 36.18, planLabel: '40,57%', factLabel: '36,18%', isCost: false },
  ],
  brand: [
    { param: 'Бюджет, с НДС', planNum: 10000, factNum: 7340, planLabel: '10 000 ₽', factLabel: '7 340 ₽', isCost: false },
    { param: 'Уникальные лиды, ед.', planNum: 10, factNum: 13, planLabel: '10', factLabel: '13', isCost: false },
    { param: 'Стоимость уникального лида', planNum: 1000, factNum: 565, planLabel: '1 000 ₽', factLabel: '565 ₽', isCost: true },
    { param: 'Чистые лиды, ед.', planNum: 9, factNum: 13, planLabel: '9', factLabel: '13', isCost: false },
    { param: 'Стоимость чистого лида', planNum: 1111, factNum: 565, planLabel: '1 111 ₽', factLabel: '565 ₽', isCost: true },
    { param: 'Квалифицированные лиды, ед.', planNum: 4, factNum: 6, planLabel: '4', factLabel: '6', isCost: false },
    { param: 'Стоимость квалифицированного лида', planNum: 2500, factNum: 1223, planLabel: '2 500 ₽', factLabel: '1 223 ₽', isCost: true },
    { param: 'Конверсия из уник. в квал. лид', planNum: 40.00, factNum: 46.15, planLabel: '40,00%', factLabel: '46,15%', isCost: false },
  ],
  cards: [
    { param: 'Бюджет, с НДС', planNum: 145000, factNum: 135286, planLabel: '145 000 ₽', factLabel: '135 286 ₽', isCost: false },
    { param: 'Уникальные лиды, ед.', planNum: 69, factNum: 118, planLabel: '69', factLabel: '118', isCost: false },
    { param: 'Стоимость уникального лида', planNum: 2101, factNum: 1146, planLabel: '2 101 ₽', factLabel: '1 146 ₽', isCost: true },
    { param: 'Чистые лиды, ед.', planNum: 62, factNum: 98, planLabel: '62', factLabel: '98', isCost: false },
    { param: 'Стоимость чистого лида', planNum: 2339, factNum: 1380, planLabel: '2 339 ₽', factLabel: '1 380 ₽', isCost: true },
    { param: 'Квалифицированные лиды, ед.', planNum: 27, factNum: 35, planLabel: '27', factLabel: '35', isCost: false },
    { param: 'Стоимость квалифицированного лида', planNum: 5370, factNum: 3865, planLabel: '5 370 ₽', factLabel: '3 865 ₽', isCost: true },
    { param: 'Конверсия из уник. в квал. лид', planNum: 39.13, factNum: 29.66, planLabel: '39,13%', factLabel: '29,66%', isCost: false },
  ],
};

// ── Блок: факт июль vs факт август по сегментам ──
export const monthCompareBySegment: Record<SegmentKey, Array<{ param: string; mayNum: number; junNum: number; mayLabel: string; junLabel: string; isCost: boolean }>> = {
  notbrand: [
    { param: 'Бюджет, с НДС', mayNum: 437300, junNum: 432953, mayLabel: '437 300 ₽', junLabel: '432 953 ₽', isCost: false },
    { param: 'Уникальные лиды, ед.', mayNum: 172, junNum: 199, mayLabel: '172', junLabel: '199', isCost: false },
    { param: 'Стоимость уникального лида', mayNum: 2555, junNum: 2176, mayLabel: '2 555 ₽', junLabel: '2 176 ₽', isCost: true },
    { param: 'Чистые лиды, ед.', mayNum: 167, junNum: 178, mayLabel: '167', junLabel: '178', isCost: false },
    { param: 'Стоимость чистого лида', mayNum: 2631, junNum: 2432, mayLabel: '2 631 ₽', junLabel: '2 432 ₽', isCost: true },
    { param: 'Квалифицированные лиды, ед.', mayNum: 46, junNum: 72, mayLabel: '46', junLabel: '72', isCost: false },
    { param: 'Стоимость квалифицированного лида', mayNum: 9552, junNum: 6013, mayLabel: '9 552 ₽', junLabel: '6 013 ₽', isCost: true },
    { param: 'Конверсия из уник. в квал. лид', mayNum: 26.74, junNum: 36.18, mayLabel: '26,74%', junLabel: '36,18%', isCost: false },
  ],
  brand: [
    { param: 'Бюджет, с НДС', mayNum: 12691, junNum: 7340, mayLabel: '12 691 ₽', junLabel: '7 340 ₽', isCost: false },
    { param: 'Уникальные лиды, ед.', mayNum: 9, junNum: 13, mayLabel: '9', junLabel: '13', isCost: false },
    { param: 'Стоимость уникального лида', mayNum: 1410, junNum: 565, mayLabel: '1 410 ₽', junLabel: '565 ₽', isCost: true },
    { param: 'Чистые лиды, ед.', mayNum: 9, junNum: 13, mayLabel: '9', junLabel: '13', isCost: false },
    { param: 'Стоимость чистого лида', mayNum: 1410, junNum: 565, mayLabel: '1 410 ₽', junLabel: '565 ₽', isCost: true },
    { param: 'Квалифицированные лиды, ед.', mayNum: 3, junNum: 6, mayLabel: '3', junLabel: '6', isCost: false },
    { param: 'Стоимость квалифицированного лида', mayNum: 4230, junNum: 1223, mayLabel: '4 230 ₽', junLabel: '1 223 ₽', isCost: true },
    { param: 'Конверсия из уник. в квал. лид', mayNum: 33.33, junNum: 46.15, mayLabel: '33,33%', junLabel: '46,15%', isCost: false },
  ],
  cards: [
    { param: 'Бюджет, с НДС', mayNum: 161887, junNum: 135286, mayLabel: '161 887 ₽', junLabel: '135 286 ₽', isCost: false },
    { param: 'Уникальные лиды, ед.', mayNum: 88, junNum: 118, mayLabel: '88', junLabel: '118', isCost: false },
    { param: 'Стоимость уникального лида', mayNum: 1840, junNum: 1146, mayLabel: '1 840 ₽', junLabel: '1 146 ₽', isCost: true },
    { param: 'Чистые лиды, ед.', mayNum: 83, junNum: 98, mayLabel: '83', junLabel: '98', isCost: false },
    { param: 'Стоимость чистого лида', mayNum: 1950, junNum: 1380, mayLabel: '1 950 ₽', junLabel: '1 380 ₽', isCost: true },
    { param: 'Квалифицированные лиды, ед.', mayNum: 32, junNum: 35, mayLabel: '32', junLabel: '35', isCost: false },
    { param: 'Стоимость квалифицированного лида', mayNum: 5059, junNum: 3865, mayLabel: '5 059 ₽', junLabel: '3 865 ₽', isCost: true },
    { param: 'Конверсия из уник. в квал. лид', mayNum: 36.36, junNum: 29.66, mayLabel: '36,36%', junLabel: '29,66%', isCost: false },
  ],
};

// ── Блок: помесячная динамика с января 2026 по сегментам ──
export const monthlyTrendBySegment: Record<SegmentKey, Array<{ m: string; cost: number; clicks: number; uniq: number; costUniq: number; clean: number; costClean: number; qual: number; costQual: number }>> = {
  notbrand: [
    { m: 'Янв', cost: 293788.96, clicks: 23022, uniq: 170, costUniq: 1728.17, clean: 160, costClean: 1836.18, qual: 40, costQual: 7344.72 },
    { m: 'Фев', cost: 263745.65, clicks: 54935, uniq: 107, costUniq: 2464.91, clean: 101, costClean: 2611.34, qual: 31, costQual: 8507.92 },
    { m: 'Мар', cost: 258588.86, clicks: 34936, uniq: 130, costUniq: 1989.15, clean: 120, costClean: 2154.91, qual: 41, costQual: 6307.05 },
    { m: 'Апр', cost: 403024.85, clicks: 33819, uniq: 187, costUniq: 2155.21, clean: 186, costClean: 2166.80, qual: 61, costQual: 6606.96 },
    { m: 'Май', cost: 412571.93, clicks: 20995, uniq: 182, costUniq: 2266.88, clean: 174, costClean: 2371.10, qual: 39, costQual: 10578.77 },
    { m: 'Июн', cost: 502227.92, clicks: 16211, uniq: 225, costUniq: 2232.12, clean: 204, costClean: 2461.90, qual: 55, costQual: 9131.42 },
    { m: 'Июл', cost: 439373.90, clicks: 21792, uniq: 167, costUniq: 2630.98, clean: 162, costClean: 2712.18, qual: 44, costQual: 9985.77 },
    { m: 'Авг', cost: 432952.81, clicks: 22296, uniq: 193, costUniq: 2243.28, clean: 172, costClean: 2517.17, qual: 56, costQual: 7731.30 },
  ],
  brand: [
    { m: 'Янв', cost: 8110.96, clicks: 131, uniq: 21, costUniq: 386.24, clean: 15, costClean: 540.73, qual: 3, costQual: 2703.65 },
    { m: 'Фев', cost: 15594.87, clicks: 201, uniq: 24, costUniq: 649.79, clean: 21, costClean: 742.61, qual: 8, costQual: 1949.36 },
    { m: 'Мар', cost: 11132.19, clicks: 186, uniq: 18, costUniq: 618.46, clean: 18, costClean: 618.46, qual: 8, costQual: 1391.52 },
    { m: 'Апр', cost: 10574.79, clicks: 162, uniq: 20, costUniq: 528.74, clean: 20, costClean: 528.74, qual: 8, costQual: 1321.85 },
    { m: 'Май', cost: 6644.36, clicks: 114, uniq: 12, costUniq: 553.70, clean: 12, costClean: 553.70, qual: 3, costQual: 2214.79 },
    { m: 'Июн', cost: 15078.26, clicks: 190, uniq: 24, costUniq: 628.26, clean: 24, costClean: 628.26, qual: 10, costQual: 1507.83 },
    { m: 'Июл', cost: 12691.25, clicks: 164, uniq: 9, costUniq: 1410.14, clean: 9, costClean: 1410.14, qual: 2, costQual: 6345.63 },
    { m: 'Авг', cost: 7339.23, clicks: 148, uniq: 13, costUniq: 564.56, clean: 13, costClean: 564.56, qual: 2, costQual: 3669.62 },
  ],
  cards: [
    { m: 'Янв', cost: 114746.67, clicks: 6276, uniq: 56, costUniq: 2049.05, clean: 50, costClean: 2294.93, qual: 20, costQual: 5737.33 },
    { m: 'Фев', cost: 130079.92, clicks: 21014, uniq: 55, costUniq: 2365.09, clean: 47, costClean: 2767.66, qual: 14, costQual: 9291.42 },
    { m: 'Мар', cost: 135330.94, clicks: 38954, uniq: 83, costUniq: 1630.49, clean: 70, costClean: 1933.30, qual: 16, costQual: 8458.18 },
    { m: 'Апр', cost: 147782.08, clicks: 24290, uniq: 77, costUniq: 1919.25, clean: 76, costClean: 1944.50, qual: 25, costQual: 5911.28 },
    { m: 'Май', cost: 124253.97, clicks: 14096, uniq: 58, costUniq: 2142.31, clean: 51, costClean: 2436.35, qual: 18, costQual: 6903.00 },
    { m: 'Июн', cost: 156422.23, clicks: 10292, uniq: 63, costUniq: 2482.89, clean: 60, costClean: 2607.04, qual: 16, costQual: 9776.39 },
    { m: 'Июл', cost: 161886.55, clicks: 25590, uniq: 89, costUniq: 1818.95, clean: 83, costClean: 1950.44, qual: 30, costQual: 5396.22 },
    { m: 'Авг', cost: 135286.44, clicks: 42580, uniq: 111, costUniq: 1218.80, clean: 91, costClean: 1486.66, qual: 29, costQual: 4665.05 },
  ],
};

// ── Спрос по Wordstat: помесячно с января 2024 по август 2026 ──
export const demand = [
  { m: 'янв 24', v: 15637 }, { m: 'фев 24', v: 20446 }, { m: 'мар 24', v: 19831 }, { m: 'апр 24', v: 18647 },
  { m: 'май 24', v: 17844 }, { m: 'июн 24', v: 14896 }, { m: 'июл 24', v: 14245 }, { m: 'авг 24', v: 15370 },
  { m: 'сен 24', v: 17043 }, { m: 'окт 24', v: 20610 }, { m: 'ноя 24', v: 21690 }, { m: 'дек 24', v: 28704 },
  { m: 'янв 25', v: 21961 }, { m: 'фев 25', v: 20357 }, { m: 'мар 25', v: 20299 }, { m: 'апр 25', v: 17516 },
  { m: 'май 25', v: 18488 }, { m: 'июн 25', v: 15631 }, { m: 'июл 25', v: 17393 }, { m: 'авг 25', v: 17669 },
  { m: 'сен 25', v: 17786 }, { m: 'окт 25', v: 22448 }, { m: 'ноя 25', v: 17698 }, { m: 'дек 25', v: 17208 },
  { m: 'янв 26', v: 12956 }, { m: 'фев 26', v: 14560 }, { m: 'мар 26', v: 19788 }, { m: 'апр 26', v: 17808 },
  { m: 'май 26', v: 15977 }, { m: 'июн 26', v: 13294 }, { m: 'июл 26', v: 11321 }, { m: 'авг 26', v: 11327 },
];

// ── Работы ──
export const workDone = [
  'Проведение оперативных корректировок по средней цене клика в зависимости от текущих результатов и CPL по кампаниям',
  'Отключение неэффективных групп объявлений внутри кампаний с плохими результатами и высокой стоимостью целевого действия',
  'Чистка площадок в сетях (РСЯ), блокировка мобильных приложений и неконвертирующих сайтов',
  'Пополнение списков минус-фраз по поисковым кампаниям',
  'Анализ входящих лидов категорий A и B, выявление закономерностей и подготовка рекомендаций по оптимизации',
  'Исключение спамных баз и нецелевых обращений',
];

export const workPlan = [
  'Тестирование связок и перераспределение бюджета в пользу конверсионных элементов для масштабирования объёма заявок',
  'Минусация и отключение неэффективных поисковых запросов',
  'Чистка и блокировка неконвертирующих площадок в РСЯ',
  'Разработка структуры тематических кампаний и план перераспределения бюджетов с общих РК',
  'Перевод стратегий в кампаниях в ОЗК на оптимизацию по цели уникальные лиды',
];

// ── План на новый месяц (сентябрь 2026) по сегментам ──
export const nextPlanBySegment: Record<SegmentKey, Array<{ param: string; plan: string }>> = {
  notbrand: [
    { param: 'Бюджет, с НДС', plan: '407 400 ₽' },
    { param: 'Уникальные лиды, ед.', plan: '185' },
    { param: 'Стоимость уникального лида', plan: '2 200 ₽' },
    { param: 'Чистые лиды, ед.', plan: '181' },
    { param: 'Стоимость чистого лида', plan: '2 245 ₽' },
    { param: 'Квалифицированные лиды, ед.', plan: '65' },
    { param: 'Стоимость квалифицированного лида', plan: '6 236 ₽' },
    { param: 'Конверсия из уник. в квал. лид', plan: '36,00%' },
  ],
  brand: [
    { param: 'Бюджет, с НДС', plan: '9 400 ₽' },
    { param: 'Уникальные лиды, ед.', plan: '12' },
    { param: 'Стоимость уникального лида', plan: '800 ₽' },
    { param: 'Чистые лиды, ед.', plan: '12' },
    { param: 'Стоимость чистого лида', plan: '816 ₽' },
    { param: 'Квалифицированные лиды, ед.', plan: '6' },
    { param: 'Стоимость квалифицированного лида', plan: '1 633 ₽' },
    { param: 'Конверсия из уник. в квал. лид', plan: '50,00%' },
  ],
  cards: [
    { param: 'Бюджет, с НДС', plan: '140 650 ₽' },
    { param: 'Уникальные лиды, ед.', plan: '85' },
    { param: 'Стоимость уникального лида', plan: '1 650 ₽' },
    { param: 'Чистые лиды, ед.', plan: '72' },
    { param: 'Стоимость чистого лида', plan: '1 941 ₽' },
    { param: 'Квалифицированные лиды, ед.', plan: '28' },
    { param: 'Стоимость квалифицированного лида', plan: '4 977 ₽' },
    { param: 'Конверсия из уник. в квал. лид', plan: '39,00%' },
  ],
};
