import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const feedItems = [
  { name: "A••••• K.", action: "needs USD → has SAR", badge: "University ID Verified" },
  { name: "L•••• M.", action: "has SAR → needs USD", badge: "Business Profile Verified" },
  { name: "O••• S.", action: "needs USD → has SAR", badge: "Student (KSU) Verified" },
  { name: "S••• A.", action: "has USD → needs SAR", badge: "Student (KAUST) Verified" },
  { name: "K••••• R.", action: "needs SAR → has USD", badge: "Professional Verified" },
  { name: "F••••• H.", action: "has USD → needs SAR", badge: "University ID Verified" },
  { name: "Y•••••• B.", action: "needs SAR → has USD", badge: "Student (KFUPM) Verified" },
];

const LiveFeed = () => {
  const [visibleItems, setVisibleItems] = useState(feedItems.slice(0, 5));
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleItems((prev) => {
        const currentFirst = feedItems.indexOf(prev[0]);
        const nextIndex = (currentFirst + 1) % feedItems.length;
        const newItems = [];
        for (let i = 0; i < 5; i++) {
          newItems.push(feedItems[(nextIndex + i) % feedItems.length]);
        }
        return newItems;
      });
      setKey((k) => k + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Live Exchange Requests
          </h2>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 border border-red-100">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-semibold text-red-600">LIVE</span>
          </span>
        </div>
        <p className="text-sm text-muted-foreground mb-2">Riyadh & Jeddah</p>

        <div className="feed-mask relative overflow-hidden" style={{ height: 320 }}>
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item, i) => (
              <motion.div
                key={`${key}-${item.name}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, delay: i * 0.04, ease: [0.2, 0, 0, 1] }}
                className="mb-3"
              >
                <div className="flex items-center justify-between p-4 bg-card rounded-lg border border-border shadow-card">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-foreground">{item.name}</span>
                      <span className="text-sm text-muted-foreground"> {item.action}</span>
                    </div>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 font-medium border border-emerald-100 shrink-0 hidden sm:inline">
                    {item.badge}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <p className="text-sm text-muted-foreground mt-4">
          Join <span className="font-semibold text-foreground">150+</span> testers connecting this week.
        </p>
      </div>
    </section>
  );
};

export default LiveFeed;
