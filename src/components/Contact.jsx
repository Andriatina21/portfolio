import { useState } from 'react'

const contactLinks = [
    { icon: 'ti-mail', label: 'andriatinaraelison@gmail.com', url: 'mailto:andriatinaraelison@gmail.com' },
    { icon: 'ti-brand-github', label: 'Andriatina21', url: 'https://github.com/Andriatina21' },
    { icon: 'ti-brand-linkedin', label: 'linkedin.com/in/hermann', url: 'https:/www.linkedin.com/in/andriatina-raelison-73643b390' },
    { icon: 'ti-brand-facebook', label: 'Hermann Junior', url: 'https://www.facebook.com/share/1CYwLzwZPa/'}
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) { setStatus('empty'); return }
    setStatus('loading')
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) { setStatus('success'); setForm({ name: '', email: '', message: '' }) }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  const inputClass = "w-full bg-[#080c10] border border-[#1a2332] px-3 py-2.5 text-[11px] text-[#e8edf2] font-['DM_Mono'] focus:border-[#00e5ff] focus:outline-none transition-colors"
  const labelClass = "block text-[9px] text-[#4a5568] tracking-widest uppercase mb-1.5"

  return (
    <section id="contact" className="bg-[#0e1419] border-t border-[#1a2332] px-4 md:px-16 py-20">

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-4 h-px bg-[#00e5ff]" />
          <span className="text-[#00e5ff] text-[9px] tracking-[0.2em] uppercase">03. contact</span>
        </div>
        <h2 className="font-['Syne'] font-extrabold text-[clamp(1.5rem,4vw,2.2rem)] text-[#e8edf2] m-0">
          Travaillons ensemble
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

        {/* Gauche */}
        <div>
          <p className="text-[11px] text-[#8892a4] leading-loose mb-8">
            Vous avez un projet en tête ? Je suis disponible pour des missions freelance ou un poste à temps plein. N'hésitez pas à me contacter.
          </p>
          <div className="flex flex-col gap-4">
            {contactLinks.map(({ icon, label, url }) => (
              <a key={label} href={url} target="_blank" rel="noreferrer"
                className="flex items-center gap-3 text-[11px] text-[#8892a4] no-underline hover:text-[#00e5ff] transition-colors">
                <div className="w-8 h-8 border border-[#1a2332] flex items-center justify-center text-[#00e5ff] text-sm shrink-0">
                  <i className={`ti ${icon}`} aria-hidden="true" />
                </div>
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Droite — formulaire */}
        <div>
          <div className="mb-4">
            <label className={labelClass}>Nom</label>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Votre nom" className={inputClass} />
          </div>
          <div className="mb-4">
            <label className={labelClass}>Email</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="votre@email.com" className={inputClass} />
          </div>
          <div className="mb-5">
            <label className={labelClass}>Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Votre message..." rows={5} className={`${inputClass} resize-y`} />
          </div>

          {status === 'empty' && <p className="text-[10px] text-red-400 mb-3">Veuillez remplir tous les champs.</p>}
          {status === 'success' && <p className="text-[10px] text-[#00e5ff] mb-3">Message envoyé avec succès !</p>}
          {status === 'error' && <p className="text-[10px] text-red-400 mb-3">Erreur lors de l'envoi. Réessayez.</p>}

          <button onClick={handleSubmit} disabled={status === 'loading'}
            className="bg-[#00e5ff] text-[#080c10] px-6 py-2.5 text-[10px] tracking-widest uppercase border-none cursor-pointer font-['DM_Mono'] hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-wait">
            {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message →'}
          </button>
        </div>
      </div>
    </section>
  )
}