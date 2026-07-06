export default function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-navy text-white/70">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm">
        © {new Date().getFullYear()} Umuhil Group. All rights reserved.
      </div>
    </footer>
  );
}
