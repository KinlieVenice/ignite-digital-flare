const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-display text-lg font-bold tracking-tight">
          <span className="text-foreground">NEX</span>
          <span className="text-gradient-fire">FLARE</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} NEXFLARE. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
