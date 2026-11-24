"use client";

import { ArrowRight, Play, Sparkles } from "lucide-react";

type CTASectionProps = {
  onOpenModal: (selectedPlan?: string) => void;
  onOpenDemo: () => void;
};

export default function CTASection({ onOpenModal, onOpenDemo }: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#060E1F] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="pointer-events-none absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#0066FF] opacity-20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-[#0EA5E9] opacity-10 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#0066FF]/60 to-transparent" />
      <div className="relative mx-auto max-w-4xl text-center">
        <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-blue-300/20 bg-blue-400/10 text-[#71AEFF]"><Sparkles size={19} /></span>
        <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.2em] text-[#71AEFF]">Your next growth lever is already in the data</p>
        <h2 className="mx-auto mt-4 max-w-3xl font-[family-name:var(--font-plus-jakarta)] text-3xl font-extrabold leading-[1.06] tracking-[-0.06em] text-white sm:text-4xl lg:text-[52px]">Ready to Turn Data Into Your Competitive Advantage?</h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">Join the revenue teams using Nexora to spot risk sooner, grow accounts smarter, and replace guesswork with momentum.</p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#start-trial"
            onClick={(event) => {
              event.preventDefault();
              onOpenModal("Nexora trial");
            }}
            className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-[#0066FF] px-7 text-sm font-bold text-white shadow-[0_16px_32px_-12px_rgba(0,102,255,0.8)] transition-all hover:-translate-y-0.5 hover:bg-[#1675ff] sm:w-auto"
          >
            Start 14-Day Free Trial <ArrowRight size={16} />
          </a>
          <button
            type="button"
            onClick={onOpenDemo}
            className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 sm:w-auto"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[#71AEFF]"><Play size={11} fill="currentColor" className="ml-0.5" /></span>
            Watch Live Demo
          </button>
        </div>
        <p className="mt-5 text-[11px] font-semibold tracking-wide text-slate-400">No credit card required <span className="mx-2 text-slate-600">•</span> Setup in 5 minutes <span className="mx-2 text-slate-600">•</span> SOC2 Type II Certified</p>
      </div>
    </section>
  );
}
