export default function Footer() {
  return (
    <footer className="bg-[#080c10] border-t border-[#1a2332] px-4 md:px-16 py-5 flex flex-wrap justify-between items-center gap-3">
      <p className="text-[10px] text-[#4a5568] m-0">
        © 2026 <span className="text-[#e8edf2]">RAELISON Andriatina Hermann</span> — Tous droits réservés
      </p>
      <div className="flex gap-2">
        {[
          { icon: 'ti-brand-github', url: 'https://github.com/' },
          { icon: 'ti-brand-linkedin', url: 'https://linkedin.com/' },
        ].map(({ icon, url }) => (
          <a key={icon} href={url} target="_blank" rel="noreferrer"
            className="w-7 h-7 border border-[#1a2332] flex items-center justify-center text-[#4a5568] no-underline text-[13px] hover:border-[#00e5ff] hover:text-[#00e5ff] transition-all">
            <i className={`ti ${icon}`} aria-hidden="true" />
          </a>
        ))}
      </div>
    </footer>
  )
}