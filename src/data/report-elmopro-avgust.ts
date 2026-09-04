// ── Данные отчёта клиента Электромонтаж Elmopro Мск за Август 2026 ──
import { NEON, AGENCY } from '@/data/report';

export { NEON, AGENCY };

export const CLIENT = {
  name: 'Электромонтаж Elmopro Мск',
  id: 'e-17224276',
  site: 'https://elmopro.org/',
  period: 'Август 2026',
  weeklyStats: 'https://docs.google.com/spreadsheets/d/1Q3IAkMR1H7tOhgANisZCoDWc9LFwvvbiDbSxchVoVK8/edit?gid=1775730410#gid=1775730410',
  paybackFunnel: 'https://docs.google.com/spreadsheets/d/1Q3IAkMR1H7tOhgANisZCoDWc9LFwvvbiDbSxchVoVK8/edit?gid=520946394#gid=520946394',
};

export const aboutLinks = [
  { icon: 'CalendarRange', label: 'Понедельная статистика', desc: 'Расход, заявки и стоимость лида по неделям месяца.', href: CLIENT.weeklyStats, cta: 'Открыть таблицу' },
  { icon: 'TrendingUp', label: 'Воронка окупаемости', desc: 'Путь от лида до сделки и юнит-экономика проекта.', href: CLIENT.paybackFunnel, cta: 'Открыть таблицу' },
  { icon: 'Globe', label: 'Сайт', desc: 'Посадочная страница, на которую ведёт реклама.', href: CLIENT.site, cta: 'elmopro.org' },
];

// ── Блок: план / факт за август 2026 ──
export const planFact = [
  { param: 'Рекламный бюджет, руб.', planNum: 200000, factNum: 182993, planLabel: '200 000 ₽', factLabel: '182 993 ₽', isCost: false },
  { param: 'Заявки, ед.', planNum: 36, factNum: 34, planLabel: '36', factLabel: '34', isCost: false },
  { param: 'Стоимость заявки (с НДС), руб.', planNum: 5500, factNum: 5382, planLabel: '5 500 ₽', factLabel: '5 382 ₽', isCost: true },
  { param: '% чистых от общего числа', planNum: 80, factNum: 67.65, planLabel: '80,00%', factLabel: '67,65%', isCost: false },
  { param: 'Чистые заявки, ед.', planNum: 29, factNum: 23, planLabel: '29', factLabel: '23', isCost: false },
  { param: 'Стоимость чистой заявки (с НДС), руб.', planNum: 6875, factNum: 7956, planLabel: '6 875 ₽', factLabel: '7 956 ₽', isCost: true },
  { param: 'Конверсия из заявки в квал. заявку', planNum: 28, factNum: 34.78, planLabel: '28,00%', factLabel: '34,78%', isCost: false },
  { param: 'Квал. заявки, ед.', planNum: 8, factNum: 8, planLabel: '8', factLabel: '8', isCost: false },
  { param: 'Стоимость квал. заявки (с НДС), руб.', planNum: 25000, factNum: 22874, planLabel: '25 000 ₽', factLabel: '22 874 ₽', isCost: true },
];

export const planFactNotes = [
  '* Некорректно передавались данные сделки из «Лид» в «Закрыт и нереализован» через воронку «Квалификация»',
];

// ── Блок: факт июль vs факт август ──
export const monthCompare = [
  { param: 'Рекламный бюджет, руб.', mayNum: 210491, junNum: 182993, mayLabel: '210 491 ₽', junLabel: '182 993 ₽', isCost: false },
  { param: 'Заявки, ед.', mayNum: 32, junNum: 34, mayLabel: '32', junLabel: '34', isCost: false },
  { param: 'Стоимость заявки (с НДС), руб.', mayNum: 6578, junNum: 5382, mayLabel: '6 578 ₽', junLabel: '5 382 ₽', isCost: true },
  { param: 'Необработанные заявки, ед.', mayNum: 2, junNum: 9, mayLabel: '2', junLabel: '9', isCost: true },
  { param: '% чистых от общего числа', mayNum: 81.25, junNum: 67.65, mayLabel: '81,25%', junLabel: '67,65%', isCost: false },
  { param: 'Чистые заявки, ед.', mayNum: 26, junNum: 23, mayLabel: '26', junLabel: '23', isCost: false },
  { param: 'Стоимость чистой заявки (с НДС), руб.', mayNum: 8096, junNum: 7956, mayLabel: '8 096 ₽', junLabel: '7 956 ₽', isCost: true },
  { param: 'Конверсия из заявки в квал. заявку', mayNum: 23.08, junNum: 34.78, mayLabel: '23,08%', junLabel: '34,78%', isCost: false },
  { param: 'Квал. заявки, ед.', mayNum: 6, junNum: 8, mayLabel: '6', junLabel: '8', isCost: false },
  { param: 'Стоимость квал. заявки (с НДС), руб.', mayNum: 35082, junNum: 22874, mayLabel: '35 082 ₽', junLabel: '22 874 ₽', isCost: true },
];

