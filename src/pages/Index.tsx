import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import {
  AreaChart, Area, LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';

const NEON = {
  cyan: 'hsl(175, 84%, 52%)',
  violet: 'hsl(265, 84%, 66%)',
  lime: 'hsl(88, 80%, 55%)',
  grid: 'hsl(231, 22%, 18%)',
};

const kpis = [
  { label: 'Показы', value: '1 284 920', icon: 'Eye', delta: 12.4, color: NEON.cyan },
  { label: 'Клики', value: '48 317', icon: 'MousePointerClick', delta: 8.7, color: NEON.violet },
  { label: 'CTR', value: '3.76%', icon: 'Percent', delta: 4.1, color: NEON.lime },
  { label: 'Конверсии', value: '2 194', icon: 'Target', delta: 21.5, color: NEON.cyan },
  { label: 'Расход', value: '₽ 986 400', icon: 'Wallet', delta: -3.2, color: NEON.violet },
  { label: 'CPA', value: '₽ 449', icon: 'Coins', delta: -14.8, color: NEON.lime },
];

const daily = [
  { d: '01', clicks: 1420, conv: 62, cost: 30 }, { d: '05', clicks: 1680, conv: 71, cost: 33 },
  { d: '09', clicks: 1510, conv: 68, cost: 31 }, { d: '13', clicks: 1890, conv: 84, cost: 36 },
  { d: '17', clicks: 2100, conv: 96, cost: 38 }, { d: '21', clicks: 1760, conv: 79, cost: 34 },
  { d: '25', clicks: 2340, conv: 108, cost: 41 }, { d: '29', clicks: 2560, conv: 121, cost: 44 },
];

const compare = [
  { metric: 'Показы', prev: '1 143 200', curr: '1 284 920', d: 12.4 },
  { metric: 'Клики', prev: '44 450', curr: '48 317', d: 8.7 },
  { metric: 'CTR', prev: '3.61%', curr: '3.76%', d: 4.1 },
  { metric: 'Конверсии', prev: '1 806', curr: '2 194', d: 21.5 },
  { metric: 'Расход, ₽', prev: '1 019 000', curr: '986 400', d: -3.2 },
  { metric: 'CPA, ₽', prev: '527', curr: '449', d: -14.8 },
  { metric: 'ROAS', prev: '312%', curr: '386%', d: 23.7 },
];

const keywords = [
  { kw: 'купить эльмопро', clicks: 8420, ctr: '5.2%', conv: 412, cpa: '₽ 388' },
  { kw: 'эльмопро цена', clicks: 6180, ctr: '4.8%', conv: 298, cpa: '₽ 421' },
  { kw: 'эльмопро отзывы', clicks: 5340, ctr: '4.1%', conv: 187, cpa: '₽ 502' },
  { kw: 'эльмопро официальный', clicks: 4920, ctr: '3.9%', conv: 241, cpa: '₽ 356' },
  { kw: 'заказать эльмопро', clicks: 3870, ctr: '4.4%', conv: 203, cpa: '₽ 402' },
];

const periods = ['Июнь 2026', 'Май 2026', 'Апрель 2026'];

const Delta = ({ v }: { v: number }) => {
  const up = v >= 0;
  return (
    <span
      className="inline-flex items-center gap-1 font-mono text-sm font-bold"
      style={{ color: up ? 'hsl(152,70%,50%)' : 'hsl(355,80%,62%)' }}
    >
      <Icon name={up ? 'TrendingUp' : 'TrendingDown'} size={14} />
      {up ? '+' : ''}{v}%
    </span>
  );
};

const ChartCard = ({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) => (
  <div className="rounded-2xl border border-border bg-card p-6">
    <div className="mb-5 flex items-start justify-between">
      <div>
        <h3 className="font-display text-lg font-600 uppercase tracking-wide">{title}</h3>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
      <Icon name="Activity" size={18} className="text-primary" />
    </div>
    {children}
  </div>
);

const tipStyle = {
  background: 'hsl(229,28%,9%)',
  border: '1px solid hsl(231,22%,18%)',
  borderRadius: 12,
  color: '#fff',
  fontSize: 13,
};

const Index = () => {
  const [period, setPeriod] = useState(periods[0]);

  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <div className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />
        <div className="container relative mx-auto px-6 py-14">
          <div className="animate-rise flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 animate-pulse rounded-full bg-primary" />
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Яндекс Директ · отчёт</span>
              </div>
              <h1 className="font-display text-5xl font-700 uppercase leading-none tracking-tight md:text-7xl">
                Эльмо<span className="text-primary text-glow">про</span>
              </h1>
              <p className="mt-3 max-w-md text-muted-foreground">
                Месячная статистика рекламного канала. Динамика, конверсии и сравнение периодов.
              </p>
            </div>
            <div className="flex flex-col items-end gap-3">
              <div className="flex gap-2 rounded-xl border border-border bg-card p-1">
                {periods.map((p) => (
                  <button
                    key={p}
                    onClick={() => setPeriod(p)}
                    className={`rounded-lg px-4 py-2 font-mono text-xs transition-all ${
                      period === p ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
              <span className="font-mono text-xs text-muted-foreground">Обновлено: 05.07.2026 · 09:41</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto space-y-8 px-6 py-10">
        {/* KPI */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {kpis.map((k, i) => (
            <div
              key={k.label}
              className="animate-rise group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/50"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="mb-4 flex items-center justify-between">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{ background: `${k.color}1a`, color: k.color }}
                >
                  <Icon name={k.icon} size={18} />
                </div>
                <Delta v={k.delta} />
              </div>
              <div className="font-mono text-2xl font-700 tracking-tight">{k.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">{k.label}</div>
              <div
                className="absolute -bottom-8 -right-8 h-20 w-20 rounded-full blur-2xl transition-opacity group-hover:opacity-100 opacity-0"
                style={{ background: k.color }}
              />
            </div>
          ))}
        </div>

        {/* CHARTS */}
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ChartCard title="Динамика кликов и конверсий" subtitle="По дням месяца">
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={daily}>
                  <defs>
                    <linearGradient id="gc" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={NEON.cyan} stopOpacity={0.5} />
                      <stop offset="100%" stopColor={NEON.cyan} stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="gv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={NEON.violet} stopOpacity={0.5} />
                      <stop offset="100%" stopColor={NEON.violet} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke={NEON.grid} />
                  <XAxis dataKey="d" stroke="hsl(220,15%,60%)" fontSize={12} />
                  <YAxis stroke="hsl(220,15%,60%)" fontSize={12} />
                  <Tooltip contentStyle={tipStyle} />
                  <Legend wrapperStyle={{ fontSize: 13 }} />
                  <Area type="monotone" dataKey="clicks" name="Клики" stroke={NEON.cyan} strokeWidth={2.5} fill="url(#gc)" />
                  <Area type="monotone" dataKey="conv" name="Конверсии" stroke={NEON.violet} strokeWidth={2.5} fill="url(#gv)" />
                </AreaChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
          <ChartCard title="Расход" subtitle="Тыс. ₽ по дням">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={daily}>
                <CartesianGrid strokeDasharray="3 3" stroke={NEON.grid} vertical={false} />
                <XAxis dataKey="d" stroke="hsl(220,15%,60%)" fontSize={12} />
                <YAxis stroke="hsl(220,15%,60%)" fontSize={12} />
                <Tooltip contentStyle={tipStyle} cursor={{ fill: 'hsl(231,25%,14%)' }} />
                <Bar dataKey="cost" name="Расход, тыс.₽" fill={NEON.lime} radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        {/* COMPARE */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="font-display text-lg font-600 uppercase tracking-wide">Сравнение периодов</h3>
              <p className="text-sm text-muted-foreground">{period} к предыдущему месяцу</p>
            </div>
            <Badge className="bg-primary/15 font-mono text-primary hover:bg-primary/15">
              <Icon name="GitCompareArrows" size={14} className="mr-1" /> месяц к месяцу
            </Badge>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border text-left font-mono text-xs uppercase tracking-wide text-muted-foreground">
                  <th className="pb-3 font-500">Метрика</th>
                  <th className="pb-3 font-500">Прошлый период</th>
                  <th className="pb-3 font-500">Текущий период</th>
                  <th className="pb-3 text-right font-500">Изменение</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((r) => (
                  <tr key={r.metric} className="border-b border-border/50 transition-colors hover:bg-secondary/40">
                    <td className="py-3.5 font-500">{r.metric}</td>
                    <td className="py-3.5 font-mono text-muted-foreground">{r.prev}</td>
                    <td className="py-3.5 font-mono font-700">{r.curr}</td>
                    <td className="py-3.5 text-right"><Delta v={r.d} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* KEYWORDS */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="font-display text-lg font-600 uppercase tracking-wide">Топ ключевых фраз</h3>
              <p className="text-sm text-muted-foreground">Лучшие по количеству конверсий</p>
            </div>
            <Icon name="KeyRound" size={18} className="text-primary" />
          </div>
          <div className="space-y-2">
            {keywords.map((r, i) => (
              <div
                key={r.kw}
                className="grid grid-cols-2 items-center gap-4 rounded-xl border border-border/60 bg-secondary/30 p-4 transition-all hover:border-primary/40 md:grid-cols-5"
              >
                <div className="col-span-2 flex items-center gap-3 md:col-span-1">
                  <span className="font-mono text-xs text-primary">#{i + 1}</span>
                  <span className="font-500">{r.kw}</span>
                </div>
                <div><span className="text-xs text-muted-foreground md:hidden">Клики: </span><span className="font-mono">{r.clicks.toLocaleString('ru')}</span></div>
                <div><span className="text-xs text-muted-foreground md:hidden">CTR: </span><span className="font-mono">{r.ctr}</span></div>
                <div><span className="text-xs text-muted-foreground md:hidden">Конв.: </span><span className="font-mono">{r.conv}</span></div>
                <div className="text-right"><span className="font-mono text-primary">{r.cpa}</span></div>
              </div>
            ))}
          </div>
          <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-primary/40 bg-primary/10 py-3 font-mono text-sm text-primary transition-all hover:bg-primary/20">
            <Icon name="Download" size={16} /> Скачать полный PDF-отчёт
          </button>
        </div>

        <footer className="pt-4 text-center font-mono text-xs text-muted-foreground">
          Рекламное агентство · Отчёт по каналу Яндекс Директ · Проект «Эльмопро»
        </footer>
      </div>
    </div>
  );
};

export default Index;
