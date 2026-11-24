"use client";

import { Check, ChevronDown, Sparkles, Zap } from "lucide-react";
import { useState } from "react";

type BillingCycle = "monthly" | "annual";

export type PricingProps = {
  onOpenModal: (selectedPlan?: string) => void;
};

const plans = [
  {
    name: "Starter",
    eyebrow: "For early-stage startups",
    description: "The essential revenue signal layer for teams building their first repeatable growth motion.",
    monthlyPrice: "$29",
    annualPrice: "$23",
    details: ["Up to 5,000 tracked users", "Core revenue analytics", "Email support"],
    cta: "Start free trial",
    featured: false,
  },
  {
    name: "Growth",
    eyebrow: "For scaling teams",
    description: "Everything you need to turn customer intelligence into a dependable retention and expansion engine.",
    monthlyPrice: "$79",
    annualPrice: "$63",
    details: ["Up to 50,000 tracked users", "AI churn prediction", "Automated growth playbooks", "Slack & CRM sync"],
    cta: "Start free trial",
    featured: true,
  },
  {
    name: "Enterprise",
    eyebrow: "For large organizations",
    description: "Flexible intelligence infrastructure for complex data environments, global teams, and high-volume growth.",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    details: ["Unlimited volume", "Dedicated AI model tuning", "99.99% SLA", "Dedicated solutions architect"],
    cta: "Talk to an expert",
    featured: false,
  },
];

export default function Pricing({ onOpenModal }: PricingProps) {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("annual");

  return (
    <section id="pricing" className="bg-[#F8FAFD] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-7 text-center lg:flex-row lg:items-end lg:text-left">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0066FF]">Simple, transparent pricing</p>
            <h2 className="mt-4 font-[family-name:var(--font-plus-jakarta)] text-3xl font-extrabold leading-[1.08] tracking-[-0.06em] text-[#060E1F] sm:text-4xl lg:text-[46px]">
              Start with clarity. Scale with confidence.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Put every revenue signal to work without adding another layer of complexity to your stack.
            </p>
          </div>

          <div className="flex items-center rounded-full border border-slate-200 bg-white p-1.5 shadow-[0_8px_25px_-18px_rgba(15,23,42,0.35)]" role="group" aria-label="Billing cycle">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              aria-pressed={billingCycle === "monthly"}
              className={`rounded-full px-4 py-2.5 text-xs font-bold transition-all ${billingCycle === "monthly" ? "bg-[#060E1F] text-white shadow-sm" : "text-slate-600 hover:text-[#060E1F]"}`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("annual")}
              aria-pressed={billingCycle === "annual"}
              className={`rounded-full px-4 py-2.5 text-xs font-bold transition-all ${billingCycle === "annual" ? "bg-[#0066FF] text-white shadow-sm" : "text-slate-600 hover:text-[#060E1F]"}`}
            >
              Annual <span className="hidden sm:inline">(Save 20%)</span>
              <span className="ml-1.5 rounded-full bg-white/20 px-1.5 py-0.5 text-[10px] sm:hidden">-20%</span>
            </button>
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => {
            const price = billingCycle === "annual" ? plan.annualPrice : plan.monthlyPrice;
            const isCustom = price === "Custom";

            return (
              <article
                key={plan.name}
                className={`relative flex flex-col rounded-[26px] border bg-white p-6 transition-all duration-300 hover:-translate-y-1 sm:p-8 ${plan.featured ? "border-2 border-[#0066FF] shadow-[0_25px_65px_-30px_rgba(0,102,255,0.45)]" : "border-slate-200/80 hover:border-blue-200 hover:shadow-[0_22px_55px_-28px_rgba(15,23,42,0.35)]"}`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-[#0066FF] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white shadow-[0_8px_18px_-8px_rgba(0,102,255,0.8)]">
                    <Sparkles size={12} fill="currentColor" /> Most Popular
                  </div>
                )}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0066FF]">{plan.eyebrow}</p>
                    <h3 className="mt-3 font-[family-name:var(--font-plus-jakarta)] text-2xl font-extrabold tracking-[-0.05em] text-[#060E1F]">{plan.name}</h3>
                  </div>
                  {plan.featured && <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-[#0066FF]"><Zap size={17} fill="currentColor" /></span>}
                </div>
                <p className="mt-4 min-h-[72px] text-sm leading-6 text-slate-600">{plan.description}</p>
                <div className="mt-6 flex items-end gap-2 border-t border-slate-100 pt-6">
                  <span className="font-[family-name:var(--font-plus-jakarta)] text-4xl font-extrabold tracking-[-0.07em] text-[#060E1F]">{price}</span>
                  {!isCustom && <span className="mb-1 text-xs font-semibold text-slate-600">/mo</span>}
                </div>
                <p className="mt-1 h-5 text-[11px] font-medium text-slate-600">
                  {isCustom ? "Tailored to your operating model" : billingCycle === "annual" ? "Billed annually" : "Billed monthly"}
                </p>
                <button
                  type="button"
                  onClick={() => onOpenModal(plan.name)}
                  className={`mt-7 flex h-12 w-full items-center justify-center rounded-full text-sm font-bold transition-all ${plan.featured ? "bg-[#0066FF] text-white shadow-[0_12px_25px_-12px_rgba(0,102,255,0.8)] hover:bg-[#0059df]" : "border border-slate-200 bg-white text-[#060E1F] hover:border-slate-300 hover:bg-slate-50"}`}
                >
                  {plan.cta}
                </button>
                <div className="mt-8 border-t border-slate-100 pt-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-600">Everything included</p>
                  <ul className="mt-4 space-y-3">
                    {plan.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2.5 text-sm font-medium text-slate-600">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"><Check size={11} strokeWidth={3} /></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-8 flex items-center justify-center gap-1.5 text-center text-xs font-semibold text-slate-600"><ChevronDown size={14} className="text-[#0066FF]" /> All plans include a 14-day free trial and no credit card required.</p>
      </div>
    </section>
  );
}
