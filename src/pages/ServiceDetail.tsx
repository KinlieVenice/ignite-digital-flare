import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Star } from "lucide-react";
import { services } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import CTA from "@/components/CTA";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold mb-4">Service not found</h1>
          <Link to="/" className="text-flame hover:underline">← Back to home</Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full sm:w-[600px] h-[400px] rounded-full bg-primary/5 blur-[150px]" />
        <div className="container mx-auto px-6 relative z-10">
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-flame transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid justify-items-center"
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.accent} flex items-center justify-center shadow-glow mb-6`}>
              <Icon size={28} className="text-primary-foreground" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4  text-center">
              {service.title}
            </h1>
            <p className="text-flame text-lg font-medium mb-6  text-center">{service.tagline}</p>
            <p className="text-muted-foreground max-w-2xl leading-relaxed text-center">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid justify-items-center"
          >
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-10">
              What's <span className="text-gradient-fire">Included</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
              {service.features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
                >
                  <div className="w-5 h-5 rounded-full bg-flame/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-flame" />
                  </div>
                  <span className="text-sm text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 relative">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-ember/5 blur-[150px]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-flame mb-4 block">
              Pricing
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Choose Your <span className="text-gradient-fire">Package</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm">
              Transparent pricing with no hidden fees. Pick the plan that fits your needs — or reach out for a custom quote.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {service.packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`relative bg-card border rounded-2xl p-8 transition-all duration-500 ${pkg.popular
                    ? "border-flame/50 shadow-glow scale-[1.02]"
                    : "border-border hover:border-primary/30"
                  }`}
              >
                {/* {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-fire text-primary-foreground text-[11px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-full flex items-center gap-1">
                      <Star size={10} fill="currentColor" />
                      Most Popular
                    </span>
                  </div>
                )} */}

                <div className="mb-6">
                  <h3 className="font-display text-lg font-semibold mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="font-display text-3xl font-bold text-gradient-fire">
                      {pkg.price}
                    </span>
                    {pkg.price !== "Custom" && (
                      <span className="text-xs text-muted-foreground">one-time</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check size={14} className="text-flame mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>


                <span
                  className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${pkg.popular
                      ? "bg-gradient-fire text-primary-foreground shadow-glow hover:shadow-fire"
                      : "bg-secondary text-secondary-foreground"
                    }`}
                >
                </span>

                {/* <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/#contact";
                  }}
                  className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    pkg.popular
                      ? "bg-gradient-fire text-primary-foreground shadow-glow hover:shadow-fire"
                      : "bg-secondary text-secondary-foreground hover:bg-primary/20 hover:text-flame"
                  }`}
                >
                  {pkg.price === "Custom" ? "Contact Us" : "Get Started"}
                </a> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-card border border-border rounded-2xl p-12 max-w-3xl mx-auto"
          >
            <CTA />
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServiceDetail;
