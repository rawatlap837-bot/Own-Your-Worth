import { Quote } from "lucide-react";
import Testimonial1 from "./Assets/Testimonial1.jpeg";
import Testimonial2 from "./Assets/Testimonial2.jpeg";
import Testimonial3 from "./Assets/Testimonial3.jpeg";
import Testimonial4 from "./Assets/Testimonial4.jpeg";

const TESTIMONIALS = [
  {
    quote:
      "After my career break due to motherhood, I had completely lost confidence in starting again. Namita's one-on-one coaching and mindset sessions helped me rebuild that confidence and believe in myself.\n\nToday, I'm earning consistently and have created my own community where I teach fabric painting and help women become financially independent. I honestly never imagined I'd come this far. ❤️",
    name: "[Client name]",
    role: "Fabric painting entrepreneur",
    image: Testimonial1,
  },
  {
    quote:
      "Reconnecting with Namita Ma'am in July 2025 has been one of the biggest blessings of my life. In just 10 months, I found myself again—stronger, clearer, and more confident.\n\nHer mentorship helped me regain my confidence, gain clarity in my career, excel at work, and earn a promotion. My relationships also became more meaningful, and most importantly, I learned to love myself again.\n\nHer guidance has truly brought growth, positivity, and balance into my life. Forever grateful! ❤️",
    name: "[Client name]",
    role: "Career professional",
    image: Testimonial2,
  },
  {
    quote:
      "I'm Monalisa from Germany. I've been on my mindset meditation journey with Namita for two years, and it has transformed me from within. I've become more patient, self-aware, and kinder to myself, and it has positively changed my relationships and daily life. I'm truly grateful to Namita for her gentle and powerful guidance. ❤️🙏",
    name: "Monalisa",
    role: "Germany",
    image: Testimonial3,
  },
  {
    quote:
      "I started with Namita's yoga sessions and instantly connected with her positive, calming energy. That connection led me to her Energy Premier Silver Cycle, where her practical guidance on mindset, women empowerment, and healthy habits has created real changes in my thoughts, routines, and outlook.\n\nI've grown not just physically, but mentally and emotionally too. I'm truly grateful to have Namita as my yoga and mindset coach. ❤️",
    name: "[Client name]",
    role: "Yoga & mindset student",
    image: Testimonial4,
  },
];

function TestimonialCard({ item }) {
  const initial = item.name.startsWith("[") ? "?" : item.name.charAt(0);

  return (
    <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center sm:p-9">
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

export default function TestimonialSection() {
  return (
    <section className="bg-[#1a0f2e] px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-16 max-w-xl text-center sm:mb-20">
          <p className="mb-3 font-sans text-[13px] tracking-wide text-[#c9a15a]">
            Real women. Real transformations.
          </p>
          <h2 className="font-serif text-[32px] leading-[1.15] text-white sm:text-[40px]">
            Their words, not ours.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-16 pt-16 sm:grid-cols-2 sm:gap-y-20">
          {TESTIMONIALS.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}