import { useState, useMemo } from 'react';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import {
  AreaChart, Area, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LabelList,
} from 'recharts';
import {
  NEON, PIE_COLORS, CLIENT, planFact, planFactNotes, monthCompare, yearly, demand,
  deviceDim, genderDim, ageDim, targetingDim, byGeo,
  campaigns, campaignTotals, byGroupFull, adsFull,
  workDone, workPlan, nextPlan, upsellChannels, upsellDiscountPerChannel, breakdownInsights, contacts,
} from '@/data/report';

const tipStyle = {
  background: 'hsl(229,28%,9%)',
  border: '1px solid hsl(231,22%,18%)',
  borderRadius: 12,
  color: '#fff',
  fontSize: 13,
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

// ── Delta для сравнения месяцев: для стоимостных метрик рост = плохо; <5% — нейтрально ──
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

const Sup = ({ children }: { children: string }) => (
  <sup className="ml-0.5 text-primary">{children}</sup>
);

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
        <h2 className="font-display text-2xl font-600 uppercase tracking-wide md:text-3xl">{title}</h2>
        {sub && <p className="text-sm text-muted-foreground">{sub}</p>}
      </div>
    </div>
    {children}
  </section>
);

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`rounded-2xl border border-border bg-card p-6 ${className}`}>{children}</div>
);

const ChartTitle = ({ title, sub, action }: { title: string; sub?: string; action?: React.ReactNode }) => (
  <div className="mb-5 flex items-start justify-between gap-3">
    <div>
      <h3 className="font-display text-lg font-600 uppercase tracking-wide">{title}</h3>
      {sub && <p className="text-sm text-muted-foreground">{sub}</p>}
    </div>
    {action}
  </div>
);

