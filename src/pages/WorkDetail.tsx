import { useParams, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import CTA from "@/components/CTA";
import useGetWork from "@/hooks/useGetWork";
import ReactMarkdown from 'react-markdown';
import WorkDetailSkeleton from "@/components/skeletons/WorkDetailSkeleton";
import Loader from "@/components/Loader";

const WorkDetail = () => {
  const { slug } = useParams();
  const { work, loading, error } = useGetWork(slug);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const origin = location.state?.from || "works";
  const backTo = origin === "works" ? "/works" : "/#works";

  if (loading) {
    return (
      <>
        <Navbar />
        {/* <WorkDetailSkeleton /> */}
        <Loader className="absolute inset-0" />
      </>
    );
  }
  
  if (!work) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold mb-4">Work not found</h1>
          <Link to={backTo} className="text-flame hover:underline flex items-center gap-1 justify-center">
            <ArrowLeft size={16} />
            {origin === "works" ? "Back to Works" : "Back to Home"}
          </Link>
        </div>
      </div>
    );
  }  

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Image */}
      <section className="pt-24">
        <div className="container mx-auto px-6">
          <Link
            to={backTo}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-flame transition-colors mb-6 mt-8"
          >
            <ArrowLeft size={16} />
            {origin === "works" ? "Back to Works" : "Back to Home"}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden border border-border"
          >
            <img
              src={import.meta.env.VITE_STRAPI_API_URL + work.image.url}
              alt={`${work.title} — ${work.category}`}
              className="w-full h-80 sm:aspect-[21/9] object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

            {/* Overlay info */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-10">
              <div className="flex sm:items-center gap-3 mb-4 flex-col items-start sm:flex-row">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-flame bg-flame/15 backdrop-blur-sm px-3 py-1 rounded-full">
                  {work.category}
                </span>
                <span className="text-[11px] font-bold text-foreground bg-background/60 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                  {/* <Icon size={12} className="text-flame" /> */}
                  {work.result}
                </span>
              </div>
              <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
                {work.title}
              </h1>
              <p className="text-flame sm:text-lg font-medium mt-2">{work.excerpt}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Main content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <h2 className="font-display text-2xl font-bold mb-6">The Story</h2>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <ReactMarkdown>{work.fullDescription}</ReactMarkdown>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-8"
            >
              {/* Challenge */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-flame mb-3">
                  The Challenge
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {work.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-flame mb-3">
                  Our Solution
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {work.solution}
                </p>
              </div>

              {/* Results */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-flame mb-3">
                  Key Results
                </h3>
                <ul className="space-y-3">
                  {work.results?.map((result: { id: string; result: string }) => (
                    <li key={result.id} className="flex items-start gap-2 text-sm">
                      <Check size={14} className="text-flame mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">{result.result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Live Demo Button */}
              <a
                href={work.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-gradient-fire text-primary-foreground py-4 rounded-xl font-semibold text-sm shadow-glow hover:shadow-fire transition-all duration-300"
              >
                <ExternalLink size={16} />
                View Live Demo
              </a>
            </motion.div>
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

export default WorkDetail;
