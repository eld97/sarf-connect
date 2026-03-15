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
            Unlimited Swaps. One simple plan.
          </h2>
          <p className="text-muted-foreground mb-10">
            Get early access now. Lock in the lifetime rate for founding members.
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
            <h3 className="text-lg font-semibold text-foreground mb-1">Free</h3>
            <p className="text-3xl font-bold text-foreground mb-4">0 <span className="text-base font-normal text-muted-foreground">SAR</span></p>
            <ul className="space-y-3 text-sm text-muted-foreground mb-6">
              <li className="flex gap-2"><Check className="w-4 h-4 text-primary shrink-0 mt-0.5" /> View live exchange requests</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-primary shrink-0 mt-0.5" /> 1 match per month</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-muted-foreground/40 shrink-0 mt-0.5" /> <span className="line-through">Priority verification</span></li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-muted-foreground/40 shrink-0 mt-0.5" /> <span className="line-through">See who viewed your request</span></li>
            </ul>
            <Button variant="outline" size="lg" className="w-full" onClick={onGetAccess}>
              Start Free
            </Button>
          </motion.div>

          {/* Swap+ Pass */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.2, 0, 0, 1] }}
            className="rounded-xl border-2 border-accent bg-card shadow-gold p-6 relative"
          >
            <div className="absolute -top-3 left-6 px-3 py-0.5 bg-accent text-accent-foreground text-xs font-bold rounded-full">
              Founding Member
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-1">Swap+ Pass</h3>
            <div className="flex items-baseline gap-2 mb-1">
              <p className="text-3xl font-bold text-foreground">99 <span className="text-base font-normal text-muted-foreground">SAR</span></p>
              <span className="text-sm text-muted-foreground">lifetime</span>
            </div>
            <p className="text-xs text-muted-foreground mb-4">or 49 SAR/month</p>
            <ul className="space-y-3 text-sm text-muted-foreground mb-6">
              <li className="flex gap-2"><Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Unlimited swap requests</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Priority verification badge</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> See who viewed your request</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Priority matching algorithm</li>
            </ul>
            <Button variant="gold" size="lg" className="w-full" onClick={onGetAccess}>
              Get Lifetime Access — 99 SAR
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
