import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { CLIENT } from '@/data/report-ximservis';
import { reportsByYearXimservis } from '@/data/reports';

const Ximservis = () => {
  const [openYear, setOpenYear] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />

      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">
        <div className="animate-rise mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
          <Icon name="FlaskConical" size={30} />
        </div>
        <div className="animate-rise mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
          Клиентский проект
        </div>
        <h1 className="animate-rise font-display text-5xl font-semibold leading-tight md:text-7xl">
          Химсервис
        </h1>
        <p className="animate-rise mt-5 max-w-xl text-lg text-muted-foreground">
          {CLIENT.name}. Отчёты по рекламным кампаниям — по ссылке на нужный месяц.
        </p>

        <div className="animate-rise mt-10 w-full max-w-md space-y-3">
          {reportsByYearXimservis.map((y) => {
            const isOpen = openYear === y.year;
            return (
              <div key={y.year} className="overflow-hidden rounded-2xl border border-border bg-card text-left">
                <button
                  onClick={() => setOpenYear(isOpen ? null : y.year)}
                  className="flex w-full items-center justify-between px-6 py-4 transition-colors hover:bg-secondary/40"
                >
                  <span className="font-display text-lg font-semibold">{y.year}</span>
                  <Icon name={isOpen ? 'ChevronUp' : 'ChevronDown'} size={20} className="text-muted-foreground" />
                </button>
                {isOpen && (
                  <div className="border-t border-border px-3 pb-3 pt-2">
                    {y.months.map((m) => (
                      <Link
                        key={m.href}
                        to={m.href}
                        className="group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm transition-colors hover:bg-secondary/60"
                      >
                        <span>{m.label}</span>
                        <Icon name="ArrowUpRight" size={16} className="text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Ximservis;
