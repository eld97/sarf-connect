import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const currencies = ["USD", "SAR"];

const SignupModal = ({ isOpen, onClose }: SignupModalProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", organization: "", currency: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Track event
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "CompleteRegistration", {
        event_category: "conversion",
      });
    }
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "CompleteRegistration");
    }
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50" onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
          className="bg-card rounded-xl p-6 md:p-8 max-w-md w-full shadow-elevated border border-border relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>

          {!submitted ? (
            <>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 mb-4">
                  <span className="text-xs font-semibold text-emerald-700">Private Beta</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  Join the founding members
                </h3>
                <p className="text-sm text-muted-foreground">
                  We're currently in private beta for KSU/KAUST students. Enter your details to secure your founding member rate.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                  <input
                    required
                    maxLength={100}
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Ahmed Al-Rashid"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input
                    required
                    maxLength={255}
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="ahmed@ksu.edu.sa"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">University / Company</label>
                  <input
                    required
                    maxLength={100}
                    type="text"
                    value={form.organization}
                    onChange={(e) => setForm({ ...form, organization: e.target.value })}
                    className="w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="King Saud University"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">What currency do you need?</label>
                  <select
                    required
                    value={form.currency}
                    onChange={(e) => setForm({ ...form, currency: e.target.value })}
                    className="w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select currency</option>
                    {currencies.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <Button variant="hero" size="lg" className="w-full" type="submit">
                  Secure My Spot
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎉</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Thanks for your interest!
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                We are validating demand. If you are selected for the beta, you will get{" "}
                <span className="font-semibold text-foreground">3 free credits to start matching</span>.
              </p>
              <p className="text-xs text-muted-foreground">
                We'll reach out to <span className="font-medium">{form.email}</span> within 48 hours.
              </p>
              <Button variant="outline" size="default" className="mt-6" onClick={onClose}>
                Close
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default SignupModal;
