import type { OrganizationTeamProps, Expert } from '../types'

function ExpertRow({ expert }: { expert: Expert }) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-slate-200 dark:border-slate-700/50 last:border-b-0">
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-slate-900 dark:text-white">
          {expert.name}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {expert.role}
        </p>
      </div>
      <span className="ml-4 px-3 py-1 text-xs font-medium bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full whitespace-nowrap">
        {expert.domain}
      </span>
    </div>
  )
}

export function OrganizationTeam({
  organization,
  experts
}: OrganizationTeamProps) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        {/* Organization Header */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">
            {organization.name}
          </h1>
          <p className="text-lg text-cyan-600 dark:text-cyan-400 font-medium mb-6">
            {organization.mission}
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {organization.description}
          </p>
        </header>

        {/* Team Section */}
        <section>
          <h2 className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
            Our Team
          </h2>
          <div className="bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 px-6">
            {experts.map((expert) => (
              <ExpertRow key={expert.id} expert={expert} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
