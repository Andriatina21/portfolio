const skillSections = [
  {
    title: 'Frontend',
    icon: 'ti-layout',
    skills: [
      { name: 'HTML', pct: 85, logo: 'devicon-html5-plain colored' },
      { name: 'CSS', pct: 70, logo: 'devicon-css3-plain colored' },
      { name: 'JavaScript', pct: 75, logo: 'devicon-javascript-plain colored' },
      { name: 'Bootstrap', pct: 80, logo: 'devicon-bootstrap-plain colored' },
      { name: 'Tailwind CSS', pct: 85, logo: 'devicon-tailwindcss-plain colored' },
    ],
  },
  {
    title: 'Backend',
    icon: 'ti-server',
    skills: [
      { name: 'PHP', pct: 80, logo: 'devicon-php-plain colored' },
      { name: 'Java', pct: 85, logo: 'devicon-java-plain colored' },
      { name: 'Node.js', pct: 70, logo: 'devicon-nodejs-plain colored' },
    ],
  },
  {
    title: 'Frameworks',
    icon: 'ti-stack',
    skills: [
      { name: 'Vue.js', pct: 90, logo: 'devicon-vuejs-plain colored' },
      { name: 'React', pct: 80, logo: 'devicon-react-original colored' },
      { name: 'Laravel', pct: 85, logo: 'devicon-laravel-plain colored' },
    ],
  },
  {
    title: 'Desktop',
    icon: 'ti-device-desktop',
    skills: [
      { name: 'JavaFX', pct: 90, logo: 'devicon-java-plain colored' },
      { name: 'C#', pct: 90, logo: 'devicon-csharp-plain colored' },
      { name: 'C++', pct: 80, logo: 'devicon-cplusplus-plain colored' },
    ],
  },
]

const badgeSections = [
  {
    title: 'Base de données',
    icon: 'ti-database',
    items: [
      { name: 'MySQL', logo: 'devicon-mysql-plain colored' },
      { name: 'PostgreSQL', logo: 'devicon-postgresql-plain colored' },
      { name: 'Oracle', logo: 'devicon-oracle-original colored' },
    ],
  },
  {
    title: 'Méthodes de conception',
    icon: 'ti-chart-dots',
    items: [
      { name: 'Merise', logo: null },
      { name: 'UML', logo: null },
    ],
  },
  {
    title: 'Outils',
    icon: 'ti-tools',
    items: [
      { name: 'VS Code', logo: 'devicon-vscode-plain colored' },
      { name: 'Visual Studio', logo: 'devicon-visualstudio-plain colored' },
      { name: 'IntelliJ', logo: 'devicon-intellij-plain colored' },
      { name: 'Postman', logo: 'devicon-postman-plain colored' },
      { name: 'Git / GitHub', logo: 'devicon-github-original' },
      { name: 'Unity', logo: 'devicon-unity-original' },
    ],
  },
]

function SkillBar({ name, pct, logo }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        {/* Logo + nom */}
        <div className="flex items-center gap-2">
          {logo
            ? <i className={`${logo} text-lg`} aria-hidden="true" />
            : <div className="w-[18px] h-[18px] border border-[#1a2332] flex items-center justify-center">
                <span className="text-[7px] text-[#00e5ff] font-bold leading-none">{name.slice(0,2).toUpperCase()}</span>
              </div>
          }
          <span className="text-[10px] text-[#8892a4]">{name}</span>
        </div>
        <span className="text-[9px] text-[#00e5ff] tracking-widest">{pct}%</span>
      </div>
      {/* Barre */}
      <div className="w-full h-px bg-[#1a2332] relative">
        <div className="absolute top-0 left-0 h-px bg-[#00e5ff]" style={{ width: `${pct}%` }} />
        <div
          className="absolute w-1.5 h-1.5 rounded-full bg-[#00e5ff]"
          style={{ left: `${pct}%`, top: '50%', transform: 'translate(-50%, -50%)' }}
        />
      </div>
    </div>
  )
}

function SkillCard({ section }) {
  return (
    <div className="border border-[#1a2332] bg-[#0e1419] p-5 hover:border-[#00e5ff]/30 transition-colors duration-200">
      <div className="flex items-center gap-2 mb-5 pb-3 border-b border-[#1a2332]">
        <i className={`ti ${section.icon} text-[#00e5ff] text-base`} aria-hidden="true" />
        <span className="font-['Syne'] font-bold text-[12px] text-[#e8edf2] tracking-wide uppercase">
          {section.title}
        </span>
      </div>
      {section.skills.map(skill => (
        <SkillBar key={skill.name} {...skill} />
      ))}
    </div>
  )
}

function BadgeCard({ section }) {
  return (
    <div className="border border-[#1a2332] bg-[#0e1419] p-5 hover:border-[#00e5ff]/30 transition-colors duration-200">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#1a2332]">
        <i className={`ti ${section.icon} text-[#00e5ff] text-base`} aria-hidden="true" />
        <span className="font-['Syne'] font-bold text-[12px] text-[#e8edf2] tracking-wide uppercase">
          {section.title}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {section.items.map(({ name, logo }) => (
          <span key={name} className="flex items-center gap-2 border border-[#1a2332] px-3 py-2 text-[10px] text-[#8892a4] hover:border-[#00e5ff]/40 transition-colors">
            {logo
              ? <i className={`${logo} text-base`} aria-hidden="true" />
              : <div className="w-4 h-4 flex items-center justify-center">
                  <span className="text-[7px] text-[#00e5ff] font-bold">{name.slice(0,2).toUpperCase()}</span>
                </div>
            }
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="bg-[#0e1419] border-t border-[#1a2332] px-4 md:px-16 py-20">

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-4 h-px bg-[#00e5ff]" />
          <span className="text-[#00e5ff] text-[9px] tracking-[0.2em] uppercase">01. compétences</span>
        </div>
        <h2 className="font-['Syne'] font-extrabold text-[clamp(1.5rem,4vw,2.2rem)] text-[#e8edf2] m-0">
          Stack & Outils
        </h2>
      </div>

      {/* Skills avec barres */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {skillSections.map(section => (
          <SkillCard key={section.title} section={section} />
        ))}
      </div>

      {/* Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {badgeSections.map(section => (
          <BadgeCard key={section.title} section={section} />
        ))}
      </div>

    </section>
  )
}