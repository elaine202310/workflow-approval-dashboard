import { Link } from 'react-router-dom'

export function ForbiddenPage() {
  return <main className="mx-auto max-w-xl px-6 py-20 text-center"><p className="text-sm font-semibold text-blue-700">403</p><h1 className="mt-3 text-3xl font-semibold tracking-tight">Access denied</h1><p className="mt-3 text-slate-600">Your current demo role cannot view this page.</p><Link className="mt-6 inline-block font-medium text-blue-700 underline" to="/dashboard">Return to dashboard</Link></main>
}
