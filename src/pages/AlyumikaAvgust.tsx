import { useState, useRef } from 'react';
import Icon from '@/components/ui/icon';
import {
  ComposedChart, Area, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LabelList,
} from 'recharts';
import {
  NEON, CLIENT, AGENCY, aboutLinks, planFact, planFactNotes, monthCompare, monthlyTrend, demand,
  workDone, workPlan, nextPlan,
} from '@/data/report-alyumika';
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

const planStatusColor = (planNum: number, factNum: number, isCost: boolean) => {
  const ratio = isCost ? planNum / factNum : factNum / planNum;
  const pct = ratio * 100;
  if (pct >= 90) return { color: NEON.pos, icon: 'CircleCheck', pct };
  if (pct >= 60) return { color: NEON.amber, icon: 'CircleAlert', pct };
  return { color: NEON.neg, icon: 'CircleX', pct };
};

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

const ChartTitle = ({ title, sub, action }: { title: string; sub?: string; action?: React.ReactNode }) => (
  <div className="mb-5 flex items-start justify-between gap-3">
    <div>
      <h3 className="font-display text-lg font-semibold">{title}</h3>
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

type ValueLabelProps = { x?: number; y?: number; value?: number | string; fill?: string; isLight?: boolean };
const ValueLabel = (props: ValueLabelProps) => {
  const { x, y, value, fill, isLight } = props;
  if (value === null || value === undefined || x === undefined || y === undefined) return null;
  const text = typeof value === 'number' ? fmt(value) : value;
  const w = Math.max(28, String(text).length * 7 + 10);
  return (
    <g>
      <rect x={x - w / 2} y={y - 24} width={w} height={18} rx={5} fill={isLight ? '#ffffff' : 'hsl(0,0%,11%)'} stroke={fill} strokeWidth={1} opacity={0.97} />
      <text x={x} y={y - 11} textAnchor="middle" fontSize={11} fontWeight={700} fill={isLight ? '#000000' : '#fff'} fontFamily="JetBrains Mono, monospace">
        {text}
      </text>
    </g>
  );
};

const nav = [
  { id: 'about', label: 'Общая инфо' },
  { id: 'planfact', label: 'План / Факт' },
  { id: 'months', label: 'Июль → Август' },
  { id: 'trends', label: 'Тренды' },
  { id: 'works', label: 'Работы' },
  { id: 'demand', label: 'Спрос' },
  { id: 'nextplan', label: 'План месяца' },
];

const AlyumikaAvgust = () => {
  const isLight = true;
  const reportRef = useRef<HTMLDivElement>(null);
  const tipStyle = tipStyleLight;
  const axisColor = 'hsl(240,4%,45%)';

  const [showVals, setShowVals] = useState({ cost: false, leads: false, cpl: false, clean: false, ccpl: false, demand: false });

  const scroll = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div ref={reportRef} className="min-h-screen bg-background text-foreground">
      <ReportToolbar targetRef={reportRef} filename={`${CLIENT.name}-отчет-${CLIENT.period}.pdf`} />
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex items-center gap-4 overflow-x-auto px-6 py-3">
          <div className="flex shrink-0 items-center rounded-lg bg-white px-3 py-1.5">
            <img src={AGENCY.logo} alt={AGENCY.name} className="h-5 w-auto" />
          </div>
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
              Алюмика
            </h1>
            <h2 className="mt-2 font-display text-2xl font-semibold leading-tight text-primary md:text-4xl">
              Отчёт {CLIENT.period}
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Статистика, тренды, сравнение периодов и план на следующий месяц.
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
                <span className="inline-flex items-center gap-1 text-sm font-500 text-primary">
                  {l.cta} <Icon name="ArrowUpRight" size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
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
            <div className="mt-4 space-y-1 font-mono text-xs text-muted-foreground">
              {planFactNotes.map((n) => <div key={n}>{n}</div>)}
            </div>
          </Card>
        </Section>

        {/* 3. ИЮЛЬ → АВГУСТ */}
        <Section id="months" num="03" title="Сравнение с прошлым месяцем" icon="GitCompareArrows" sub="Факт июль → факт август 2026">
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px]">
                <thead>
                  <tr className="border-b border-border text-left font-mono text-xs uppercase tracking-wide text-muted-foreground">
                    <th className="pb-3 font-500">Параметры</th>
                    <th className="pb-3 text-right font-500">Факт июль</th>
                    <th className="pb-3 text-right font-500">Факт август</th>
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

        {/* 4. ТРЕНДЫ С АПРЕЛЯ */}
        <Section id="trends" num="04" title="Тренды с начала работ" icon="ChartLine" sub="Проект в работе с апреля 2026 — динамика по месяцам">
          <Card className="mb-6">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr className="border-b border-border text-left font-mono text-xs uppercase tracking-wide text-muted-foreground">
                    <th className="pb-3 font-500">Параметры</th>
                    {monthlyTrend.map((r) => (
                      <th key={r.m} className="pb-3 text-right font-500">{r.m}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3.5 font-500">Рекламный бюджет, руб.</td>
                    {monthlyTrend.map((r) => <td key={r.m} className="py-3.5 text-right font-mono">{fmt(r.cost)} ₽</td>)}
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3.5 font-500">Заявки, ед.</td>
                    {monthlyTrend.map((r) => <td key={r.m} className="py-3.5 text-right font-mono">{r.leads}</td>)}
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3.5 font-500">Стоимость заявки, с НДС</td>
                    {monthlyTrend.map((r) => <td key={r.m} className="py-3.5 text-right font-mono">{fmt(r.cpl)} ₽</td>)}
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3.5 font-500">% чистых заявок</td>
                    {monthlyTrend.map((r) => <td key={r.m} className="py-3.5 text-right font-mono">{r.cleanPct === null ? '—' : `${r.cleanPct.toFixed(2).replace('.', ',')}%`}</td>)}
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3.5 font-500">Чистые заявки, ед.</td>
                    {monthlyTrend.map((r) => <td key={r.m} className="py-3.5 text-right font-mono">{r.clean}</td>)}
                  </tr>
                  <tr>
                    <td className="py-3.5 font-500">Стоимость чистой заявки, с НДС</td>
                    {monthlyTrend.map((r) => <td key={r.m} className="py-3.5 text-right font-mono font-bold">{fmt(r.ccpl)} ₽</td>)}
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <ChartTitle title="Рекламный бюджет, ₽" sub="Апрель — Август"
                action={<ValueToggle show={showVals.cost} setShow={(v) => setShowVals((s) => ({ ...s, cost: v }))} />} />
              <ResponsiveContainer width="100%" height={260}>
                <LineChart data={monthlyTrend} margin={{ top: 30 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={isLight ? "hsl(0,0%,90%)" : "hsl(0,0%,20%)"} />
                  <XAxis dataKey="m" stroke={axisColor} fontSize={12} />
                  <YAxis stroke={axisColor} fontSize={11} tickFormatter={(v) => `${Math.round(v / 1000)}к`} />
                  <Tooltip contentStyle={tipStyle} formatter={(v: number) => `${fmt(v)} ₽`} />
                  <Line type="monotone" dataKey="cost" name="Бюджет" stroke={NEON.cyan} strokeWidth={2.5} dot={{ r: 3 }}>
                    {showVals.cost && <LabelList dataKey="cost" content={<ValueLabel fill={NEON.cyan} isLight={isLight} />} />}
                  </Line>
                </LineChart>
              </ResponsiveContainer>
            </Card>

            <Card>
              <ChartTitle title="Заявки, ед." sub="Всего / чистые"
                action={<ValueToggle show={showVals.leads} setShow={(v) => setShowVals((s) => ({ ...s, leads: v }))} />} />
              <ResponsiveContainer width="100%" height={260}>
                <LineChart data={monthlyTrend} margin={{ top: 30 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={isLight ? "hsl(0,0%,90%)" : "hsl(0,0%,20%)"} />
                  <XAxis dataKey="m" stroke={axisColor} fontSize={12} />
                  <YAxis stroke={axisColor} fontSize={11} />
                  <Tooltip contentStyle={tipStyle} />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                  <Line type="monotone" dataKey="leads" name="Всего заявок" stroke={NEON.violet} strokeWidth={2} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="clean" name="Чистые заявки" stroke={NEON.lime} strokeWidth={2.5} dot={{ r: 3 }}>
                    {showVals.leads && <LabelList dataKey="clean" content={<ValueLabel fill={NEON.lime} isLight={isLight} />} />}
                  </Line>
                </LineChart>
              </ResponsiveContainer>
            </Card>

            <Card>
              <ChartTitle title="Стоимость заявки, ₽"
                action={<ValueToggle show={showVals.cpl} setShow={(v) => setShowVals((s) => ({ ...s, cpl: v }))} />} />
              <ResponsiveContainer width="100%" height={260}>
                <LineChart data={monthlyTrend} margin={{ top: 30 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={isLight ? "hsl(0,0%,90%)" : "hsl(0,0%,20%)"} />
                  <XAxis dataKey="m" stroke={axisColor} fontSize={12} />
                  <YAxis stroke={axisColor} fontSize={11} />
                  <Tooltip contentStyle={tipStyle} formatter={(v: number) => `${fmt(v)} ₽`} />
                  <Line type="monotone" dataKey="cpl" name="Стоимость заявки" stroke={NEON.amber} strokeWidth={2.5} dot={{ r: 3 }}>
                    {showVals.cpl && <LabelList dataKey="cpl" content={<ValueLabel fill={NEON.amber} isLight={isLight} />} />}
                  </Line>
                </LineChart>
              </ResponsiveContainer>
            </Card>

            <Card>
              <ChartTitle title="Стоимость чистой заявки, ₽"
                action={<ValueToggle show={showVals.ccpl} setShow={(v) => setShowVals((s) => ({ ...s, ccpl: v }))} />} />
              <ResponsiveContainer width="100%" height={260}>
                <LineChart data={monthlyTrend} margin={{ top: 30 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={isLight ? "hsl(0,0%,90%)" : "hsl(0,0%,20%)"} />
                  <XAxis dataKey="m" stroke={axisColor} fontSize={12} />
                  <YAxis stroke={axisColor} fontSize={11} />
                  <Tooltip contentStyle={tipStyle} formatter={(v: number) => `${fmt(v)} ₽`} />
                  <Line type="monotone" dataKey="ccpl" name="Стоимость чистой заявки" stroke={NEON.violet} strokeWidth={2.5} dot={{ r: 3 }}>
                    {showVals.ccpl && <LabelList dataKey="ccpl" content={<ValueLabel fill={NEON.violet} isLight={isLight} />} />}
                  </Line>
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </div>

          <Card className="mt-6 border-primary/30">
            <div className="mb-3 flex items-center gap-2 font-display text-lg font-semibold uppercase text-primary">
              <Icon name="Lightbulb" size={20} /> Вывод маркетолога
            </div>
            <p className="text-sm leading-relaxed text-foreground/90">
              С апреля по август 2026 кампания вышла на стабильно эффективный режим: несмотря на снижение бюджета
              с <b>204 525 ₽ в мае до 71 845 ₽ в августе</b>, стоимость заявки последовательно снижается — с 7 003 ₽
              в апреле до <b>1 942 ₽ в августе</b>, а стоимость чистой заявки сократилась с 21 010 ₽ до <b>3 421 ₽</b>.
              Доля чистых заявок в августе держится на хорошем уровне — 56,76%, что говорит о качественной настройке
              таргетинга и семантики. Оптимизация бюджета позволяет получать сопоставимый по качеству трафик
              значительно дешевле, чем в начале работ — рекомендуем сохранять текущий курс и постепенно тестировать
              точечное увеличение бюджета на самых результативных сегментах.
            </p>
          </Card>
        </Section>

        {/* 5. РАБОТЫ */}
        <Section id="works" num="05" title="Работы и план" icon="ListChecks" sub="Проведено за месяц и план на следующий">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
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
            <Card>
              <div className="mb-4 flex items-center gap-2 font-display text-lg font-semibold uppercase">
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

        {/* 6. СПРОС */}
        <Section id="demand" num="06" title="Спрос" icon="Search" sub="Число запросов по Wordstat: январь 2024 — июль 2026">
          <Card>
            <ChartTitle title="Динамика спроса" sub="Число запросов в месяц"
              action={<ValueToggle show={showVals.demand} setShow={(v) => setShowVals((s) => ({ ...s, demand: v }))} />} />
            <ResponsiveContainer width="100%" height={320}>
              <ComposedChart data={demand} margin={{ top: 30 }}>
                <defs>
                  <linearGradient id="dem" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={NEON.cyan} stopOpacity={0.4} />
                    <stop offset="100%" stopColor={NEON.cyan} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke={isLight ? "hsl(0,0%,90%)" : "hsl(0,0%,20%)"} />
                <XAxis dataKey="m" stroke={axisColor} fontSize={11} interval={2} />
                <YAxis stroke={axisColor} fontSize={11} />
                <Tooltip contentStyle={tipStyle} />
                <Area type="monotone" dataKey="v" name="Запросов" stroke={NEON.cyan} strokeWidth={2.5} fill="url(#dem)">
                  {showVals.demand && <LabelList dataKey="v" content={<ValueLabel fill={NEON.cyan} isLight={isLight} />} />}
                </Area>
              </ComposedChart>
            </ResponsiveContainer>
            <p className="mt-4 text-sm leading-relaxed text-foreground/90">
              Спрос по направлению стабилен и растёт: пиковые значения приходятся на осенне-зимний период
              (октябрь-декабрь 2025 — до 8 098 запросов в октябре), а в 2026 году после весеннего провала в январе
              (4 661 запрос) спрос уверенно восстанавливается — к июню 2026 достигнуто 6 917 запросов, что выше
              показателей июня 2025 (6 294). Сезонность стоит учитывать при планировании бюджета на осень —
              традиционно спрос растёт к концу года.
            </p>
          </Card>
        </Section>

        {/* 7. ПЛАН МЕСЯЦА */}
        <Section id="nextplan" num="07" title="План на новый месяц" icon="Flag" sub="Плановые показатели на сентябрь 2026">
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
                      <td className="py-3.5 text-right font-mono font-bold text-primary">{r.plan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </Section>

        <footer className="border-t border-border pt-6 text-center font-mono text-xs text-muted-foreground">
          {CLIENT.name} · {CLIENT.id} · Отчёт по всем кампаниям Яндекс Директ · {CLIENT.period}
        </footer>
      </div>
    </div>
  );
};

export default AlyumikaAvgust;
