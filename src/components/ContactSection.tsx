import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-fire flex items-center justify-center mx-auto mb-8 shadow-fire glow-pulse">
            <Mail size={28} className="text-primary-foreground" />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Ready to{" "}
            <span className="text-gradient-fire">Ignite?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            Let's talk about how NEXFLARE can transform your business with
            intelligent systems, scalable solutions, and automation that works.
          </p>

          <a
            href="mailto:hello@nexflare.tech"
            className="group inline-flex items-center gap-3 bg-gradient-fire text-primary-foreground px-8 py-4 rounded-xl font-semibold shadow-fire hover:opacity-90 transition-all"
          >
            Get in Touch
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
