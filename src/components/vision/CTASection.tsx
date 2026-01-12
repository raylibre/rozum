import type { CallToAction } from '../../types'
import { ArrowRight } from 'lucide-react'

interface CTASectionProps {
  callsToAction: CallToAction[]
  onNavigate?: (targetSection: string) => void
}

export function CTASection({ callsToAction, onNavigate }: CTASectionProps) {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h2
          className="text-5xl md:text-6xl font-bold mb-6"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          <span className="text-white">Готові будувати</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-lime-400">
            майбутнє України?
          </span>
        </h2>

        <p
          className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Приєднуйтеся до нас у створенні прозорих міст з ШІ, які трансформують управління
          та повернуть мільйони українців додому.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {callsToAction.map((cta) => (
            <button
              key={cta.id}
              onClick={() => onNavigate?.(cta.targetSection)}
              className={`
                group relative px-8 py-4 rounded-xl font-semibold text-lg
                transition-all duration-300 hover:scale-105 hover:shadow-2xl
                flex items-center gap-3
                ${
                  cta.variant === 'primary'
                    ? 'bg-gradient-to-r from-cyan-500 to-lime-500 text-slate-950 hover:shadow-cyan-500/50'
                    : 'bg-slate-800 text-white border-2 border-slate-700 hover:border-lime-500 hover:shadow-lime-500/30'
                }
              `}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <span>{cta.label}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />

              {/* Subtle description */}
              <span
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap
                  text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {cta.description}
              </span>
            </button>
          ))}
        </div>

        {/* Decorative line ending */}
        <div className="mt-24 flex flex-col items-center gap-4">
          <div className="w-1 h-16 bg-gradient-to-b from-lime-500 to-transparent rounded-full" />
          <div className="w-3 h-3 rounded-full bg-lime-500 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
