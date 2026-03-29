import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does NEXFLARE offer?",
    answer:
      "We offer AI integration & automation, custom web applications, UI/UX design, and business websites. Our focus is on building systems that eliminate repetitive processes and help your business scale efficiently.",
  },
  {
    question: "How much does a project typically cost?",
    answer:
      "Our business websites start at ₱10,000. Custom web applications and AI integrations vary depending on complexity. We offer Starter, Growth, and Enterprise packages for each service. Contact us for a personalized quote.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Simple business websites can be delivered in 1–2 weeks. Custom applications typically take 4–8 weeks depending on scope. We'll provide a clear timeline in our project proposal before any work begins.",
  },
  {
    question: "Do I need to be tech-savvy to work with you?",
    answer:
      "Not at all! We specialize in working with business owners who want results without the tech headaches. We handle all the technical details and explain everything in plain language.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes. We offer maintenance packages to keep your systems running smoothly. Our Growth and Enterprise plans include priority support, regular updates, and performance monitoring.",
  },
  {
    question: "Can you help automate my existing business processes?",
    answer:
      "Absolutely. That's one of our core specialties. We analyze your current workflows, identify bottlenecks, and build automated systems that save you time and reduce errors — whether it's inventory management, customer communications, or reporting.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern, industry-standard technologies including React, Node.js, Python, and various AI/ML frameworks. We choose the best tools for each project to ensure performance, scalability, and long-term maintainability.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply reach out through our contact form or email us at hello@nexflare.com. We'll schedule a free consultation to understand your needs, then provide a detailed proposal with scope, timeline, and pricing.",
  },
  {
    question: "Do you work with clients outside the Philippines?",
    answer:
      "Yes! While we're based in Cavite, Philippines, we work with clients worldwide. All communication and project management can be done remotely.",
  },
  {
    question: "What if I'm not satisfied with the results?",
    answer:
      "Your satisfaction is our priority. We include revision rounds in every project and maintain close communication throughout the process. We don't consider a project complete until you're happy with the outcome.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              Frequently Asked{" "}
              <span className="text-gradient-fire">Questions</span>
            </h1>
            <p className="text-muted-foreground mb-12">
              Everything you need to know about working with NEXFLARE.
            </p>

            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 bg-card/50"
                >
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-flame transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
