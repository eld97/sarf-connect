import { motion } from "framer-motion";
import { Shield, MessageSquare, Star } from "lucide-react";
import { useState } from "react";

const trustFeatures = [
  {
    icon: Shield,
    title: "ID Verification",
    description: "Government ID & University Email required. Every user is verified before their first swap.",
  },
  {
    icon: MessageSquare,
    title: "In-App Chat",
    description: "Negotiate the rate before you meet. Agree on terms in a secure, logged conversation.",
  },
  {
    icon: Star,
    title: "Public Ratings",
    description: "Rate your swapper. Build your trust score. See who the community trusts most.",
  },
];

const TrustModule = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
            Would you swap cash with a stranger?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            We make them not strangers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {trustFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: [0.2, 0, 0, 1] }}
              className="p-6 rounded-xl border border-border bg-card shadow-card"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="mt-8 text-sm font-medium text-primary hover:underline underline-offset-4 transition-colors"
        >
          See how verification works →
        </button>

        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/40" onClick={() => setShowModal(false)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card rounded-xl p-8 max-w-md w-full shadow-elevated border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">How Verification Works</h3>
              <ol className="space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">1</span>
                  <span><span className="font-semibold text-foreground">Sign up</span> with your university email (.edu.sa) or professional email.</span>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">2</span>
                  <span><span className="font-semibold text-foreground">Upload your ID</span> — National ID, Iqama, or Passport. We verify within 24 hours.</span>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">3</span>
                  <span><span className="font-semibold text-foreground">Get your badge</span> — A verified profile that others can trust to swap with.</span>
                </li>
              </ol>
              <button
                onClick={() => setShowModal(false)}
                className="mt-6 w-full h-10 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary-hover transition-colors duration-200"
              >
                Got it
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrustModule;
