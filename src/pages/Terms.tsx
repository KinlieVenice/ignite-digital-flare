import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
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
              Terms of <span className="text-gradient-fire">Service</span>
            </h1>
            <p className="text-muted-foreground mb-12">
              Last updated: March 29, 2026
            </p>

            <div className="space-y-10 text-muted-foreground leading-relaxed">
              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                  1. Agreement to Terms
                </h2>
                <p>
                  By accessing or using NEXFLARE's services, website, or any
                  related platforms, you agree to be bound by these Terms of
                  Service. If you do not agree, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                  2. Services
                </h2>
                <p>
                  NEXFLARE provides IT consulting, web development, UI/UX
                  design, AI integration, and automation services. The scope,
                  deliverables, timelines, and pricing for each project will be
                  outlined in a separate proposal or contract agreed upon by
                  both parties.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                  3. Payment Terms
                </h2>
                <p>
                  Payment terms will be specified in individual project
                  agreements. A deposit may be required before work begins.
                  Outstanding balances are due within 15 days of invoice unless
                  otherwise agreed upon.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                  4. Intellectual Property
                </h2>
                <p>
                  Upon full payment, the client receives ownership of all
                  custom-developed deliverables. NEXFLARE retains the right to
                  use project work in portfolios and case studies unless
                  otherwise agreed in writing.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                  5. Confidentiality
                </h2>
                <p>
                  Both parties agree to keep confidential any proprietary
                  information shared during the course of a project. This
                  obligation survives the termination of any agreement.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                  6. Limitation of Liability
                </h2>
                <p>
                  NEXFLARE shall not be liable for any indirect, incidental, or
                  consequential damages arising from the use of our services.
                  Our total liability shall not exceed the amount paid by the
                  client for the specific project in question.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                  7. Termination
                </h2>
                <p>
                  Either party may terminate a project with written notice.
                  The client is responsible for payment of all work completed
                  up to the date of termination.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                  8. Changes to Terms
                </h2>
                <p>
                  NEXFLARE reserves the right to update these terms at any
                  time. Continued use of our services after changes constitutes
                  acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                  9. Contact
                </h2>
                <p>
                  For questions about these terms, contact us at{" "}
                  <a
                    href="mailto:hello@nexflare.tech"
                    className="text-flame hover:underline"
                  >
                    hello@nexflare.tech
                  </a>
                  .
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
