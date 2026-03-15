import { motion } from "framer-motion";
import { useState } from "react";

const Calculator = () => {
  const [credits, setCredits] = useState(5);

  const totalCost = Math.max(0, (credits - 3) * 10);
  const freeCredits = Math.min(credits, 3);
  const paidCredits = Math.max(0, credits - 3);

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
            Simple, transparent pricing.
          </h2>
          <p className="text-muted-foreground mb-10">
            Each credit connects you with one verified match. Your first 3 are free.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0, 0, 1] }}
          className="rounded-xl border border-border bg-card shadow-card p-6 md:p-8"
        >
          <label className="block text-sm font-medium text-foreground mb-3">
            How many matches do you need?
          </label>
          <div className="flex items-center gap-4 mb-2">
            <input
              type="range"
              min={1}
              max={20}
              step={1}
              value={credits}
              onChange={(e) => setCredits(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer
                [&::-webkit-slider-track]:rounded-full [&::-webkit-slider-track]:bg-emerald-100
                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
                [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary
                [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-primary-foreground
                [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer"
            />
            <span className="text-xl font-bold text-foreground tabular-nums whitespace-nowrap min-w-[100px] text-right">
              {credits} credits
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            <div className="p-4 rounded-lg border border-border bg-muted/50">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Breakdown
              </span>
              <div className="mt-2 space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Free credits</span>
                  <span className="font-semibold text-foreground tabular-nums">{freeCredits}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Paid credits</span>
                  <span className="font-semibold text-foreground tabular-nums">{paidCredits} × $10</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg border border-emerald-100 bg-emerald-50">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                Your Total
              </span>
              <span className="block text-2xl font-bold text-emerald-900 tabular-nums mt-2">
                ${totalCost}
              </span>
              <span className="text-xs text-emerald-700 mt-1 block">
                {totalCost === 0 ? "All free — no card needed" : `${freeCredits} free + ${paidCredits} paid`}
              </span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            $10 per credit. You decide the exchange rate with your match — we just connect you.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Calculator;
