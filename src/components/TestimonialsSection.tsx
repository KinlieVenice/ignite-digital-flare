import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Rivera",
    role: "CEO, AutoFlow Logistics",
    quote:
      "NEXFLARE didn't just build us a dashboard — they re-engineered how our entire team works. The AI automation alone saved us 40+ hours a week.",
  },
  {
    name: "Maria Santos",
    role: "Founder, GreenGrid Energy",
    quote:
      "From the first call, it was clear they think differently. Our website went from concept to a lead-generating machine in under three weeks.",
  },
  {
    name: "James Tan",
    role: "CTO, HealthPulse Inc.",
    quote:
      "The attention to UX detail was next level. Our patients and staff actually enjoy using the portal now — that's rare in healthcare tech.",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  const next = () => setActive((p) => (p + 1) % testimonials.length);
  const prev = () =>
    setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[active];

  return (
    <section id="testimonials" className="py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] rounded-full bg-primary/5 blur-[150px] sm:w-[500px] sm:h-[500px]" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-flame mb-4 block">
            Testimonials
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Trusted by{" "}
            <span className="text-gradient-fire">Innovators</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card border border-border rounded-2xl p-10 sm:p-12 text-center relative">
            {/* Quote icon */}
            <div className="w-12 h-12 rounded-xl bg-gradient-fire flex items-center justify-center mx-auto mb-8 shadow-glow">
              <Quote size={22} className="text-primary-foreground" />
            </div>

            <motion.blockquote
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-lg sm:text-xl text-foreground/90 leading-relaxed mb-8 font-light italic"
            >
              "{t.quote}"
            </motion.blockquote>

            <motion.div
              key={`author-${active}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <p className="font-display font-semibold text-foreground">
                {t.name}
              </p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
              >
                <ChevronLeft size={16} />
              </button>

              <div className="flex items-center gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === active
                        ? "bg-flame w-6"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
