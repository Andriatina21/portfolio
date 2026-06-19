export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col bg-[#080c10]">
      {/* Content */}
      <div className="flex-1 flex flex-col justify-center px-4 md:px-16 pt-24 pb-8 max-w-3xl">

        {/* Disponibilité */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]" />
          <span className="text-[#00e5ff] text-[10px] tracking-[0.18em] uppercase">
            Disponible pour de nouveaux projets
          </span>
        </div>

        {/* Nom */}
        <h1 className="font-['Syne'] font-extrabold text-[clamp(2rem,6vw,3.8rem)] leading-[1.08] text-[#e8edf2] mb-3">
          RAELISON<br />
          Andriatina<br />
          <span className="text-[#00e5ff]">Hermann</span>
        </h1>

        {/* Titre */}
        <div className="flex items-center gap-2 text-[11px] text-[#4a5568] tracking-widest uppercase mb-6">
          Développeur Full Stack
          <span className="text-[#00e5ff] animate-blink">|</span>
        </div>

        {/* Devise */}
        <div className="border-l-2 border-[#00e5ff] pl-4 py-2 mb-6 bg-[#00e5ff]/5">
          <p className="text-[11px] text-[#8892a4] leading-relaxed italic m-0">
            " <span className="text-[#00e5ff] not-italic">Le courage mène une vie sincère et authentique</span> "
          </p>
        </div>

        {/* Description */}
        <p className="text-[11px] text-[#8892a4] leading-loose max-w-md mb-8">
          Je conçois et développe des applications web, Desktop pour digitaliser tous ce qui entoure l 'environnement humaine.
        </p>

        {/* Boutons */}
        <div className="flex flex-wrap gap-3 mb-10">
          <a href="/cv.pdf" download
            className="bg-[#00e5ff] text-[#080c10] px-6 py-2.5 text-[10px] tracking-widest uppercase no-underline font-['DM_Mono'] hover:opacity-90 transition-opacity">
            Télécharger mon CV
          </a>
          <a href="#contact"
            className="border border-[#1a2332] text-[#8892a4] px-6 py-2.5 text-[10px] tracking-widest uppercase no-underline font-['DM_Mono'] hover:border-[#00e5ff] hover:text-[#e8edf2] transition-all">
            Me contacter
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 pt-6 border-t border-[#1a2332]">
          {[
            { num: '2', label: "Ans d'expérience" },
            { num: '8', label: 'Technologies' },
          ].map(({ num, label }) => (
            <div key={label}>
              <div className="font-['Syne'] font-extrabold text-[clamp(1.4rem,3vw,1.8rem)] text-[#e8edf2] leading-none">
                {num}<span className="text-[#00e5ff]">+</span>
              </div>
              <div className="text-[9px] text-[#4a5568] tracking-widest uppercase mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer hint */}
      <div className="flex justify-between items-center px-4 md:px-16 py-4 border-t border-[#1a2332]">
        <div className="flex items-center gap-3 text-[9px] text-[#4a5568] tracking-widest uppercase">
          <div className="w-8 h-px bg-[#4a5568]" />
          scroll
        </div>
        <div className="flex gap-2">
          {[
            { icon: 'ti-brand-github', url: 'https://github.com/Andriatina21' },
            { icon: 'ti-brand-linkedin', url: 'https:/www.linkedin.com/in/andriatina-raelison-73643b390' },
            { icon: 'ti-brand-facebook', url: 'https://www.facebook.com/share/1CYwLzwZPa/'}
          ].map(({ icon, url }) => (
            <a key={icon} href={url} target="_blank" rel="noreferrer"
              className="w-7 h-7 border border-[#1a2332] flex items-center justify-center text-[#4a5568] no-underline text-[13px] hover:border-[#00e5ff] hover:text-[#00e5ff] transition-all">
              <i className={`ti ${icon}`} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}