import { useState, useEffect } from 'react'

const NAV = [
  { label: 'Accueil',     id: 'hero' },
  { label: 'À propos',    id: 'about' },
  { label: 'Compétences', id: 'skills' },
  { label: 'Projets',     id: 'projects' },
  { label: 'Contact',     id: 'contact' },
]

export default function Navbar() {
  const [solid,  setSolid]  = useState(false)
  const [active, setActive] = useState(0)
  const [open,   setOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > 40)
      const idx = NAV.reduce((acc, l, i) => {
        const el = document.getElementById(l.id)
        return el && el.getBoundingClientRect().top < 120 ? i : acc
      }, 0)
      setActive(idx)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      solid
        ? 'bg-[#0d0d12]/90 backdrop-blur-md border-b border-[#1e1e2e]'
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-[1100px] mx-auto px-6 h-[58px] flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => go('hero')}
          className="font-mono text-[0.95rem] font-medium text-violet-400 hover:text-violet-300 transition-colors bg-transparent border-none cursor-pointer"
        >
          I NaeJ
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {NAV.map((l, i) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`px-3.5 py-1.5 rounded-md text-[0.84rem] font-medium border-none cursor-pointer transition-all duration-200 ${
                active === i
                  ? 'text-violet-300 bg-violet-500/10'
                  : 'text-slate-500 bg-transparent hover:text-slate-300'
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* CTA — desktop */}
        <button
          onClick={() => go('contact')}
          className="hidden md:inline-flex items-center gap-2 bg-violet-700 hover:bg-violet-600 text-white text-sm font-medium px-4 py-2 rounded-lg border border-violet-600 transition-all duration-200 hover:shadow-[0_0_18px_rgba(124,58,237,0.4)] cursor-pointer"
        >
          Me contacter
        </button>

        {/* Hamburger — mobile */}
        <button
          onClick={() => setOpen(o => !o)}
          className="md:hidden text-slate-400 hover:text-slate-200 transition-colors p-1.5 rounded-md cursor-pointer bg-transparent border-none"
          aria-label="Menu"
        >
          {open
            ? <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
            : <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          }
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 border-t bg-[#0d0d12] ${
        open ? 'max-h-96 opacity-100 border-[#1e1e2e]' : 'max-h-0 opacity-0 border-transparent'
      }`}>
        <div className="px-4 py-3 flex flex-col gap-1">
          {NAV.map((l, i) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium border-none cursor-pointer transition-all duration-200 ${
                active === i
                  ? 'text-violet-300 bg-violet-500/10'
                  : 'text-slate-400 bg-transparent hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              {l.label}
            </button>
          ))}
          <div className="pt-2 pb-1">
            <button
              onClick={() => go('contact')}
              className="w-full flex items-center justify-center gap-2 bg-violet-700 hover:bg-violet-600 text-white text-sm font-medium px-4 py-2.5 rounded-lg border border-violet-600 transition-all duration-200 cursor-pointer"
            >
              Me contacter
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}