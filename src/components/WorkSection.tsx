import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, TrendingUp, Zap, Users, BarChart3 } from "lucide-react";

import workAutoflow from "@/assets/work-autoflow.jpg";
import workVoltcommerce from "@/assets/work-voltcommerce.jpg";
import workHealthpulse from "@/assets/work-healthpulse.jpg";
import workGreengrid from "@/assets/work-greengrid.jpg";

const projects = [
  {
    title: "AutoFlow Dashboard",
    industry: "Logistics",
    tagline: "Automated 80% of manual workflows",
    description:
      "A logistics company was drowning in manual task assignments and reporting. We built an intelligent automation platform that routes tasks, tracks performance in real-time, and eliminated repetitive processes — saving the team 30+ hours every week.",
    result: "80% less manual work",
    icon: Zap,
    image: workAutoflow,
  },
  {
    title: "VoltCommerce",
    industry: "E-Commerce",
    tagline: "From 5K to 50K daily orders",
    description:
      "An online retailer needed a platform that could scale fast without breaking. We engineered a high-performance storefront with smart inventory management — resulting in 10x order capacity and a seamless checkout experience.",
    result: "10x order capacity",
    icon: TrendingUp,
    image: workVoltcommerce,
  },
  {
    title: "HealthPulse Portal",
    industry: "Healthcare",
    tagline: "Patient management, simplified",
    description:
      "A growing clinic needed to digitize appointments, patient records, and telemedicine. We designed an intuitive portal that staff learned in under a day — reducing no-shows by 40% and boosting patient satisfaction.",
    result: "40% fewer no-shows",
    icon: Users,
    image: workHealthpulse,
  },
  {
    title: "GreenGrid Analytics",
    industry: "Renewable Energy",
    tagline: "3x more qualified leads",
    description:
      "A renewable energy startup needed an online presence that converts. We delivered a conversion-optimized website with real-time analytics dashboards — tripling their qualified lead generation in just 3 months.",
    result: "3x lead conversion",
    icon: BarChart3,
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
              Real Results for{" "}
              <span className="text-gradient-fire">Real Businesses</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm sm:text-base">
              We don't just build — we solve business problems. Here's how we've helped companies like yours grow.
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, i) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
                  className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 cursor-pointer"
                  onClick={() => setSelectedProject(i)}
                >
                  {/* Image with overlay */}
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={project.image}
                      alt={`${project.title} — ${project.industry}`}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

                    {/* Result badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-background/80 backdrop-blur-sm border border-border rounded-full px-3 py-1.5">
                      <Icon size={14} className="text-flame" />
                      <span className="text-[11px] font-bold text-foreground tracking-wide">
                        {project.result}
                      </span>
                    </div>

                    {/* Industry tag */}
                    <div className="absolute top-4 left-4">
                      <span className="text-[11px] font-semibold tracking-wider uppercase text-flame bg-flame/15 backdrop-blur-sm px-3 py-1 rounded-full">
                        {project.industry}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
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
                      View case study →
                    </div>
                  </div>

                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-fire opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedProject !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md p-4 sm:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-3xl w-full bg-card border border-border rounded-2xl overflow-hidden shadow-fire max-h-[90vh] overflow-y-auto"
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

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-flame bg-flame/15 px-3 py-1 rounded-full">
                  {projects[selectedProject].industry}
                </span>
                <span className="text-[11px] font-bold text-foreground bg-secondary px-3 py-1 rounded-full flex items-center gap-1">
                  {(() => { const Icon = projects[selectedProject].icon; return <Icon size={12} className="text-flame" />; })()}
                  {projects[selectedProject].result}
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold mb-1">
                {projects[selectedProject].title}
              </h3>
              <p className="text-flame font-medium mb-4">
                {projects[selectedProject].tagline}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {projects[selectedProject].description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default WorkSection;
