import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { AppShell } from './components/shell'
import {
  VisionPage,
  InvestmentPage,
  ResearchPage,
  AboutPage,
  ContactPage,
  NotFoundPage,
} from './pages'
import type { Language, NavigationItem } from './types'

// Navigation items with labels in both languages
const navigationLabels = {
  ua: [
    { label: 'Візія', href: '/' },
    { label: 'Інвестиції', href: '/investment' },
    { label: 'Дослідження', href: '/research' },
    { label: 'Про нас', href: '/about' },
    { label: 'Контакти', href: '/contact' },
  ],
  en: [
    { label: 'Vision', href: '/' },
    { label: 'Investment', href: '/investment' },
    { label: 'Research', href: '/research' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
}

function AppContent() {
  const [language, setLanguage] = useState<Language>('ua')
  const navigate = useNavigate()
  const location = useLocation()

  // Determine if we're on the Vision page (home) for minimal shell mode
  const isVisionPage = location.pathname === '/'

  // Build navigation items with active state based on current route
  const navigationItems: NavigationItem[] = navigationLabels[language].map((item) => ({
    ...item,
    isActive: location.pathname === item.href,
  }))

  const handleNavigate = (href: string) => {
    navigate(href)
  }

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
  }

  return (
    <AppShell
      navigationItems={navigationItems}
      currentLanguage={language}
      onNavigate={handleNavigate}
      onLanguageChange={handleLanguageChange}
      shellMode={isVisionPage ? 'minimal' : 'full'}
    >
      <Routes>
        <Route path="/" element={<VisionPage />} />
        <Route path="/investment" element={<InvestmentPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppShell>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
