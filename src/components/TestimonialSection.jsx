import { Quote, ArrowRight } from "lucide-react";
import { ctaLabel } from "../data/content";
import Testimonial1 from "./Assets/Testimonial1.jpeg";
import Testimonial2 from "./Assets/Testimonial2.jpeg";
import Testimonial3 from "./Assets/Testimonial3.jpeg";
import Testimonial4 from "./Assets/Testimonial4.jpeg";

const TESTIMONIALS = [
  {
    quote:
      "Thank you, Namita, for helping me restart my career after a long break, regain my financial independence, and build my own community. It all changed with just one call with you — and there was no looking back.",
    name: "Shalini Bora",
    image: Testimonial1,
  },
  {
    quote:
      "Namita Ma'am helped me find myself again — stronger, clearer and more confident. In just 10 months, I gained career clarity, got promoted, and most importantly, fell in love with myself again.",
    name: "Prapti Bhatt",
    image: Testimonial2,
  },
  {
    quote:
      "Namita's coaching transformed me from the inside out. I became more patient, self-aware and kinder to myself — and it changed my relationships, daily life and how I handle stress.",
    name: "Monalisa Satpathy",
    image: Testimonial3,
  },
  {
    quote:
      "Namita's weekly mindset sessions have transformed my thoughts, routines and outlook on life. I've grown not just physically through yoga, but mentally and emotionally as well.",
    name: "Parul Panwar",
    image: Testimonial4,
  },
];

function TestimonialCard({ item, delay }) {
  const initial = item.name.charAt(0);

  return (
    <div
      className="animate-rise flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center sm:p-9"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative -mt-20 mb-5 h-28 w-28 shrink-0 sm:-mt-24 sm:h-32 sm:w-32">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full rounded-full border-2 border-[#c9a15a] object-cover object-top"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-full border-2 border-[#c9a15a] bg-[#3a2650] font-serif text-2xl text-[#c9a15a]">
            {initial}
          </div>
        )}
      </div>

      <Quote className="mb-4 h-5 w-5 text-[#c9a15a]/70" fill="currentColor" strokeWidth={0} />

      <p className="mb-6 max-w-sm whitespace-pre-line font-sans text-[14px] leading-relaxed text-white/75">
        {item.quote}
      </p>

      <div className="mt-auto">
        <p className="font-serif text-[16px] text-white">{item.name}</p>
        <p className="font-sans text-[13px] text-[#c9a15a]">{item.role}</p>
      </div>
    </div>
  );
}

export default function TestimonialSection({ onReserve }) {
  return (
    <section className="bg-[#1a0f2e] px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="animate-rise mx-auto mb-16 max-w-xl text-center sm:mb-20">
          <p className="mb-3 font-sans text-[13px] tracking-wide text-[#c9a15a]">
            Real women. Real transformations.
          </p>
          <h2 className="font-serif text-[32px] leading-[1.15] text-white sm:text-[40px]">
            Their words, not ours.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-16 pt-16 sm:grid-cols-2 sm:gap-y-20">
          {TESTIMONIALS.map((item, i) => (
            <TestimonialCard key={i} item={item} delay={0.15 + i * 0.12} />
          ))}
        </div>

        <div
          className="animate-rise mt-16 flex justify-center sm:mt-20"
          style={{ animationDelay: `${0.15 + TESTIMONIALS.length * 0.12 + 0.1}s` }}
        >
          <button
            type="button"
            onClick={onReserve}
            className="group inline-flex items-center gap-2 rounded-full bg-[#c9a15a] px-8 py-4 font-sans text-base font-semibold text-[#1a0f2e] shadow-[0_10px_30px_-8px_rgba(201,161,90,0.5)] transition-all hover:scale-[1.02] hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
}