const ValueToggle = ({ show, setShow }: { show: boolean; setShow: (v: boolean) => void }) => (
  <button onClick={() => setShow(!show)}
    className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1 font-mono text-xs transition-all ${
      show ? 'border-primary/40 bg-primary/10 text-primary' : 'border-border text-muted-foreground'
    }`}>
    <Icon name="Hash" size={12} /> Цифры
  </button>
);

// ── Общий вид метки значения на линии: тёмная плашка + белый текст, чтобы не сливалось с графиком ──
type ValueLabelProps = { x?: number; y?: number; value?: number | string; fill?: string };
const ValueLabel = (props: ValueLabelProps) => {
  const { x, y, value, fill } = props;
  if (value === null || value === undefined || x === undefined || y === undefined) return null;
  const text = typeof value === 'number' ? fmt(value) : value;
  const w = Math.max(28, String(text).length * 7 + 10);
  return (
    <g>
      <rect x={x - w / 2} y={y - 24} width={w} height={18} rx={5} fill="hsl(229,28%,9%)" stroke={fill} strokeWidth={1} opacity={0.95} />
      <text x={x} y={y - 11} textAnchor="middle" fontSize={11} fontWeight={700} fill="#fff" fontFamily="JetBrains Mono, monospace">
        {text}
      </text>
    </g>
  );
};

const nav = [
  { id: 'about', label: 'Общая инфо' },
  { id: 'planfact', label: 'План / Факт' },
  { id: 'months', label: 'Май → Июнь' },
  { id: 'trends', label: 'Тренды года' },
  { id: 'breakdown', label: 'Разрезы' },
  { id: 'works', label: 'Работы' },
  { id: 'demand', label: 'Спрос' },
  { id: 'nextplan', label: 'План месяца' },
  { id: 'upsell', label: 'Другие каналы' },
  { id: 'contacts', label: 'Контакты' },
];

// ── Мини пирог с легендой, вынесенными % и (шт × стоимость) подписями ──
type DimRow = { name: string; [k: string]: number | string };
const DimPie = ({ data, dataKey, title, unit = '', showCost = false }: {
  data: DimRow[]; dataKey: string; title: string; unit?: string; showCost?: boolean;
}) => {
  return (
    <div>
      <div className="mb-2 text-center font-mono text-xs uppercase tracking-wide text-muted-foreground">{title}</div>
      <ResponsiveContainer width="100%" height={220}>
        <PieChart margin={{ top: 10, bottom: 10 }}>
          <Pie
            data={data} dataKey={dataKey} nameKey="name" cx="50%" cy="50%" innerRadius={42} outerRadius={68} paddingAngle={2}
            label={(p: { cx: number; cy: number; midAngle: number; outerRadius: number; percent: number; index: number }) => {
              const { cx, cy, midAngle, outerRadius, percent, index } = p;
              if (!percent) return null;
              const RAD = Math.PI / 180;
              const sin = Math.sin(-midAngle * RAD);
              const cos = Math.cos(-midAngle * RAD);
              const sx = cx + (outerRadius + 4) * cos;
              const sy = cy + (outerRadius + 4) * sin;
              const mx = cx + (outerRadius + 20) * cos;
              const my = cy + (outerRadius + 20) * sin;
              const ex = mx + (cos >= 0 ? 1 : -1) * 12;
              const ey = my;
              const row = data[index];
              const val = Number(row[dataKey]) || 0;
              const costPer = showCost && val ? Number(row.cost) / val : null;
              return (
                <g>
                  <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={PIE_COLORS[index % PIE_COLORS.length]} fill="none" />
                  <circle cx={ex} cy={ey} r={2} fill={PIE_COLORS[index % PIE_COLORS.length]} stroke="none" />
                  <text x={ex + (cos >= 0 ? 6 : -6)} y={ey} textAnchor={cos >= 0 ? 'start' : 'end'} dominantBaseline="central" fontSize={11} fontWeight={700} fill="#fff">
                    {(percent * 100).toFixed(0)}% ({fmt(val)}{costPer !== null ? ` по ${fmt(costPer)} ₽` : ''})
                  </text>
                </g>
              );
            }}
            labelLine={false}
          >
            {data.map((_, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} stroke="none" />)}
          </Pie>
          <Tooltip contentStyle={tipStyle} formatter={(v: number) => `${fmt(v)}${unit}`} />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-1 flex flex-wrap justify-center gap-2">
        {data.map((d, i) => (
          <span key={d.name} className="flex items-center gap-1 font-mono text-[11px] text-foreground/80">
            <span className="h-2 w-2 rounded-full" style={{ background: PIE_COLORS[i % PIE_COLORS.length] }} />
            {d.name}
          </span>
        ))}
      </div>
    </div>
  );
};

const dimensions = [
  { key: 'device', label: 'Тип устройства', data: deviceDim },
  { key: 'gender', label: 'Пол аудитории', data: genderDim },
  { key: 'age', label: 'Возраст', data: ageDim },
  { key: 'targeting', label: 'Условие показа', data: targetingDim },
];

type MetricKey = 'cost' | 'clicks' | 'cpc' | 'conv' | 'cr' | 'cpa';
type MetricRow = Record<MetricKey, number | null> & { name?: string; campaign?: string; group?: string; title?: string; text?: string };

// Урезанный набор столбцов для таблиц кампаний/групп (без Показы, CTR, Ср. объём трафика, Ср. позиция, Отказы)
const groupColumns: { key: MetricKey; label: string; fmt?: (v: number | null | undefined) => string }[] = [
  { key: 'cost', label: 'Расход, ₽', fmt },
  { key: 'clicks', label: 'Клики', fmt },
  { key: 'cpc', label: 'CPC, ₽', fmt },
  { key: 'conv', label: 'Конверсии', fmt },
  { key: 'cr', label: 'CR, %', fmt: fmt1 },
  { key: 'cpa', label: 'CPA, ₽', fmt },
];

type AdMetricKey = MetricKey | 'impressions' | 'ctr' | 'avgTraffic' | 'avgPos' | 'bounce';
type AdRow = Record<AdMetricKey, number | null> & { campaign?: string; group?: string; title?: string; text?: string };

// Полный набор столбцов — для блока «Объявления»
const adColumns: { key: AdMetricKey; label: string; fmt?: (v: number | null | undefined) => string }[] = [
  { key: 'cost', label: 'Расход, ₽', fmt },
  { key: 'impressions', label: 'Показы', fmt },
  { key: 'clicks', label: 'Клики', fmt },
  { key: 'ctr', label: 'CTR, %', fmt: fmt1 },
  { key: 'cpc', label: 'CPC, ₽', fmt },
  { key: 'avgTraffic', label: 'Ср. объём трафика', fmt },
  { key: 'avgPos', label: 'Ср. позиция', fmt: fmt1 },
  { key: 'bounce', label: 'Отказы, %', fmt: fmt1 },
  { key: 'conv', label: 'Конверсии', fmt },
  { key: 'cr', label: 'CR, %', fmt: fmt1 },
  { key: 'cpa', label: 'CPA, ₽', fmt },
];

const levelBadge: Record<string, string> = { high: 'border-red-500/40 bg-red-500/10', mid: 'border-amber-500/40 bg-amber-500/10', low: 'border-cyan-500/40 bg-cyan-500/10' };

const Index = () => {
  const [showVals, setShowVals] = useState({ cost: false, clk: false, cpc: false, lead: false, lc: false, qual: false, qc: false });
  const [campaignFilter, setCampaignFilter] = useState<string>('all');
  const [adsCampaignFilter, setAdsCampaignFilter] = useState<string>('all');
  const [adsGroupFilter, setAdsGroupFilter] = useState<string>('all');
  const [selectedChannels, setSelectedChannels] = useState<string[]>([]);

  const scroll = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const filteredGroups = useMemo(() => {
    const rows = campaignFilter === 'all' ? byGroupFull : byGroupFull.filter((g) => g.campaign === campaignFilter);
    return [...rows].sort((a, b) => b.cost - a.cost).slice(0, 10);
  }, [campaignFilter]);

  const groupsInAdsCampaign = useMemo(() => {
    const rows = adsCampaignFilter === 'all' ? byGroupFull : byGroupFull.filter((g) => g.campaign === adsCampaignFilter);
    return Array.from(new Set(rows.map((r) => r.name)));
  }, [adsCampaignFilter]);

  const filteredAds = useMemo(() => {
    return adsFull.filter((a) =>
      (adsCampaignFilter === 'all' || a.campaign === adsCampaignFilter) &&
      (adsGroupFilter === 'all' || a.group === adsGroupFilter)
    );
  }, [adsCampaignFilter, adsGroupFilter]);

  const toggleChannel = (name: string) =>
    setSelectedChannels((s) => (s.includes(name) ? s.filter((x) => x !== name) : [...s, name]));

  const calc = useMemo(() => {
    const chosen = upsellChannels.filter((c) => selectedChannels.includes(c.name));
    const base = chosen.reduce((s, c) => s + c.price, 0);
    const discount = chosen.length > 1 ? (chosen.length - 1) * upsellDiscountPerChannel : 0;
    const finalPrice = Math.round(base * (1 - discount / 100));
    return { base, discount, finalPrice, count: chosen.length };
  }, [selectedChannels]);

  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex items-center gap-4 overflow-x-auto px-6 py-3">
          <span className="flex items-center gap-2 whitespace-nowrap font-display text-lg font-700 uppercase">
            <span className="flex h-2.5 w-2.5 animate-pulse rounded-full bg-primary" />
            Elmo<span className="text-primary">pro</span>
          </span>
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
            <h1 className="font-display text-5xl font-700 uppercase leading-none tracking-tight md:text-7xl">
              Отчёт <span className="text-primary text-glow">{CLIENT.period}</span>
            </h1>
            <p className="mt-4 max-w-xl text-muted-foreground">
              {CLIENT.name} · {CLIENT.id}. Статистика, тренды, сравнение периодов и план на следующий месяц.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto space-y-16 px-6 py-12">
        {/* 1. ОБЩАЯ ИНФОРМАЦИЯ */}
        <Section id="about" num="01" title="Общая информация" icon="Info" sub="Ключевые ссылки по проекту">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { icon: 'CalendarRange', label: 'Понедельная статистика', href: CLIENT.weeklyStats, cta: 'Открыть таблицу' },
              { icon: 'TrendingUp', label: 'Воронка окупаемости', href: CLIENT.paybackFunnel, cta: 'Открыть таблицу' },
              { icon: 'Globe', label: 'Сайт проекта', href: CLIENT.site, cta: 'elmopro.org' },
            ].map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:glow-cyan">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon name={l.icon} size={20} />
                </div>
                <div className="mb-1 font-500">{l.label}</div>
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
                    <th className="pb-3 text-right font-500">% выполнения</th>
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
                        <td className="py-3.5 text-right font-mono font-700">
                          {r.factLabel}{r.factNote && <Sup>{r.factNote}</Sup>}
                        </td>
                        <td className="py-3.5 text-right">
                          <span className="inline-flex items-center gap-1 font-mono text-sm font-bold" style={{ color: st.color }}>
                            <Icon name="TrendingUp" size={13} />Δ {fmt1(st.pct)}%
                          </span>
                        </td>
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
            <div className="mt-4 space-y-1 font-mono text-xs text-muted-foreground">
              {planFactNotes.map((n) => <div key={n}>{n}</div>)}
            </div>
          </Card>
        </Section>

        {/* 3. МАЙ → ИЮНЬ */}
        <Section id="months" num="03" title="Сравнение с прошлым месяцем" icon="GitCompareArrows" sub="Факт май → факт июнь 2026">
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px]">
                <thead>
                  <tr className="border-b border-border text-left font-mono text-xs uppercase tracking-wide text-muted-foreground">
                    <th className="pb-3 font-500">Параметры</th>
                    <th className="pb-3 text-right font-500">Факт май</th>
                    <th className="pb-3 text-right font-500">Факт июнь</th>
                    <th className="pb-3 text-right font-500">Δ</th>
                  </tr>
                </thead>
                <tbody>
                  {monthCompare.map((r) => (
                    <tr key={r.param} className="border-b border-border/50 transition-colors hover:bg-secondary/40">
                      <td className="py-3.5 font-500">{r.param}</td>
                      <td className="py-3.5 text-right font-mono text-muted-foreground">
                        {r.mayLabel}{r.mayNote && <Sup>{r.mayNote}</Sup>}
                      </td>
                      <td className="py-3.5 text-right font-mono font-700">
                        {r.junLabel}{r.junNote && <Sup>{r.junNote}</Sup>}
                      </td>
                      <td className="py-3.5 text-right"><MonthDelta mayNum={r.mayNum} junNum={r.junNum} isCost={r.isCost} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 font-mono text-xs text-muted-foreground">
              * По Чистым лидам возможны спам и необработанные заявки. ** Учтены Потенциальные Квалы.
              Изменения до 5% считаются незначительными и не подсвечиваются.
            </p>
          </Card>
        </Section>

        {/* 4. ТРЕНДЫ ГОДА */}
        <Section id="trends" num="04" title="Тренды за год" icon="ChartLine" sub="Сплошная — 2026, пунктир — 2025 (за тот же период)">
          <div className="space-y-6">
            <Card>
              <ChartTitle title="Расход, ₽" sub="Помесячно"
                action={<ValueToggle show={showVals.cost} setShow={(v) => setShowVals((s) => ({ ...s, cost: v }))} />} />
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={yearly} margin={{ top: 30 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={NEON.grid} />
                  <XAxis dataKey="m" stroke="hsl(220,15%,60%)" fontSize={12} />
                  <YAxis stroke="hsl(220,15%,60%)" fontSize={11} tickFormatter={(v) => `${Math.round(v / 1000)}к`} />
                  <Tooltip contentStyle={tipStyle} formatter={(v: number) => `${fmt(v)} ₽`} />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                  <Line type="monotone" dataKey="cost25" name="2025" stroke={NEON.violet} strokeWidth={2} strokeDasharray="6 4" dot={false} />
                  <Line type="monotone" dataKey="cost26" name="2026" stroke={NEON.cyan} strokeWidth={2.5} dot={{ r: 3 }} connectNulls={false}>
                    {showVals.cost && <LabelList dataKey="cost26" content={<ValueLabel fill={NEON.cyan} />} />}
                  </Line>
                </LineChart>
              </ResponsiveContainer>
            </Card>

            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <ChartTitle title="Клики" sub="Количество кликов"
                  action={<ValueToggle show={showVals.clk} setShow={(v) => setShowVals((s) => ({ ...s, clk: v }))} />} />
                <ResponsiveContainer width="100%" height={260}>
                  <LineChart data={yearly} margin={{ top: 30 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={NEON.grid} />
                    <XAxis dataKey="m" stroke="hsl(220,15%,60%)" fontSize={12} />
                    <YAxis stroke="hsl(220,15%,60%)" fontSize={11} />
                    <Tooltip contentStyle={tipStyle} />
                    <Legend wrapperStyle={{ fontSize: 12 }} />
                    <Line type="monotone" dataKey="clk25" name="2025" stroke={NEON.violet} strokeWidth={1.5} strokeDasharray="6 4" dot={false} opacity={0.6} />
                    <Line type="monotone" dataKey="clk26" name="2026" stroke={NEON.cyan} strokeWidth={2.5} dot={{ r: 3 }} connectNulls={false}>
                      {showVals.clk && <LabelList dataKey="clk26" content={<ValueLabel fill={NEON.cyan} />} />}
                    </Line>
                  </LineChart>
                </ResponsiveContainer>
              </Card>

              <Card>
                <ChartTitle title="CPC, ₽" sub="Цена клика"
                  action={<ValueToggle show={showVals.cpc} setShow={(v) => setShowVals((s) => ({ ...s, cpc: v }))} />} />
                <ResponsiveContainer width="100%" height={260}>
                  <LineChart data={yearly} margin={{ top: 30 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={NEON.grid} />
                    <XAxis dataKey="m" stroke="hsl(220,15%,60%)" fontSize={12} />
                    <YAxis stroke="hsl(220,15%,60%)" fontSize={11} />
                    <Tooltip contentStyle={tipStyle} formatter={(v: number) => `${fmt(v)} ₽`} />
                    <Legend wrapperStyle={{ fontSize: 12 }} />
                    <Line type="monotone" dataKey="cpc25" name="2025" stroke={NEON.violet} strokeWidth={1.5} strokeDasharray="6 4" dot={false} opacity={0.6} />
                    <Line type="monotone" dataKey="cpc26" name="2026" stroke={NEON.amber} strokeWidth={2.5} dot={{ r: 3 }} connectNulls={false}>
                      {showVals.cpc && <LabelList dataKey="cpc26" content={<ValueLabel fill={NEON.amber} />} />}
                    </Line>
                  </LineChart>
                </ResponsiveContainer>
              </Card>

              <Card>
                <ChartTitle title="Уникальные лиды" sub="Количество"
                  action={<ValueToggle show={showVals.lead} setShow={(v) => setShowVals((s) => ({ ...s, lead: v }))} />} />
                <ResponsiveContainer width="100%" height={260}>
                  <LineChart data={yearly} margin={{ top: 30 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={NEON.grid} />
                    <XAxis dataKey="m" stroke="hsl(220,15%,60%)" fontSize={12} />
                    <YAxis stroke="hsl(220,15%,60%)" fontSize={11} />
                    <Tooltip contentStyle={tipStyle} />
                    <Legend wrapperStyle={{ fontSize: 12 }} />
                    <Line type="monotone" dataKey="lead25" name="2025" stroke={NEON.violet} strokeWidth={1.5} strokeDasharray="6 4" dot={false} opacity={0.6} />
                    <Line type="monotone" dataKey="lead26" name="2026" stroke={NEON.lime} strokeWidth={2.5} dot={{ r: 3 }} connectNulls={false}>
                      {showVals.lead && <LabelList dataKey="lead26" content={<ValueLabel fill={NEON.lime} />} />}
                    </Line>
                  </LineChart>
                </ResponsiveContainer>
              </Card>

              <Card>
                <ChartTitle title="Стоимость уник. лида, ₽"
                  action={<ValueToggle show={showVals.lc} setShow={(v) => setShowVals((s) => ({ ...s, lc: v }))} />} />
                <ResponsiveContainer width="100%" height={260}>
                  <LineChart data={yearly} margin={{ top: 30 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={NEON.grid} />
                    <XAxis dataKey="m" stroke="hsl(220,15%,60%)" fontSize={12} />
                    <YAxis stroke="hsl(220,15%,60%)" fontSize={11} tickFormatter={(v) => `${Math.round(v / 1000)}к`} />
                    <Tooltip contentStyle={tipStyle} formatter={(v: number) => `${fmt(v)} ₽`} />
                    <Legend wrapperStyle={{ fontSize: 12 }} />
                    <Line type="monotone" dataKey="lc25" name="2025" stroke={NEON.violet} strokeWidth={1.5} strokeDasharray="6 4" dot={false} opacity={0.6} />
                    <Line type="monotone" dataKey="lc26" name="2026" stroke={NEON.amber} strokeWidth={2.5} dot={{ r: 3 }} connectNulls={false}>
                      {showVals.lc && <LabelList dataKey="lc26" content={<ValueLabel fill={NEON.amber} />} />}
                    </Line>
                  </LineChart>
                </ResponsiveContainer>
              </Card>

              <Card>
                <ChartTitle title="Квал. лиды" sub="Количество"
                  action={<ValueToggle show={showVals.qual} setShow={(v) => setShowVals((s) => ({ ...s, qual: v }))} />} />
                <ResponsiveContainer width="100%" height={260}>
                  <LineChart data={yearly} margin={{ top: 30 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={NEON.grid} />
                    <XAxis dataKey="m" stroke="hsl(220,15%,60%)" fontSize={12} />
                    <YAxis stroke="hsl(220,15%,60%)" fontSize={11} />
                    <Tooltip contentStyle={tipStyle} />
                    <Legend wrapperStyle={{ fontSize: 12 }} />
                    <Line type="monotone" dataKey="qual25" name="2025" stroke={NEON.violet} strokeWidth={1.5} strokeDasharray="6 4" dot={false} opacity={0.6} />
                    <Line type="monotone" dataKey="qual26" name="2026" stroke={NEON.violet} strokeWidth={2.5} dot={{ r: 3 }} connectNulls={false}>
                      {showVals.qual && <LabelList dataKey="qual26" content={<ValueLabel fill={NEON.violet} />} />}
                    </Line>
                  </LineChart>
                </ResponsiveContainer>
              </Card>

              <Card>
                <ChartTitle title="Стоимость квал. лида, ₽"
                  action={<ValueToggle show={showVals.qc} setShow={(v) => setShowVals((s) => ({ ...s, qc: v }))} />} />
                <ResponsiveContainer width="100%" height={260}>
                  <LineChart data={yearly} margin={{ top: 30 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={NEON.grid} />
                    <XAxis dataKey="m" stroke="hsl(220,15%,60%)" fontSize={12} />
                    <YAxis stroke="hsl(220,15%,60%)" fontSize={11} tickFormatter={(v) => `${Math.round(v / 1000)}к`} />
                    <Tooltip contentStyle={tipStyle} formatter={(v: number) => `${fmt(v)} ₽`} />
                    <Legend wrapperStyle={{ fontSize: 12 }} />
                    <Line type="monotone" dataKey="qc25" name="2025" stroke={NEON.violet} strokeWidth={1.5} strokeDasharray="6 4" dot={false} opacity={0.6} />
                    <Line type="monotone" dataKey="qc26" name="2026" stroke={NEON.amber} strokeWidth={2.5} dot={{ r: 3 }} connectNulls={false}>
                      {showVals.qc && <LabelList dataKey="qc26" content={<ValueLabel fill={NEON.amber} />} />}
                    </Line>
                  </LineChart>
                </ResponsiveContainer>
              </Card>
            </div>
          </div>

          <Card className="mt-6 border-primary/30">
            <div className="mb-3 flex items-center gap-2 font-display text-lg font-600 uppercase text-primary">
              <Icon name="Lightbulb" size={20} /> Вывод маркетолога
            </div>
            <p className="text-sm leading-relaxed text-foreground/90">
              За 2026 год расход растёт при заметном удорожании трафика: <b>CPC в июне 643 ₽</b> против 259 ₽ год назад —
              рост в 2,5 раза. Одновременно падает число кликов (298 против 381) и уникальных лидов (24 против 36),
              а стоимость уникального лида выросла с ~2 700 ₽ до <b>~7 990 ₽</b>. Ключевая причина — усиление аукциона
              и ставка на дорогие высокочастотные фразы. Рекомендация: сместить фокус с «выкупа объёма» на конверсионные
              связки, усилить минусацию и корректировки, а бюджетный рост направлять в сегменты с CPA ниже плана (45-54, десктоп).
            </p>
          </Card>
        </Section>

        {/* 5. РАЗРЕЗЫ */}
        <Section id="breakdown" num="05" title="Статистика по Директу" icon="ChartPie" sub={`Разрезы за ${CLIENT.period} · период 01.06 – 30.06.2026`}>
          {/* Круговые диаграммы по 4 измерениям × 3 метрики */}
          <div className="space-y-6">
            {dimensions.map((dim) => (
              <Card key={dim.key}>
                <ChartTitle title={dim.label} />
                <div className="grid gap-4 sm:grid-cols-3">
                  <DimPie data={dim.data} dataKey="cost" title="Расход, ₽" unit=" ₽" />
                  <DimPie data={dim.data} dataKey="leads" title="Уникальные лиды" showCost />
                  <DimPie data={dim.data} dataKey="quals" title="Квал. лиды" showCost />
                </div>
              </Card>
            ))}
          </div>

          {/* География */}
          <Card className="mt-6">
            <ChartTitle title="География размещения" sub="Доля трафика, объём и стоимость лидов" />
            <div className="grid gap-4 md:grid-cols-3">
              {byGeo.map((g, i) => (
                <div key={g.name} className="rounded-xl border border-border/60 bg-secondary/30 p-4">
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={16} className="text-primary" />
                    <span className="font-500">{g.name}</span>
                  </div>
                  <div className="mt-2 font-mono text-3xl font-700" style={{ color: PIE_COLORS[i] }}>{g.share}%</div>
                  <div className="mt-3 grid grid-cols-2 gap-2 font-mono text-xs text-muted-foreground">
                    <div>Уники: <span className="text-foreground">{g.leads}</span> · {fmt(g.cost / g.leads)} ₽</div>
                    <div>Квалы: <span className="text-foreground">{g.quals}</span> · {g.quals ? `${fmt(g.cost / g.quals)} ₽` : '—'}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* По кампаниям */}
          <Card className="mt-6">
            <ChartTitle title="Статистика по кампаниям" />
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px]">
                <thead>
                  <tr className="border-b border-border text-left font-mono text-xs uppercase tracking-wide text-muted-foreground">
                    <th className="pb-3 font-500">Кампания</th>
                    {groupColumns.map((c) => <th key={c.key} className="pb-3 text-right font-500">{c.label}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {campaignTotals.map((r) => (
                    <tr key={r.name} className="border-b border-border/50 hover:bg-secondary/40">
                      <td className="py-3 pr-4 font-500">{r.name}</td>
                      {groupColumns.map((c) => (
                        <td key={c.key} className="py-3 text-right font-mono">{c.fmt ? c.fmt((r as MetricRow)[c.key]) : (r as MetricRow)[c.key]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Кампания-группа с фильтром */}
          <Card className="mt-6">
            <ChartTitle title="Кампания — группа" sub="Топ-10 групп внутри выбранной кампании"
              action={
                <select value={campaignFilter} onChange={(e) => setCampaignFilter(e.target.value)}
                  className="rounded-lg border border-border bg-secondary/40 px-3 py-1.5 font-mono text-xs outline-none">
                  <option value="all">Все кампании</option>
                  {campaigns.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              } />
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px]">
                <thead>
                  <tr className="border-b border-border text-left font-mono text-xs uppercase tracking-wide text-muted-foreground">
                    <th className="pb-3 font-500">Группа</th>
                    {groupColumns.map((c) => <th key={c.key} className="pb-3 text-right font-500">{c.label}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {filteredGroups.map((r) => (
                    <tr key={r.name} className="border-b border-border/50 hover:bg-secondary/40">
                      <td className="py-3 pr-4 font-500">{r.name}</td>
                      {groupColumns.map((c) => (
                        <td key={c.key} className="py-3 text-right font-mono">{c.fmt ? c.fmt((r as MetricRow)[c.key]) : (r as MetricRow)[c.key]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Объявления с фильтрами */}
          <Card className="mt-6">
            <ChartTitle title="Объявления" sub={`Заголовок + текст, полная статистика · ${filteredAds.length} из ${adsFull.length}`}
              action={
                <div className="flex gap-2">
                  <select value={adsCampaignFilter} onChange={(e) => { setAdsCampaignFilter(e.target.value); setAdsGroupFilter('all'); }}
                    className="rounded-lg border border-border bg-secondary/40 px-3 py-1.5 font-mono text-xs outline-none">
                    <option value="all">Все кампании</option>
                    {campaigns.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                  <select value={adsGroupFilter} onChange={(e) => setAdsGroupFilter(e.target.value)}
                    className="rounded-lg border border-border bg-secondary/40 px-3 py-1.5 font-mono text-xs outline-none">
                    <option value="all">Все группы</option>
                    {groupsInAdsCampaign.map((g) => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>
              } />
            <div className="space-y-3">
              {filteredAds.map((a, i) => (
                <div key={i} className="rounded-xl border border-border/60 bg-secondary/30 p-4 transition-all hover:border-primary/40">
                  <div className="mb-3">
                    <div className="font-500 text-primary">{a.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{a.text}</div>
                    <div className="mt-1 font-mono text-xs text-muted-foreground">Группа: {a.group}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-6 lg:grid-cols-11">
                    {adColumns.map((c) => (
                      <div key={c.key} className="text-center">
                        <div className="text-[10px] uppercase text-muted-foreground">{c.label}</div>
                        <div className="font-mono text-sm">{c.fmt ? c.fmt((a as AdRow)[c.key]) : (a as AdRow)[c.key]}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Выводы по 3 уровням важности */}
          <div className="mt-6 space-y-4">
            {breakdownInsights.map((group) => (
              <Card key={group.level} className={`border ${levelBadge[group.level]}`}>
                <div className="mb-3 flex items-center gap-2 font-display text-base font-700 uppercase" style={{ color: group.color }}>
                  <Icon name={group.icon} size={20} /> {group.label}
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  {group.items.map((it) => (
                    <div key={it.title} className="rounded-xl border border-border/60 bg-secondary/30 p-4">
                      <div className="mb-1 font-600">{it.title}</div>
                      <p className="text-sm text-muted-foreground">{it.text}</p>
                      <div className="mt-2 flex items-start gap-1.5 text-sm" style={{ color: group.color }}>
                        <Icon name="ArrowRight" size={14} className="mt-0.5 shrink-0" />
                        <span>{it.hint}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* 6. РАБОТЫ */}
        <Section id="works" num="06" title="Работы и план" icon="ListChecks" sub="Проведено за месяц и план на следующий">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <div className="mb-4 flex items-center gap-2 font-display text-lg font-600 uppercase">
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
            <Card>
              <div className="mb-4 flex items-center gap-2 font-display text-lg font-600 uppercase">
                <Icon name="Rocket" size={20} className="text-accent" /> План на следующий месяц
              </div>
              <ul className="space-y-3">
                {workPlan.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-sm">
                    <Icon name="ArrowRight" size={16} className="mt-0.5 shrink-0 text-accent" />{w}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Section>

        {/* 7. СПРОС */}
        <Section id="demand" num="07" title="Спрос на следующий месяц" icon="Search" sub="Сезонность по Wordstat: 2027 (прогноз) vs 2026 vs 2025">
          <Card>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={demand}>
                <defs>
                  <linearGradient id="dem" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={NEON.cyan} stopOpacity={0.4} />
                    <stop offset="100%" stopColor={NEON.cyan} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke={NEON.grid} />
                <XAxis dataKey="m" stroke="hsl(220,15%,60%)" fontSize={12} />
                <YAxis stroke="hsl(220,15%,60%)" fontSize={11} />
                <Tooltip contentStyle={tipStyle} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Area type="monotone" dataKey="y26" name="Спрос 2026" stroke={NEON.cyan} strokeWidth={2.5} fill="url(#dem)" connectNulls={false} />
                <Line type="monotone" dataKey="y25" name="Спрос 2025" stroke={NEON.violet} strokeWidth={2} strokeDasharray="6 4" dot={false} />
                <Line type="monotone" dataKey="y27" name="Прогноз 2027*" stroke={NEON.lime} strokeWidth={2} strokeDasharray="2 4" dot={false} />
              </AreaChart>
            </ResponsiveContainer>
            <p className="mt-4 text-sm leading-relaxed text-foreground/90">
              По динамике Wordstat спрос на электромонтажные услуги в июле остаётся на сезонном пике — уровень 2026 года
              стабильно выше прошлогоднего на 3-7%. Рекомендуем удерживать бюджет и позиции в спецразмещении, чтобы
              не терять долю на растущем рынке.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge className="bg-secondary font-mono text-xs text-muted-foreground hover:bg-secondary">
                <Icon name="Image" size={12} className="mr-1" /> Место под скриншот из Wordstat — можно заменить график на ваш снимок
              </Badge>
              <Badge className="bg-secondary font-mono text-xs text-muted-foreground hover:bg-secondary">
                <Icon name="Dices" size={12} className="mr-1" /> * Прогноз 2027 — рандомная заглушка, обновим по реальным данным
              </Badge>
            </div>
          </Card>
        </Section>

        {/* 8. ПЛАН МЕСЯЦА */}
        <Section id="nextplan" num="08" title="План на новый месяц" icon="Flag" sub="Плановые показатели">
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[420px]">
                <thead>
                  <tr className="border-b border-border text-left font-mono text-xs uppercase tracking-wide text-muted-foreground">
                    <th className="pb-3 font-500">Параметры</th>
                    <th className="pb-3 text-right font-500">План</th>
                  </tr>
                </thead>
                <tbody>
                  {nextPlan.map((r) => (
                    <tr key={r.param} className="border-b border-border/50 hover:bg-secondary/40">
                      <td className="py-3.5 font-500">{r.param}</td>
                      <td className="py-3.5 text-right font-mono font-700 text-primary">{r.plan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </Section>

        {/* UPSELL — переработанный продающий блок */}
        <Section id="upsell" num="09" title="Расширьте охват" icon="Sparkles" sub="Дополнительные каналы трафика для стабильного потока заявок">
          {/* Асимметричная сетка: первый канал крупный, остальные компактные */}
          <div className="grid gap-4 lg:grid-cols-3">
            <Card className="relative overflow-hidden border-primary/40 lg:col-span-2 lg:row-span-2">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/15 blur-3xl" />
              <div className="relative">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Icon name={upsellChannels[0].icon} size={24} />
                  </div>
                  <Badge className="bg-primary/15 font-mono text-primary hover:bg-primary/15">от {fmt(upsellChannels[0].price)} ₽/мес</Badge>
                </div>
                <div className="mb-2 font-display text-2xl font-700 uppercase">{upsellChannels[0].name}</div>
                <div className="mb-3 flex items-baseline gap-2">
                  <span className="font-mono text-4xl font-700 text-primary">{upsellChannels[0].stat}</span>
                  <span className="text-sm text-muted-foreground">{upsellChannels[0].statLabel}</span>
                </div>
                <p className="text-sm leading-relaxed text-foreground/90">{upsellChannels[0].pitch}</p>
                <div className="mt-4 flex items-center gap-2 rounded-lg bg-secondary/50 px-3 py-2 font-mono text-xs text-muted-foreground">
                  <Icon name="ShieldCheck" size={14} className="shrink-0 text-primary" /> {upsellChannels[0].proof}
                </div>
              </div>
            </Card>

            {upsellChannels.slice(1).map((c) => (
              <Card key={c.name} className="transition-all hover:border-primary/40">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon name={c.icon} size={20} />
                  </div>
                  <Badge className="bg-secondary font-mono text-xs text-muted-foreground hover:bg-secondary">от {fmt(c.price)} ₽/мес</Badge>
                </div>
                <div className="mb-2 font-display text-base font-600 uppercase">{c.name}</div>
                <div className="mb-2 flex items-baseline gap-1.5">
                  <span className="font-mono text-xl font-700" style={{ color: NEON.cyan }}>{c.stat}</span>
                  <span className="text-xs text-muted-foreground">{c.statLabel}</span>
                </div>
                <p className="text-sm text-muted-foreground">{c.pitch}</p>
              </Card>
            ))}
          </div>

          {/* Калькулятор стоимости */}
          <Card className="mt-6 border-primary/40 glow-cyan">
            <div className="mb-4 flex items-center gap-2 font-display text-lg font-700 uppercase text-primary">
              <Icon name="Calculator" size={20} /> Калькулятор медиаплана
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              Выберите каналы — скидка {upsellDiscountPerChannel}% за каждый дополнительный канал (максимум {upsellChannels.length * upsellDiscountPerChannel - upsellDiscountPerChannel}% при подключении всех {upsellChannels.length}).
            </p>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {upsellChannels.map((c) => {
                const active = selectedChannels.includes(c.name);
                return (
                  <button key={c.name} onClick={() => toggleChannel(c.name)}
                    className={`flex items-center gap-2 rounded-xl border px-3 py-3 text-left transition-all ${
                      active ? 'border-primary bg-primary/10' : 'border-border bg-secondary/30 hover:border-primary/40'
                    }`}>
                    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${active ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'}`}>
                      <Icon name={active ? 'Check' : c.icon} size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-500">{c.name}</div>
                      <div className="font-mono text-xs text-muted-foreground">{fmt(c.price)} ₽/мес</div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-secondary/40 p-4">
              <div>
                {calc.count === 0 ? (
                  <div className="text-sm text-muted-foreground">Выберите один или несколько каналов, чтобы увидеть стоимость</div>
                ) : (
                  <>
                    <div className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                      {calc.count} канал{calc.count > 1 ? (calc.count < 5 ? 'а' : 'ов') : ''} · скидка {calc.discount}%
                    </div>
                    <div className="flex items-baseline gap-2">
                      {calc.discount > 0 && (
                        <span className="font-mono text-lg text-muted-foreground line-through">{fmt(calc.base)} ₽</span>
                      )}
                      <span className="font-mono text-3xl font-700 text-primary">от {fmt(calc.finalPrice)} ₽/мес</span>
                    </div>
                  </>
                )}
              </div>
              <button onClick={() => scroll('contacts')}
                className="flex items-center gap-2 whitespace-nowrap rounded-xl bg-primary px-5 py-3 font-mono text-sm font-700 text-primary-foreground transition-all hover:opacity-90">
                Посчитать медиаплан <Icon name="ArrowRight" size={16} />
              </button>
            </div>

            <div className="mt-4 flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <Icon name="Gift" size={14} className="text-primary" /> Действует для текущих клиентов Директа — скидка суммируется автоматически при подключении каждого следующего канала
            </div>
          </Card>
        </Section>

        {/* 10. КОНТАКТЫ + ФОРМА */}
        <Section id="contacts" num="10" title="Остались вопросы?" icon="MessageCircle" sub="Свяжитесь удобным способом">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <p className="mb-6 text-sm text-muted-foreground">
                Если у вас остались вопросы или предложения по форме или содержанию ежемесячного отчёта — свяжитесь удобным способом.
              </p>
              <div className="space-y-4">
                {[
                  { icon: 'Phone', label: 'Телефон', value: contacts.phone },
                  { icon: 'Mail', label: 'Почта', value: contacts.email },
                  { icon: 'MapPin', label: 'Офис', value: contacts.office },
                ].map((c) => (
                  <div key={c.label} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon name={c.icon} size={18} />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wide text-muted-foreground">{c.label}</div>
                      <div className="font-mono">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <div className="mb-4 font-display text-lg font-600 uppercase">Написать нам</div>
              <div className="space-y-3">
                <input placeholder="Ваше имя" className="w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition-all focus:border-primary/50" />
                <input placeholder="Телефон или email" className="w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition-all focus:border-primary/50" />
                <textarea placeholder="Ваш вопрос" rows={3} className="w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition-all focus:border-primary/50" />
                <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 font-mono text-sm font-700 text-primary-foreground transition-all hover:opacity-90">
                  <Icon name="Send" size={16} /> Отправить заявку
                </button>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  { icon: 'Send', label: 'Telegram' },
                  { icon: 'MessageCircle', label: 'WhatsApp' },
                  { icon: 'MessagesSquare', label: 'Макс' },
                ].map((m) => (
                  <button key={m.label} className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-primary/40 bg-primary/10 py-2.5 font-mono text-xs text-primary transition-all hover:bg-primary/20">
                    <Icon name={m.icon} size={14} /> {m.label}
                  </button>
                ))}
              </div>
            </Card>
          </div>
        </Section>

        <footer className="border-t border-border pt-6 text-center font-mono text-xs text-muted-foreground">
          {CLIENT.name} · {CLIENT.id} · Отчёт по всем кампаниям Яндекс Директ · {CLIENT.period}
        </footer>
      </div>
    </div>
  );
};

export default Index;