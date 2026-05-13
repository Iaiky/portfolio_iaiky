export default function Footer() {
  return (
    <footer className="border-t border-[#1e1e2e] py-7 px-6">
      <div className="max-w-[1100px] mx-auto flex justify-between items-center flex-wrap gap-4">
        
        {/* Logo / Tag */}
        <span className="font-mono text-sm text-violet-400">
          I NaeJ
        </span>

        {/* Copyright */}
        <span className="text-[0.8rem] text-slate-700">
          © {new Date().getFullYear()} Iaikitiana NaeJ — React · Vite · Tailwind CSS
        </span>

        {/* Back to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="
            w-[34px] h-[34px] rounded-lg border border-[#1e1e2e] bg-[#13131a] 
            text-slate-500 flex items-center justify-center transition-all duration-200
            hover:text-violet-400 hover:border-violet-500/30 active:scale-95
          "
          title="Retour en haut"
        >
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M18 15l-6-6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
      </div>
    </footer>
  )
}