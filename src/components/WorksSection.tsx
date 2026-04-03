import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

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
          {projects.slice(0, 4).map((project, i) => {
            const Icon = project.icon;
            return (
              <Link key={project.slug} to={`/works/${project.slug}`} state={{ from: 'works-section' }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
                  className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 cursor-pointer h-full"
                >
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={project.image}
                      alt={`${project.title} — ${project.industry}`}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

                    <div className="absolute top-4 flex justify-between w-full px-4 flex-wrap">
                      <div className="flex items-center gap-1.5 bg-background/80 backdrop-blur-sm border border-border rounded-full px-3 py-1.5">
                        <Icon size={14} className="text-flame" />
                        <span className="text-[11px] font-bold text-foreground tracking-wide">
                          {project.result}
                        </span>
                      </div>

                      <div className="">
                        <span className="text-[11px] font-semibold tracking-wider uppercase text-flame bg-flame/15 backdrop-blur-sm px-3 py-1 rounded-full">
                          {project.industry}
                        </span>
                      </div>
                    </div>

                  </div>

                  <div className="p-6">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      {project.title}
                    </h3>
                    <p className="text-flame text-sm font-medium mb-3">
                      {project.tagline}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    <div className="mt-4 flex items-center text-xs font-medium text-muted-foreground group-hover:text-flame transition-colors duration-300">
                      View full case study →
                    </div>
                  </div>

                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-fire opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
            See More Projects →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;
