import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingSectionProps {
  onGetAccess: () => void;
}

const PricingSection = ({ onGetAccess }: PricingSectionProps) => {
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
            Credits that connect you.
          </h2>
          <p className="text-muted-foreground mb-10">
            Start with 3 free credits. Buy more when you need them — $10 each.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          {/* Free */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
            className="rounded-xl border border-border bg-card shadow-card p-6"
          >
            <h3 className="text-lg font-semibold text-foreground mb-1">Free Tier</h3>
            <p className="text-3xl font-bold text-foreground mb-1">3 Credits</p>
            <p className="text-sm text-muted-foreground mb-4">Included free — no card required</p>
            <ul className="space-y-3 text-sm text-muted-foreground mb-6">
              <li className="flex gap-2"><Check className="w-4 h-4 text-primary shrink-0 mt-0.5" /> 3 peer matches included</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-primary shrink-0 mt-0.5" /> View all exchange requests</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-primary shrink-0 mt-0.5" /> In-app chat with matches</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-primary shrink-0 mt-0.5" /> ID verification</li>
            </ul>
            <Button variant="outline" size="lg" className="w-full" onClick={onGetAccess}>
              Start Free
            </Button>
          </motion.div>

          {/* Pay-per-credit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.2, 0, 0, 1] }}
            className="rounded-xl border-2 border-accent bg-card shadow-gold p-6 relative"
          >
            <div className="absolute -top-3 left-6 px-3 py-0.5 bg-accent text-accent-foreground text-xs font-bold rounded-full">
              Best Value
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-1">Credits</h3>
            <div className="flex items-baseline gap-2 mb-1">
              <p className="text-3xl font-bold text-foreground">$10</p>
              <span className="text-sm text-muted-foreground">per credit</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">1 credit = 1 verified match</p>
            <ul className="space-y-3 text-sm text-muted-foreground mb-6">
              <li className="flex gap-2"><Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Unlimited credit purchases</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Priority matching</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> See who viewed your request</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Priority verification badge</li>
            </ul>
            <Button variant="gold" size="lg" className="w-full" onClick={onGetAccess}>
              Buy Credits — $10 each
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
