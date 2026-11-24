"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

type NavbarProps = {
  onOpenModal: (selectedPlan?: string, mode?: "trial" | "signin") => void;
};

function NexoraMark() {
  return (
    <span className="relative flex h-8 w-8 items-center justify-center" aria-hidden="true">
      <span className="absolute h-6 w-6 rotate-45 rounded-[7px] bg-[#0066FF]" />
      <span className="absolute h-3.5 w-3.5 rotate-45 rounded-[3px] bg-[#060E1F]" />
      <span className="absolute bottom-0.5 right-0.5 h-2 w-2 rounded-full bg-[#0EA5E9] ring-2 ring-white" />
    </span>
  );
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Nexora home">
          <NexoraMark />
          <span className="font-[family-name:var(--font-plus-jakarta)] text-[19px] font-extrabold tracking-[-0.04em] text-[#060E1F]">
            Nexora
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13px] font-semibold text-slate-600 transition-colors hover:text-[#0066FF]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={() => onOpenModal(undefined, "signin")}
            className="rounded-full px-4 py-2.5 text-[13px] font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-[#060E1F]"
          >
            Sign In
          </button>
          <a
            href="#start-trial"
            onClick={(event) => {
              event.preventDefault();
              onOpenModal("Nexora trial");
            }}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#0066FF] px-5 py-2.5 text-[13px] font-bold text-white shadow-[0_8px_20px_-8px_rgba(0,102,255,0.7)] transition-all hover:-translate-y-0.5 hover:bg-[#0059df]"
          >
            Start Free Trial
            <ArrowUpRight size={15} strokeWidth={2.4} />
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-[#060E1F] transition-colors hover:bg-slate-50 lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMenuOpen && (
        <div id="mobile-navigation" className="border-t border-slate-200/70 bg-white px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#0066FF]"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 flex gap-3 border-t border-slate-100 pt-4">
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  onOpenModal(undefined, "signin");
                }}
                className="flex-1 rounded-full border border-slate-200 px-4 py-3 text-center text-sm font-bold text-slate-700"
              >
                Sign In
              </button>
              <a
                href="#start-trial"
                onClick={(event) => {
                  event.preventDefault();
                  closeMenu();
                  onOpenModal("Nexora trial");
                }}
                className="flex-1 rounded-full bg-[#0066FF] px-4 py-3 text-center text-sm font-bold text-white"
              >
                Start Free Trial
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
