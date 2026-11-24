"use client";

import { ArrowRight, CheckCircle2, Play, ShieldCheck, X } from "lucide-react";
import { type FormEvent, useEffect, useRef, useState } from "react";

export type TrialModalProps = {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string;
  mode?: "trial" | "signin";
  onModeChange?: (mode: "trial" | "signin") => void;
  onOpenDemo?: () => void;
};

type FormValues = { fullName: string; workEmail: string; companyName: string };
type FormErrors = Partial<Record<keyof FormValues | "password", string>>;
const initialValues: FormValues = { fullName: "", workEmail: "", companyName: "" };
const inputBase = "mt-2 h-12 w-full rounded-xl border px-4 text-sm font-medium text-[#060E1F] outline-none transition-colors placeholder:text-slate-600 focus:border-[#0066FF] focus:ring-4 focus:ring-blue-50";

export default function TrialModal({
  isOpen,
  onClose,
  selectedPlan = "Nexora trial",
  mode = "trial",
  onModeChange,
  onOpenDemo,
}: TrialModalProps) {
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const isDemo = selectedPlan === "Live demo";
  const isSignIn = mode === "signin";

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
    dialogRef.current?.querySelector<HTMLElement>("[data-autofocus]")?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      previousFocus?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const updateField = (field: keyof FormValues, value: string) => {
    setFormValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: FormErrors = {};
    if (isSignIn) {
      if (!formValues.workEmail.trim()) nextErrors.workEmail = "Enter your email.";
      else if (!/^\S+@\S+\.\S+$/.test(formValues.workEmail)) nextErrors.workEmail = "Enter a valid email address.";
      if (!password) nextErrors.password = "Enter your password.";
    } else {
      if (!formValues.fullName.trim()) nextErrors.fullName = "Enter your full name.";
      if (!formValues.workEmail.trim()) nextErrors.workEmail = "Enter your work email.";
      else if (!/^\S+@\S+\.\S+$/.test(formValues.workEmail)) nextErrors.workEmail = "Enter a valid work email.";
      if (!formValues.companyName.trim()) nextErrors.companyName = "Enter your company name.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setSubmitted(true);
  };

  const handleClose = () => {
    setFormValues(initialValues);
    setPassword("");
    setErrors({});
    setSubmitted(false);
    onClose();
  };

  const fieldClass = (field: keyof FormErrors) => `${inputBase} ${errors[field] ? "border-rose-300" : "border-slate-200"}`;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-[#060E1F]/65 p-4 backdrop-blur-sm sm:p-6" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) handleClose(); }}>
      <div ref={dialogRef} className="relative w-full max-w-lg overflow-hidden rounded-[28px] bg-white shadow-[0_35px_100px_-28px_rgba(6,14,31,0.65)]" role="dialog" aria-modal="true" aria-labelledby="trial-modal-title">
        <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-blue-100/70 blur-3xl" />
        <button type="button" onClick={handleClose} className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-600 transition-colors hover:bg-slate-100 hover:text-[#060E1F]" aria-label="Close dialog"><X size={17} /></button>
        <div className="relative p-6 sm:p-9">
          {submitted ? (
            <div className="py-6 text-center sm:py-8">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"><CheckCircle2 size={32} /></div>
              <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-600">{isSignIn ? "Signed in" : "You’re all set"}</p>
              <h2 id="trial-modal-title" className="mt-3 font-[family-name:var(--font-plus-jakarta)] text-2xl font-extrabold tracking-[-0.05em] text-[#060E1F]">{isSignIn ? "Welcome back to Nexora" : "Success! Your 14-day Nexora workspace is ready"}</h2>
              <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-slate-600">{isSignIn ? "Your workspace sign-in details have been accepted." : `We’ll send the next steps to ${formValues.workEmail}. Your ${selectedPlan.toLowerCase()} is ready to explore.`}</p>
              {!isSignIn && onOpenDemo ? <button type="button" onClick={() => { handleClose(); onOpenDemo(); }} className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#0066FF] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#0059df]"><Play size={14} fill="currentColor" /> Explore Interactive Demo</button> : null}
              <button type="button" onClick={handleClose} className="mt-3 rounded-full border border-slate-200 px-6 py-3 text-sm font-bold text-[#060E1F] transition-colors hover:bg-slate-50">{isSignIn ? "Continue" : "Close"}</button>
            </div>
          ) : (
            <>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#0066FF]"><ArrowRight size={20} /></div>
              <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-[#0066FF]">{isSignIn ? "Your Nexora workspace" : isDemo ? "See Nexora in action" : "Start your free trial"}</p>
              <h2 id="trial-modal-title" className="mt-3 max-w-md font-[family-name:var(--font-plus-jakarta)] text-3xl font-extrabold leading-[1.05] tracking-[-0.06em] text-[#060E1F]">{isSignIn ? "Welcome back to Nexora" : isDemo ? "See the revenue signals your team is missing." : "See your next revenue move clearly."}</h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">{isSignIn ? "Sign in to pick up where your team left off." : isDemo ? "Tell us where to send your live walkthrough details. No credit card required." : "Create your workspace in under five minutes. No credit card required."}</p>
              {!isSignIn && <div className="mt-6 flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-bold text-[#0066FF]"><span className="h-1.5 w-1.5 rounded-full bg-[#0066FF]" />{selectedPlan}</div>}
              <form className="mt-7 space-y-4" onSubmit={handleSubmit} noValidate>
                {!isSignIn && <label className="block text-xs font-bold text-slate-600">Full name<input value={formValues.fullName} onChange={(event) => updateField("fullName", event.target.value)} type="text" autoComplete="name" className={fieldClass("fullName")} placeholder="Alex Morgan" aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName ? "full-name-error" : undefined} />{errors.fullName && <span id="full-name-error" className="mt-1.5 block text-xs font-medium text-rose-500">{errors.fullName}</span>}</label>}
                <label className="block text-xs font-bold text-slate-600">{isSignIn ? "Email" : "Work email"}<input data-autofocus value={formValues.workEmail} onChange={(event) => updateField("workEmail", event.target.value)} type="email" autoComplete="email" className={fieldClass("workEmail")} placeholder="alex@company.com" aria-invalid={Boolean(errors.workEmail)} aria-describedby={errors.workEmail ? "work-email-error" : undefined} />{errors.workEmail && <span id="work-email-error" className="mt-1.5 block text-xs font-medium text-rose-500">{errors.workEmail}</span>}</label>
                {isSignIn ? <label className="block text-xs font-bold text-slate-600">Password<input value={password} onChange={(event) => { setPassword(event.target.value); setErrors((current) => ({ ...current, password: undefined })); }} type="password" autoComplete="current-password" className={fieldClass("password")} placeholder="Enter your password" aria-invalid={Boolean(errors.password)} aria-describedby={errors.password ? "password-error" : undefined} />{errors.password && <span id="password-error" className="mt-1.5 block text-xs font-medium text-rose-500">{errors.password}</span>}</label> : <label className="block text-xs font-bold text-slate-600">Company name<input value={formValues.companyName} onChange={(event) => updateField("companyName", event.target.value)} type="text" autoComplete="organization" className={fieldClass("companyName")} placeholder="Acme Inc." aria-invalid={Boolean(errors.companyName)} aria-describedby={errors.companyName ? "company-name-error" : undefined} />{errors.companyName && <span id="company-name-error" className="mt-1.5 block text-xs font-medium text-rose-500">{errors.companyName}</span>}</label>}
                <button type="submit" className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#0066FF] text-sm font-bold text-white shadow-[0_12px_25px_-12px_rgba(0,102,255,0.8)] transition-all hover:-translate-y-0.5 hover:bg-[#0059df]">{isSignIn ? "Sign in" : isDemo ? "Send me the live demo" : "Create my workspace"}<ArrowRight size={16} /></button>
              </form>
              {onModeChange && <p className="mt-5 text-center text-xs font-medium text-slate-600">{isSignIn ? "New to Nexora?" : "Already have a Nexora account?"} <button type="button" onClick={() => { setErrors({}); setSubmitted(false); onModeChange(isSignIn ? "trial" : "signin"); }} className="font-bold text-[#0066FF] hover:text-[#0059df]">{isSignIn ? "Start Free Trial" : "Sign In"}</button></p>}
              {!isSignIn && <p className="mt-5 flex items-center justify-center gap-1.5 text-center text-[11px] font-semibold text-slate-600"><ShieldCheck size={13} className="text-emerald-500" />Your information is encrypted and never sold.</p>}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
