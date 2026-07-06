import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24 text-center">
      <h1 className="font-display text-4xl font-semibold text-navy sm:text-5xl">
        Umuhil Group
      </h1>
      <p className="mt-4 text-lg text-navy/70">
        One brand, four services: pilgrimage, travel, rides, and community.
      </p>
      <NavLink
        to="/companies"
        className="mt-8 inline-block rounded-full bg-emerald px-8 py-3 font-medium text-white hover:bg-emerald/90"
      >
        Explore Our Companies
      </NavLink>
    </div>
  );
}
