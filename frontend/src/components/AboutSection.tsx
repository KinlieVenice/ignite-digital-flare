import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import useGetAllPillars from "@/hooks/useGetAllPillars";
import PillarCard from "./PillarCard";
import PillarCardSkeleton from "@/components/skeletons/PillarCardSkeleton";

// const pillars = [
//   {
//     icon: Cpu,
//     title: "AI-First Thinking",
//     desc: "We integrate intelligent systems that reduce manual work and optimize operations.",
//   },
//   {
//     icon: Layers,
//     title: "Scalable Architecture",
//     desc: "Every solution is built for performance, growth, and minimal maintenance.",
//   },
//   {
//     icon: Target,
//     title: "Automation at Core",
//     desc: "Eliminate repetitive processes. Build systems that work for you.",
//   },
// ];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { pillars, loading, error } = useGetAllPillars() as any;

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-flame mb-4 block">
            Who We Are
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Engineering the{" "}
            <span className="text-gradient-fire">Future</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            NEXFLARE is founded by two Computer Engineers who think beyond code
            — they engineer systems built for scale, efficiency, and long-term
            impact. We don't just build software — we design intelligent digital
            ecosystems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {loading ? (
            // Render 3 pillars while loading
            Array.from({ length: 3 }).map((_, i) => (
              <PillarCardSkeleton key={i} />
            ))
          ) :
            pillars.map((pillar: { title: string; description: string; icon: any }, i: number) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-500"
              >
                <PillarCard pillar={pillar} />
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
