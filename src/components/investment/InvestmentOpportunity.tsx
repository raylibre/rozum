import type { InvestmentOpportunityProps } from '../../types'

export function InvestmentOpportunity({
  hero,
  keyPoints,
  cta,
  onContactClick
}: InvestmentOpportunityProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-400/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-24 w-72 h-72 bg-lime-500/10 dark:bg-lime-400/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            {hero.headline}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {hero.subheadline}
          </p>
        </div>
      </section>

      {/* Key Points Section */}
      <section className="relative max-w-5xl mx-auto px-6 pb-16 md:pb-24">
        <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {keyPoints.map((point, index) => (
            <article
              key={point.id}
              className="group relative bg-white dark:bg-slate-800/50 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Accent line */}
              <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-cyan-500 to-lime-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Number badge */}
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500/10 dark:bg-cyan-400/10 text-cyan-600 dark:text-cyan-400 font-semibold text-sm mb-4">
                {String(index + 1).padStart(2, '0')}
              </div>

              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                {point.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                {point.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative max-w-4xl mx-auto px-6 pb-20 md:pb-28">
        <div className="relative bg-gradient-to-br from-cyan-600 to-cyan-700 dark:from-cyan-700 dark:to-cyan-800 rounded-3xl p-8 md:p-12 text-center overflow-hidden">
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-lime-400 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative">
            <p className="text-cyan-100 text-lg md:text-xl max-w-xl mx-auto mb-8 leading-relaxed">
              {cta.description}
            </p>
            <button
              onClick={() => onContactClick?.()}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white dark:bg-slate-900 text-cyan-700 dark:text-cyan-400 font-semibold rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              {cta.text}
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
