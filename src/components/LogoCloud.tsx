const logos = [
  {
    name: "Stratos",
    mark: (
      <svg viewBox="0 0 22 22" className="h-5 w-5" aria-hidden="true">
        <path d="M11 2 20 7v8l-9 5-9-5V7l9-5Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="m7 11 3 1.8L15 10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
      </svg>
    ),
    className: "font-[family-name:var(--font-plus-jakarta)] font-extrabold tracking-[-0.07em]",
  },
  {
    name: "Vanguard Labs",
    mark: (
      <svg viewBox="0 0 22 22" className="h-5 w-5" aria-hidden="true">
        <path d="m4 5 7 12 7-12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
        <path d="M7.5 5h7" stroke="currentColor" strokeLinecap="round" strokeWidth="2.2" />
      </svg>
    ),
    className: "font-[family-name:var(--font-plus-jakarta)] font-bold tracking-[-0.04em]",
  },
  {
    name: "CloudScale",
    mark: (
      <svg viewBox="0 0 24 22" className="h-5 w-5" aria-hidden="true">
        <path d="M7.2 17.4h10.1a4.2 4.2 0 0 0 .4-8.4A6.9 6.9 0 0 0 4.4 9.8a3.9 3.9 0 0 0 2.8 7.6Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="m9 13 3-3 3 3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
      </svg>
    ),
    className: "font-[family-name:var(--font-inter)] font-extrabold tracking-[-0.06em]",
  },
  {
    name: "AetherPay",
    mark: (
      <svg viewBox="0 0 22 22" className="h-5 w-5" aria-hidden="true">
        <path d="M11 2.5 18.5 11 11 19.5 3.5 11 11 2.5Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="m7.5 11 2.2 2.2 4.8-4.8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
      </svg>
    ),
    className: "font-[family-name:var(--font-plus-jakarta)] font-extrabold tracking-[-0.07em]",
  },
  {
    name: "MetricCore",
    mark: (
      <svg viewBox="0 0 22 22" className="h-5 w-5" aria-hidden="true">
        <circle cx="11" cy="11" r="8" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="M7 13.5 9.5 11l2 1.6 3.5-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
      </svg>
    ),
    className: "font-[family-name:var(--font-inter)] font-bold tracking-[-0.05em]",
  },
];

export default function LogoCloud() {
  return (
    <section className="border-y border-slate-100 bg-white px-5 py-8 sm:px-8 lg:px-10" aria-label="Nexora customers">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 lg:flex-row lg:justify-between lg:gap-10">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 lg:text-left">
          Trusted by 2,400+ high-growth teams worldwide
        </p>
        <div className="grid w-full grid-cols-2 items-center gap-x-5 gap-y-5 sm:grid-cols-5 sm:gap-6 lg:max-w-3xl lg:gap-8">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="group flex items-center justify-center gap-2 text-slate-400 transition-colors duration-200 hover:text-[#0066FF]"
              title={logo.name}
            >
              {logo.mark}
              <span className={`text-[13px] ${logo.className}`}>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
