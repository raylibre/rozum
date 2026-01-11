import { useState, type ReactNode } from 'react'
import { MainNav } from './MainNav'
import { LanguageSwitcher } from './LanguageSwitcher'

interface NavigationItem {
  label: string
  href: string
  isActive?: boolean
}

interface AppShellProps {
  children: ReactNode
  navigationItems: NavigationItem[]
  currentLanguage?: 'ua' | 'en'
  onNavigate?: (href: string) => void
  onLanguageChange?: (language: 'ua' | 'en') => void
  shellMode?: 'full' | 'minimal'
}

export function AppShell({
  children,
  navigationItems,
  currentLanguage = 'ua',
  onNavigate,
  onLanguageChange,
  shellMode = 'full',
}: AppShellProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isMinimal = shellMode === 'minimal'

  return (
    <div className={`min-h-screen ${isMinimal ? 'bg-slate-950' : 'bg-white dark:bg-slate-950'}`}>
      {/* Header */}
      <header
        className={`
          sticky top-0 z-50
          ${isMinimal
            ? 'bg-transparent border-b-0'
            : 'border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950'
          }
        `}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={() => onNavigate?.('/')}
                className={`text-xl font-bold ${isMinimal ? 'text-white' : 'text-slate-900 dark:text-white'}`}
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                ГО "Розум"
              </button>
            </div>

            {/* Desktop Navigation - hidden in minimal mode */}
            {!isMinimal && (
              <MainNav
                items={navigationItems}
                onNavigate={onNavigate}
                className="hidden md:flex"
              />
            )}

            {/* Right Side: Language + Mobile Menu */}
            <div className="flex items-center gap-4">
              <LanguageSwitcher
                currentLanguage={currentLanguage}
                onLanguageChange={onLanguageChange}
              />

              {/* Mobile menu button - always visible on mobile, even in minimal mode */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`
                  md:hidden inline-flex items-center justify-center rounded-md p-2
                  ${isMinimal
                    ? 'text-white hover:bg-slate-800'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }
                `}
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className={`
            md:hidden border-t
            ${isMinimal
              ? 'border-slate-800 bg-slate-950/95 backdrop-blur-sm'
              : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950'
            }
          `}>
            <MainNav
              items={navigationItems}
              onNavigate={(href) => {
                onNavigate?.(href)
                setMobileMenuOpen(false)
              }}
              className="flex flex-col"
              mobile
            />
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>
    </div>
  )
}
