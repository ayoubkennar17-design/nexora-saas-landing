"use client";

import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  Play,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

type RangeKey = "7D" | "30D" | "90D";

type HeroProps = {
  onOpenModal: (selectedPlan?: string) => void;
  onOpenDemo: () => void;
};

const dashboardData: Record<
  RangeKey,
  {
    mrr: string;
    mrrChange: string;
    retention: string;
    retentionChange: string;
    accuracy: string;
    accuracyChange: string;
    chartLabel: string;
    bars: number[];
  }
> = {
  "7D": {
    mrr: "$148,920",
    mrrChange: "+8.6%",
    retention: "108.4%",
    retentionChange: "+3.2%",
    accuracy: "98.8%",
    accuracyChange: "+1.4%",
    chartLabel: "Last 7 days",
    bars: [42, 58, 51, 68, 62, 76, 71, 84, 78, 92, 86, 100],
  },
  "30D": {
    mrr: "$148,920",
    mrrChange: "+24.8%",
    retention: "+24.8%",
    retentionChange: "+5.8%",
    accuracy: "99.4%",
    accuracyChange: "+2.1%",
    chartLabel: "Last 30 days",
    bars: [34, 42, 38, 56, 47, 63, 58, 72, 67, 81, 76, 94],
  },
  "90D": {
    mrr: "$148,920",
    mrrChange: "+41.3%",
    retention: "118.2%",
    retentionChange: "+8.7%",
    accuracy: "99.7%",
    accuracyChange: "+3.4%",
    chartLabel: "Last 90 days",
    bars: [28, 36, 32, 48, 43, 54, 61, 58, 73, 78, 87, 100],
  },
};

const insights = [
  { label: "Expansion revenue", value: "$32.4k", change: "+18.2%", color: "bg-[#0066FF]" },
  { label: "At-risk accounts", value: "12", change: "-24.0%", color: "bg-[#F59E0B]" },
  { label: "Pipeline coverage", value: "4.8x", change: "+0.6x", color: "bg-[#0EA5E9]" },
];

function MetricCard({
  label,
  value,
  change,
  icon,
  iconClassName,
}: {
  label: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  iconClassName: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_8px_30px_-20px_rgba(15,23,42,0.3)] sm:p-5">
      <div className="mb-4 flex items-center justify-between gap-2">
        <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-400">{label}</span>
        <span className={`flex h-7 w-7 items-center justify-center rounded-lg ${iconClassName}`}>{icon}</span>
      </div>
      <div className="flex items-end justify-between gap-2">
        <span className="font-[family-name:var(--font-plus-jakarta)] text-[21px] font-extrabold tracking-[-0.04em] text-[#060E1F] sm:text-[24px]">
          {value}
        </span>
        <span className="mb-0.5 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">{change}</span>
      </div>
    </div>
  );
}

