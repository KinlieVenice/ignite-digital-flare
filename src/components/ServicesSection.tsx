import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/data/services";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full sm:w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-flame mb-4 block">
            What We Do
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Services that{" "}
            <span className="text-gradient-fire">Ignite Growth</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, i) => {
            const getGradient = (i: number) => {
              switch (i % 4) {
                case 0: return "from-ember to-flame";
                case 1: return "from-flame to-spark";
                case 2: return "from-spark to-flame";
                case 3: return "from-flame to-ember";
                default: return "from-ember to-flame";
              }
            };

            return (
              <Link key={service.slug} to={`/services/${service.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
                  className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 overflow-hidden h-full"
                >
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/0 group-hover:bg-primary/5 blur-[60px] transition-all duration-700" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getGradient(i)} flex items-center justify-center shadow-glow`}>
                        <service.icon size={22} className="text-primary-foreground" />
                      </div>
                      <ArrowUpRight
                        size={18}
                        className="text-muted-foreground/0 group-hover:text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>

                    <h3 className="font-display text-lg font-semibold mb-4">
                      {service.title}
                    </h3>

                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature) => (
                        <li
                          key={feature}
                          className="text-sm text-muted-foreground flex items-center gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-flame flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 text-xs font-medium text-muted-foreground group-hover:text-flame transition-colors duration-300">
                      View packages & pricing →
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
