import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return <main className="mx-auto max-w-xl px-6 py-20 text-center"><p className="text-sm font-semibold text-blue-700">404</p><h1 className="mt-3 text-3xl font-semibold tracking-tight">Page not found</h1><p className="mt-3 text-slate-600">The page you requested does not exist.</p><Link className="mt-6 inline-block font-medium text-blue-700 underline" to="/dashboard">Return to dashboard</Link></main>
}
