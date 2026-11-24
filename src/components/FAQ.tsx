"use client";

import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { useState } from "react";

const questions = [
  {
    question: "How does Nexora keep our customer data secure?",
    answer: "Nexora is built with enterprise-grade security from day one. Data is encrypted in transit and at rest, access is controlled by granular workspace permissions, and our platform is SOC2 Type II and GDPR ready. Enterprise teams can also add SSO, audit exports, and custom retention policies.",
  },
  {
    question: "How long does setup take?",
    answer: "Most teams connect their core stack in under five minutes and see their first useful signals within the first day. Nexora uses secure OAuth connections and handles the initial mapping automatically, so your team can start with the insights instead of a long implementation project.",
  },
  {
    question: "Can we cancel or change our plan at any time?",
    answer: "Yes. Monthly plans can be changed or canceled at any time from your workspace settings, with no long-term contract. Annual plans remain active through the paid term, and our team will help you adjust seats or volume as your business changes.",
  },
  {
    question: "Which tools and integrations does Nexora support?",
    answer: "Nexora connects with the systems revenue teams rely on most, including Salesforce, HubSpot, Stripe, Slack, product analytics, and support platforms. If your stack includes a warehouse or internal data source, our API and webhooks make it easy to bring those signals into the same model.",
  },
  {
    question: "What does custom enterprise onboarding include?",
    answer: "Enterprise customers get a dedicated solutions architect, a tailored data model, guided source mapping, security review support, and a rollout plan for every team that needs access. We can also tune the AI models to your segments, lifecycle definitions, and revenue workflows.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#F8FAFD] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#0066FF]"><MessageCircleQuestion size={20} /></div>
          <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.18em] text-[#0066FF]">Questions, answered</p>
          <h2 className="mt-4 font-[family-name:var(--font-plus-jakarta)] text-3xl font-extrabold leading-[1.08] tracking-[-0.06em] text-[#060E1F] sm:text-4xl lg:text-[46px]">Everything you need to know before you scale.</h2>
          <p className="mt-5 max-w-sm text-base leading-7 text-slate-600">Still evaluating? Our revenue team can walk through your stack, use case, and success criteria.</p>
          <a href="#pricing" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#0066FF] hover:text-[#0059df]">Talk to a revenue specialist <span aria-hidden="true">→</span></a>
        </div>

        <div className="divide-y divide-slate-200/80 rounded-[25px] border border-slate-200/80 bg-white px-5 sm:px-7">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left sm:py-6"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className={`font-[family-name:var(--font-plus-jakarta)] text-base font-extrabold tracking-[-0.025em] transition-colors sm:text-[17px] ${isOpen ? "text-[#0066FF]" : "text-[#060E1F]"}`}>{item.question}</span>
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all ${isOpen ? "bg-[#0066FF] text-white" : "bg-slate-50 text-slate-600"}`}><ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} /></span>
                </button>
                <div id={`faq-answer-${index}`} className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-6 pr-10 text-sm leading-6 text-slate-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
