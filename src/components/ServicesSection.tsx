import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import useGetAllServices from "@/hooks/useGetAllServices";

const ServicesSection = () => {
  const { services, loading, error } = useGetAllServices() as any;
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
          {services.length <= 0 ? (
            <p className="text-muted-foreground text-center col-span-2">
              No services available.
            </p>
          ) :
          services.map((service: any, i: number) => {
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
                  <ServiceCard service={service} gradient={getGradient(i)} />
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
