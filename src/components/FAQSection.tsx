import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is it safe to meet someone?",
    a: "We recommend meeting in public places like Starbucks or mall lobbies. Every user is ID-verified to ensure accountability. We also log all in-app conversations for safety.",
  },
  {
    q: "How do you make money?",
    a: "Each match costs 1 credit ($10). Your first 3 credits are free. We only charge when you use a credit to connect — no hidden fees, no rate markups.",
  },
  {
    q: "I'm a student at KSU/KAUST, can I join?",
    a: "Yes! Student emails (.edu.sa) are our priority verification tier. Sign up with your university email and get verified within hours.",
  },
  {
    q: "What currencies are supported?",
    a: "Currently SAR, USD, EUR, GBP, and EGP. More currencies are added based on community demand.",
  },
  {
    q: "What if I can't find a match?",
    a: "Our matching algorithm runs continuously. Post your request and get notified the moment a match is found — usually within 24 hours in major cities.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-10">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05, ease: [0.2, 0, 0, 1] }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left p-4 rounded-lg bg-card border border-border flex items-start justify-between gap-4 hover:border-primary/20 transition-colors duration-200"
              >
                <span className="text-sm font-semibold text-foreground">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground shrink-0 mt-0.5 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="px-4 pb-4 pt-2"
                >
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
