import { useState, useEffect } from 'react'

const links = [
  { num: '00', label: 'home', href: '#home' },
  { num: '01', label: 'about', href: '#about' },
  { num: '02', label: 'parcours', href: '#experience' },
  { num: '03', label: 'projects', href: '#projects' },
  { num: '04', label: 'contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#080c10]/95 backdrop-blur-md border-b border-[#1a2332]' : 'bg-transparent border-b border-transparent'}`}>
      <div className="flex justify-between items-center px-4 md:px-16 py-4">

        {/* Logo */}
        <div className="font-['Syne'] font-extrabold text-[15px] text-[#00e5ff]">
          RAH
          <span className="text-[#4a5568] text-[10px] font-['DM_Mono'] ml-2">// dev</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6 items-center">
          {links.map(({ num, label, href }) => (
            <a key={label} href={href}
              className="text-[#8892a4] text-[10px] tracking-widest uppercase no-underline hover:text-[#00e5ff] transition-colors">
              <span className="text-[#00e5ff] text-[9px] mr-0.5">{num}.</span>
              {label}
            </a>
          ))}
        </div>

        {/* Burger mobile */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden bg-transparent border-none text-[#00e5ff] text-xl cursor-pointer"
          aria-label="Menu">
          <i className={`ti ${menuOpen ? 'ti-x' : 'ti-menu-2'}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#080c10]/98 border-t border-[#1a2332] px-4 py-5 flex flex-col gap-4">
          {links.map(({ num, label, href }) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}
              className="text-[#8892a4] text-[11px] tracking-widest uppercase no-underline hover:text-[#00e5ff] transition-colors">
              <span className="text-[#00e5ff] mr-2">{num}.</span>{label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}