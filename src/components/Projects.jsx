import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'Portfolio Personnel',
    description: 'Portfolio personnel moderne et simple présentant mes compétences et mes projets avec un design dark et épuré.',
    tools: [
      { name: 'React.js', logo: 'devicon-react-original colored' },
      { name: 'Tailwind CSS', logo: 'devicon-tailwindcss-plain colored' },
    ],
    github: 'https://github.com/Andriatina21/portfolio',
    images: [
      '/projects/portfolio/img1.png',
      '/projects/portfolio/img2.png',
    ],
  },

  {
    id: 2,
    title: 'Gestion de vente de materiel informatique',
    description: 'Une application desktop de vente materiel informatique, les gerer et les clients peuvent acheter.',
    tools: [
      { name: 'C++', logo: 'devicon-cplusplus-plain colored' },
      {name: 'QTcreator', logo:'devicon-qt-plain colored'},
      { name: 'MySQL', logo: 'devicon-mysql-plain colored' },
    ],
    github: 'https://github.com/Andriatina21/GestionDeVenteMatInfo',
    images: [
      '/projects/cpp/img1.png',
      '/projects/cpp/img2.png',
      '/projects/cpp/img3.png',
    ],
  },

  {
    id: 3,
    title: 'AutoLuxe',
    description: 'Application desktop pour une la gestion de vente des voiture.',
    tools: [
      { name: 'JavaFX', logo: 'devicon-java-plain colored' },
      { name: 'PostgreSQL', logo: 'devicon-postgresql-plain colored'}
    ],
    github: 'https://github.com/Andriatina21/Java',
    images: [
      '/projects/java/img1.png',
      '/projects/java/img2.png',
    ],
  },

  {
    id: 4,
    title: 'Mobile money',
    description: 'Application d pour une gerer la mobile money, envoyer ou recevoir des argent.',
    tools: [
      { name: 'JSP', logo: 'devicon-java-plain colored' },
      { name: 'PostgreSQL', logo: 'devicon-postgresql-plain colored'}
    ],
    github: 'https://github.com/Andriatina21/GestionMobileMoney',
    images: [
      '/projects/jsp/img1.png',
      '/projects/jsp/img2.png',
    ],
  },

  {
    id: 5,
    title: 'BankClient Pro',
    description: 'Une application web dédiée à la gestion de banque est une plateforme centralisée permettant de superviser les opérations financières.',
    tools: [
      { name: 'React.js', logo: 'devicon-react-plain colored' },
      { name: 'Express.js', logo: 'devicon-express-original colored' }
    ],
    github: 'https://github.com/Andriatina21/BankClient',
    images: [
      '/projects/node/img1.png',
      '/projects/node/img2.png',
    ],
  },

  {
    id: 6,
    title: 'Gestion de pension',
    description: 'Une application web dédiée à la gestion de pension permet d\'automatiser le suivi des affiliés, les calculs de droits et les versements.',
    tools: [
      { name: 'PHP', logo: 'devicon-php-plain colored' },
      { name: 'MySQL', logo: 'devicon-mysql-plain colored' },
    ],
    github: 'https://github.com/Andriatina21/GestionPension',
    images: [
      '/projects/php/img1.png',
      '/projects/php/img2.png',
      '/projects/php/img3.png',
      '/projects/php/img4.png',
      '/projects/php/img5.png',
    ],
  },
]


function Carousel({ images, title }) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(i => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setCurrent(i => (i === images.length - 1 ? 0 : i + 1))

  return (
    <div className="relative w-full h-48 bg-[#080c10] border-b border-[#1a2332] overflow-hidden group">
      {/* Image */}
      <img
        src={images[current]}
        alt={`${title} - image ${current + 1}`}
        className="w-full h-full object-cover"
      />

      {/* Boutons prev/next — visibles seulement si plusieurs images */}
      {images.length > 1 && (
        <>
          <button onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-[#080c10]/80 border border-[#1a2332] text-[#00e5ff] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <i className="ti ti-chevron-left text-sm" />
          </button>
          <button onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-[#080c10]/80 border border-[#1a2332] text-[#00e5ff] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <i className="ti ti-chevron-right text-sm" />
          </button>

          {/* Indicateurs points */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${i === current ? 'bg-[#00e5ff]' : 'bg-[#1a2332]'}`}
              />
            ))}
          </div>
        </>
      )}

      {/* Placeholder si image manquante */}
      <div className="absolute inset-0 flex items-center justify-center bg-[#080c10] -z-10">
        <i className="ti ti-photo text-[32px] text-[#1a2332]" />
      </div>
    </div>
  )
}


function ProjectCard({ project }) {
  return (
    <div className="border border-[#1a2332] bg-[#0e1419] flex flex-col hover:border-[#00e5ff]/40 transition-colors duration-200">

      {/* Carrousel ou image unique */}
      <Carousel images={project.images} title={project.title} />

      {/* Contenu */}
      <div className="p-5 flex flex-col flex-1">

        {/* Titre */}
        <h3 className="font-['Syne'] font-bold text-[14px] text-[#e8edf2] mb-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[10px] text-[#8892a4] leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Outils avec logos */}
        <div className="flex flex-wrap gap-2 mb-4 pb-4 border-b border-[#1a2332]">
          {project.tools.map(({ name, logo }) => (
            <span key={name}
              className="flex items-center gap-1.5 text-[9px] text-[#8892a4] bg-[#080c10] border border-[#1a2332] px-2 py-1">
              {logo
                ? <i className={`${logo} text-sm`} aria-hidden="true" />
                : <div className="w-3 h-3 rounded-full bg-[#00e5ff]/20" />
              }
              {name}
            </span>
          ))}
        </div>

        {/* Bouton GitHub */}
        <a href={project.github} target="_blank" rel="noreferrer"
          className="flex items-center justify-center gap-2 border border-[#1a2332] text-[#8892a4] py-2 text-[10px] tracking-widest uppercase no-underline hover:border-[#00e5ff] hover:text-[#00e5ff] transition-all">
          <i className="ti ti-brand-github text-base" aria-hidden="true" />
          Voir le code source
        </a>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="bg-[#080c10] border-t border-[#1a2332] px-4 md:px-16 py-20">

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-4 h-px bg-[#00e5ff]" />
          <span className="text-[#00e5ff] text-[9px] tracking-[0.2em] uppercase">03. projets</span>
        </div>
        <h2 className="font-['Syne'] font-extrabold text-[clamp(1.5rem,4vw,2.2rem)] text-[#e8edf2] m-0">
          Mes réalisations
        </h2>
      </div>

      {/* Grille projets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </section>
  )
}