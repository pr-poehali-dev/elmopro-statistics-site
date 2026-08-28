import { useState, useEffect, FormEvent } from 'react';
import Icon from '@/components/ui/icon';

const AUTH_KEY = 'report-auth';
const CHECK_PASSWORD_URL = 'https://functions.poehali.dev/ed9ca07e-254c-406f-9528-1dd2ae001695';

interface PasswordGateProps {
  children: React.ReactNode;
}

const PasswordGate = ({ children }: PasswordGateProps) => {
  const [unlocked, setUnlocked] = useState(false);
  const [checking, setChecking] = useState(true);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(AUTH_KEY) === '1') {
      setUnlocked(true);
    }
    setChecking(false);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!password || loading) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch(CHECK_PASSWORD_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        sessionStorage.setItem(AUTH_KEY, '1');
        setUnlocked(true);
      } else {
        setError(data.error || 'Неверный пароль');
      }
    } catch {
      setError('Не удалось проверить пароль. Попробуйте ещё раз.');
    } finally {
      setLoading(false);
    }
  };

  if (checking) return null;

  if (unlocked) return <>{children}</>;

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 text-foreground">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />

      <form onSubmit={handleSubmit} className="relative w-full max-w-sm rounded-2xl border border-border bg-card p-8 text-center animate-rise">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
          <Icon name="Lock" size={26} />
        </div>
        <h1 className="font-display text-xl font-semibold">Отчёт защищён паролем</h1>
        <p className="mt-2 text-sm text-muted-foreground">Введите пароль, который вам передало агентство</p>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
          autoFocus
          className="mt-6 w-full rounded-xl border border-border bg-secondary/30 px-4 py-3 text-center font-mono text-sm outline-none transition-colors focus:border-primary/50"
        />

        {error && (
          <p className="mt-3 flex items-center justify-center gap-1.5 text-sm text-destructive">
            <Icon name="CircleAlert" size={14} /> {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 font-500 text-primary-foreground transition-all hover:opacity-90 disabled:opacity-60"
        >
          {loading ? <Icon name="Loader2" size={16} className="animate-spin" /> : <Icon name="ArrowRight" size={16} />}
          Войти
        </button>
      </form>
    </div>
  );
};

export default PasswordGate;
