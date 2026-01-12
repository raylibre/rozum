import type { Hero } from '../../types'
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
      {/* Parallax Background with Image */}
      <div
        className="absolute inset-0"
        style={{ 
          transform: `translateY(${parallaxOffset}px)`,
          backgroundImage: `url(${hero.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-950/70 to-slate-950/90" />
        
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
            Почати подорож
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
