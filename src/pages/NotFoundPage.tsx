import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-8">
      <h1 className="font-heading text-6xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4">
        404
      </h1>
      <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 text-center">
        Page not found
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors"
      >
        Return Home
      </Link>
    </div>
  )
}
