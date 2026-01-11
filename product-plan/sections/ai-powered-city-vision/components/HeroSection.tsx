import type { Hero } from '../types'
import { useEffect, useState } from 'react'

interface HeroSectionProps {
  hero: Hero
}

export function HeroSection({ hero }: HeroSectionProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const parallaxOffset = scrollY * 0.5

  return (
    <section className="relative h-screen flex items-end justify-center overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
            }}
          />
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime-500/20 rounded-full blur-3xl"
          style={{ animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
        />
      </div>

      {/* Placeholder for hero image */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <div className="text-center">
          <div className="w-64 h-64 mx-auto mb-8 bg-gradient-to-br from-cyan-500/20 to-lime-500/20 rounded-lg backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center">
            <svg className="w-32 h-32 text-cyan-400/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <p
            className="text-sm text-slate-500"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {hero.imageAlt}
          </p>
        </div>
      </div>

      {/* Title Content */}
      <div className="relative z-10 pb-32 px-4 text-center max-w-5xl">
        <h1
          className="text-6xl sm:text-7xl md:text-8xl font-bold mb-6 tracking-tight"
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            animation: 'fadeInUp 1s ease-out',
          }}
        >
          <span className="block text-white mb-2">{hero.title}</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-lime-400 to-emerald-400">
            {hero.subtitle}
          </span>
        </h1>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-4 opacity-60">
          <span
            className="text-sm uppercase tracking-widest text-slate-400"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Begin Journey
          </span>
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
