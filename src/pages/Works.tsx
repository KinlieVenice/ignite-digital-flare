import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import WorkCard from "@/components/WorkCard";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.industry)))];

const Works = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesSearch =
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.industry.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === "All" || p.industry === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-flame mb-4 block">
              Portfolio
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
              Our <span className="text-gradient-fire">Work</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm sm:text-base">
              Real projects, real results. See how we've helped businesses streamline and grow.
            </p>
          </motion.div>

          {/* Search & Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto mb-12 space-y-6"
          >
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-11 bg-card border-border h-12 rounded-xl text-sm"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 border ${
                    activeCategory === cat
                      ? "bg-gradient-fire text-primary-foreground border-transparent"
                      : "bg-card text-muted-foreground border-border hover:border-primary/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filtered.map((project, i) => {
              return (
                <Link key={project.slug} to={`/works/${project.slug}`} state={{ from: 'works' }}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 cursor-pointer h-full"
                  >
                    <WorkCard project={project} />
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-muted-foreground mt-12"
            >
              No projects found. Try a different search or category.
            </motion.p>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Works;
