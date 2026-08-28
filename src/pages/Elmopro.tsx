import Icon from '@/components/ui/icon';
import { CLIENT } from '@/data/report';

const Elmopro = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />

      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="animate-rise mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
          <Icon name="Zap" size={30} />
        </div>
        <div className="animate-rise mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
          Клиентский проект
        </div>
        <h1 className="animate-rise font-display text-5xl font-semibold leading-tight md:text-7xl">
          Эльмопро
        </h1>
        <p className="animate-rise mt-5 max-w-xl text-lg text-muted-foreground">
          {CLIENT.name}. Отчёты по рекламным кампаниям — по ссылке на нужный месяц.
        </p>
      </div>
    </div>
  );
};

export default Elmopro;
