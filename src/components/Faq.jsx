import { useState, useEffect, useRef } from "react";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "Is this masterclass really for me?",
    a: "If you're a mother who feels you've lost touch with yourself, struggle with self-doubt, or want to rediscover your purpose, restart your career or create something of your own — yes, this masterclass is for you.",
  },
  {
    q: "Can I pursue my dreams without neglecting my family?",
    a: "Absolutely. You don't have to choose between being a great mother and becoming the woman you want to be. You can create space for both your family and your dreams.",
  },
  {
    q: "I don't feel confident anymore. Will this help me?",
    a: "Yes. You'll understand what is affecting your confidence and learn how to rebuild self-trust, belief in yourself, and the courage to take action.",
  },
  {
    q: "I've been on a career break for years. Can I really start again?",
    a: "Yes. Your past break does not define your future. This masterclass will help you overcome the fear and self-doubt that may be stopping you from taking your first step.",
  },
  {
    q: "Will this masterclass help me become financially independent?",
    a: "It will help you identify your strengths, skills, possibilities, and mindset blocks, and take the first step toward creating greater financial independence and opportunities for yourself.",
  },
  {
    q: "Do I need any prior experience or knowledge?",
    a: "Not at all. You simply need an open mind and the willingness to look at yourself differently and take the first step.",
  },
  {
    q: "What if I don't know what I want anymore?",
    a: "That's okay. You'll be guided to reconnect with your dreams, strengths, desires, and purpose and get clearer about what you truly want.",
  },
  {
    q: "What if my family doesn't support me?",
    a: "You cannot always control others, but you can learn to trust yourself, communicate your needs, and make empowered choices without constantly seeking approval.",
  },
  {
    q: "Is this just another motivational masterclass?",
    a: "No. You'll go beyond motivation to understand the mindset and beliefs that may be keeping you stuck, and discover a practical 4-step formula to help you move forward.",
  },
  {
    q: "What if I feel it's too late for me?",
    a: "It's never too late to choose yourself. You can start from where you are, with what you have, and create a new chapter of your life.",
  },
];

function FadeIn({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

function FaqRow({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-[#e4ddf5]">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-start justify-between gap-6 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a15a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf7f0] rounded-sm"
      >
        <span
          className={`font-serif text-[17px] sm:text-[19px] leading-snug transition-colors ${
            isOpen ? "text-[#2a1b3d]" : "text-[#2a1b3d]/85"
          }`}
        >
          {item.q}
        </span>
        <span
          className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            isOpen
              ? "rotate-45 border-[#c9a15a] bg-[#c9a15a] text-[#2a1b3d]"
              : "border-[#2a1b3d]/25 text-[#2a1b3d]/60"
          }`}
        >
          <Plus size={15} strokeWidth={2.25} />
        </span>
      </button>
      <div
        className="grid overflow-hidden transition-all duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-6 pr-10 font-sans text-[15px] leading-relaxed text-[#4a3f5c]">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection({ onReserve }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#faf7f0] px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <FadeIn className="mb-12 sm:mb-16">
          <p className="mb-3 font-sans text-[13px] tracking-wide text-[#c9a15a]">
            Common questions
          </p>
          <h2 className="font-serif text-[32px] sm:text-[40px] leading-[1.15] text-[#2a1b3d]">
            You might be asking yourself...
          </h2>
        </FadeIn>

        <div>
          {FAQS.map((item, i) => (
            <FadeIn key={i} delay={Math.min(i * 60, 300)}>
              <FaqRow
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-14 flex flex-col items-start gap-4 border-t border-[#e4ddf5] pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-[19px] text-[#2a1b3d]">
            Still have a question of your own?
          </p>
          <button
            type="button"
            onClick={onReserve}
            className="rounded-full bg-[#2a1b3d] px-7 py-3 font-sans text-[14px] text-[#faf7f0] transition-colors hover:bg-[#3a2650]"
          >
            Reserve Your Seat Now
          </button>
        </FadeIn>
      </div>
    </section>
  );
}