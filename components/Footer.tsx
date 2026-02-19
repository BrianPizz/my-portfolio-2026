const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-8 border-t border-white/10"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-white/70 text-sm text-readable">
          © {year} Brian Pizzimenti. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
