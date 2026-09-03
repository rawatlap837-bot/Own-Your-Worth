import { useState } from "react";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "“I’m already doing so much for my family. How will I find time for myself?”",
    a: "This masterclass will help you understand why you keep putting yourself last and how to start creating space for yourself and your dreams — without feeling guilty.",
  },
  {
    q: "“I love my family. Does wanting more for myself mean I’m not grateful?”",
    a: "Not at all. You can love the life you have and still want more. Wanting purpose, growth, confidence or financial independence doesn’t make you selfish or ungrateful.",
  },
  {
    q: "“What if I’ve completely lost touch with who I am?”",
    a: "Then this masterclass is especially for you. You’ll begin reconnecting with the woman behind the roles of mother, wife and caregiver — your dreams, desires, confidence and purpose.",
  },
  {
    q: "“I want to restart my career or do something of my own, but I don’t know where to begin.”",
    a: "You’re not alone. We’ll work on the inner blocks, clarity and belief in yourself that often stop you from taking that first step towards career growth, financial independence or creating something of your own.",
  },
  {
    q: "“What if I don’t feel confident enough to change my life?”",
    a: "You don’t need to feel completely confident before you begin. The first step is understanding what has been keeping you stuck and learning how to build belief in yourself.",
  },
  {
    q: "“Will I have to choose between my family and my dreams?”",
    a: "No. This masterclass is built around the belief that you can have both — a loving family and a fulfilling career, purpose or dream.",
  },
  {
    q: "“What if my husband/family doesn’t support me?”",
    a: "You may not be able to control how others respond, but you can change how you see yourself, what you believe you deserve, and how you communicate and make choices. That inner shift can change the way you approach your relationships and your life.",
  },
  {
    q: "“Is this just another motivational workshop that will make me feel good for a few hours?”",
    a: "No. This is about going beyond motivation. You’ll understand the beliefs and patterns that may be holding you back and discover a simple 4-step formula to start creating real change.",
  },
];

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

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#faf7f0] px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 sm:mb-16">
          <p className="mb-3 font-sans text-[13px] tracking-wide text-[#c9a15a]">
            Common questions
          </p>
          <h2 className="font-serif text-[32px] sm:text-[40px] leading-[1.15] text-[#2a1b3d]">
            You might be asking yourself...
          </h2>
        </div>

        <div>
          {FAQS.map((item, i) => (
            <FaqRow
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start gap-4 border-t border-[#e4ddf5] pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-[19px] text-[#2a1b3d]">
            Still have a question of your own?
          </p>
          <button className="rounded-full bg-[#2a1b3d] px-7 py-3 font-sans text-[14px] text-[#faf7f0] transition-colors hover:bg-[#3a2650]">
            Reserve Your Seat Now
          </button>
        </div>
      </div>
    </section>
  );
}