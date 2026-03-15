import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-3">
              <img src={logo} alt="NomadNest logo" className="w-8 h-8 object-contain" />
              <span className="text-lg font-semibold text-foreground">NomadNest</span>
            </div>
            <p className="text-base font-medium text-muted-foreground italic mb-4">
              Connecting currencies, connecting people.
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              We are building the safest P2P exchange for the Kingdom. Join the waitlist to be the first to swap.
            </p>
            <p className="text-xs text-muted-foreground/60">
              This is an MVP test. No real transactions are processed at this stage.
            </p>
          </div>

          <div className="md:text-right">
            <p className="text-sm text-muted-foreground mb-1">
              Built for students & professionals in KSA
            </p>
            <p className="text-xs text-muted-foreground/60">
              © {new Date().getFullYear()} NomadNest. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
