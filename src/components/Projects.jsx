import { useEffect, useRef } from 'react'

const PROJECTS = [
  {
    title: 'PeakLab',
    desc:  'Application e-commerce complète avec panier temps réel, dashboard admin et gestion des stocks.',
    tags:  ['React', 'vite.js', 'firestore', 'tailwind.css'],
    year:  '2026',
    status: 'En ligne',
    demo: 'https://peak-lab-test.vercel.app/', code: 'https://github.com/Iaiky/peakLab',
  },
  {
    title: 'Honey of Madagascar',
    desc:  'Site web de Honey of Madagascar, site vitrine et contact',
    tags:  ['Html/css', 'PHP'],
    year:  '2024',
    status: 'Production',
    demo: 'https://ageru.mg/HoneyRemake/Accueil.html', code: 'https://github.com/Iaiky/',
  },
  {
    title: 'Iaikitiana',
    desc:  'Le portfolio de Iaikitiana Jean(moi-même)',
    tags:  ['Vite.js', 'React', 'firestore'],
    year:  '2026',
    status: 'En ligne',
    demo: 'https://portfolio-iaiky.vercel.app', code: 'https://github.com/Iaiky/portfolio_iaiky',
  },
  {
    title: 'Libère toi',
    desc:  'Plareforme en ligne pour les assistants virtuels en ligne',
    tags:  ['Quasar.js', 'Vue.js'],
    year:  '2023',
    status: 'Production',
    demo: '/', code: 'https://github.com/Iaiky/quasar-lib-re-toi.git',
  },
  {
    title: 'Libère toi backend server',
    desc:  'La partie backend authentication and CRUD opérations with express.js & phpMyAdmin',
    tags:  ['Express.js', 'phpMyAdmin', 'Vercel'],
    year:  '2023',
    status: 'En ligne',
    demo: '/', code: 'https://github.com/Iaiky/libere_toi_back.git',
  },
  {
    title: 'E-fandray',
    desc:  'Interface de messagerie avec React',
    tags:  ['React'],
    year:  '2022',
    status: 'Open Source',
    demo: '/', code: 'https://github.com/Iaiky/react_E-fandray.git',
  },
]

// Mapping des styles de status vers Tailwind
const STATUS_CLASSES = {
  'Production':  'bg-green-500/10 text-green-400 border-green-500/20',
  'En ligne':    'bg-violet-500/10 text-violet-400 border-violet-500/20',
  'Open Source': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
}

function ProjectCard({ p, delay }) {
  const ref = useRef()
  
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { 
        if (e.isIntersecting) { 
          setTimeout(() => e.target.classList.add('opacity-100', 'translate-y-0'), delay); 
          obs.unobserve(e.target) 
        } 
      },
      { threshold: .1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [delay])

  const statusStyle = STATUS_CLASSES[p.status] || STATUS_CLASSES['En ligne']

  return (
    <div 
      ref={ref} 
      className="opacity-0 translate-y-8 transition-all duration-700 ease-out p-6 flex flex-col gap-4 bg-[#161622] rounded-xl border border-white/5 hover:border-white/10"
    >
      {/* Header */}
      <div className="flex justify-between items-start">
        <h3 className="text-base font-semibold text-slate-100 leading-tight">{p.title}</h3>
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border whitespace-nowrap ml-2 ${statusStyle}`}>
          {p.status}
        </span>
      </div>

      <p className="text-[0.845rem] text-slate-400 leading-relaxed flex-grow">
        {p.desc}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {p.tags.map(t => (
          <span key={t} className="px-2 py-0.5 bg-slate-800 text-slate-300 rounded text-[10px] font-medium border border-slate-700/50">
            {t}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-[#1e1e2e] pt-3.5 mt-auto flex justify-between items-center">
        <span className="text-[0.75rem] text-slate-600 font-mono">{p.year}</span>
        <div className="flex gap-4">
          <a 
            href={p.demo} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-1.5 text-[0.78rem] text-violet-400 font-medium hover:text-violet-300 transition-colors"
          >
            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
            Démo
          </a>
          <a 
            href={p.code} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[0.78rem] text-slate-500 font-medium hover:text-slate-300 transition-colors"
          >
            <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            Code
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const headerRef = useRef()
  
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { 
        if (e.isIntersecting) { 
          e.target.classList.add('opacity-100', 'translate-y-0'); 
          obs.unobserve(e.target) 
        } 
      }, { threshold: .1 }
    )
    if (headerRef.current) obs.observe(headerRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-[1100px] mx-auto">

        <div 
          ref={headerRef} 
          className="opacity-0 translate-y-4 transition-all duration-700 flex justify-between items-end mb-12 flex-wrap gap-4"
        >
          <div>
            <span className="text-violet-400 font-mono text-sm tracking-wider uppercase">Projets</span>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-slate-100 mt-2 tracking-tight">
              Réalisations récentes
            </h2>
          </div>
          <a 
            href="https://github.com/Iaiky" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white transition-all text-sm"
          >
            <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            Voir sur GitHub
          </a>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-5">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} p={p} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  )
}