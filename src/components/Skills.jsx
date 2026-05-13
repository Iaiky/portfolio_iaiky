import { useEffect, useRef, useState } from 'react'

const SKILLS = [
  { name: 'React / Next.js', pct: 92, tag: 'Frontend' },
  { name: 'Vue.js',          pct: 92, tag: 'Frontend' },
  { name: 'Tailwind CSS',    pct: 93, tag: 'Frontend' },
  { name: 'Node.js',         pct: 88, tag: 'Backend'  },
  { name: 'PostgreSQL',      pct: 80, tag: 'Backend'  },
  { name: 'MongoDB',         pct: 76, tag: 'Backend'  },
  { name: 'Git / GitHub',    pct: 95, tag: 'DevOps'   },
]

const TOOLS = ['Vite', 'Firebase', 'MySQL', 'GraphQL', 'Postman', 'Figma', 'Wamp', 'Vercel', 'Socket.io']

function Bar({ name, pct, tag, delay, animate }) {
  const [go, setGo] = useState(false)
  
  useEffect(() => { 
    if (animate) { 
      const t = setTimeout(() => setGo(true), delay)
      return () => clearTimeout(t) 
    } 
  }, [animate, delay])

  return (
    <div className="mb-[1.1rem]">
      <div className="flex justify-between mb-2 items-center">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-slate-300">{name}</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet-600/10 text-violet-400 border border-violet-600/20">
            {tag}
          </span>
        </div>
        <span className="text-[0.78rem] text-violet-400 font-mono">{pct}%</span>
      </div>
      
      {/* Container de la barre */}
      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-500 transition-all duration-1000 ease-out"
          style={{ width: go ? `${pct}%` : '0%' }} 
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const headerRef = useRef()
  const bodyRef   = useRef()
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { 
        if (e.isIntersecting) { 
          setAnimate(true)
          obs.unobserve(e.target) 
        } 
      },
      { threshold: 0.1 }
    )
    if (headerRef.current) obs.observe(headerRef.current)
    if (bodyRef.current) obs.observe(bodyRef.current)
    return () => obs.disconnect()
  }, [])

  // Classes communes pour les cartes
  const cardClass = "bg-slate-900/50 border border-slate-800 p-7 rounded-xl"

  return (
    <section id="skills" className="py-24 px-6 bg-[#0a0a0f]">
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <div 
          ref={headerRef} 
          className={`mb-12 transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <span className="text-violet-500 text-xs font-bold uppercase tracking-widest">Compétences</span>
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-slate-100 mt-2 tracking-tight">
            Stack technique
          </h2>
        </div>

        {/* Grid Body */}
        <div 
          ref={bodyRef} 
          className={`grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-8 transition-all duration-1000 delay-200 ${animate ? 'opacity-100' : 'opacity-0'}`}
        >
          
          {/* Section Maîtrise */}
          <div className={cardClass}>
            <h3 className="text-[0.85rem] font-semibold text-slate-400 mb-6 uppercase tracking-[0.08em]">
              Maîtrise
            </h3>
            {SKILLS.map((s, i) => (
              <Bar key={s.name} {...s} delay={i * 80} animate={animate} />
            ))}
          </div>

          {/* Section Outils & Stats */}
          <div className="flex flex-col gap-5">
            <div className={cardClass}>
              <h3 className="text-[0.85rem] font-semibold text-slate-400 mb-5 uppercase tracking-[0.08em]">
                Outils & technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {TOOLS.map(t => (
                  <span key={t} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-md border border-slate-700 hover:border-violet-500 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Stat cards */}
            {[
              { icon: '🖥️', label: 'Frontend',  val: 'React · Next.js · Vue.js · Tailwind' },
              { icon: '⚙️', label: 'Backend',   val: 'Node.js · Firebase . PostgreSQL · MongoDB · REST' },
              { icon: '🛠️', label: 'DevOps',    val: 'Git · CI/CD · Vercel · AWS' },
            ].map(c => (
              <div key={c.label} className="bg-slate-900/50 border border-slate-800 p-5 flex gap-4 items-center rounded-xl hover:bg-slate-800/40 transition-colors">
                <span className="text-2xl">{c.icon}</span>
                <div>
                  <div className="text-[0.82rem] font-semibold text-slate-100 mb-0.5">{c.label}</div>
                  <div className="text-[0.78rem] text-slate-500">{c.val}</div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  )
}