import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

interface HeroSectionProps {
  onFindMatch: () => void;
}

const HeroSection = ({ onFindMatch }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden">
      <div className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
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
              Skip the Bank Fees.{" "}
              <span className="text-primary">Connect & Swap Directly.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Exchange currency with verified peers — no bank fees, no markups. <span className="font-semibold text-foreground">Your first 3 matches are completely free.</span>
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.2, 0, 0, 1] }}
            className="md:sticky md:top-24"
          >
            <HowItWorksWidget />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const HowItWorksWidget = () => {
  return (
    <div className="rounded-xl p-6 bg-card shadow-card border border-border space-y-5">
      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
        How NomadNest Works
      </div>

      <div className="space-y-4">
        <div className="flex gap-4 items-start">
          <span className="shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">1</span>
          <div>
            <span className="text-sm font-semibold text-foreground block">Post your request</span>
            <span className="text-sm text-muted-foreground">Tell us what currency you have and what you need.</span>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <span className="shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">2</span>
          <div>
            <span className="text-sm font-semibold text-foreground block">Get matched</span>
            <span className="text-sm text-muted-foreground">We connect you with a verified peer. Uses 1 credit.</span>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <span className="shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">3</span>
          <div>
            <span className="text-sm font-semibold text-foreground block">Decide your rate together</span>
            <span className="text-sm text-muted-foreground">Chat, negotiate, and swap on your own terms.</span>
          </div>
        </div>
      </div>

      <div className="p-5 bg-emerald-50 rounded-lg border border-emerald-100 text-center">
        <span className="px-3 py-1 bg-emerald-500 text-primary-foreground text-xs font-bold rounded-full inline-block mb-2">
          No Card Required
        </span>
        <span className="block text-2xl font-bold text-emerald-900 tabular-nums">
          3 Free Matches
        </span>
        <span className="block text-sm text-emerald-700 mt-1">
          Start exchanging today — completely free
        </span>
        <span className="block text-xs text-emerald-600/70 mt-2">
          Need more? Additional matches are $10 each
        </span>
      </div>

      <div className="pt-1 text-xs text-muted-foreground text-center">
        You set the rate. We just make the introduction.
      </div>
    </div>
  );
};

export default HeroSection;