export default function Hero({ onOpenModal, onOpenDemo }: HeroProps) {
  const [range, setRange] = useState<RangeKey>("30D");
  const data = dashboardData[range];

  return (
    <main id="top" className="overflow-hidden bg-white">
      <section className="relative px-5 pb-20 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pb-28 lg:pt-24">
        <div className="pointer-events-none absolute left-1/2 top-[-340px] h-[640px] w-[860px] -translate-x-1/2 rounded-full bg-[#E8F1FF] opacity-70 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <a
              href="#features"
              className="group inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-3 py-1.5 text-[11px] font-bold text-[#0066FF] transition-colors hover:border-blue-200 hover:bg-blue-50 sm:text-xs"
            >
              <Sparkles size={13} fill="currentColor" />
              New: Nexora AI Forecasting Engine 2.0
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
            </a>

            <h1 className="mx-auto mt-7 max-w-4xl font-[family-name:var(--font-plus-jakarta)] text-[clamp(2.75rem,7vw,5.75rem)] font-extrabold leading-[0.98] tracking-[-0.065em] text-[#060E1F]">
              Turn Raw Customer Data Into <span className="text-[#0066FF]">Predictable Revenue</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
              Nexora gives B2B teams one intelligent workspace to automate churn prediction, surface pipeline risk, and turn customer signals into confident revenue decisions—in minutes, not months.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                id="start-trial"
                href="#pricing"
                onClick={(event) => {
                  event.preventDefault();
                  onOpenModal("Nexora trial");
                }}
                className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-[#0066FF] px-7 text-sm font-bold text-white shadow-[0_16px_32px_-14px_rgba(0,102,255,0.8)] transition-all hover:-translate-y-0.5 hover:bg-[#0059df] sm:w-auto"
              >
                Start 14-Day Free Trial
                <ArrowRight size={16} />
              </a>
              <button
                type="button"
                onClick={onOpenDemo}
                className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 text-sm font-bold text-[#060E1F] transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 sm:w-auto"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E8F1FF] text-[#0066FF]">
                  <Play size={11} fill="currentColor" className="ml-0.5" />
                </span>
                Watch Live Demo
              </button>
            </div>
            <p className="mt-5 text-[11px] font-semibold tracking-wide text-slate-400 sm:text-xs">
              No credit card required <span className="mx-2 text-slate-300">•</span> SOC2 Type II Certified <span className="mx-2 text-slate-300">•</span> Setup in 5 minutes
            </p>
          </div>

          <div className="relative mx-auto mt-16 max-w-6xl rounded-[25px] border border-slate-200/90 bg-[#F8FAFD] p-2 shadow-[0_30px_90px_-35px_rgba(15,23,42,0.35)] sm:mt-20 sm:rounded-[31px] sm:p-3">
            <div className="overflow-hidden rounded-[19px] border border-slate-200/80 bg-white sm:rounded-[24px]">
              <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3.5 sm:px-6 sm:py-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#060E1F] text-white">
                    <Sparkles size={14} />
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-plus-jakarta)] text-xs font-extrabold tracking-tight text-[#060E1F] sm:text-sm">Revenue Command Center</p>
                    <p className="mt-0.5 hidden text-[10px] font-medium text-slate-400 sm:block">Workspace / Executive overview</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="hidden items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1.5 text-[10px] font-bold text-emerald-600 sm:flex">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> All systems healthy
                  </div>
                  <div className="h-7 w-7 rounded-full bg-gradient-to-br from-blue-200 via-blue-500 to-[#060E1F] ring-2 ring-white" />
                </div>
              </div>

              <div className="grid gap-5 p-4 sm:p-6 lg:grid-cols-[1fr_280px] lg:gap-6">
                <div>
                  <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">Revenue overview</p>
                      <h2 className="mt-1 font-[family-name:var(--font-plus-jakarta)] text-lg font-extrabold tracking-[-0.04em] text-[#060E1F] sm:text-xl">Growth is trending up</h2>
                    </div>
                    <div className="flex w-fit items-center rounded-lg border border-slate-200 bg-slate-50 p-1">
                      {(["7D", "30D", "90D"] as RangeKey[]).map((option) => (
                        <button
                          type="button"
                          key={option}
                          onClick={() => setRange(option)}
                          className={`rounded-md px-3 py-1.5 text-[10px] font-bold transition-all sm:px-3.5 ${range === option ? "bg-white text-[#0066FF] shadow-sm" : "text-slate-400 hover:text-slate-700"}`}
                          aria-pressed={range === option}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <MetricCard
                      label="Monthly recurring revenue"
                      value={data.mrr}
                      change={data.mrrChange}
                      icon={<CircleDollarSign size={14} className="text-[#0066FF]" />}
                      iconClassName="bg-blue-50"
                    />
                    <MetricCard
                      label="Net revenue retention"
                      value={data.retention}
                      change={data.retentionChange}
                      icon={<TrendingUp size={14} className="text-emerald-600" />}
                      iconClassName="bg-emerald-50"
                    />
                    <MetricCard
                      label="Forecast accuracy"
                      value={data.accuracy}
                      change={data.accuracyChange}
                      icon={<Sparkles size={14} className="text-[#0EA5E9]" />}
                      iconClassName="bg-sky-50"
                    />
                  </div>

                  <div className="mt-4 rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-400">Revenue momentum</p>
                        <p className="mt-1 text-xs font-medium text-slate-500">{data.chartLabel} <span className="mx-1.5 text-slate-300">•</span> <span className="font-bold text-emerald-600">+18.6% vs previous period</span></p>
                      </div>
                      <button type="button" onClick={() => onOpenModal("Revenue report demo")} className="hidden items-center gap-1 text-[10px] font-bold text-slate-400 sm:flex">
                        Export report <ArrowRight size={12} />
                      </button>
                    </div>
                    <div className="mt-6 flex h-36 items-end gap-1.5 sm:gap-2.5">
                      {data.bars.map((height, index) => (
                        <div key={`${range}-${index}`} className="group relative flex h-full flex-1 items-end">
                          <div className="absolute inset-x-0 bottom-0 h-full rounded-md bg-[linear-gradient(to_top,#F8FAFD_1px,transparent_1px)] [background-size:100%_25%]" />
                          <div
                            className={`relative z-10 w-full rounded-t-md transition-all duration-500 ${index === data.bars.length - 1 ? "bg-[#0066FF]" : "bg-blue-100 group-hover:bg-blue-200"}`}
                            style={{ height: `${height}%` }}
                            title={`${height}% revenue index`}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="mt-2 flex justify-between text-[9px] font-semibold text-slate-300">
                      <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
                    </div>
                  </div>
                </div>

                <aside className="rounded-2xl bg-[#060E1F] p-5 text-white sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-200/60">AI signal feed</p>
                      <h3 className="mt-1 font-[family-name:var(--font-plus-jakarta)] text-lg font-extrabold tracking-[-0.04em]">What needs attention</h3>
                    </div>
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-[#5CA3FF]"><Sparkles size={14} /></span>
                  </div>
                  <div className="mt-7 space-y-5">
                    {insights.map((insight) => (
                      <div key={insight.label} className="flex items-center justify-between gap-3">
                        <div className="flex min-w-0 items-center gap-2.5">
                          <span className={`h-2 w-2 shrink-0 rounded-full ${insight.color}`} />
                          <span className="truncate text-xs font-medium text-slate-300">{insight.label}</span>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-white">{insight.value}</p>
                          <p className="text-[10px] font-semibold text-emerald-400">{insight.change}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-3.5">
                    <div className="flex items-start gap-2.5">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0066FF] text-white"><Check size={12} strokeWidth={3} /></div>
                      <p className="text-[11px] leading-5 text-slate-300">Nexora found <span className="font-bold text-white">3 expansion opportunities</span> worth $12.8k in your active accounts.</p>
                    </div>
                  </div>
                  <button type="button" onClick={() => onOpenModal("Revenue recommendations")} className="mt-5 flex w-full items-center justify-between border-t border-white/10 pt-4 text-left text-[11px] font-bold text-[#7DB8FF]">
                    View all recommendations <ArrowRight size={13} />
                  </button>
                </aside>
              </div>

              <div className="flex items-center gap-5 border-t border-slate-100 bg-slate-50/60 px-4 py-3 sm:px-6">
                <div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-400"><Clock3 size={12} /> Synced 2 min ago</div>
                <div className="hidden items-center gap-1.5 text-[10px] font-semibold text-slate-400 sm:flex"><Check size={12} className="text-emerald-500" /> 4 data sources connected</div>
                <button type="button" onClick={() => onOpenModal("Data connection demo")} className="ml-auto flex items-center gap-1 text-[10px] font-bold text-[#0066FF]">Manage data <ChevronDown size={12} /></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
