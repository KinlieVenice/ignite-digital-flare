import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { works } from "@/data/works";
import WorkCard from "./WorkCard";

const WorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="works" className="py-32 relative">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-ember/5 blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-flame mb-4 block">
            Our Work
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Real Results for{" "}
            <span className="text-gradient-fire">Real Businesses</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm sm:text-base">
            We don't just build — we solve business problems. Here's how we've helped companies like yours grow.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {works.slice(0, 4).map((work: any, i: number) => {
            return (
              <Link key={work.slug} to={`/works/${work.slug}`} state={{ from: 'works-section' }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
                  className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 cursor-pointer h-full"
                >
                  <WorkCard work={work} />
                </motion.div>
              </Link>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/works"
            className="inline-flex items-center gap-2 bg-card border border-border px-8 py-3 rounded-xl text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300"
          >
            See More Works →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;
