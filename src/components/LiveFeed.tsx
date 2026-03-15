import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const feedItems = [
  { name: "Ahmed K.", action: "needs USD", rate: "3.81", badge: "University ID Verified", university: "KSU" },
  { name: "Layla M.", action: "has SAR", rate: "3.82", badge: "Business Profile Verified", university: "" },
  { name: "Omar S.", action: "needs EUR", rate: "4.62", badge: "Student (KSU) Verified", university: "KSU" },
  { name: "Sara A.", action: "has USD", rate: "3.80", badge: "Student (KAUST) Verified", university: "KAUST" },
  { name: "Khaled R.", action: "needs GBP", rate: "4.71", badge: "Professional Verified", university: "" },
  { name: "Fatima H.", action: "has EGP", rate: "0.12", badge: "University ID Verified", university: "KAU" },
  { name: "Youssef B.", action: "needs SAR", rate: "3.83", badge: "Student (KFUPM) Verified", university: "KFUPM" },
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
                      <span className="text-sm font-semibold text-foreground tabular-nums"> @ {item.rate}</span>
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
          Join <span className="font-semibold text-foreground">150+</span> testers swapping currency this week.
        </p>
      </div>
    </section>
  );
};

export default LiveFeed;
