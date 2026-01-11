import React from 'react'

interface NavigationItem {
  label: string
  href: string
  isActive?: boolean
}

interface MainNavProps {
  items: NavigationItem[]
  onNavigate?: (href: string) => void
  className?: string
  mobile?: boolean
}

export function MainNav({ items, onNavigate, className = '', mobile = false }: MainNavProps) {
  return (
    <nav className={className}>
      {items.map((item) => (
        <button
          key={item.href}
          onClick={() => onNavigate?.(item.href)}
          className={`
            ${mobile ? 'w-full text-left px-4 py-3' : 'px-4 py-2'}
            text-sm font-medium transition-colors
            ${
              item.isActive
                ? 'text-cyan-600 dark:text-cyan-400'
                : 'text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400'
            }
          `}
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}
