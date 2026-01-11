import { useEffect, useState } from 'react'

export function JourneyRoad() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const progress = scrollTop / (documentHeight - windowHeight)
      setScrollProgress(Math.min(progress, 1))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <svg
      className="absolute left-1/2 top-0 h-full w-2 -translate-x-1/2 pointer-events-none hidden md:block"
      style={{ minHeight: '100%' }}
    >
      {/* Background path */}
      <line
        x1="50%"
        y1="0"
        x2="50%"
        y2="100%"
        stroke="rgba(6, 182, 212, 0.1)"
        strokeWidth="2"
        strokeDasharray="8 8"
      />

      {/* Animated progress path */}
      <line
        x1="50%"
        y1="0"
        x2="50%"
        y2={`${scrollProgress * 100}%`}
        stroke="url(#roadGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        style={{
          filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.5))',
          transition: 'y2 0.1s ease-out',
        }}
      />

      {/* Gradient definition */}
      <defs>
        <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#84cc16" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* Glowing dot at progress point */}
      <circle
        cx="50%"
        cy={`${scrollProgress * 100}%`}
        r="6"
        fill="#84cc16"
        style={{
          filter: 'drop-shadow(0 0 12px rgba(132, 204, 22, 0.8))',
          transition: 'cy 0.1s ease-out',
        }}
      />
    </svg>
  )
}
