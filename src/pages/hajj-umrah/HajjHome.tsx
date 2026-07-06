import { NavLink } from 'react-router-dom';

export default function HajjHome() {
  return (
    <div>
      <section className="bg-navy px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-display text-4xl font-semibold sm:text-5xl">
            Your Journey to the Holy Lands, Simplified
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Book Hajj & Umrah packages with flights, hotels, and visa support — all in one place.
          </p>
          <NavLink
            to="/hajj-umrah/packages"
            className="mt-8 inline-block rounded-full bg-gold px-8 py-3 font-medium text-navy hover:bg-gold/90"
          >
            Browse Packages
          </NavLink>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-2xl font-semibold text-navy">Why Choose Umuhil</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {[
            { title: 'Verified Packages', desc: 'Every package is vetted for quality accommodation and transport.' },
            { title: 'Visa & Document Support', desc: 'We guide you through passport, visa, and vaccination requirements.' },
            { title: '24/7 Support', desc: 'Live assistance before, during, and after your pilgrimage.' },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-navy/10 p-6">
              <h3 className="font-display font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm text-navy/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
