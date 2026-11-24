import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Nexora helped us find $420k in expansion revenue hiding inside accounts we thought were already fully grown. Our team now walks into every QBR with a point of view, not a spreadsheet.",
    metric: "+31% net revenue retention in 2 quarters",
    name: "Sarah Jenkins",
    role: "VP of Growth at Stratos",
    initials: "SJ",
    avatar: "from-blue-400 to-[#0066FF]",
  },
  {
    quote: "We went from three disconnected reports to one operating rhythm. The churn signals are early enough that our CSMs can actually do something about them, and our forecast meetings are half the length.",
    metric: "18 hours saved per week across RevOps",
    name: "Marcus Vance",
    role: "Head of RevOps at CloudScale",
    initials: "MV",
    avatar: "from-slate-500 to-[#060E1F]",
  },
  {
    quote: "The speed to value was the surprise. We connected our stack on Monday, and by Friday the model had already surfaced a retention pattern we had been debating for months.",
    metric: "14% reduction in preventable churn",
    name: "Elena Rostova",
    role: "Co-Founder at MetricCore",
    initials: "ER",
    avatar: "from-cyan-400 to-violet-500",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0066FF]">Proof in the numbers</p>
          <h2 className="mt-4 font-[family-name:var(--font-plus-jakarta)] text-3xl font-extrabold leading-[1.08] tracking-[-0.06em] text-[#060E1F] sm:text-4xl lg:text-[46px]">Loved by Revenue &amp; Product Leaders</h2>
          <p className="mt-5 text-base leading-7 text-slate-500 sm:text-lg">The teams moving fastest use Nexora to turn customer intelligence into their next confident decision.</p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="group flex flex-col rounded-[25px] border border-slate-200/80 bg-[#F8FAFD] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_22px_55px_-28px_rgba(15,23,42,0.35)] sm:p-7">
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5 text-amber-400" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, index) => <Star key={index} size={14} fill="currentColor" strokeWidth={1.5} />)}
                </div>
                <Quote size={25} className="text-blue-100 transition-colors group-hover:text-blue-200" fill="currentColor" />
              </div>
              <p className="mt-7 flex-1 text-[15px] leading-7 text-slate-600">“{testimonial.quote}”</p>
              <div className="mt-7 rounded-xl border border-slate-200/80 bg-white px-3.5 py-3 text-xs font-bold text-[#0066FF] shadow-[0_6px_18px_-15px_rgba(15,23,42,0.4)]">{testimonial.metric}</div>
              <div className="mt-7 flex items-center gap-3 border-t border-slate-200/80 pt-5">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.avatar} font-[family-name:var(--font-plus-jakarta)] text-[11px] font-extrabold text-white ring-4 ring-white`} aria-hidden="true">{testimonial.initials}</div>
                <div>
                  <p className="text-sm font-extrabold text-[#060E1F]">{testimonial.name}</p>
                  <p className="mt-0.5 text-xs font-medium text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
