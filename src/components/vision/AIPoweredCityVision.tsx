import type { AIPoweredCityVisionProps } from '../../types'
import { HeroSection } from './HeroSection'
import { JourneyRoad } from './JourneyRoad'
import { ContentNode } from './ContentNode'
import { FeatureGrid } from './FeatureGrid'
import { VisualConceptsSection } from './VisualConceptsSection'
import { TeamSection } from './TeamSection'
import { CTASection } from './CTASection'

export function AIPoweredCityVision({
  hero,
  goals,
  problems,
  solutions,
  cityFeatures,
  visualConcepts,
  experts,
  callsToAction,
  onNavigate,
  onViewExpert,
}: AIPoweredCityVisionProps) {
  return (
    <div className="relative bg-slate-950 text-white overflow-hidden">
      {/* Hero Section */}
      <HeroSection hero={hero} />

      {/* The Journey - Road with connected sections */}
      <div className="relative">
        {/* Visual Road Path (SVG) */}
        <JourneyRoad />

        {/* Goals Section */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-5xl md:text-6xl font-bold text-center mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-lime-400">
                Наша візія
              </span>
            </h2>
            <p
              className="text-xl text-slate-400 text-center mb-20 max-w-3xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              П'ять трансформаційних цілей, що керують міським майбутнім України
            </p>

            <div className="grid gap-8 md:gap-12">
              {goals.map((goal, index) => (
                <ContentNode
                  key={goal.id}
                  title={goal.title}
                  description={goal.description}
                  index={index}
                  side={index % 2 === 0 ? 'left' : 'right'}
                  variant="goal"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Problems Section */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-5xl md:text-6xl font-bold text-center mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                Виклик
              </span>
            </h2>
            <p
              className="text-xl text-slate-400 text-center mb-20 max-w-3xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Критичні питання, що вимагають системної трансформації
            </p>

            <div className="grid gap-8 md:gap-12">
              {problems.map((problem, index) => (
                <ContentNode
                  key={problem.id}
                  title={problem.title}
                  description={problem.description}
                  index={index}
                  side={index % 2 === 0 ? 'right' : 'left'}
                  variant="problem"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-5xl md:text-6xl font-bold text-center mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">
                Рішення
              </span>
            </h2>
            <p
              className="text-xl text-slate-400 text-center mb-20 max-w-3xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Як міста зі ШІ трансформують управління та суспільство
            </p>

            <div className="grid gap-8 md:gap-12">
              {solutions.map((solution, index) => (
                <ContentNode
                  key={solution.id}
                  title={solution.title}
                  description={solution.description}
                  index={index}
                  side={index % 2 === 0 ? 'left' : 'right'}
                  variant="solution"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Visual Concepts Section */}
        <VisualConceptsSection concepts={visualConcepts} />

        {/* City Features Section */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-5xl md:text-6xl font-bold text-center mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Розумна інфраструктура
              </span>
            </h2>
            <p
              className="text-xl text-slate-400 text-center mb-20 max-w-3xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Інтегровані системи, що живлять міста майбутнього
            </p>

            <FeatureGrid features={cityFeatures} />
          </div>
        </section>

        {/* Team Section */}
        <TeamSection experts={experts} onViewExpert={onViewExpert} />

        {/* CTA Section */}
        <CTASection callsToAction={callsToAction} onNavigate={onNavigate} />
      </div>
    </div>
  )
}
