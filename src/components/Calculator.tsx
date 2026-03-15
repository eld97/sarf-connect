import { motion } from "framer-motion";
import { useState } from "react";

const Calculator = () => {
  const [amount, setAmount] = useState(10000);

  const bankFee = Math.round(amount * 0.025);
  const badRate = Math.round(amount * 0.015);
  const bankTotal = bankFee + badRate;
  const peerSaving = Math.round(amount * 0.048);

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
            Calculate what you could save.
          </h2>
          <p className="text-muted-foreground mb-10">
            See how much you keep in your pocket with peer swaps.
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
            Amount to exchange
          </label>
          <div className="flex items-center gap-4 mb-2">
            <input
              type="range"
              min={1000}
              max={50000}
              step={500}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer
                [&::-webkit-slider-track]:rounded-full [&::-webkit-slider-track]:bg-emerald-100
                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
                [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary
                [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-primary-foreground
                [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer"
            />
            <span className="text-xl font-bold text-foreground tabular-nums whitespace-nowrap min-w-[120px] text-right">
              {amount.toLocaleString()} SAR
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            <div className="p-4 rounded-lg border border-border bg-muted/50">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Bank / Exchange Office
              </span>
              <span className="block text-2xl font-bold text-foreground tabular-nums mt-2">
                −{bankTotal.toLocaleString()} SAR
              </span>
              <span className="text-xs text-muted-foreground mt-1 block">
                {bankFee.toLocaleString()} fee + {badRate.toLocaleString()} bad rate spread
              </span>
            </div>

            <div className="p-4 rounded-lg border border-emerald-100 bg-emerald-50">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                Sarf Swap Saving
              </span>
              <span className="block text-2xl font-bold text-emerald-900 tabular-nums mt-2">
                +{peerSaving.toLocaleString()} SAR
              </span>
              <span className="text-xs text-emerald-700 mt-1 block">
                Keep the spread. Zero fees.
              </span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            Keep the spread for yourself. We don't charge fees — we just help you match.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Calculator;