// ── Блок: годовые тренды (текущий 2026 vs прошлый 2025 год) ──
export const yearly = [
  { m: 'Янв', cost25: 82884, cost26: 95949, lead25: 21, lead26: 18, lc25: 3947, lc26: 5331, qual25: 3, qual26: 2, qc25: 27628, qc26: 47975 },
  { m: 'Фев', cost25: 111401, cost26: 91519, lead25: 38, lead26: 20, lc25: 2932, lc26: 4576, qual25: 5, qual26: 3, qc25: 22280, qc26: 30506 },
  { m: 'Мар', cost25: 122873, cost26: 144326, lead25: 31, lead26: 36, lc25: 3964, lc26: 4009, qual25: 6, qual26: 5, qc25: 20479, qc26: 28865 },
  { m: 'Апр', cost25: 99037, cost26: 176642, lead25: 45, lead26: 23, lc25: 2201, lc26: 7680, qual25: 7, qual26: 3, qc25: 14148, qc26: 58881 },
  { m: 'Май', cost25: 86058, cost26: 124791, lead25: 29, lead26: 17, lc25: 2968, lc26: 7341, qual25: 6, qual26: 4, qc25: 14343, qc26: 31198 },
  { m: 'Июн', cost25: 98689, cost26: 191751, lead25: 36, lead26: 24, lc25: 2741, lc26: 7990, qual25: 4, qual26: 3, qc25: 24672, qc26: 63917 },
  { m: 'Июл', cost25: 115596, cost26: 210491, lead25: 37, lead26: 32, lc25: 3124, lc26: 6578, qual25: 6, qual26: 6, qc25: 19266, qc26: 35082 },
  { m: 'Авг', cost25: 103875, cost26: 182993, lead25: 28, lead26: 34, lc25: 3710, lc26: 5382, qual25: 3, qual26: 8, qc25: 34625, qc26: 22874 },
  { m: 'Сен', cost25: 117486, cost26: null, lead25: 34, lead26: null, lc25: 3455, lc26: null, qual25: 4, qual26: null, qc25: 29371, qc26: null },
  { m: 'Окт', cost25: 115688, cost26: null, lead25: 34, lead26: null, lc25: 3403, lc26: null, qual25: 6, qual26: null, qc25: 19281, qc26: null },
  { m: 'Ноя', cost25: 104500, cost26: null, lead25: 26, lead26: null, lc25: 4019, lc26: null, qual25: 2, qual26: null, qc25: 52250, qc26: null },
  { m: 'Дек', cost25: 98785, cost26: null, lead25: 25, lead26: null, lc25: 3951, lc26: null, qual25: 4, qual26: null, qc25: 24696, qc26: null },
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

// ── План на новый месяц (сентябрь 2026) ──
export const nextPlan = [
  { param: 'Рекламный бюджет, руб.', plan: '200 000 ₽' },
  { param: 'Заявки, ед.', plan: '33' },
  { param: 'Стоимость заявки (с НДС), руб.', plan: '6 000 ₽' },
  { param: '% чистых от общего числа', plan: '80,00%' },
  { param: 'Чистые заявки, ед.', plan: '27' },
  { param: 'Стоимость чистой заявки (с НДС), руб.', plan: '7 500 ₽' },
  { param: 'Конверсия из заявки в квал. заявку', plan: '24,00%' },
  { param: 'Квал. заявки, ед.', plan: '6' },
  { param: 'Стоимость квал. заявки (с НДС), руб.', plan: '33 333 ₽' },
];