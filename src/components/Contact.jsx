import { useEffect, useRef, useState } from 'react'

function Field({ label, as: Tag = 'input', ...props }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium tracking-[0.04em] text-slate-600">
        {label}
      </label>

      <Tag
        {...props}
        className={`
          w-full rounded-lg border border-[#1e1e2e] bg-[#13131a]
          px-4 py-3 text-sm text-slate-100 outline-none
          transition-all duration-200
          focus:border-violet-500/50
          focus:ring-4 focus:ring-violet-500/10
          ${Tag === 'textarea' ? 'min-h-[120px] resize-y' : ''}
        `}
      />
    </div>
  )
}

export default function Contact() {
  const headerRef = useRef()

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          obs.unobserve(e.target)
        }
      },
      { threshold: 0.1 }
    )

    if (headerRef.current) obs.observe(headerRef.current)

    return () => obs.disconnect()
  }, [])

  const handle = (e) =>
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }))

  const submit = (e) => {
    e.preventDefault()

    setStatus('loading')

    setTimeout(() => {
      setStatus('done')

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, 1600)
  }

  return (
    <section
      id="contact"
      className="bg-[#0a0a0f] px-6 py-24"
    >
      <div className="mx-auto max-w-[1100px]">

        {/* Header */}
        <div
          ref={headerRef}
          className="reveal mb-12"
        >
          <span className="section-label">Contact</span>

          <h2 className="mt-2 text-[clamp(1.6rem,3vw,2.2rem)] font-bold tracking-[-0.02em] text-slate-100">
            Travaillons ensemble
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            Disponible pour des missions freelance, des collaborations
            ou simplement pour discuter d'un projet.
          </p>
        </div>

        {/* Grid */}
        <div
          className="
            grid items-start gap-8
            [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]
          "
        >

          {/* Info column */}
          <div className="flex flex-col gap-4">

            {[
              {
                icon: '📧',
                label: 'Email',
                val: 'iaikitiananaej@gmail.com',
                href: 'mailto:iaikitiananaej@gmail.com',
              },
              {
                icon: '📍',
                label: 'Localisation',
                val: 'Antananarivo, Madagascar',
              },
              {
                icon: '⏱️',
                label: 'Réponse',
                val: 'Sous 24 heures',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="
                  card flex items-center gap-4
                  px-5 py-4
                "
              >
                <span className="text-[1.1rem]">
                  {item.icon}
                </span>

                <div>
                  <div className="mb-[0.15rem] text-[0.72rem] text-slate-600">
                    {item.label}
                  </div>

                  {item.href ? (
                    <a
                      href={item.href}
                      className="
                        text-sm font-medium text-violet-400
                        no-underline
                      "
                    >
                      {item.val}
                    </a>
                  ) : (
                    <div className="text-sm text-slate-300">
                      {item.val}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="card px-5 py-4">

              <div className="mb-3 text-[0.72rem] text-slate-600">
                Retrouvez-moi
              </div>

              <div className="flex gap-2.5">

                {[
                  {
                    name: 'GitHub',
                    href: 'https://github.com/Iaiky',
                    icon: (
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    ),
                  },
                  {
                    name: 'LinkedIn',
                    href: 'www.linkedin.com/in/iaikitiana-jean-rakotoarinivo-9b0169234',
                    icon: (
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    ),
                  },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    title={s.name}
                    className="
                      flex h-9 w-9 items-center justify-center
                      rounded-lg border border-[#1e1e2e]
                      bg-[#13131a]
                      text-slate-500
                      transition-all duration-200
                      hover:border-violet-500/30
                      hover:text-violet-400
                    "
                  >
                    <svg
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {s.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="card p-7">

            {status === 'done' ? (
              <div className="px-4 py-10 text-center">

                <div className="mb-4 text-[2.5rem]">
                  ✅
                </div>

                <h3 className="mb-2 font-semibold text-slate-100">
                  Message envoyé !
                </h3>

                <p className="mb-6 text-sm text-slate-600">
                  Je vous répondrai sous 24h.
                </p>

                <button
                  onClick={() => setStatus(null)}
                  className="btn-ghost"
                >
                  Envoyer un autre
                </button>
              </div>
            ) : (
              <form
                onSubmit={submit}
                className="flex flex-col gap-[1.1rem]"
              >

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Field
                    label="Nom"
                    name="name"
                    type="text"
                    placeholder="Jean NaeJ"
                    value={form.name}
                    onChange={handle}
                    required
                  />

                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="jean@mail.com"
                    value={form.email}
                    onChange={handle}
                    required
                  />
                </div>

                <Field
                  label="Message"
                  as="textarea"
                  name="message"
                  placeholder="Décrivez votre projet..."
                  value={form.message}
                  onChange={handle}
                  required
                />

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="
                    btn-primary flex items-center justify-center gap-2
                  "
                >
                  {status === 'loading' ? (
                    <>
                      <div
                        className="
                          h-[15px] w-[15px]
                          animate-spin rounded-full
                          border-2 border-white/30
                          border-t-white
                        "
                      />

                      Envoi…
                    </>
                  ) : (
                    <>
                      Envoyer le message

                      <svg
                        width="15"
                        height="15"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}