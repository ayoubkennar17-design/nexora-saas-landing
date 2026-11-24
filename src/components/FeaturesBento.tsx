import {
  ArrowUpRight,
  BarChart3,
  Brain,
  Database,
  Gauge,
  Lock,
  ShieldCheck,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

const integrations = [
  { name: "Stripe", mark: "S", className: "bg-[#635BFF] text-white" },
  { name: "HubSpot", mark: "h", className: "bg-[#FF7A59] text-white" },
  { name: "Salesforce", mark: "☁", className: "bg-[#0EA5E9] text-white" },
  { name: "Slack", mark: "#", className: "bg-[#4A154B] text-white" },
];

const riskAccounts = [
  { name: "Vertex Systems", score: "92", status: "Critical", width: "92%", color: "bg-rose-500", textColor: "text-rose-500" },
  { name: "Northstar Health", score: "68", status: "Watch", width: "68%", color: "bg-amber-400", textColor: "text-amber-500" },
  { name: "Axiom Retail", score: "24", status: "Healthy", width: "24%", color: "bg-emerald-500", textColor: "text-emerald-500" },
];

function FeatureIcon({ children, className = "bg-blue-50 text-[#0066FF]" }: { children: React.ReactNode; className?: string }) {
  return <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${className}`}>{children}</span>;
}

function StandardFeatureCard({
  icon,
  iconClassName,
  title,
  description,
  children,
}: {
  icon: React.ReactNode;
  iconClassName?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <article className="group flex min-h-[255px] flex-col rounded-[24px] border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_22px_55px_-28px_rgba(15,23,42,0.42)] sm:p-7">
      <FeatureIcon className={iconClassName}>{icon}</FeatureIcon>
      <h3 className="mt-7 font-[family-name:var(--font-plus-jakarta)] text-[17px] font-extrabold tracking-[-0.04em] text-[#060E1F]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
      {children}
      <ArrowUpRight size={17} className="mt-auto self-end text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#0066FF]" />
    </article>
  );
}

export default function FeaturesBento() {
  return (
    <section id="features" className="bg-[#F8FAFD] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0066FF]">One intelligent revenue layer</p>
          <h2 className="mt-4 font-[family-name:var(--font-plus-jakarta)] text-3xl font-extrabold leading-[1.08] tracking-[-0.06em] text-[#060E1F] sm:text-4xl lg:text-[46px]">
            Everything You Need to Scale Without Guesswork
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-500 sm:text-lg">
            Turn disconnected data and manual handoffs into a system that spots the next best revenue move before your team has to ask.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <article className="group relative overflow-hidden rounded-[26px] border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_25px_65px_-30px_rgba(0,102,255,0.32)] sm:p-8">
            <div className="relative z-10 max-w-sm">
              <FeatureIcon><Brain size={19} strokeWidth={2.2} /></FeatureIcon>
              <h3 className="mt-7 font-[family-name:var(--font-plus-jakarta)] text-2xl font-extrabold tracking-[-0.055em] text-[#060E1F] sm:text-[28px]">Predictive Churn &amp; Revenue AI</h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">Know which accounts need attention, why they are at risk, and what action will protect the relationship—before renewal day.</p>
            </div>
            <div className="relative z-10 mt-8 rounded-2xl border border-slate-200/80 bg-[#F8FAFD] p-4 sm:p-5">
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">Account health radar</p>
                  <p className="mt-1 text-xs font-semibold text-[#060E1F]">12 accounts need a closer look</p>
                </div>
                <span className="rounded-full bg-rose-50 px-2 py-1 text-[10px] font-bold text-rose-500">Live scoring</span>
              </div>
              <div className="mt-4 space-y-3">
                {riskAccounts.map((account) => (
                  <div key={account.name} className="flex items-center gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="mb-1.5 flex items-center justify-between gap-3">
                        <span className="truncate text-[11px] font-semibold text-slate-600">{account.name}</span>
                        <span className="text-[10px] font-extrabold text-[#060E1F]">{account.score}</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-slate-200">
                        <div className={`h-full rounded-full ${account.color}`} style={{ width: account.width }} />
                      </div>
                    </div>
                    <span className={`hidden w-14 text-right text-[9px] font-bold uppercase tracking-wide sm:block ${account.textColor}`}>{account.status}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-blue-50 opacity-70 blur-3xl transition-transform duration-500 group-hover:scale-125" />
          </article>

          <article className="group relative overflow-hidden rounded-[26px] border border-[#13213D] bg-[#060E1F] p-6 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_65px_-30px_rgba(6,14,31,0.65)] sm:p-8">
            <div className="relative z-10">
              <FeatureIcon className="bg-white/10 text-[#71AEFF]"><Database size={19} strokeWidth={2.2} /></FeatureIcon>
              <h3 className="mt-7 font-[family-name:var(--font-plus-jakarta)] text-2xl font-extrabold tracking-[-0.055em] text-white sm:text-[28px]">Real-Time Data Pipeline Sync</h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">Bring every signal into one clean source of truth. Nexora keeps your revenue model current as your stack changes.</p>
            </div>
            <div className="relative z-10 mt-8 rounded-2xl border border-white/10 bg-white/[0.06] p-4 sm:p-5">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-100/60">Connected sources</p>
                <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Syncing</span>
              </div>
              <div className="relative mt-6 grid grid-cols-2 gap-3">
                {integrations.map((integration) => (
                  <div key={integration.name} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.07] px-3 py-2.5 transition-colors group-hover:border-white/20">
                    <span className={`flex h-6 w-6 items-center justify-center rounded-md text-xs font-black ${integration.className}`}>{integration.mark}</span>
                    <span className="text-[11px] font-semibold text-slate-200">{integration.name}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-[10px] font-semibold text-blue-100/60"><Zap size={12} className="text-[#71AEFF]" /> 4,812 events processed this hour</div>
            </div>
            <div className="pointer-events-none absolute -bottom-20 -right-12 h-56 w-56 rounded-full bg-[#0066FF] opacity-20 blur-3xl transition-transform duration-500 group-hover:scale-125" />
          </article>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StandardFeatureCard
            icon={<Workflow size={19} strokeWidth={2.2} />}
            title="Automated Growth Playbooks"
            description="Turn proven motions into workflows that launch at exactly the right customer moment."
          />
          <StandardFeatureCard
            icon={<ShieldCheck size={19} strokeWidth={2.2} />}
            iconClassName="bg-emerald-50 text-emerald-600"
            title="Enterprise-Grade Security"
            description="SOC2 Type II and GDPR-ready controls protect every customer signal without slowing your team down."
          />
          <StandardFeatureCard
            icon={<Gauge size={19} strokeWidth={2.2} />}
            iconClassName="bg-amber-50 text-amber-600"
            title="Sub-50ms Query Performance"
            description="Explore millions of events with instant answers built for high-velocity revenue decisions."
          >
            <div className="mt-5 flex items-center gap-2 text-[11px] font-bold text-emerald-600"><BarChart3 size={14} /> 48ms median response</div>
          </StandardFeatureCard>
          <StandardFeatureCard
            icon={<Users size={19} strokeWidth={2.2} />}
            iconClassName="bg-sky-50 text-sky-600"
            title="Role-Based Team Permissions"
            description="Give every team the right level of visibility with simple, auditable workspace controls."
          >
            <div className="mt-5 flex items-center gap-1.5 text-[11px] font-bold text-slate-400"><Lock size={13} /> Granular access controls</div>
          </StandardFeatureCard>
        </div>

        <div className="mt-12 flex justify-center">
          <a href="#pricing" className="group inline-flex items-center gap-2 text-sm font-bold text-[#0066FF]">
            See how Nexora fits your stack
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 transition-transform group-hover:translate-x-1"><ArrowUpRight size={14} /></span>
          </a>
        </div>
      </div>
    </section>
  );
}
