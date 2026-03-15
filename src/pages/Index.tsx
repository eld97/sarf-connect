import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import LiveFeed from "@/components/LiveFeed";
import TrustModule from "@/components/TrustModule";
import Calculator from "@/components/Calculator";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import SignupModal from "@/components/SignupModal";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleFindMatch = () => {
    // Track event
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "LeadGen_Start", {
        event_category: "conversion",
      });
    }
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead");
    }
    setModalOpen(true);
  };

  const handleGetAccess = () => {
    // Track event
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "HighIntent_Pricing_Click", {
        event_category: "conversion",
      });
    }
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "InitiateCheckout");
    }
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container flex items-center justify-between h-14">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">S</span>
            </div>
            <span className="font-semibold text-foreground">Sarf Swap</span>
          </div>
          <button
            onClick={handleFindMatch}
            className="h-8 px-4 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary-hover active:scale-[0.98] transition-all duration-200"
          >
            Join Beta
          </button>
        </div>
      </nav>

      <HeroSection onFindMatch={handleFindMatch} />
      <LiveFeed />
      <TrustModule />
      <Calculator />
      <PricingSection onGetAccess={handleGetAccess} />
      <FAQSection />
      <Footer />

      <SignupModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Index;
