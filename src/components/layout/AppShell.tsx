import { NavLink, Outlet } from 'react-router-dom'

const navigation = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Requests', to: '/requests' },
] as const

export function AppShell() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="border-b border-slate-200 bg-white px-6 py-4">
        <p className="font-semibold tracking-tight">Workflow Approval Dashboard</p>
      </header>
      <div className="mx-auto flex max-w-7xl">
        <aside className="min-h-[calc(100vh-65px)] w-60 border-r border-slate-200 bg-white p-4">
          <nav aria-label="Main navigation" className="space-y-1">
            {navigation.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2 text-sm font-medium ${isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`
                }
                key={item.to}
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </aside>
        <main className="min-w-0 flex-1 p-6"><Outlet /></main>
      </div>
    </div>
  )
}
