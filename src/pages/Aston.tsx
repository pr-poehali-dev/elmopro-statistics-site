import { useState, useRef } from 'react';
import Icon from '@/components/ui/icon';
import {
  Line, BarChart, Bar, Cell, ComposedChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LabelList,
} from 'recharts';
import {
  NEON, PIE_COLORS, CLIENT, aboutLinks, planFact, monthCompare, trends, demand, workDone, accounts, AccountKey,
} from '@/data/report-aston';
import ReportToolbar from '@/components/ReportToolbar';

const tipStyleLight = {
  background: '#ffffff',
  border: '1px solid hsl(0,0%,90%)',
  borderRadius: 12,
  color: '#000000',
  fontSize: 13,
  boxShadow: '0 8px 30px -8px rgba(0,0,0,0.15)',
};

const fmt = (n: number | null | undefined) =>
  n === null || n === undefined ? '—' : Math.round(n).toLocaleString('ru-RU');
const fmt1 = (n: number | null | undefined) =>
  n === null || n === undefined ? '—' : n.toLocaleString('ru-RU', { maximumFractionDigits: 1 });

// ── Индикатор статуса выполнения плана (>=90 зелёный, 60-89 жёлтый, <60 красный) ──
const planStatusColor = (planNum: number, factNum: number, isCost: boolean) => {
  const ratio = isCost ? planNum / factNum : factNum / planNum;
  const pct = ratio * 100;
  if (pct >= 90) return { color: NEON.pos, icon: 'CircleCheck', pct };
  if (pct >= 60) return { color: NEON.amber, icon: 'CircleAlert', pct };
  return { color: NEON.neg, icon: 'CircleX', pct };
};

// ── Delta для сравнения периодов: для стоимостных метрик рост = плохо; <5% — нейтрально ──
const MonthDelta = ({ mayNum, junNum, isCost }: { mayNum: number; junNum: number; isCost: boolean }) => {
  const d = ((junNum - mayNum) / mayNum) * 100;
  const up = d >= 0;
  let color = NEON.gray;
  if (Math.abs(d) >= 5) {
    const good = isCost ? !up : up;
    color = good ? NEON.pos : NEON.neg;
  }
  return (
    <span className="inline-flex items-center gap-1 font-mono text-sm font-bold" style={{ color }}>
      {Math.abs(d) >= 5 && <Icon name={up ? 'TrendingUp' : 'TrendingDown'} size={14} />}
      {up ? '+' : ''}{d.toFixed(1)}%
    </span>
  );
};

const Section = ({ id, num, title, sub, icon, children }: {
  id: string; num: string; title: string; sub?: string; icon: string; children: React.ReactNode;
}) => (
  <section id={id} className="scroll-mt-24 animate-rise">
    <div className="mb-6 flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
        <Icon name={icon} size={22} />
      </div>
      <div>
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Раздел {num}</div>
        <h2 className="font-display text-2xl font-semibold md:text-3xl">{title}</h2>
        {sub && <p className="text-sm text-muted-foreground">{sub}</p>}
      </div>
    </div>
    {children}
  </section>
);

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`rounded-2xl border border-border bg-card p-6 ${className}`}>{children}</div>
);

const ChartTitle = ({ title, sub }: { title: string; sub?: string }) => (
  <div className="mb-5">
    <h3 className="font-display text-lg font-semibold">{title}</h3>
    {sub && <p className="text-sm text-muted-foreground">{sub}</p>}
  </div>
);

