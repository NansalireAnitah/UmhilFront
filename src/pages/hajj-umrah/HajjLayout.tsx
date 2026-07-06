import { NavLink, Outlet } from 'react-router-dom';

const links = [
  { to: '/hajj-umrah', label: 'Home', end: true },
  { to: '/hajj-umrah/packages', label: 'Packages' },
  { to: '/hajj-umrah/guides', label: 'Travel Guides' },
  { to: '/hajj-umrah/faqs', label: 'FAQs' },
  { to: '/hajj-umrah/support', label: 'Support' },
];

export default function HajjLayout() {
  return (
    <div>
      <div className="border-b border-navy/10 bg-emerald/5">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <nav className="flex flex-wrap gap-6">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-emerald' : 'text-navy/70 hover:text-emerald'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex gap-4">
            <NavLink to="/hajj-umrah/login" className="text-sm font-medium text-navy/70 hover:text-emerald">
              Login
            </NavLink>
            <NavLink
              to="/hajj-umrah/dashboard"
              className="rounded-full bg-navy px-4 py-1.5 text-sm font-medium text-white hover:bg-navy/90"
            >
              Dashboard
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}