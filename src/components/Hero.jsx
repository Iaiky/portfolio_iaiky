export default function Hero() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="min-h-screen flex items-center px-6 py-24 md:py-0">
      <div className="max-w-[1100px] mx-auto w-full">

        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-12">

          {/* ── Left: text content ── */}
          <div className="flex-1 min-w-0">

            {/* Status badge */}
            <div className="hidden md:block fade-up mb-8" style={{ animationDelay: '.05s' }}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[.78rem] font-medium text-green-300 bg-green-400/5 border border-green-400/18">
                <span className="dot-online" />
                Disponible pour de nouveaux projets
              </span>
            </div>

            {/* Heading */}
            <h1
              className="fade-up font-bold leading-[1.1] tracking-[-0.03em] text-slate-100 mb-5"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', animationDelay: '.15s' }}
            >
              Bonjour, je suis<br />
              <span className="bg-gradient-to-br from-violet-300 to-violet-500 bg-clip-text text-transparent">
                Iaikitiana Jean<br className="sm:hidden" /> RAKOTOARINIVO
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="fade-up text-slate-500 leading-[1.7] mb-10 max-w-[520px]"
              style={{ fontSize: '1.02rem', animationDelay: '.25s' }}
            >
              Développeur Full-Stack — je conçois et développe des applications
              web modernes, avec un design soigné, un frontend interactif et un
              backend performant, jusqu'à la mise en production.
            </p>

            {/* CTAs */}
            <div className="fade-up flex flex-wrap gap-3 mb-14" style={{ animationDelay: '.35s' }}>
              <button onClick={() => go('projects')} className="btn-primary">
                Voir mes projets
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </button>
              <button onClick={() => go('contact')} className="btn-ghost">
                Me contacter
              </button>
            </div>

            {/* Stats */}
            <div
              className="fade-up flex flex-wrap gap-8 pt-8 border-t border-[#1e1e2e]"
              style={{ animationDelay: '.45s' }}
            >
              {[
                { val: '3+',  label: "Années d'expérience" },
                { val: '10+', label: 'Projets livrés' },
                { val: '3+', label: 'Clients satisfaits' },
              ].map(s => (
                <div key={s.label}>
                  <div className="text-[1.6rem] font-bold text-slate-100 tracking-[-0.03em] leading-none">
                    {s.val}
                  </div>
                  <div className="text-[.8rem] text-slate-600 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: profile photo ── */}
          <div className="fade-up flex justify-center md:justify-end shrink-0" style={{ animationDelay: '.1s' }}>
            <div className="relative">

              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-violet-600/20 blur-2xl scale-110 pointer-events-none" />

              {/* Photo container */}
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full border-2 border-violet-500/30 overflow-hidden bg-[#13131a]">

                  <img src="/profil.jpeg" alt="Votre Nom" className="w-full h-full object-cover" />

                <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-slate-600">
                  <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  <span className="text-[.72rem] text-slate-700">Votre photo</span>
                </div>
              </div>

              {/* Badge disponible */}
              <div className="absolute bottom-2 right-2 flex items-center gap-1.5 bg-[#13131a] border border-[#1e1e2e] rounded-full px-2.5 py-1 text-[.7rem] font-medium text-slate-400">
                <span className="dot-online" />
                Dispo
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}