// ── Компактный бар-чарт «Июнь / Июль» для одной метрики ──
const MonthMetricChart = ({ title, sub, dataKey, unit = '' }: {
  title: string; sub?: string; dataKey: string; unit?: string;
}) => (
  <Card>
    <ChartTitle title={title} sub={sub} />
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={trends} margin={{ top: 28 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(0,0%,90%)" />
        <XAxis dataKey="m" stroke="hsl(240,4%,45%)" fontSize={12} />
        <YAxis stroke="hsl(240,4%,45%)" fontSize={11} />
        <Tooltip contentStyle={tipStyleLight} formatter={(v: number) => `${fmt1(v)}${unit}`} />
        <Bar dataKey={dataKey} radius={[6, 6, 0, 0]} maxBarSize={90}>
          {trends.map((_, i) => (
            <Cell key={i} fill={i === 0 ? NEON.gray : NEON.cyan} />
          ))}
          <LabelList dataKey={dataKey} position="top" fontSize={12} fontWeight={700}
            formatter={(v: number) => `${fmt1(v)}${unit}`} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </Card>
);

// ── Столбчатая диаграмма разреза: клик по столбцу/легенде подсвечивает выбранные, остальные — в тени ──
type DimRow = { name: string; [k: string]: number | string | null };
type DimLabelProps = { x?: number; y?: number; width?: number; height?: number; value?: number; index?: number };

const DimBar = ({ data, dataKey, title, unit = '', showCost = false, active, onToggle }: {
  data: DimRow[]; dataKey: string; title: string; unit?: string; showCost?: boolean;
  active: string[]; onToggle: (name: string) => void;
}) => {
  const isDimmed = (name: string) => active.length > 0 && !active.includes(name);
  const BarLabel = (p: DimLabelProps) => {
    const { x, y, width, height, value, index } = p;
    if (x === undefined || y === undefined || width === undefined || height === undefined || value === undefined || index === undefined) return null;
    const row = data[index];
    const costPer = showCost && value ? Number(row.cost) / value : null;
    const text = `${fmt(value)}${unit}${costPer !== null ? ` · ${fmt(costPer)} ₽` : ''}`;
    const dim = isDimmed(row.name as string);
    return (
      <text x={x + width + 6} y={y + height / 2} dominantBaseline="central" fontSize={11} fontWeight={700} fill={dim ? 'hsl(240,4%,55%)' : '#000000'}>
        {text}
      </text>
    );
  };
  return (
    <div>
      <div className="mb-2 text-center font-mono text-xs uppercase tracking-wide text-muted-foreground">{title}</div>
      <ResponsiveContainer width="100%" height={Math.max(140, data.length * 40)}>
        <BarChart data={data} layout="vertical" margin={{ top: 4, right: 90, left: 4, bottom: 4 }}>
          <XAxis type="number" hide />
          <YAxis type="category" dataKey="name" width={0} hide />
          <Tooltip contentStyle={tipStyleLight} formatter={(v: number) => `${fmt(v)}${unit}`} />
          <Bar dataKey={dataKey} radius={[0, 6, 6, 0]} onClick={(d: DimRow) => onToggle(d.name)} cursor="pointer" maxBarSize={26}>
            {data.map((d, i) => (
              <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} opacity={isDimmed(d.name) ? 0.25 : 1} />
            ))}
            <LabelList dataKey={dataKey} content={BarLabel} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-1 flex flex-wrap justify-center gap-2">
        {data.map((d, i) => (
          <button key={`${d.name}-${i}`} onClick={() => onToggle(d.name as string)}
            className="flex items-center gap-1 rounded-full px-1.5 py-0.5 font-mono text-[11px] transition-opacity"
            style={{ color: isDimmed(d.name as string) ? 'hsl(240,4%,55%)' : '#000000', opacity: isDimmed(d.name as string) ? 0.6 : 1 }}>
            <span className="h-2 w-2 rounded-full" style={{ background: PIE_COLORS[i % PIE_COLORS.length] }} />
            {d.name}
          </button>
        ))}
      </div>
    </div>
  );
};

// ── Таблица «топ-10 по расходу + Прочее» для кампаний / групп / объявлений ──
type CutRow = { name: string; cost: number; clicks: number; conv: number; cr: number; cpa: number | null };
const cutColumns: { key: keyof CutRow; label: string; fmt: (v: number | null | undefined) => string }[] = [
  { key: 'cost', label: 'Расход, ₽', fmt },
  { key: 'clicks', label: 'Клики', fmt },
  { key: 'conv', label: 'Конверсии', fmt },
  { key: 'cr', label: 'CR, %', fmt: fmt1 },
  { key: 'cpa', label: 'CPA, ₽', fmt },
];

const CutTable = ({ rows }: { rows: CutRow[] }) => (
  <div className="overflow-x-auto">
    <table className="w-full min-w-[640px]">
      <thead>
        <tr className="border-b border-border text-left font-mono text-xs uppercase tracking-wide text-muted-foreground">
          <th className="pb-3 font-500">Название</th>
          {cutColumns.map((c) => <th key={c.key} className="pb-3 text-right font-500">{c.label}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={`${r.name}-${i}`} className="border-b border-border/50 hover:bg-secondary/40">
            <td className="py-3 pr-4 font-500">{r.name}</td>
            {cutColumns.map((c) => (
              <td key={c.key} className="py-3 text-right font-mono">{c.fmt(r[c.key] as number)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const nav = [
  { id: 'about', label: 'Общая инфо' },
  { id: 'planfact', label: 'План / Факт' },
  { id: 'months', label: 'Июнь → Июль' },
  { id: 'trends', label: 'Показатели' },
  { id: 'breakdown', label: 'Статистика Директ' },
  { id: 'works', label: 'Работы' },
  { id: 'demand', label: 'Спрос' },
];

const accountTabs: { key: AccountKey; label: string }[] = [
  { key: 'acc1', label: '1 аккаунт Директ' },
  { key: 'acc2', label: '2 аккаунт Директ' },
];

const Aston = () => {
  const reportRef = useRef<HTMLDivElement>(null);

  const [account, setAccount] = useState<AccountKey>('acc1');
  const [dimActive, setDimActive] = useState<Record<string, string[]>>({ device: [], age: [], geo: [] });

  const toggleDim = (dimKey: string, name: string) =>
    setDimActive((s) => {
      const cur = s[dimKey] || [];
      const next = cur.includes(name) ? cur.filter((x) => x !== name) : [...cur, name];
      return { ...s, [dimKey]: next };
    });

  const switchAccount = (key: AccountKey) => {
    setAccount(key);
    setDimActive({ device: [], age: [], geo: [] });
  };

  const scroll = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const data = accounts[account];
  const geoTotalCost = data.geo.reduce((s, g) => s + g.cost, 0);

  return (
    <div ref={reportRef} className="min-h-screen bg-background text-foreground">
      <ReportToolbar targetRef={reportRef} filename={`${CLIENT.name}-отчет-${CLIENT.period}.pdf`} />
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex items-center gap-4 overflow-x-auto px-6 py-3">
          <nav className="flex gap-1">
            {nav.map((n) => (
              <button key={n.id} onClick={() => scroll(n.id)}
                className="whitespace-nowrap rounded-lg px-3 py-1.5 font-mono text-xs text-muted-foreground transition-all hover:bg-secondary hover:text-foreground">
                {n.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <div className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />
        <div className="container relative mx-auto px-6 py-14">
          <div className="animate-rise">
            <div className="mb-3 flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Яндекс Директ · ежемесячный отчёт</span>
            </div>
            <h1 className="font-display text-4xl font-semibold leading-tight md:text-[58px] md:leading-[1.03]">
              Астон.Шесть звёзд
            </h1>
            <h2 className="mt-2 font-display text-2xl font-semibold leading-tight text-primary md:text-4xl">
              Отчёт {CLIENT.period}
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Статистика, тренды, сравнение периодов и разбор по двум рекламным аккаунтам.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto space-y-16 px-6 py-12">
        {/* 1. ОБЩАЯ ИНФОРМАЦИЯ */}
        <Section id="about" num="01" title="Общая информация" icon="Info" sub="Ключевые ссылки по проекту">
          <div className="grid gap-4 md:grid-cols-3">
            {aboutLinks.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:glow-cyan">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon name={l.icon} size={20} />
                </div>
                <div className="mb-1 font-500">{l.label}</div>
                <p className="mb-3 text-sm text-muted-foreground">{l.desc}</p>
                <div className="flex items-center gap-1 font-mono text-sm text-primary">
                  {l.cta} <Icon name="ArrowUpRight" size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            ))}
          </div>
        </Section>

        {/* 2. ПЛАН / ФАКТ */}
        <Section id="planfact" num="02" title="Сравнение план / факт" icon="Target" sub={`Динамика по ключевым показателям за ${CLIENT.period}`}>
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr className="border-b border-border text-left font-mono text-xs uppercase tracking-wide text-muted-foreground">
                    <th className="pb-3 font-500">Параметры</th>
                    <th className="pb-3 text-right font-500">План</th>
                    <th className="pb-3 text-right font-500">Факт</th>
                    <th className="pb-3 text-right font-500">Δ</th>
                    <th className="pb-3 text-center font-500">Статус</th>
                  </tr>
                </thead>
                <tbody>
                  {planFact.map((r) => {
                    const st = planStatusColor(r.planNum, r.factNum, r.isCost);
                    return (
                      <tr key={r.param} className="border-b border-border/50 transition-colors hover:bg-secondary/40">
                        <td className="py-3.5 font-500">{r.param}</td>
                        <td className="py-3.5 text-right font-mono text-muted-foreground">{r.planLabel}</td>
                        <td className="py-3.5 text-right font-mono font-bold">{r.factLabel}</td>
                        <td className="py-3.5 text-right"><MonthDelta mayNum={r.planNum} junNum={r.factNum} isCost={r.isCost} /></td>
                        <td className="py-3.5 text-center">
                          <Icon name={st.icon} size={18} className="inline" style={{ color: st.color }} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex flex-wrap gap-4 font-mono text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5"><Icon name="CircleCheck" size={14} style={{ color: NEON.pos }} /> выполнение ≥ 90%</span>
              <span className="flex items-center gap-1.5"><Icon name="CircleAlert" size={14} style={{ color: NEON.amber }} /> 60–89%</span>
              <span className="flex items-center gap-1.5"><Icon name="CircleX" size={14} style={{ color: NEON.neg }} /> ниже 60%</span>
            </div>
          </Card>
        </Section>

        {/* 3. ИЮНЬ → ИЮЛЬ */}
        <Section id="months" num="03" title="Сравнение с прошлым месяцем" icon="GitCompareArrows" sub="Факт июнь → факт июль 2026">
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px]">
                <thead>
                  <tr className="border-b border-border text-left font-mono text-xs uppercase tracking-wide text-muted-foreground">
                    <th className="pb-3 font-500">Параметры</th>
                    <th className="pb-3 text-right font-500">Факт июнь</th>
                    <th className="pb-3 text-right font-500">Факт июль</th>
                    <th className="pb-3 text-right font-500">Δ</th>
                  </tr>
                </thead>
                <tbody>
                  {monthCompare.map((r) => (
                    <tr key={r.param} className="border-b border-border/50 transition-colors hover:bg-secondary/40">
                      <td className="py-3.5 font-500">{r.param}</td>
                      <td className="py-3.5 text-right font-mono text-muted-foreground">{r.mayLabel}</td>
                      <td className="py-3.5 text-right font-mono font-bold">{r.junLabel}</td>
                      <td className="py-3.5 text-right"><MonthDelta mayNum={r.mayNum} junNum={r.junNum} isCost={r.isCost} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </Section>

        {/* 4. ПОКАЗАТЕЛИ ПО МЕСЯЦАМ */}
        <Section id="trends" num="04" title="Показатели по месяцам" icon="ChartLine" sub="Июнь → Июль 2026: ключевые метрики воронки">
          <div className="space-y-6">
            <MonthMetricChart title="Бюджет, ₽" sub="Расход за месяц" dataKey="cost" unit=" ₽" />

            <div className="grid gap-6 lg:grid-cols-2">
              <MonthMetricChart title="Лиды" sub="Количество" dataKey="leads" />
              <MonthMetricChart title="Стоимость лида, ₽" dataKey="leadCost" unit=" ₽" />
              <MonthMetricChart title="Целевые лиды" sub="Количество" dataKey="targetLeads" />
              <MonthMetricChart title="Стоимость целевого лида, ₽" dataKey="targetCost" unit=" ₽" />
              <MonthMetricChart title="Горячие клиенты" sub="Количество" dataKey="hotClients" />
              <MonthMetricChart title="Стоимость горячего, ₽" dataKey="hotCost" unit=" ₽" />
              <MonthMetricChart title="Конверсия лид → целевой, %" dataKey="leadToTargetCR" unit="%" />
              <MonthMetricChart title="Конверсия целевой → горячий, %" dataKey="targetToHotCR" unit="%" />
            </div>
          </div>

          <Card className="mt-6 border-primary/30">
            <div className="mb-3 flex items-center gap-2 font-display text-lg font-semibold uppercase text-primary">
              <Icon name="Lightbulb" size={20} /> Вывод маркетолога
            </div>
            <p className="text-sm leading-relaxed text-foreground/90">
              В июле бюджет вырос всего на 17%, а результаты — кратно: лидов стало почти в 2,4 раза больше
              (<b>112 против 46</b>), а стоимость лида упала более чем в 2 раза — с 32 401 ₽ до <b>15 535 ₽</b>.
              Похожая картина по целевым лидам: их количество выросло почти в 2,7 раза, а стоимость снизилась на 56%.
              Количество горячих клиентов увеличилось более чем в 2 раза (7 против 3), при этом цена привлечения
              одного горячего клиента снизилась почти вдвое — с 496 815 ₽ до <b>248 567 ₽</b>. Рекомендация: сохранить
              текущие настройки кампаний и масштабировать бюджет на связки, которые показали лучший рост в июле.
            </p>
          </Card>
        </Section>

        {/* 5. СТАТИСТИКА ПО ДИРЕКТУ — 2 АККАУНТА */}
        <Section id="breakdown" num="05" title="Статистика по Директу" icon="ChartPie" sub="Топ-10 по расходу в каждом срезе · период 01.07 – 31.07.2026">
          <div className="mb-6 inline-flex rounded-xl border border-border bg-secondary/30 p-1">
            {accountTabs.map((t) => (
              <button key={t.key} onClick={() => switchAccount(t.key)}
                className={`rounded-lg px-4 py-2 font-mono text-sm transition-all ${
                  account === t.key ? 'bg-primary text-primary-foreground shadow' : 'text-muted-foreground hover:text-foreground'
                }`}>
                {t.label}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            <Card>
              <ChartTitle title="Тип устройства" sub="Кликните по столбцу или подписи, чтобы выделить сегмент" />
              <div className="grid gap-4 sm:grid-cols-3">
                <DimBar data={data.device} dataKey="cost" title="Расход, ₽" unit=" ₽"
                  active={dimActive.device} onToggle={(name) => toggleDim('device', name)} />
                <DimBar data={data.device} dataKey="clicks" title="Клики"
                  active={dimActive.device} onToggle={(name) => toggleDim('device', name)} />
                <DimBar data={data.device} dataKey="conv" title="Конверсии" showCost
                  active={dimActive.device} onToggle={(name) => toggleDim('device', name)} />
              </div>
            </Card>

            <Card>
              <ChartTitle title="Возраст" sub="Кликните по столбцу или подписи, чтобы выделить сегмент" />
              <div className="grid gap-4 sm:grid-cols-3">
                <DimBar data={data.age} dataKey="cost" title="Расход, ₽" unit=" ₽"
                  active={dimActive.age} onToggle={(name) => toggleDim('age', name)} />
                <DimBar data={data.age} dataKey="clicks" title="Клики"
                  active={dimActive.age} onToggle={(name) => toggleDim('age', name)} />
                <DimBar data={data.age} dataKey="conv" title="Конверсии" showCost
                  active={dimActive.age} onToggle={(name) => toggleDim('age', name)} />
              </div>
            </Card>

            <Card>
              <ChartTitle title="География" sub="Топ-10 городов по расходу, остальные — «Прочее»" />
              <div className="grid gap-4 md:grid-cols-3">
                {data.geo.map((g, i) => (
                  <div key={g.name} className="rounded-xl border border-border/60 bg-secondary/30 p-4">
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" size={16} className="text-primary" />
                      <span className="font-500">{g.name}</span>
                    </div>
                    <div className="mt-2 font-mono text-3xl font-bold" style={{ color: PIE_COLORS[i % PIE_COLORS.length] }}>
                      {fmt1((g.cost / geoTotalCost) * 100)}%
                    </div>
                    <div className="text-xs text-muted-foreground">доля расхода</div>
                    <div className="mt-3 grid grid-cols-2 gap-2 font-mono text-xs text-muted-foreground">
                      <div>Расход: <span className="text-foreground">{fmt(g.cost)} ₽</span></div>
                      <div>Клики: <span className="text-foreground">{fmt(g.clicks)}</span></div>
                      <div>Конверсии: <span className="text-foreground">{g.conv}</span></div>
                      <div>CPA: <span className="text-foreground">{g.cpa ? `${fmt(g.cpa)} ₽` : '—'}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card className="mt-6">
            <ChartTitle title="Статистика по кампаниям" sub="Топ-10 по расходу, остальные — «Прочее»" />
            <CutTable rows={data.campaigns} />
          </Card>

          <Card className="mt-6">
            <ChartTitle title="Статистика по группам объявлений" sub="Топ-10 по расходу, остальные — «Прочее»" />
            <CutTable rows={data.groups} />
          </Card>

          <Card className="mt-6">
            <ChartTitle title="Статистика по объявлениям" sub="Топ-10 по расходу, остальные — «Прочее»" />
            <CutTable rows={data.ads} />
          </Card>
        </Section>

        {/* 6. РАБОТЫ */}
        <Section id="works" num="06" title="Работы" icon="ListChecks" sub="Проведено за месяц">
          <Card className="max-w-2xl">
            <div className="mb-4 flex items-center gap-2 font-display text-lg font-semibold uppercase">
              <Icon name="CircleCheckBig" size={20} className="text-primary" /> Проведённые работы
            </div>
            <ul className="space-y-3">
              {workDone.map((w) => (
                <li key={w} className="flex items-start gap-3 text-sm">
                  <Icon name="Check" size={16} className="mt-0.5 shrink-0 text-primary" />{w}
                </li>
              ))}
            </ul>
          </Card>
        </Section>

        {/* 7. СПРОС */}
        <Section id="demand" num="07" title="Спрос на следующий месяц" icon="Search" sub="Число запросов по Wordstat: 2024 / 2025 / 2026">
          <Card>
            <ChartTitle title="Динамика спроса" sub="Число запросов в месяц" />
            <ResponsiveContainer width="100%" height={320}>
              <ComposedChart data={demand} margin={{ top: 30 }}>
                <defs>
                  <linearGradient id="dem" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={NEON.cyan} stopOpacity={0.4} />
                    <stop offset="100%" stopColor={NEON.cyan} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(0,0%,90%)" />
                <XAxis dataKey="m" stroke="hsl(240,4%,45%)" fontSize={12} />
                <YAxis stroke="hsl(240,4%,45%)" fontSize={11} tickFormatter={(v) => `${Math.round(v / 1000)}к`} />
                <Tooltip contentStyle={tipStyleLight} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Line type="monotone" dataKey="y24" name="2024" stroke={NEON.gray} strokeWidth={1.5} strokeDasharray="6 4" dot={false} opacity={0.7} />
                <Line type="monotone" dataKey="y25" name="2025" stroke={NEON.violet} strokeWidth={2} strokeDasharray="6 4" dot={false} />
                <Area type="monotone" dataKey="y26" name="2026" stroke={NEON.cyan} strokeWidth={2.5} fill="url(#dem)" connectNulls={false} />
              </ComposedChart>
            </ResponsiveContainer>
            <p className="mt-4 text-sm leading-relaxed text-foreground/90">
              Спрос по Wordstat в 2026 году держится примерно на уровне 2025-го, а в июле даже обогнал его:
              190 355 запросов против 178 894 годом ранее — и почти вышел на уровень июля 2024 года (194 252).
              После проседания в мае-июне 2026 года спрос заметно восстановился к июлю, что говорит о сезонном
              оживлении рынка. Рекомендуем использовать этот момент для наращивания охвата в августе.
            </p>
          </Card>
        </Section>
      </div>
    </div>
  );
};

export default Aston;