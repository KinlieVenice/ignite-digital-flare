import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AutoFlow Dashboard",
    category: "AI Automation",
    description: "End-to-end workflow automation platform with real-time analytics and AI-driven task routing for a logistics company.",
    tech: ["React", "Python", "TensorFlow"],
  },
  {
    title: "VoltCommerce",
    category: "Web Application",
    description: "High-performance e-commerce platform handling 50K+ daily transactions with intelligent inventory management.",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
  },
  {
    title: "HealthPulse Portal",
    category: "UI/UX Design",
    description: "Patient management system with intuitive dashboards, appointment scheduling, and telemedicine integration.",
    tech: ["Figma", "React", "Supabase"],
  },
  {
    title: "GreenGrid Analytics",
    category: "Business Website",
    description: "Corporate website and analytics dashboard for a renewable energy startup, boosting lead conversion by 3x.",
    tech: ["TypeScript", "Tailwind", "D3.js"],
  },
];

const WorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
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

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500"
            >
              {/* Top accent bar */}
              <div className="h-1 bg-gradient-fire opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-flame bg-flame/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <ExternalLink
                    size={16}
                    className="text-muted-foreground/0 group-hover:text-muted-foreground transition-all duration-300"
                  />
                </div>

                <h3 className="font-display text-xl font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
