import type { VisualConcept } from '../../types'
import { useEffect, useRef, useState } from 'react'

interface VisualConceptsSectionProps {
  concepts: VisualConcept[]
}

export function VisualConceptsSection({ concepts }: VisualConceptsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const sectionMiddle = rect.top + rect.height / 2
      const windowMiddle = window.innerHeight / 2

      if (Math.abs(sectionMiddle - windowMiddle) < 200) {
        const progress = (windowMiddle - rect.top) / rect.height
        const index = Math.min(
          Math.floor(progress * concepts.length),
          concepts.length - 1
        )
        setActiveIndex(Math.max(0, index))
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [concepts.length])

  return (
    <section ref={sectionRef} className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-5xl md:text-6xl font-bold text-center mb-4"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Візія стає реальністю
          </span>
        </h2>
        <p
          className="text-xl text-slate-400 text-center mb-20 max-w-3xl mx-auto"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Концептуальні дизайни міст України з ШІ
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {concepts.map((concept, index) => (
            <div
              key={concept.id}
              className={`
                relative group transition-all duration-700
                ${activeIndex === index ? 'scale-105' : 'scale-100 opacity-60'}
              `}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-800 border border-slate-700">
                {/* Background image */}
                <img
                  src={concept.imageUrl}
                  alt={concept.imageAlt}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Active indicator */}
                {activeIndex === index && (
                  <div className="absolute inset-0 ring-2 ring-cyan-400 ring-offset-2 ring-offset-slate-950 rounded-2xl" />
                )}
              </div>

              {/* Content */}
              <div className="mt-6">
                <h3
                  className={`
                    text-xl font-semibold mb-2 transition-colors
                    ${activeIndex === index ? 'text-cyan-400' : 'text-white'}
                  `}
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {concept.title}
                </h3>
                <p
                  className="text-sm text-slate-400 leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {concept.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {concepts.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`
                w-3 h-3 rounded-full transition-all
                ${activeIndex === index ? 'bg-cyan-400 w-8' : 'bg-slate-700 hover:bg-slate-600'}
              `}
              aria-label={`Переглянути концепцію ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
