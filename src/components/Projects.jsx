import { useEffect, useState } from 'react'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then(res => res.json())
      .then(data => { setProjects(data); setLoading(false) })
      .catch(() => { setError('Impossible de charger les projets.'); setLoading(false) })
  }, [])

  return (
    <section id="projects" className="bg-[#080c10] border-t border-[#1a2332] px-4 md:px-16 py-20">

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-4 h-px bg-[#00e5ff]" />
          <span className="text-[#00e5ff] text-[9px] tracking-[0.2em] uppercase">02. projets</span>
        </div>
        <h2 className="font-['Syne'] font-extrabold text-[clamp(1.5rem,4vw,2.2rem)] text-[#e8edf2] m-0">
          Mes réalisations
        </h2>
      </div>

      {loading && <p className="text-[11px] text-[#4a5568] tracking-widest">Chargement...</p>}
      {error && <p className="text-[11px] text-red-400">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map(project => <ProjectCard key={project.id} project={project} />)}
        </div>
      )}
    </section>
  )
}

function ProjectCard({ project }) {
  const tech = typeof project.tech === 'string' ? JSON.parse(project.tech) : project.tech || []

  return (
    <div className="border border-[#1a2332] bg-[#0e1419] flex flex-col hover:border-[#00e5ff] transition-colors duration-200">
      {/* Image */}
      <div className="h-40 bg-[#080c10] border-b border-[#1a2332] flex items-center justify-center overflow-hidden">
        {project.image_url
          ? <img src={project.image_url} alt={project.title} className="w-full h-full object-cover" />
          : <i className="ti ti-code text-[32px] text-[#1a2332]" aria-hidden="true" />
        }
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-['Syne'] text-sm font-bold text-[#e8edf2] mb-2">{project.title}</h3>
        <p className="text-[10px] text-[#8892a4] leading-relaxed mb-3 flex-1">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tech.map(t => (
            <span key={t} className="text-[9px] text-[#00e5ff] bg-[#00e5ff]/10 px-2 py-0.5 tracking-wide">
              {t}
            </span>
          ))}
        </div>

        {/* Liens */}
        <div className="flex gap-4 pt-3 border-t border-[#1a2332]">
          {project.github_url && (
            <a href={project.github_url} target="_blank" rel="noreferrer"
              className="flex items-center gap-1 text-[9px] text-[#8892a4] uppercase tracking-widest no-underline hover:text-[#e8edf2] transition-colors">
              <i className="ti ti-brand-github" aria-hidden="true" /> GitHub
            </a>
          )}
          {project.live_url && (
            <a href={project.live_url} target="_blank" rel="noreferrer"
              className="flex items-center gap-1 text-[9px] text-[#00e5ff] uppercase tracking-widest no-underline hover:opacity-80 transition-opacity">
              <i className="ti ti-external-link" aria-hidden="true" /> Live
            </a>
          )}
        </div>
      </div>
    </div>
  )
}