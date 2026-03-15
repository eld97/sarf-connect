import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onFindMatch: () => void;
}

const HeroSection = ({ onFindMatch }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden">
      <div className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-emerald-700 tracking-wide uppercase">Live in Beta</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.1]">
              Stop Losing 10% to the Bank.{" "}
              <span className="text-primary">Swap Directly.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Get the mid-market rate. No hidden fees. Only for verified students and professionals in KSA.
            </p>

            <p className="text-lg font-arabic text-muted-foreground" dir="rtl">
              وفّر أكثر، بدّل مباشرة
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button variant="hero" size="xl" onClick={onFindMatch}>
                Find My Match
              </Button>
              <Button variant="outline" size="xl" onClick={onFindMatch} className="font-arabic">
                ابدأ التبديل
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Join <span className="font-semibold text-foreground">150+</span> verified testers swapping this week.
            </p>
          </motion.div>

          {/* Right: Rate Widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.2, 0, 0, 1] }}
            className="md:sticky md:top-24"
          >
            <RateWidget />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const RateWidget = () => {
  return (
    <div className="rounded-xl p-6 bg-card shadow-card border border-border space-y-4">
      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
        Rate Comparison — SAR/USD
      </div>

      <div className="flex justify-between items-end pb-4 border-b border-border">
        <div>
          <span className="text-sm font-medium text-muted-foreground">Bank Rate</span>
          <span className="block text-2xl font-bold text-foreground tabular-nums">3.75</span>
        </div>
        <span className="text-sm text-muted-foreground line-through tabular-nums">250 SAR fee</span>
      </div>

      <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
        <div className="flex justify-between items-start">
          <div>
            <span className="block text-xs font-bold text-emerald-700 uppercase tracking-wider">
              Sarf Swap Rate
            </span>
            <span className="text-3xl font-bold text-emerald-900 tabular-nums">3.82</span>
            <span className="block text-sm text-emerald-700 mt-1">Zero fees</span>
          </div>
          <span className="px-2.5 py-1 bg-emerald-500 text-primary-foreground text-xs font-bold rounded-full">
            Save 2.4%
          </span>
        </div>
      </div>

      <div className="pt-2 text-xs text-muted-foreground text-center">
        Rates updated in real-time from mid-market data
      </div>
    </div>
  );
};

export default HeroSection;
