import type { CityFeature } from '../../types'
import {
  Brain,
  ShieldCheck,
  Zap,
  Activity,
  Database,
  Wifi,
  Home,
  Users,
} from 'lucide-react'

interface FeatureGridProps {
  features: CityFeature[]
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  brain: Brain,
  'shield-check': ShieldCheck,
  zap: Zap,
  activity: Activity,
  database: Database,
  wifi: Wifi,
  home: Home,
  users: Users,
}

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => {
        const Icon = iconMap[feature.icon] || Brain
        return (
          <div
            key={feature.id}
            className="group relative p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm
              hover:bg-slate-800 hover:border-cyan-500/50 transition-all duration-300
              hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10"
            style={{
              animation: `fadeInScale 0.6s ease-out ${index * 0.05}s backwards`,
            }}
          >
            {/* Icon */}
            <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-cyan-500/20 to-lime-500/20
              flex items-center justify-center
              group-hover:from-cyan-500/30 group-hover:to-lime-500/30 transition-all">
              <Icon className="w-6 h-6 text-cyan-400" />
            </div>

            {/* Title */}
            <h3
              className="text-lg font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {feature.title}
            </h3>

            {/* Description */}
            <p
              className="text-sm text-slate-400 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {feature.description}
            </p>

            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/0 to-lime-500/0
              group-hover:from-cyan-500/5 group-hover:to-lime-500/5 transition-all pointer-events-none" />
          </div>
        )
      })}

      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
