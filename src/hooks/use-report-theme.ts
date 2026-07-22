import { useEffect, useState } from 'react';

export type ReportTheme = 'dark' | 'light';

/**
 * Хук переключения темы конкретной страницы-отчёта.
 * storageKey — свой ключ на каждую страницу, чтобы темы не путались между отчётами.
 */
export function useReportTheme(storageKey: string, defaultTheme: ReportTheme) {
  const [theme, setTheme] = useState<ReportTheme>(() => {
    if (typeof window === 'undefined') return defaultTheme;
    return (localStorage.getItem(storageKey) as ReportTheme) || defaultTheme;
  });

  useEffect(() => {
    localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return { theme, toggle, isLight: theme === 'light' };
}
