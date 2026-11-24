import { ArrowRight, Brain, Cable, Check, Workflow } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Cable,
    title: "Connect Your Stack in One Click",
    description: "Link your CRM, billing, support, and product tools in minutes. Nexora starts organizing your revenue signals as soon as you connect.",
    accent: "bg-blue-50 text-[#0066FF]",
  },
  {
    number: "02",
    icon: Brain,
    title: "AI Models Map Your Revenue Signals",
    description: "Our models learn your customer patterns, surface the drivers behind growth and risk, and translate noise into a clear operating picture.",
    accent: "bg-violet-50 text-violet-600",
  },
  {
    number: "03",
    icon: Workflow,
    title: "Trigger Automated Retention & Upsell Flows",
    description: "Turn every insight into action with playbooks that reach the right account, owner, and channel before an opportunity goes cold.",
    accent: "bg-emerald-50 text-emerald-600",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0066FF]">From signal to action</p>
            <h2 className="mt-4 font-[family-name:var(--font-plus-jakarta)] text-3xl font-extrabold leading-[1.08] tracking-[-0.06em] text-[#060E1F] sm:text-4xl lg:text-[46px]">
              Revenue clarity in three simple steps.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-7 text-slate-600 lg:pb-1">
            No drawn-out implementation. Nexora turns the systems you already use into an always-on revenue intelligence layer.
          </p>
        </div>

        <div className="relative mt-14 grid gap-5 lg:grid-cols-3 lg:gap-7">
          <div className="pointer-events-none absolute left-[16.5%] right-[16.5%] top-10 hidden border-t border-dashed border-slate-200 lg:block" />
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.number} className="relative rounded-[25px] border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_22px_55px_-28px_rgba(15,23,42,0.38)] sm:p-8">
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-[family-name:var(--font-plus-jakarta)] text-sm font-extrabold tracking-[0.14em] text-[#0066FF]">{step.number}</span>
                  <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${step.accent}`}><Icon size={20} strokeWidth={2.1} /></span>
                </div>
                <h3 className="mt-8 max-w-[260px] font-[family-name:var(--font-plus-jakarta)] text-xl font-extrabold leading-tight tracking-[-0.045em] text-[#060E1F]">{step.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">{step.description}</p>
                <div className="mt-8 flex items-center gap-2 border-t border-slate-100 pt-4 text-[11px] font-bold text-slate-600">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"><Check size={12} strokeWidth={3} /></span>
                  {index === 0 ? "Secure OAuth connection" : index === 1 ? "Signals update continuously" : "Actions run on your rules"}
                </div>
                {index < steps.length - 1 && <ArrowRight size={17} className="absolute -right-6 top-9 z-20 hidden text-slate-300 lg:block" />}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
