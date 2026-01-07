import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Order", href: "#order" },
  { name: "Gallery", href: "#gallery" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact Us", href: "#contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b border-white/10
          ${scrolled 
            ? "bg-black/98 shadow-lg backdrop-blur-md py-3" 
            : "bg-black py-5"
          }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo Section - Left */}
            <div className="flex flex-col">
              <h1 
                className={`font-display font-semibold tracking-[0.15em] uppercase text-white transition-all duration-500
                  ${scrolled ? "text-lg md:text-xl" : "text-xl md:text-2xl"}`}
              >
                Your Custom Emblem
              </h1>
              
              <div className="flex items-center gap-2 mt-1">
                <span className="w-6 h-[1px] bg-gradient-to-r from-white/40 to-transparent" />
                <span 
                  className={`font-body text-white/60 tracking-[0.2em] uppercase transition-all duration-500
                    ${scrolled ? "text-[9px]" : "text-[10px] md:text-xs"}`}
                >
                  Specially designed for you
                </span>
              </div>
            </div>

            {/* Desktop Navigation - Right */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className="group relative px-4 py-2"
                >
                  <span 
                    className={`relative z-10 font-body text-sm tracking-[0.1em] uppercase transition-all duration-300
                      ${activeLink === link.href 
                        ? "text-primary font-medium" 
                        : "text-white/70 group-hover:text-primary"
                      }`}
                  >
                    {link.name}
                  </span>
                  
                  {/* Animated underline */}
                  <span 
                    className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-primary/60 via-primary to-primary/60 rounded-full transition-all duration-500 ease-out
                      ${activeLink === link.href 
                        ? "w-6 opacity-100" 
                        : "w-0 opacity-0 group-hover:w-5 group-hover:opacity-70"
                      }`}
                  />
                  
                  {/* Subtle hover glow */}
                  <span 
                    className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative p-3 text-white/70 hover:text-primary transition-colors duration-300 group z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="absolute inset-0 rounded-full bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-300" />
              <span className="relative z-10">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300
          ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div 
        className={`lg:hidden fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transition-transform duration-500 ease-out
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close button */}
        <button
          className="absolute top-5 right-5 p-2 text-muted-foreground hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X size={24} />
        </button>

        {/* Logo in sidebar */}
        <div className="pt-16 px-6 pb-6 border-b border-primary/10">
          <h2 className="font-display font-semibold text-lg tracking-[0.1em] uppercase text-gradient-luxury">
            Your Custom Emblem
          </h2>
          <p className="font-body text-[10px] text-muted-foreground tracking-[0.15em] uppercase mt-1">
            Specially designed for you
          </p>
        </div>

        {/* Nav links */}
        <nav className="py-6 px-4">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveLink(link.href);
                setMobileMenuOpen(false);
              }}
              className={`block py-4 px-4 font-body text-sm tracking-[0.12em] uppercase rounded-xl transition-all duration-300 mb-1
                ${activeLink === link.href 
                  ? "text-primary font-medium bg-primary/5" 
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              style={{
                opacity: mobileMenuOpen ? 1 : 0,
                transform: mobileMenuOpen ? "translateX(0)" : "translateX(20px)",
                transition: `all 0.4s ease-out ${index * 0.05}s`,
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Decorative element */}
        <div className="absolute bottom-8 left-6 right-6">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>
      </div>
    </>
  );
};

export default Header;
