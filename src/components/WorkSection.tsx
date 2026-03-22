import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, X } from "lucide-react";

import workAutoflow from "@/assets/work-autoflow.jpg";
import workVoltcommerce from "@/assets/work-voltcommerce.jpg";
import workHealthpulse from "@/assets/work-healthpulse.jpg";
import workGreengrid from "@/assets/work-greengrid.jpg";

const projects = [
  {
    title: "AutoFlow Dashboard",
    category: "AI Automation",
    description:
      "End-to-end workflow automation platform with real-time analytics and AI-driven task routing for a logistics company.",
    tech: ["React", "Python", "TensorFlow"],
    image: workAutoflow,
  },
  {
    title: "VoltCommerce",
    category: "Web Application",
    description:
      "High-performance e-commerce platform handling 50K+ daily transactions with intelligent inventory management.",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    image: workVoltcommerce,
  },
  {
    title: "HealthPulse Portal",
    category: "UI/UX Design",
    description:
      "Patient management system with intuitive dashboards, appointment scheduling, and telemedicine integration.",
    tech: ["Figma", "React", "Supabase"],
    image: workHealthpulse,
  },
  {
    title: "GreenGrid Analytics",
    category: "Business Website",
    description:
      "Corporate website and analytics dashboard for a renewable energy startup, boosting lead conversion by 3x.",
    tech: ["TypeScript", "Tailwind", "D3.js"],
    image: workGreengrid,
  },
];

const WorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <>
      <section id="work" className="py-32 relative">
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
              Projects that{" "}
              <span className="text-gradient-fire">Deliver Results</span>
            </h2>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
                className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedProject(i)}
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={project.image}
                    alt={`${project.title} mockup screenshot`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Overlay content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-semibold tracking-wider uppercase text-flame bg-flame/15 backdrop-blur-sm px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <ExternalLink
                        size={16}
                        className="text-muted-foreground/0 group-hover:text-foreground transition-all duration-300"
                      />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Bottom info */}
                <div className="p-5 pt-3">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-medium text-muted-foreground bg-secondary px-2.5 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-fire opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedProject !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md p-6"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl w-full bg-card border border-border rounded-2xl overflow-hidden shadow-fire"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <X size={18} />
            </button>

            <img
              src={projects[selectedProject].image}
              alt={`${projects[selectedProject].title} full view`}
              className="w-full object-cover"
            />

            <div className="p-6">
              <span className="text-[11px] font-semibold tracking-wider uppercase text-flame mb-2 block">
                {projects[selectedProject].category}
              </span>
              <h3 className="font-display text-2xl font-bold mb-2">
                {projects[selectedProject].title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {projects[selectedProject].description}
              </p>
              <div className="flex flex-wrap gap-2">
                {projects[selectedProject].tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default WorkSection;
