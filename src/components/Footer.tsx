import { ArrowUpRight, Mail, ShieldCheck } from "lucide-react";

function NexoraMark() {
  return (
    <span className="relative flex h-8 w-8 items-center justify-center" aria-hidden="true">
      <span className="absolute h-6 w-6 rotate-45 rounded-[7px] bg-[#0066FF]" />
      <span className="absolute h-3.5 w-3.5 rotate-45 rounded-[3px] bg-[#060E1F]" />
      <span className="absolute bottom-0.5 right-0.5 h-2 w-2 rounded-full bg-[#0EA5E9] ring-2 ring-[#060E1F]" />
    </span>
  );
}

const productLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const companyLinks = [
  { label: "About Nexora", href: "#top" },
  { label: "Customer stories", href: "#testimonials" },
  { label: "Contact sales", href: "#start-trial" },
  { label: "Careers", href: "mailto:careers@nexora.ai" },
];

export default function Footer() {
  return (
    <footer className="bg-[#060E1F] px-5 pb-8 pt-16 text-white sm:px-8 sm:pt-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.35fr_0.8fr_0.9fr_1.1fr] lg:gap-10">
          <div>
            <a href="#top" className="inline-flex items-center gap-2.5" aria-label="Nexora home">
              <NexoraMark />
              <span className="font-[family-name:var(--font-plus-jakarta)] text-[19px] font-extrabold tracking-[-0.04em]">Nexora</span>
            </a>
            <p className="mt-6 max-w-xs text-sm leading-6 text-slate-400">AI-powered revenue and workflow intelligence for teams building what’s next.</p>
            <div className="mt-7 flex items-center gap-2">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="Nexora on LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[11px] font-black text-slate-400 transition-colors hover:border-white/25 hover:bg-white/10 hover:text-white">in</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Nexora on X" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[12px] font-black text-slate-400 transition-colors hover:border-white/25 hover:bg-white/10 hover:text-white">𝕏</a>
              <a href="mailto:hello@nexora.ai" aria-label="Email Nexora" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-white/25 hover:bg-white/10 hover:text-white"><Mail size={15} /></a>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Product</p>
            <ul className="mt-5 space-y-3">
              {productLinks.map((link) => <li key={link.label}><a href={link.href} className="text-sm font-medium text-slate-300 transition-colors hover:text-white">{link.label}</a></li>)}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Company</p>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => <li key={link.label}><a href={link.href} className="inline-flex items-center gap-1 text-sm font-medium text-slate-300 transition-colors hover:text-white">{link.label}{link.label === "Careers" && <ArrowUpRight size={13} />}</a></li>)}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Legal &amp; security</p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-[11px] font-bold text-emerald-300">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" /></span>
              All Systems Operational
            </div>
            <div className="mt-5 flex items-start gap-2.5 text-xs leading-5 text-slate-400"><ShieldCheck size={16} className="mt-0.5 shrink-0 text-[#71AEFF]" /> SOC2 Type II controls and GDPR-ready data handling across every workspace.</div>
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-slate-500"><a href="mailto:privacy@nexora.ai?subject=Privacy%20policy" className="transition-colors hover:text-slate-300">Privacy</a><a href="mailto:legal@nexora.ai?subject=Terms%20of%20service" className="transition-colors hover:text-slate-300">Terms</a><a href="mailto:security@nexora.ai?subject=Security%20question" className="transition-colors hover:text-slate-300">Security</a></div>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-xs font-medium text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Nexora Technologies Inc. All rights reserved.</p>
          <p>Built for teams who move with signal.</p>
        </div>
      </div>
    </footer>
  );
}
