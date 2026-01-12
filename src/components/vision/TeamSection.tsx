import type { VisionExpert } from '../../types'

interface TeamSectionProps {
  experts: VisionExpert[]
  onViewExpert?: (expertId: string) => void
}

export function TeamSection({ experts, onViewExpert }: TeamSectionProps) {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-5xl md:text-6xl font-bold text-center mb-4"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyan-400">
            Наша команда
          </span>
        </h2>
        <p
          className="text-xl text-slate-400 text-center mb-20 max-w-3xl mx-auto"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Експертні лідери, що керують міською трансформацією України
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {experts.map((expert, index) => (
            <button
              key={expert.id}
              onClick={() => onViewExpert?.(expert.id)}
              className="group relative p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50
                hover:bg-slate-800 hover:border-lime-500/50 transition-all duration-300
                hover:scale-105 hover:shadow-xl hover:shadow-lime-500/10 text-left"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.08}s backwards`,
              }}
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full mb-4
                border-2 border-lime-500/30 group-hover:border-lime-500/60 transition-all
                overflow-hidden bg-slate-700">
                <img
                  src={expert.avatarUrl}
                  alt={expert.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h3
                className="text-lg font-semibold mb-1 text-white group-hover:text-lime-400 transition-colors"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {expert.name}
              </h3>

              {/* Title */}
              <p
                className="text-sm font-medium text-cyan-400 mb-2"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {expert.title}
              </p>

              {/* Domain badge */}
              <div className="inline-block px-3 py-1 rounded-full bg-slate-900/50 border border-slate-700 mb-3">
                <span
                  className="text-xs text-slate-400"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {expert.domain}
                </span>
              </div>

              {/* Bio */}
              <p
                className="text-sm text-slate-400 leading-relaxed line-clamp-3"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {expert.bio}
              </p>

              {/* Hover indicator */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-lime-400 opacity-0
                group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>

        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </section>
  )
}
