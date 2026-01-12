import type { ResearchReportsProps } from '../../types'

export function ResearchReports({ placeholder }: ResearchReportsProps) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
      <div className="max-w-md mx-auto px-6 py-16 text-center">
        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-cyan-600 dark:text-cyan-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
          {placeholder.title}
        </h1>

        {/* Message */}
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          {placeholder.message}
        </p>

        {/* Status badge */}
        <div className="mt-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-lime-100 dark:bg-lime-900/30 text-lime-700 dark:text-lime-300 text-sm font-medium rounded-full">
            <span className="w-2 h-2 bg-lime-500 rounded-full animate-pulse" />
            В розробці
          </span>
        </div>
      </div>
    </div>
  )
}
