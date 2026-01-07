import { useState } from "react";
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-6">
        {/* Logo Section - Centered */}
        <div className="flex flex-col items-center py-5 border-b border-gray-100">
          <h1 className="text-2xl md:text-3xl font-display font-semibold tracking-[0.2em] uppercase text-primary">
            Your Custom Emblem
          </h1>
          <span className="text-xs md:text-sm font-body text-gray-400 tracking-[0.3em] mt-1">
            Specially designed for you
          </span>
        </div>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden lg:flex items-center justify-center gap-10 py-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`relative font-body text-sm tracking-wide transition-colors duration-300 pb-2
                ${activeLink === link.href 
                  ? "text-primary font-medium" 
                  : "text-gray-500 hover:text-primary"
                }
                after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0 
                after:bg-primary after:transition-transform after:duration-300 after:origin-center
                ${activeLink === link.href 
                  ? "after:scale-x-100" 
                  : "after:scale-x-0 hover:after:scale-x-100"
                }
              `}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex justify-center py-3">
          <button
            className="p-2 text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-100 animate-fade-in bg-white">
            <div className="flex flex-col items-center gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.href);
                    setMobileMenuOpen(false);
                  }}
                  className={`font-body text-sm tracking-wide transition-colors duration-300 py-2
                    ${activeLink === link.href 
                      ? "text-primary font-medium" 
                      : "text-gray-500 hover:text-primary"
                    }
                  `}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
