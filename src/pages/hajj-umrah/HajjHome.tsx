import { NavLink } from 'react-router-dom';

/*
  Design tokens used in this file (add to tailwind.config.js under theme.extend
  if you'd rather reference them as classes than arbitrary values):

  colors: {
    ink:       '#161A2E',  // deep night navy — hero + closing CTA background
    'ink-soft':'#232A47',  // lighter navy, gradient partner for ink
    parchment: '#F1EBDA',  // warm paper — page background
    gold:      '#B68D2C',  // antique gold — sparing accent, buttons, dividers
    kiswah:    '#0C4A38',  // deep green — secondary accent, rule lines
    sand:      '#948667',  // muted secondary text on parchment
  }

  Fonts (add to your document head):
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap" rel="stylesheet">
*/

const rites = [
  { step: '01', name: 'Ihram', place: 'Before Miqat', desc: 'The sacred state begins \u2014 two white cloths, one intention.' },
  { step: '02', name: 'Tawaf al-Qudum', place: 'Mecca', desc: 'Seven circuits around the Kaaba mark your arrival.' },
  { step: '03', name: 'Mina', place: 'Mina', desc: 'Days of quiet reflection in the tented city.' },
  { step: '04', name: 'Arafat', place: 'Arafat', desc: 'The standing \u2014 the heart of Hajj, from noon to sunset.' },
  { step: '05', name: 'Muzdalifah', place: 'Muzdalifah', desc: 'A night beneath open sky, gathering pebbles for tomorrow.' },
  { step: '06', name: 'Jamarat', place: 'Mina, again', desc: 'Casting away doubt \u2014 three pillars, three days.' },
];

const trust = [
  { label: 'Verified packages', desc: 'Every package is checked for quality accommodation and transport before it goes on the site.' },
  { label: 'Visa and documents', desc: 'Guided support through passport, visa, and vaccination requirements.' },
  { label: '24/7 support', desc: 'Live help before you leave, while you travel, and after you return.' },
];

function TawafRing({ size = 220, className = '' }) {
  const points = Array.from({ length: 7 });
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Seven points circling a central square, representing the seven circuits of Tawaf"
    >
      <circle cx="100" cy="100" r="72" fill="none" stroke="#B68D2C" strokeOpacity="0.35" strokeWidth="0.75" />
      <rect x="93" y="93" width="14" height="14" rx="2" fill="#B68D2C" />
      <g className="tawaf-orbit" style={{ transformOrigin: '100px 100px' }}>
        {points.map((_, i) => {
          const angle = (i / 7) * Math.PI * 2;
          const cx = 100 + 72 * Math.cos(angle);
          const cy = 100 + 72 * Math.sin(angle);
          return <circle key={i} cx={cx} cy={cy} r={i === 0 ? 4 : 2.5} fill="#F1EBDA" fillOpacity={i === 0 ? 1 : 0.6} />;
        })}
      </g>
    </svg>
  );
}

export default function HajjHome() {
  return (
    <div className="bg-[#F1EBDA] font-[Inter,sans-serif]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
        .font-mono { font-family: 'IBM Plex Mono', monospace; }
        @media (prefers-reduced-motion: no-preference) {
          .tawaf-orbit { animation: tawaf-spin 40s linear infinite; }
        }
        @keyframes tawaf-spin { to { transform: rotate(360deg); } }
      `}</style>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#161A2E] to-[#232A47] px-6 py-28 text-white">
        <div className="pointer-events-none absolute -right-16 -top-16 opacity-[0.14] sm:-right-6 sm:-top-6">
          <TawafRing size={340} />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#B68D2C]">Umuhil Hajj &amp; Umrah</p>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.15] sm:text-5xl">
            Your journey to the Holy Lands, held from the first step
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/75">
            Packages, flights, hotels, visas, and guidance \u2014 arranged before you leave, so nothing is
            left to chance once you arrive.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <NavLink
              to="/hajj-umrah/packages"
              className="rounded-full bg-[#B68D2C] px-8 py-3 font-medium text-[#161A2E] transition-colors hover:bg-[#c79c37]"
            >
              Browse packages
            </NavLink>
            <a
              href="#the-path"
              className="rounded-full border border-white/25 px-8 py-3 font-medium text-white transition-colors hover:border-white/50"
            >
              See the rites
            </a>
          </div>
        </div>
      </section>

      {/* The Path */}
      <section id="the-path" className="mx-auto max-w-6xl px-6 py-24">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#0C4A38]">The path</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-[#161A2E]">
          Every rite, in the order you&apos;ll live it
        </h2>
        <p className="mt-3 max-w-2xl text-[#948667]">
          Hajj unfolds in a fixed sequence, moving between five places over several days. Umrah follows
          a shorter path through the first two rites. Either way, we map it before you fly.
        </p>

        <div className="relative mt-16">
          <svg
            aria-hidden="true"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-x-0 top-6 hidden h-24 w-full lg:block"
          >
            <path
              d="M20 30 C 220 90, 420 -10, 620 40 S 1020 100, 1180 30"
              fill="none"
              stroke="#0C4A38"
              strokeOpacity="0.25"
              strokeWidth="1.5"
              strokeDasharray="2 8"
              strokeLinecap="round"
            />
          </svg>

          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-6">
            {rites.map((rite) => (
              <div key={rite.step} className="relative">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-xs text-[#0C4A38]">{rite.step}</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#948667]">{rite.place}</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold text-[#161A2E]">{rite.name}</h3>
                <p className="mt-2 text-sm text-[#948667]">{rite.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-[#161A2E]/10 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-3">
          {trust.map((item) => (
            <div key={item.label} className="border-l-2 border-[#B68D2C] pl-5">
              <h3 className="font-display font-semibold text-[#161A2E]">{item.label}</h3>
              <p className="mt-2 text-sm text-[#948667]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <div className="relative overflow-hidden rounded-[28px] bg-[#161A2E] px-8 py-16 text-center text-white">
          <div className="pointer-events-none absolute -left-10 -top-10 opacity-[0.12]">
            <TawafRing size={180} />
          </div>
          <h2 className="relative font-display text-2xl font-semibold sm:text-3xl">
            Once you&apos;re booked, the countdown begins
          </h2>
          <p className="relative mx-auto mt-3 max-w-md text-white/70">
            Your pilgrim dashboard tracks documents, itinerary, and the days left until departure.
          </p>
          <NavLink
            to="/hajj-umrah/packages"
            className="relative mt-8 inline-block rounded-full bg-[#B68D2C] px-8 py-3 font-medium text-[#161A2E] transition-colors hover:bg-[#c79c37]"
          >
            Start planning
          </NavLink>
        </div>
      </section>
    </div>
  );
}