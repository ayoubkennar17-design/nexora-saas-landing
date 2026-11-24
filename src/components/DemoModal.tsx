"use client";

import { ArrowDownRight, ArrowRight, Check, ChevronRight, CircleDollarSign, TrendingUp, Workflow, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type DemoModalProps = { isOpen: boolean; onClose: () => void };

const tabs = ["Revenue forecast", "Churn risk radar", "Growth playbook"] as const;
type DemoTab = (typeof tabs)[number];

const forecasts = [42, 50, 47, 58, 55, 64, 68, 65, 76, 81, 78, 89, 94];
const churnRows = [
  { company: "Vertex Systems", owner: "Jordan Lee", risk: "High", score: 92, color: "bg-rose-500", text: "text-rose-600" },
  { company: "Northstar Health", owner: "Maya Chen", risk: "Elevated", score: 68, color: "bg-amber-400", text: "text-amber-600" },
  { company: "Axiom Retail", owner: "Sam Rivera", risk: "Moderate", score: 44, color: "bg-yellow-400", text: "text-yellow-700" },
  { company: "Pioneer Cloud", owner: "Alex Kim", risk: "Healthy", score: 18, color: "bg-emerald-500", text: "text-emerald-600" },
];

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [activeTab, setActiveTab] = useState<DemoTab>(tabs[0]);
  const dialogRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>('button:not([disabled]), input:not([disabled]), [href], [tabindex]:not([tabindex="-1"])');
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    dialogRef.current?.querySelector<HTMLElement>("button")?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      previousFocus?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center overflow-y-auto bg-[#060E1F]/70 p-3 backdrop-blur-sm sm:p-6" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section ref={dialogRef} className="relative w-full max-w-5xl overflow-hidden rounded-[26px] bg-white shadow-[0_35px_100px_-28px_rgba(6,14,31,0.65)] sm:rounded-[30px]" role="dialog" aria-modal="true" aria-labelledby="demo-title">
        <header className="flex items-center justify-between gap-4 border-b border-slate-100 px-5 py-4 sm:px-7">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#060E1F] text-[#71AEFF]"><TrendingUp size={17} /></div>
            <div><p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#0066FF]">Nexora product tour</p><h2 id="demo-title" className="mt-0.5 font-[family-name:var(--font-plus-jakarta)] text-base font-extrabold tracking-tight text-[#060E1F] sm:text-lg">Explore the revenue command center</h2></div>
          </div>
          <button type="button" onClick={onClose} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-500 transition-colors hover:bg-slate-100 hover:text-[#060E1F]" aria-label="Close interactive demo"><X size={17} /></button>
        </header>

        <div className="grid min-h-[480px] lg:grid-cols-[250px_1fr]">
          <nav className="border-b border-slate-100 bg-[#F8FAFD] p-3 lg:border-b-0 lg:border-r lg:p-5" role="tablist" aria-label="Demo walkthrough tabs">
            <p className="hidden px-3 pb-3 pt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400 lg:block">Walkthrough</p>
            <div className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  id={`demo-tab-${index}`}
                  role="tab"
                  aria-selected={activeTab === tab}
                  aria-controls="demo-panel"
                  tabIndex={activeTab === tab ? 0 : -1}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  onKeyDown={(event) => {
                    const currentIndex = tabs.indexOf(activeTab);
                    const nextIndex = event.key === "ArrowRight" ? (currentIndex + 1) % tabs.length
                      : event.key === "ArrowLeft" ? (currentIndex + tabs.length - 1) % tabs.length
                        : event.key === "Home" ? 0
                          : event.key === "End" ? tabs.length - 1
                            : currentIndex;
                    if (nextIndex !== currentIndex) {
                      event.preventDefault();
                      setActiveTab(tabs[nextIndex]);
                      document.getElementById(`demo-tab-${nextIndex}`)?.focus();
                    }
                  }}
                  className={`flex min-w-max items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-xs font-bold transition-colors lg:w-full ${activeTab === tab ? "bg-white text-[#0066FF] shadow-sm ring-1 ring-slate-200/70" : "text-slate-500 hover:bg-white/70 hover:text-[#060E1F]"}`}
                >
                  <span className={`flex h-6 w-6 items-center justify-center rounded-lg text-[10px] ${activeTab === tab ? "bg-blue-50 text-[#0066FF]" : "bg-slate-200/70 text-slate-500"}`}>0{index + 1}</span>{tab}
                </button>
              ))}
            </div>
            <div className="mt-6 hidden rounded-2xl bg-[#060E1F] p-4 text-white lg:block">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-200/60">Live workspace</p>
              <p className="mt-2 text-xs font-semibold">Northstar Revenue Team</p>
              <div className="mt-4 flex items-center gap-2 text-[10px] font-semibold text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Data synced just now</div>
            </div>
          </nav>

          <div id="demo-panel" role="tabpanel" aria-labelledby={`demo-tab-${tabs.indexOf(activeTab)}`} className="min-w-0 p-4 sm:p-7">
            {activeTab === "Revenue forecast" && (
              <div>
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start"><div><p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">AI revenue forecasting</p><h3 className="mt-1 font-[family-name:var(--font-plus-jakarta)] text-xl font-extrabold tracking-[-0.05em] text-[#060E1F] sm:text-2xl">A clearer path to your number</h3><p className="mt-2 max-w-lg text-xs leading-5 text-slate-500">Forecast confidence recalibrates as pipeline quality, renewal signals, and expansion intent change.</p></div><span className="flex w-fit items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-bold text-emerald-600"><Check size={12} /> 94% confidence</span></div>
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3"><div className="rounded-2xl border border-slate-200 p-4"><p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">Projected ARR</p><p className="mt-2 font-[family-name:var(--font-plus-jakarta)] text-xl font-extrabold tracking-tight text-[#060E1F]">$2.84M</p><p className="mt-1 text-[10px] font-bold text-emerald-600">+18.6% YoY</p></div><div className="rounded-2xl border border-slate-200 p-4"><p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">Forecast gap</p><p className="mt-2 font-[family-name:var(--font-plus-jakarta)] text-xl font-extrabold tracking-tight text-[#060E1F]">$126k</p><p className="mt-1 text-[10px] font-bold text-slate-400">8 deals in motion</p></div><div className="col-span-2 flex items-center gap-3 rounded-2xl bg-blue-50 p-4 sm:col-span-1 sm:block"><CircleDollarSign size={18} className="shrink-0 text-[#0066FF]" /><p className="mt-2 text-[10px] font-bold uppercase tracking-wide text-slate-500">Likely close</p><p className="mt-1 text-sm font-extrabold text-[#060E1F]">$1.92M</p></div></div>
                <div className="mt-4 rounded-2xl border border-slate-200 p-4 sm:p-5"><div className="flex items-center justify-between"><div><p className="text-xs font-bold text-[#060E1F]">Quarterly revenue outlook</p><p className="mt-1 text-[10px] text-slate-400">Actuals and AI forecast</p></div><span className="text-[10px] font-bold text-[#0066FF]">Q1–Q4 2026</span></div><div className="mt-5 flex h-36 items-end gap-2 sm:gap-3">{forecasts.map((height, index) => <div className="flex h-full flex-1 items-end" key={index}><div className={`w-full rounded-t-md transition-all duration-500 ${index > 8 ? "bg-[#0066FF]" : "bg-blue-100"}`} style={{ height: `${height}%` }} title={`Forecast index ${height}`} /></div>)}</div><div className="mt-2 flex justify-between text-[9px] font-semibold text-slate-300"><span>JAN</span><span>MAR</span><span>MAY</span><span>JUL</span><span>SEP</span><span>NOV</span></div></div>
              </div>
            )}

            {activeTab === "Churn risk radar" && (
              <div>
                <div><p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">Customer health intelligence</p><h3 className="mt-1 font-[family-name:var(--font-plus-jakarta)] text-xl font-extrabold tracking-[-0.05em] text-[#060E1F] sm:text-2xl">Prioritize the accounts that need you</h3><p className="mt-2 max-w-lg text-xs leading-5 text-slate-500">Risk scores combine product engagement, support sentiment, billing patterns, and renewal timing.</p></div>
                <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200"><table className="w-full min-w-[520px] text-left"><thead className="bg-slate-50 text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400"><tr><th className="px-4 py-3">Account</th><th className="px-4 py-3">Owner</th><th className="px-4 py-3">Risk score</th><th className="px-4 py-3">Signal</th></tr></thead><tbody className="divide-y divide-slate-100">{churnRows.map((row) => <tr key={row.company}><td className="px-4 py-4 text-xs font-bold text-[#060E1F]">{row.company}</td><td className="px-4 py-4 text-xs text-slate-500">{row.owner}</td><td className="px-4 py-4"><div className="flex items-center gap-2"><div className="h-1.5 w-16 overflow-hidden rounded-full bg-slate-100"><div className={`h-full rounded-full ${row.color}`} style={{ width: `${row.score}%` }} /></div><span className="text-[10px] font-bold text-slate-600">{row.score}</span></div></td><td className={`px-4 py-4 text-[10px] font-bold ${row.text}`}>{row.risk}</td></tr>)}</tbody></table></div>
                <div className="mt-4 flex gap-3 rounded-2xl border border-amber-100 bg-amber-50/70 p-4"><ArrowDownRight size={16} className="mt-0.5 shrink-0 text-amber-600" /><p className="text-xs leading-5 text-amber-900"><span className="font-extrabold">Recommended next step:</span> schedule an executive check-in with Vertex Systems. Engagement dropped 28% over the past 14 days.</p></div>
              </div>
            )}

            {activeTab === "Growth playbook" && (
              <div>
                <div><p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">Automated growth playbooks</p><h3 className="mt-1 font-[family-name:var(--font-plus-jakarta)] text-xl font-extrabold tracking-[-0.05em] text-[#060E1F] sm:text-2xl">Make the right move at the right moment</h3><p className="mt-2 max-w-lg text-xs leading-5 text-slate-500">Build clear, human-approved workflows that turn product and revenue signals into coordinated action.</p></div>
                <div className="mt-7 rounded-2xl border border-slate-200 bg-[#F8FAFD] p-4 sm:p-6"><div className="flex items-center justify-between"><p className="text-xs font-extrabold text-[#060E1F]">At-risk account save flow</p><span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[9px] font-bold text-emerald-600">Active</span></div><div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center"><div className="rounded-xl border border-slate-200 bg-white p-3"><span className="text-[9px] font-bold uppercase tracking-wide text-[#0066FF]">Trigger</span><p className="mt-2 text-xs font-bold text-[#060E1F]">Health score drops below 60</p><p className="mt-1 text-[10px] text-slate-400">Risk model · continuous</p></div><ChevronRight size={16} className="hidden text-slate-300 sm:block" /><ArrowDownRight size={16} className="mx-auto text-slate-300 sm:hidden" /><div className="rounded-xl border border-slate-200 bg-white p-3"><span className="text-[9px] font-bold uppercase tracking-wide text-violet-600">Coordinate</span><p className="mt-2 text-xs font-bold text-[#060E1F]">Alert account owner</p><p className="mt-1 text-[10px] text-slate-400">Slack + CRM task</p></div><ChevronRight size={16} className="hidden text-slate-300 sm:block" /><ArrowDownRight size={16} className="mx-auto text-slate-300 sm:hidden" /><div className="rounded-xl border border-blue-100 bg-blue-50 p-3"><span className="text-[9px] font-bold uppercase tracking-wide text-[#0066FF]">Engage</span><p className="mt-2 text-xs font-bold text-[#060E1F]">Launch save playbook</p><p className="mt-1 text-[10px] text-slate-400">Personalized outreach</p></div></div><div className="mt-5 flex items-center gap-2 border-t border-slate-200 pt-4 text-[10px] font-semibold text-slate-500"><Workflow size={13} className="text-[#0066FF]" /> 26 accounts protected this quarter <span className="ml-auto font-bold text-emerald-600">+14% retained ARR</span></div></div>
              </div>
            )}

            <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4"><p className="text-[10px] font-medium text-slate-400">Sample workspace · illustrative data</p><button type="button" onClick={onClose} className="inline-flex items-center gap-1 text-xs font-bold text-[#0066FF] hover:text-[#0059df]">Finish tour <ArrowRight size={14} /></button></div>
          </div>
        </div>
      </section>
    </div>
  );
}
