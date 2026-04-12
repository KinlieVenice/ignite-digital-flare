import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";

const serviceOptions = [
  { "value": "none", "label": "Select a service (optional)" },
  { "value": "AI Integration & Automation", "label": "AI Integration & Automation" },
  { "value": "Web & App Development", "label": "Web & App Development" },
  { "value": "Brand & UI/UX Design", "label": "Brand & UI/UX Design" },
  { "value": "Digital Presence & SEO", "label": "Digital Presence & SEO" },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    service: serviceOptions[0].value, // Set to the default value of the select options
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Basic Validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_STRAPI_API_URL}/api/inquiries`, 
        {
          data: {
            name: form.name,
            email: form.email,
            contact: form.contact,
            service: form.service === "none" ? "" : form.service,
            message: form.message, 
          },
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
          },
        }
      );

      // 3. Success Feedback
      if (response.status === 200 || response.status === 201) {
        toast({
          title: "Inquiry sent!",
          description: "We'll get back to you as soon as possible."
        });

        // 4. Reset Form to initial state
        setForm({
          name: "",
          email: "",
          contact: "",
          service: "none",
          message: ""
        });
      }
    } catch (error: any) {
      console.error("Axios Submission Error:", error);

      // Detailed error message if backend sends one
      const errorMessage = error.response?.data?.error?.message || "Please try again later.";

      toast({
        title: "Submission Failed",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-fire flex items-center justify-center mx-auto mb-6 shadow-fire">
                <Mail size={28} className="text-primary-foreground" />
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                Send an <span className="text-gradient-fire">Inquiry</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Tell us about your project and we'll get back to you within 24 hours.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-6 bg-card border border-border rounded-2xl p-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Contact Number <span className="text-destructive">*</span>
                  </label>
                  <Input
                    name="contact"
                    type="tel"
                    value={form.contact}
                    onChange={handleChange}
                    placeholder="+63 912 345 6789"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Service</label>
                  <Select
                    value={form.service}
                    onValueChange={(value) => setForm(prev => ({ ...prev, service: value }))}
                  >
                    <SelectTrigger className={`w-full bg-background border-input focus:ring-primary ${form.service === "none" ? "text-muted-foreground" : ""}`}>
                      {/* This will now show serviceOptions[0] on initial load */}
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((s) => (
                        <SelectItem
                          key={s.value}
                          value={s.value}
                          className={`focus:bg-primary focus:text-primary-foreground ${s.value === "none" ? "text-muted-foreground" : ""}`}
                        >
                          {s.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Inquiry <span className="text-destructive">*</span>
                </label>
                <Textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, goals, and timeline..."
                  rows={5}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-fire text-primary-foreground px-8 py-3.5 rounded-xl font-semibold shadow-fire hover:opacity-90 transition-all disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Inquiry"}
                <Send size={16} />
              </button>
            </motion.form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
