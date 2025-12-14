const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-card/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-copper-light flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-sm">M</span>
            </div>
            <div>
              <span className="font-serif font-semibold text-foreground">MediMuse Inc.</span>
              <span className="text-muted-foreground text-sm ml-2">StateSong® Technology</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="https://medimuse.net" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              medimuse.net
            </a>
            <span>•</span>
            <span>US Patent 10,369,323 B2</span>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {currentYear} MediMuse Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
