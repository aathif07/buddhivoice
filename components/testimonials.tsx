import { Marquee } from "@/components/magicui/marquee"

const testimonials = [
  {
    body: "Buddhi Voice has transformed our sales process. Our lead qualification calls increased by 300% with zero additional staff.",
  },
  {
    body: "Our customer support team handles 3x more inquiries now with Buddhi Voice AI agents resolving 70% of calls automatically.",
  },
  {
    body: "Running survey campaigns with Buddhi Voice is so much more efficient than traditional methods. Response rates doubled.",
  },
  {
    body: "Patient appointment reminders through Buddhi Voice reduced our no-shows by 45%. The voice quality is incredibly natural.",
  },
  {
    body: "Order taking with Buddhi Voice agents has eliminated wait times and improved customer satisfaction scores significantly.",
  },
  {
    body: "The setup was incredibly simple. We had our first voice AI agent handling calls within an hour of signing up.",
  },
  {
    body: "Buddhi Voice's multilingual support helped us expand into new markets without hiring local call center staff.",
  },
  {
    body: "Security was our main concern, but Buddhi Voice's compliance features gave us complete confidence in deployment.",
  },
  {
    body: "Property inquiries are now handled 24/7 with Buddhi Voice. Our agents can focus on closing deals instead of answering calls.",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const TestimonialCard = ({
  body,
}: {
  body: string
}) => {
  return (
    <div className="relative w-full max-w-xs overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-10 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset]">
      <div className="absolute -top-5 -left-5 -z-10 h-40 w-40 rounded-full bg-gradient-to-b from-[#4F46E5]/10 to-transparent blur-md"></div>

      <div className="text-white/90 leading-relaxed">{body}</div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="mb-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-[540px]">
          <div className="flex justify-center">
            <button
              type="button"
              className="group relative z-[60] mx-auto rounded-full border border-white/20 bg-white/5 px-6 py-1 text-xs backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100 md:text-sm"
            >
              <div className="absolute inset-x-0 -top-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-[#4F46E5] to-transparent shadow-2xl transition-all duration-500 group-hover:w-3/4"></div>
              <div className="absolute inset-x-0 -bottom-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-[#4F46E5] to-transparent shadow-2xl transition-all duration-500 group-hover:h-px"></div>
              <span className="relative text-white">Customer Stories</span>
            </button>
          </div>
          <h2 className="from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 mt-5 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px] __className_bb4e88 relative z-10">
            Transform Your Call Operations
          </h2>

          <p className="mt-5 relative z-10 text-center text-lg text-zinc-500">
            Hear from businesses that have revolutionized their communication with Buddhi Voice AI.
          </p>
        </div>

        <div className="my-16 flex max-h-[738px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <div>
            <Marquee pauseOnHover vertical className="[--duration:20s]">
              {firstColumn.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </Marquee>
          </div>

          <div className="hidden md:block">
            <Marquee reverse pauseOnHover vertical className="[--duration:25s]">
              {secondColumn.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </Marquee>
          </div>

          <div className="hidden lg:block">
            <Marquee pauseOnHover vertical className="[--duration:30s]">
              {thirdColumn.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </Marquee>
          </div>
        </div>

        <div className="-mt-8 flex justify-center">
          <button className="group relative inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/30 bg-black/50 px-6 py-3 text-sm font-medium text-white transition-all hover:border-[#4F46E5]/60 hover:bg-[#4F46E5]/10 active:scale-95">
            <div className="absolute inset-x-0 -top-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-[#4F46E5]/40 to-transparent"></div>
            <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-[#4F46E5]/40 to-transparent"></div>
            Share your experience
          </button>
        </div>
      </div>
    </section>
  )
}