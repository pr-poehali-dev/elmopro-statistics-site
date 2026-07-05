import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import {
  AreaChart, Area, LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import {
  NEON, CLIENT, planFact, planFactNotes, monthCompare, yearly, demand,
  byDevice, byGender, byAge, byGroup, byTargeting, byGeo,
  topAds, workDone, workPlan, nextPlan, contacts,
} from '@/data/report';

const tipStyle = {
  background: 'hsl(229,28%,9%)',
  border: '1px solid hsl(231,22%,18%)',
  borderRadius: 12,
  color: '#fff',
  fontSize: 13,
};

const Delta = ({ v, invert = false }: { v: number; invert?: boolean }) => {
  const up = v >= 0;
  const good = invert ? !up : up;
  return (
    <span className="inline-flex items-center gap-1 font-mono text-sm font-bold"
      style={{ color: good ? NEON.pos : NEON.neg }}>
      <Icon name={up ? 'TrendingUp' : 'TrendingDown'} size={14} />
      {up ? '+' : ''}{v}%
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

const ChartTitle = ({ title, sub }: { title: string; sub?: string }) => (
  <div className="mb-5">
    <h3 className="font-display text-lg font-600 uppercase tracking-wide">{title}</h3>
    {sub && <p className="text-sm text-muted-foreground">{sub}</p>}
  </div>
);

const nav = [
  { id: 'about', label: 'Общая инфо' },
  { id: 'planfact', label: 'План / Факт' },
  { id: 'months', label: 'Май → Июнь' },
  { id: 'trends', label: 'Тренды года' },
  { id: 'breakdown', label: 'Разрезы' },
  { id: 'works', label: 'Работы' },
  { id: 'demand', label: 'Спрос' },
  { id: 'nextplan', label: 'План месяца' },
  { id: 'contacts', label: 'Контакты' },
];

const fmt = (n: number) => n.toLocaleString('ru-RU', { maximumFractionDigits: 0 });

const Index = () => {
  const [device, setDevice] = useState<'all' | 'desktop'>('all');

  const scroll = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

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
              <table className="w-full min-w-[560px]">
                <thead>
                  <tr className="border-b border-border text-left font-mono text-xs uppercase tracking-wide text-muted-foreground">
                    <th className="pb-3 font-500">Параметры</th>
                    <th className="pb-3 text-right font-500">План</th>
                    <th className="pb-3 text-right font-500">Факт</th>
                    <th className="pb-3 text-center font-500">Статус</th>
                  </tr>
                </thead>
                <tbody>
                  {planFact.map((r) => (
                    <tr key={r.param} className="border-b border-border/50 transition-colors hover:bg-secondary/40">
                      <td className="py-3.5 font-500">{r.param}</td>
                      <td className="py-3.5 text-right font-mono text-muted-foreground">{r.plan}</td>
                      <td className="py-3.5 text-right font-mono font-700">{r.fact}</td>
                      <td className="py-3.5 text-center">
                        <Icon name={r.ok ? 'CircleCheck' : 'CircleAlert'} size={18}
                          className="inline" style={{ color: r.ok ? NEON.pos : NEON.amber }} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                      <td className="py-3.5 text-right font-mono text-muted-foreground">{r.may}</td>
                      <td className="py-3.5 text-right font-mono font-700">{r.jun}</td>
                      <td className="py-3.5 text-right"><Delta v={r.d} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 font-mono text-xs text-muted-foreground">
              * По Чистым лидам возможны спам и необработанные заявки. ** Учтены Потенциальные Квалы.
            </p>
          </Card>
        </Section>

        {/* 4. ТРЕНДЫ ГОДА */}
        <Section id="trends" num="04" title="Тренды за год" icon="ChartLine" sub="Сплошная — 2026, пунктир — 2025 (за тот же период)">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <ChartTitle title="Расход, ₽" sub="Помесячно" />
              <ResponsiveContainer width="100%" height={260}>
                <LineChart data={yearly}>
                  <CartesianGrid strokeDasharray="3 3" stroke={NEON.grid} />
                  <XAxis dataKey="m" stroke="hsl(220,15%,60%)" fontSize={12} />
                  <YAxis stroke="hsl(220,15%,60%)" fontSize={11} tickFormatter={(v) => `${Math.round(v / 1000)}к`} />
                  <Tooltip contentStyle={tipStyle} formatter={(v: number) => `${fmt(v)} ₽`} />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                  <Line type="monotone" dataKey="cost25" name="2025" stroke={NEON.violet} strokeWidth={2} strokeDasharray="6 4" dot={false} />
                  <Line type="monotone" dataKey="cost26" name="2026" stroke={NEON.cyan} strokeWidth={2.5} dot={{ r: 3 }} connectNulls={false} />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            <Card>
              <ChartTitle title="Клики и CPC, ₽" sub="Объём и цена клика" />
              <ResponsiveContainer width="100%" height={260}>
                <LineChart data={yearly}>
                  <CartesianGrid strokeDasharray="3 3" stroke={NEON.grid} />
                  <XAxis dataKey="m" stroke="hsl(220,15%,60%)" fontSize={12} />
                  <YAxis yAxisId="l" stroke="hsl(220,15%,60%)" fontSize={11} />
                  <YAxis yAxisId="r" orientation="right" stroke={NEON.amber} fontSize={11} />
                  <Tooltip contentStyle={tipStyle} />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                  <Line yAxisId="l" type="monotone" dataKey="clk26" name="Клики 2026" stroke={NEON.cyan} strokeWidth={2.5} dot={{ r: 3 }} connectNulls={false} />
                  <Line yAxisId="l" type="monotone" dataKey="clk25" name="Клики 2025" stroke={NEON.cyan} strokeWidth={1.5} strokeDasharray="6 4" dot={false} opacity={0.5} />
                  <Line yAxisId="r" type="monotone" dataKey="cpc26" name="CPC 2026" stroke={NEON.amber} strokeWidth={2.5} dot={{ r: 3 }} connectNulls={false} />
                  <Line yAxisId="r" type="monotone" dataKey="cpc25" name="CPC 2025" stroke={NEON.amber} strokeWidth={1.5} strokeDasharray="6 4" dot={false} opacity={0.5} />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            <Card>
              <ChartTitle title="Уникальные лиды и их стоимость" />
              <ResponsiveContainer width="100%" height={260}>
                <LineChart data={yearly}>
                  <CartesianGrid strokeDasharray="3 3" stroke={NEON.grid} />
                  <XAxis dataKey="m" stroke="hsl(220,15%,60%)" fontSize={12} />
                  <YAxis yAxisId="l" stroke="hsl(220,15%,60%)" fontSize={11} />
                  <YAxis yAxisId="r" orientation="right" stroke={NEON.amber} fontSize={11} tickFormatter={(v) => `${Math.round(v / 1000)}к`} />
                  <Tooltip contentStyle={tipStyle} />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                  <Line yAxisId="l" type="monotone" dataKey="lead26" name="Лиды 2026" stroke={NEON.lime} strokeWidth={2.5} dot={{ r: 3 }} connectNulls={false} />
                  <Line yAxisId="l" type="monotone" dataKey="lead25" name="Лиды 2025" stroke={NEON.lime} strokeWidth={1.5} strokeDasharray="6 4" dot={false} opacity={0.5} />
                  <Line yAxisId="r" type="monotone" dataKey="lc26" name="Стоим. 2026" stroke={NEON.amber} strokeWidth={2.5} dot={{ r: 3 }} connectNulls={false} />
                  <Line yAxisId="r" type="monotone" dataKey="lc25" name="Стоим. 2025" stroke={NEON.amber} strokeWidth={1.5} strokeDasharray="6 4" dot={false} opacity={0.5} />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            <Card>
              <ChartTitle title="Квал. лиды и их стоимость" />
              <ResponsiveContainer width="100%" height={260}>
                <LineChart data={yearly}>
                  <CartesianGrid strokeDasharray="3 3" stroke={NEON.grid} />
                  <XAxis dataKey="m" stroke="hsl(220,15%,60%)" fontSize={12} />
                  <YAxis yAxisId="l" stroke="hsl(220,15%,60%)" fontSize={11} />
                  <YAxis yAxisId="r" orientation="right" stroke={NEON.amber} fontSize={11} tickFormatter={(v) => `${Math.round(v / 1000)}к`} />
                  <Tooltip contentStyle={tipStyle} />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                  <Line yAxisId="l" type="monotone" dataKey="qual26" name="Квал 2026" stroke={NEON.violet} strokeWidth={2.5} dot={{ r: 3 }} connectNulls={false} />
                  <Line yAxisId="l" type="monotone" dataKey="qual25" name="Квал 2025" stroke={NEON.violet} strokeWidth={1.5} strokeDasharray="6 4" dot={false} opacity={0.5} />
                  <Line yAxisId="r" type="monotone" dataKey="qc26" name="Стоим. 2026" stroke={NEON.amber} strokeWidth={2.5} dot={{ r: 3 }} connectNulls={false} />
                  <Line yAxisId="r" type="monotone" dataKey="qc25" name="Стоим. 2025" stroke={NEON.amber} strokeWidth={1.5} strokeDasharray="6 4" dot={false} opacity={0.5} />
                </LineChart>
              </ResponsiveContainer>
            </Card>
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
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Устройства */}
            <Card>
              <div className="mb-4 flex items-center justify-between">
                <ChartTitle title="Тип устройства" sub="Расход и конверсии" />
                <div className="flex gap-1 rounded-lg border border-border p-1">
                  {(['all', 'desktop'] as const).map((d) => (
                    <button key={d} onClick={() => setDevice(d)}
                      className={`rounded px-2.5 py-1 font-mono text-xs transition-all ${device === d ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}>
                      {d === 'all' ? 'Все' : 'Десктоп'}
                    </button>
                  ))}
                </div>
              </div>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={device === 'all' ? byDevice : byDevice.filter((x) => x.name === 'Десктопы')} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke={NEON.grid} horizontal={false} />
                  <XAxis type="number" stroke="hsl(220,15%,60%)" fontSize={11} tickFormatter={(v) => `${Math.round(v / 1000)}к`} />
                  <YAxis type="category" dataKey="name" stroke="hsl(220,15%,60%)" fontSize={12} width={80} />
                  <Tooltip contentStyle={tipStyle} formatter={(v: number) => `${fmt(v)} ₽`} />
                  <Bar dataKey="cost" name="Расход, ₽" fill={NEON.cyan} radius={[0, 6, 6, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            {/* Пол */}
            <Card>
              <ChartTitle title="Пол аудитории" sub="Доля кликов, %" />
              <div className="space-y-4 pt-2">
                {byGender.map((g, i) => (
                  <div key={g.name}>
                    <div className="mb-1 flex justify-between font-mono text-sm">
                      <span>{g.name}</span><span className="text-primary">{g.value}%</span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-secondary">
                      <div className="h-full rounded-full transition-all"
                        style={{ width: `${g.value}%`, background: [NEON.cyan, NEON.violet, NEON.amber][i] }} />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Возраст */}
            <Card>
              <ChartTitle title="Возраст" sub="Клики и конверсии" />
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={byAge}>
                  <CartesianGrid strokeDasharray="3 3" stroke={NEON.grid} vertical={false} />
                  <XAxis dataKey="name" stroke="hsl(220,15%,60%)" fontSize={11} />
                  <YAxis stroke="hsl(220,15%,60%)" fontSize={11} />
                  <Tooltip contentStyle={tipStyle} cursor={{ fill: 'hsl(231,25%,14%)' }} />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                  <Bar dataKey="clk" name="Клики" fill={NEON.violet} radius={[4, 4, 0, 0]} />
                  <Bar dataKey="conv" name="Конверсии" fill={NEON.lime} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            {/* Условие показа */}
            <Card>
              <ChartTitle title="Условие показа" sub="Автотаргетинг vs ключевые фразы" />
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={byTargeting}>
                  <CartesianGrid strokeDasharray="3 3" stroke={NEON.grid} vertical={false} />
                  <XAxis dataKey="name" stroke="hsl(220,15%,60%)" fontSize={11} />
                  <YAxis stroke="hsl(220,15%,60%)" fontSize={11} tickFormatter={(v) => `${Math.round(v / 1000)}к`} />
                  <Tooltip contentStyle={tipStyle} cursor={{ fill: 'hsl(231,25%,14%)' }} formatter={(v: number) => fmt(v)} />
                  <Bar dataKey="cost" name="Расход, ₽" fill={NEON.cyan} radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </div>

          {/* География */}
          <Card className="mt-6">
            <ChartTitle title="География размещения" sub="Доля трафика, %" />
            <div className="grid gap-4 md:grid-cols-3">
              {byGeo.map((g, i) => (
                <div key={g.name} className="rounded-xl border border-border/60 bg-secondary/30 p-4">
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={16} className="text-primary" />
                    <span className="font-500">{g.name}</span>
                  </div>
                  <div className="mt-2 font-mono text-3xl font-700" style={{ color: [NEON.cyan, NEON.violet, NEON.amber][i] }}>{g.share}%</div>
                </div>
              ))}
            </div>
          </Card>

          {/* Кампания-группа */}
          <Card className="mt-6">
            <ChartTitle title="Кампания — группа" sub="Топ групп по расходу" />
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr className="border-b border-border text-left font-mono text-xs uppercase tracking-wide text-muted-foreground">
                    <th className="pb-3 font-500">Группа</th>
                    <th className="pb-3 text-right font-500">Расход, ₽</th>
                    <th className="pb-3 text-right font-500">Клики</th>
                    <th className="pb-3 text-right font-500">Конв.</th>
                    <th className="pb-3 text-right font-500">CPA, ₽</th>
                  </tr>
                </thead>
                <tbody>
                  {byGroup.map((r) => (
                    <tr key={r.name} className="border-b border-border/50 hover:bg-secondary/40">
                      <td className="py-3 pr-4 font-500">{r.name}</td>
                      <td className="py-3 text-right font-mono">{fmt(r.cost)}</td>
                      <td className="py-3 text-right font-mono">{r.clk}</td>
                      <td className="py-3 text-right font-mono">{r.conv}</td>
                      <td className="py-3 text-right font-mono text-primary">{fmt(r.cpa)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Объявления */}
          <Card className="mt-6">
            <ChartTitle title="Объявления" sub="Заголовок + текст, топ по конверсиям" />
            <div className="space-y-3">
              {topAds.map((a, i) => (
                <div key={i} className="rounded-xl border border-border/60 bg-secondary/30 p-4 transition-all hover:border-primary/40">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="max-w-2xl">
                      <div className="font-500 text-primary">{a.title}</div>
                      <div className="mt-1 text-sm text-muted-foreground">{a.text}</div>
                    </div>
                    <div className="flex gap-4 font-mono text-sm">
                      <div className="text-center"><div className="text-muted-foreground text-xs">Клики</div>{a.clk}</div>
                      <div className="text-center"><div className="text-muted-foreground text-xs">Конв.</div>{a.conv}</div>
                      <div className="text-center"><div className="text-muted-foreground text-xs">CPA</div><span className="text-primary">{fmt(a.cpa)}</span></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="mt-6 border-primary/30">
            <div className="mb-3 flex items-center gap-2 font-display text-lg font-600 uppercase text-primary">
              <Icon name="Lightbulb" size={20} /> Выводы и гипотезы по разрезам
            </div>
            <ul className="space-y-2 text-sm leading-relaxed text-foreground/90">
              <li><b>Площадка:</b> 100% бюджета — Поиск. Гипотеза: протестировать РСЯ на ретаргетинг для добора дешёвых лидов.</li>
              <li><b>Устройства:</b> десктоп даёт почти весь объём конверсий; смартфоны и планшеты тратят бюджет почти без заявок — усилить понижающие корректировки на mobile.</li>
              <li><b>Пол/возраст:</b> ядро конверсий — мужчины и сегмент 45-54. Повысить ставки на конверсионные сегменты, срезать 18-24 (0 конверсий).</li>
              <li><b>Группы:</b> «Электромонтажные работы под ключ Москва» — главный драйвер лидов, но CPA высокий. Перераспределить бюджет в группы с CPA ниже среднего.</li>
              <li><b>Условие показа:</b> ключевые фразы конверсионнее автотаргетинга. Автотаргет держать на контроле, отсекать нерелевантные запросы.</li>
              <li><b>Объявления:</b> лучший оффер — «под ключ в Москве». Гипотеза: добавить УТП с ценой/сроком и быстрые ссылки.</li>
            </ul>
          </Card>
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
        <Section id="demand" num="07" title="Спрос на следующий месяц" icon="Search" sub="Сезонность по Wordstat: 2026 vs 2025">
          <Card>
            <ResponsiveContainer width="100%" height={280}>
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
              </AreaChart>
            </ResponsiveContainer>
            <p className="mt-4 text-sm leading-relaxed text-foreground/90">
              По динамике Wordstat спрос на электромонтажные услуги в июле остаётся на сезонном пике — уровень 2026 года
              стабильно выше прошлогоднего на 3-7%. Рекомендуем удерживать бюджет и позиции в спецразмещении, чтобы
              не терять долю на растущем рынке.
            </p>
            <Badge className="mt-3 bg-secondary font-mono text-xs text-muted-foreground hover:bg-secondary">
              <Icon name="Image" size={12} className="mr-1" /> Место под скриншот из Wordstat — можно заменить график на ваш снимок
            </Badge>
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

        {/* 9. КОНТАКТЫ + ФОРМА */}
        <Section id="contacts" num="09" title="Остались вопросы?" icon="MessageCircle" sub="Свяжитесь удобным способом">
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