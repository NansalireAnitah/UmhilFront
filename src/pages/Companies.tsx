import { NavLink } from 'react-router-dom';
import { companies } from './companiesData';

const accentBg: Record<string, string> = {
  emerald: 'bg-emerald',
  gold: 'bg-gold',
  navy: 'bg-navy',
};

export default function Companies() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-display text-3xl font-semibold text-navy">Our Companies</h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {companies.map((c) => (
          <div key={c.slug} className="rounded-xl border border-navy/10 p-6">
            <span className={`inline-block h-2 w-12 rounded-full ${accentBg[c.accent]}`} />
            <h2 className="mt-4 font-display text-xl font-semibold text-navy">{c.name}</h2>
            <p className="mt-1 text-sm font-medium text-navy/60">{c.tagline}</p>
            <p className="mt-3 text-sm text-navy/70">{c.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {c.features.map((f) => (
                <li key={f} className="rounded-full bg-navy/5 px-3 py-1 text-xs text-navy/70">
                  {f}
                </li>
              ))}
            </ul>
            {c.slug === 'hajj-umrah' ? (
              <NavLink
                to="/hajj-umrah"
                className="mt-5 inline-block rounded-full bg-navy px-5 py-2 text-sm font-medium text-white hover:bg-navy/90"
              >
                {c.ctaLabel}
              </NavLink>
            ) : (
              <span className="mt-5 inline-block rounded-full bg-navy/20 px-5 py-2 text-sm font-medium text-navy/50">
                Coming soon
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
