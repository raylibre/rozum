import { useEffect, useRef, useState } from 'react'

interface ContentNodeProps {
  title: string
  description: string
  index: number
  side: 'left' | 'right'
  variant: 'goal' | 'problem' | 'solution'
}

export function ContentNode({ title, description, index, side, variant }: ContentNodeProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const variantStyles = {
    goal: {
      border: 'border-cyan-500/30',
      bg: 'bg-cyan-500/5',
      glow: 'hover:shadow-cyan-500/20',
      accent: 'bg-cyan-500',
    },
    problem: {
      border: 'border-red-500/30',
      bg: 'bg-red-500/5',
      glow: 'hover:shadow-red-500/20',
      accent: 'bg-red-500',
    },
    solution: {
      border: 'border-lime-500/30',
      bg: 'bg-lime-500/5',
      glow: 'hover:shadow-lime-500/20',
      accent: 'bg-lime-500',
    },
  }

  const style = variantStyles[variant]

  return (
    <div
      ref={ref}
      className={`
        relative max-w-2xl mx-auto md:mx-0
        ${side === 'right' ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12'}
        transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Connection dot */}
      <div
        className={`
          hidden md:block absolute top-8 w-4 h-4 rounded-full ${style.accent}
          ${side === 'left' ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}
        `}
        style={{
          filter: `drop-shadow(0 0 8px ${variant === 'goal' ? '#06b6d4' : variant === 'problem' ? '#ef4444' : '#84cc16'})`,
        }}
      />

      {/* Content card */}
      <div
        className={`
          relative p-8 rounded-2xl border ${style.border} ${style.bg}
          backdrop-blur-sm transition-all duration-300
          hover:scale-[1.02] hover:shadow-2xl ${style.glow}
        `}
      >
        {/* Number badge */}
        <div
          className={`
            absolute -top-4 ${side === 'left' ? 'left-8' : 'right-8'}
            w-8 h-8 rounded-full ${style.accent}
            flex items-center justify-center
            text-white text-sm font-bold
          `}
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          {index + 1}
        </div>

        <h3
          className="text-2xl md:text-3xl font-bold mb-4 text-white"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          {title}
        </h3>
        <p
          className="text-slate-300 leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}
