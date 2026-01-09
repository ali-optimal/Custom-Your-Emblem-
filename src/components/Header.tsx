import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import headerLogo from "@/assets/Gemini_Generated_Image_jrw14vjrw14vjrw1 (1).png";

const navLinks = [
  { name: "Home", href: "/", type: "route" as const, hash: "#home" },
  { name: "Testimonials", href: "/testimonials", type: "route" as const },
  { name: "Order", href: "/orders", type: "route" as const },
  { name: "Gallery", href: "/gallery", type: "route" as const },
  { name: "FAQ", href: "/faq", type: "route" as const },
  { name: "Contact Us", href: "/contact", type: "route" as const },
];

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  const isHomePage = location.pathname === "/";
  // Always use luxury background to ensure it's visible at the top as requested
  const useLuxuryBg = true;

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

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveLink(location.hash || "#home");
    } else {
      setActiveLink(location.pathname);
    }
  }, [location.pathname, location.hash]);

  const getAnchorHref = (hashHref: string) => {
    return location.pathname === "/" ? hashHref : `/${hashHref}`;
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ease-out
          ${scrolled 
            ? "shadow-lg py-3 border-b border-white/10" 
            : "py-5"
          }
          ${!useLuxuryBg ? "bg-transparent" : ""}
        `}
        style={useLuxuryBg ? { background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)" } : {}}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo Section - Left */}
            <div className="flex flex-col">
              <img
                src={headerLogo}
                alt="Your Custom Emblem"
                className={`w-auto transition-all duration-500 ${scrolled ? "h-10" : "h-12"}`}
              />
              
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
              {navLinks.map((link) => {
                const isActive = activeLink === link.href || (link.hash && activeLink === link.hash);
                const linkContent = (
                  <>
                    <span 
                      className={`relative z-10 font-body tracking-[0.1em] uppercase font-semibold transition-all duration-300
                        ${scrolled ? "text-sm" : "text-base"}
                        ${isActive 
                          ? "" 
                          : "text-white"
                        }`}
                      style={isActive ? { color: "rgb(104, 152, 204)" } : {}}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.color = "rgb(104, 152, 204)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.color = "white";
                        }
                      }}
                    >
                      {link.name}
                    </span>
                    
                    {/* Animated underline */}
                    <span 
                      className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-500 ease-out
                        ${isActive 
                          ? "w-6 opacity-100" 
                          : "w-0 opacity-0 group-hover:w-5 group-hover:opacity-70"
                        }`}
                      style={{ background: "linear-gradient(to right, rgba(104, 152, 204, 0.6), rgb(104, 152, 204), rgba(104, 152, 204, 0.6))" }}
                    />
                    
                    {/* Subtle hover glow */}
                    <span 
                      className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </>
                );

                if (link.type === "route") {
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={(e) => {
                        if (link.hash && location.pathname === "/") {
                          e.preventDefault();
                          const element = document.querySelector(link.hash);
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                            setActiveLink(link.hash);
                          }
                        } else {
                          setActiveLink(link.href);
                        }
                      }}
                      className="group relative px-4 py-2"
                    >
                      {linkContent}
                    </Link>
                  );
                }

                return (
                  <a
                    key={link.name}
                    href={getAnchorHref(link.href)}
                    onClick={() => setActiveLink(link.href)}
                    className="group relative px-4 py-2"
                  >
                    {linkContent}
                  </a>
                );
              })}
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
          {navLinks.map((link, index) => {
            const isActive = activeLink === link.href || (link.hash && activeLink === link.hash);
            const commonProps = {
              onClick: (e: any) => {
                if (link.hash && location.pathname === "/") {
                  e.preventDefault();
                  const element = document.querySelector(link.hash);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                    setActiveLink(link.hash);
                  }
                } else {
                  setActiveLink(link.href);
                }
                setMobileMenuOpen(false);
              },
              className: `block py-4 px-4 font-body text-sm tracking-[0.12em] uppercase rounded-xl transition-all duration-300 mb-1
                ${isActive 
                  ? "text-primary font-medium bg-primary/5" 
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`,
              style: {
                opacity: mobileMenuOpen ? 1 : 0,
                transform: mobileMenuOpen ? "translateX(0)" : "translateX(20px)",
                transition: `all 0.4s ease-out ${index * 0.05}s`,
              },
            };

            if (link.type === "route") {
              return (
                <Link
                  key={link.name}
                  {...commonProps}
                  to={link.href}
                >
                  {link.name}
                </Link>
              );
            }

            return (
              <a
                key={link.name}
                {...commonProps}
                href={getAnchorHref(link.href)}
              >
                {link.name}
              </a>
            );
          })}
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
