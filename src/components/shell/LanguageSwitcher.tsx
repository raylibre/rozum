interface LanguageSwitcherProps {
  currentLanguage: 'ua' | 'en'
  onLanguageChange?: (language: 'ua' | 'en') => void
}

export function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-1 rounded-md bg-slate-100 dark:bg-slate-800 p-1">
      <button
        onClick={() => onLanguageChange?.('ua')}
        className={`
          px-3 py-1 rounded text-sm font-medium transition-colors
          ${
            currentLanguage === 'ua'
              ? 'bg-white dark:bg-slate-900 text-cyan-600 dark:text-cyan-400 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
          }
        `}
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        UA
      </button>
      <button
        onClick={() => onLanguageChange?.('en')}
        className={`
          px-3 py-1 rounded text-sm font-medium transition-colors
          ${
            currentLanguage === 'en'
              ? 'bg-white dark:bg-slate-900 text-cyan-600 dark:text-cyan-400 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
          }
        `}
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        EN
      </button>
    </div>
  )
}
