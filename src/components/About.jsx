import { useEffect, useRef } from 'react'

function useReveal(ref) {
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target) } },
      { threshold: .15 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [ref])
}

const INFO_ROWS = [
  { label: 'Localisation', val: 'Antananarivo, Madagascar' },
  { label: 'Statut',       val: 'Disponible', green: true },
  { label: 'Expérience',   val: '3+ années' },
  { label: 'Email',        val: 'iaikitiananaej@gmail.com', link: true },
]

const VALUES = [
  { icon: '⚡', title: 'Performance', desc: 'Code optimisé' },
  { icon: '🎨', title: 'UI soignée',  desc: 'Design intuitif' },
  { icon: '🔒', title: 'Sécurité',    desc: 'Bonnes pratiques' },
  { icon: '🚀', title: 'Livraison',   desc: 'Dans les délais' },
]

export default function About() {
  const r1 = useRef(); const r2 = useRef()
  useReveal(r1); useReveal(r2)

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <div ref={r1} className="reveal mb-14">
          <span className="section-label">À propos</span>
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-slate-100 mt-2.5 tracking-[-0.02em]">
            Qui suis-je ?
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* ── Left card: identity ── */}
          <div ref={r2} className="reveal card p-7">

            {/* Avatar */}
            <div className="w-[72px] h-[72px] rounded-xl mb-5 bg-gradient-to-br from-violet-900 to-violet-600 flex items-center justify-center text-2xl font-bold text-white">
              IJ
            </div>

            <h3 className="text-[1.1rem] font-semibold text-slate-100 mb-1">
              Iaikitiana Jean RAKOTOARINIVO
            </h3>
            <p className="text-[.82rem] text-violet-500 font-mono mb-5">
              Développeur Full-Stack
            </p>

            {/* Info rows */}
            <div className="border-t border-[#1e1e2e] pt-5 flex flex-col gap-3">
              {INFO_ROWS.map(row => (
                <div key={row.label} className="flex justify-between items-center">
                  <span className="text-[.8rem] text-slate-600">{row.label}</span>
                  {row.link ? (
                    <a
                      href={`mailto:${row.val}`}
                      className="text-[.8rem] text-violet-400 hover:text-violet-300 transition-colors truncate ml-4 text-right"
                    >
                      {row.val}
                    </a>
                  ) : (
                    <span className={`text-[.8rem] flex items-center gap-1.5 ${row.green ? 'text-green-400 font-semibold' : 'text-slate-400'}`}>
                      {row.green && <span className="dot-online" />}
                      {row.val}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* CV download */}
            <a
              href="/cv.pdf"
              download="CV_Iaikitiana_Jean.pdf"
              className="btn-ghost mt-6 w-full justify-center no-underline"
            >
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2"/>
              </svg>
              Télécharger CV
            </a>
          </div>

          {/* ── Right: bio + values ── */}
          <div className="flex flex-col gap-5">

            <div className="card p-7">
              <h4 className="text-[.85rem] font-semibold text-slate-100 mb-3.5">Présentation</h4>
              <p className="text-[.875rem] text-slate-400 leading-[1.75] mb-3">
                Passionné par le développement web depuis plus de 3 ans, je crée des
                applications modernes, performantes et adaptées aux besoins des utilisateurs.
              </p>
              <p className="text-[.875rem] text-slate-400 leading-[1.75]">
                Je maîtrise l'ensemble de la chaîne — de l'interface React, Vue jusqu'aux APIs
                Node.js — avec un souci constant des détails et de la performance.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {VALUES.map(v => (
                <div key={v.title} className="card p-4">
                  <span className="text-[1.2rem] block mb-1.5">{v.icon}</span>
                  <div className="text-[.82rem] font-semibold text-slate-100 mb-1">{v.title}</div>
                  <div className="text-[.75rem] text-slate-600">{v.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}