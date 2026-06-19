const formations = [
  {
    type: 'stage',
    title: 'Stagiaire — Groupe ENAC',
    period: 'Sept – Nov 2025',
    lieu: 'Gestion de l\'hôtel',
    tags: ['Vue.js', 'Laravel'],
  },
  {
    type: 'diplome',
    title: 'Troisième année — Licence Professionnelle',
    period: '2025 – Aujourd\'hui',
    lieu: 'École Nationale d\'Informatique',
    detail: 'Génie Logiciel & Base de Données',
    tags: [],
  },
  {
    type: 'diplome',
    title: 'Deuxième année — Licence Professionnelle',
    period: '2024 – 2025',
    lieu: 'École Nationale d\'Informatique',
    detail: 'Génie Logiciel & Base de Données',
    tags: [],
  },
  {
    type: 'diplome',
    title: 'Première année — Licence Professionnelle',
    period: '2023 – 2024',
    lieu: 'École Nationale d\'Informatique',
    detail: 'Génie Logiciel & Base de Données',
    tags: [],
  },
  {
    type: 'diplome',
    title: 'Baccalauréat Série C',
    period: '2023',
    lieu: 'Lycée Catholique Saint Michel Itaosy',
    tags: [],
  },
  {
    type: 'certif',
    title: 'Formation — Fondamentaux du développement informatique',
    period: 'Septembre 2024', 
    lieu: 'ODC Fianarantsoa',
    tags: [],
  },
]

const icons = {
  stage: 'ti-briefcase',
  diplome: 'ti-school',
  certif: 'ti-certificate',
}

const labels = {
  stage: 'Stage',
  diplome: 'Formation',
  certif: 'Certification',
}

function Card({ item }) {
  return (
    <div className="border border-[#1a2332] bg-[#0e1419] p-4 hover:border-[#00e5ff]/40 transition-colors duration-200 w-full">
      <div className="flex flex-wrap justify-between items-start gap-1 mb-2">
        <span className={`text-[8px] tracking-widest uppercase px-2 py-0.5 ${
          item.type === 'stage' ? 'bg-[#00e5ff]/10 text-[#00e5ff]' :
          item.type === 'certif' ? 'bg-purple-500/10 text-purple-400' :
          'bg-[#1a2332] text-[#8892a4]'
        }`}>
          {labels[item.type]}
        </span>
        {item.period && (
          <span className="text-[9px] text-[#4a5568] tracking-widest">{item.period}</span>
        )}
      </div>
      <h3 className="font-['Syne'] font-bold text-[13px] text-[#e8edf2] mb-1">{item.title}</h3>
      <p className="text-[10px] text-[#8892a4] mb-1">{item.lieu}</p>
      {item.detail && <p className="text-[10px] text-[#4a5568] mb-1">{item.detail}</p>}
      {item.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-2">
          {item.tags.map(tag => (
            <span key={tag} className="text-[9px] text-[#00e5ff] bg-[#00e5ff]/10 px-2 py-0.5">{tag}</span>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="bg-[#080c10] border-t border-[#1a2332] px-4 md:px-16 py-20">

      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-4 h-px bg-[#00e5ff]" />
          <span className="text-[#00e5ff] text-[9px] tracking-[0.2em] uppercase">02. parcours</span>
        </div>
        <h2 className="font-['Syne'] font-extrabold text-[clamp(1.5rem,4vw,2.2rem)] text-[#e8edf2] m-0">
          Formations & Diplômes
        </h2>
      </div>

      {/* Timeline desktop — centrée */}
      <div className="hidden md:block relative">

        {/* Ligne centrale verticale */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[#1a2332]" />

        <div className="flex flex-col gap-10">
          {formations.map((item, i) => {
            const isLeft = i % 2 === 0
            return (
              <div key={i} className="relative flex items-start gap-0">

                {/* Côté gauche */}
                <div className="w-1/2 pr-10 flex justify-end">
                  {isLeft ? <Card item={item} /> : <div />}
                </div>

                {/* Icône centrale */}
                <div className="absolute left-1/2 -translate-x-1/2 top-4 w-8 h-8 bg-[#080c10] border border-[#1a2332] flex items-center justify-center z-10">
                  <i className={`ti ${icons[item.type]} text-[#00e5ff] text-sm`} aria-hidden="true" />
                </div>

                {/* Côté droit */}
                <div className="w-1/2 pl-10 flex justify-start">
                  {!isLeft ? <Card item={item} /> : <div />}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Timeline mobile — verticale simple */}
      <div className="md:hidden relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-[#1a2332]" />
        <div className="flex flex-col gap-6">
          {formations.map((item, i) => (
            <div key={i} className="relative pl-12">
              <div className="absolute left-0 top-1 w-8 h-8 bg-[#080c10] border border-[#1a2332] flex items-center justify-center">
                <i className={`ti ${icons[item.type]} text-[#00e5ff] text-sm`} aria-hidden="true" />
              </div>
              <Card item={item} />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}