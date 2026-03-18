import { motion } from "framer-motion";

const Calculator = () => {
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
            Start free. Pay only when you need more matches.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
            className="rounded-xl border border-border bg-card shadow-card p-5 text-center"
          >
            <span className="block text-3xl font-bold text-foreground">3</span>
            <span className="block text-sm font-semibold text-primary mt-1">Free Matches</span>
            <span className="block text-xs text-muted-foreground mt-2">No card needed</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08, ease: [0.2, 0, 0, 1] }}
            className="rounded-xl border border-border bg-card shadow-card p-5 text-center"
          >
            <span className="block text-3xl font-bold text-foreground">$10</span>
            <span className="block text-sm font-semibold text-muted-foreground mt-1">Per Extra Match</span>
            <span className="block text-xs text-muted-foreground mt-2">Buy as you go</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.16, ease: [0.2, 0, 0, 1] }}
            className="rounded-xl border border-border bg-card shadow-card p-5 text-center"
          >
            <span className="block text-3xl font-bold text-foreground">$0</span>
            <span className="block text-sm font-semibold text-muted-foreground mt-1">Rate Markup</span>
            <span className="block text-xs text-muted-foreground mt-2">You set the rate</span>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-sm text-muted-foreground mt-6 text-center"
        >
          1 credit = 1 verified match. You and your match decide the exchange rate together.
        </motion.p>
      </div>
    </section>
  );
};

export default Calculator;
