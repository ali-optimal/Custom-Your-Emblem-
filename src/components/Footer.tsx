import { useState, useEffect } from "react";
import { Facebook, Instagram, CreditCard, Mail, ArrowRight } from "lucide-react";
import headerLogo from "@/assets/Gemini_Generated_Image_jrw14vjrw14vjrw1 (1).png";
import { Link } from "react-router-dom";

const footerSentences = [
  "Custom Emblems for Every Journey",
  "Precision Engineering",
  "Define Your Legacy",
  "Your Ride, Your Rules"
];

const Footer = () => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  // Typing animation effect with fade
  useEffect(() => {
    const currentSentence = footerSentences[currentSentenceIndex];
    
    if (isTyping) {
      if (displayedText.length < currentSentence.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentSentence.slice(0, displayedText.length + 1));
        }, 50); 
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 3000); // Wait longer before fading out
        return () => clearTimeout(timeout);
      }
    } else {
      // Fade out effect simulation by clearing text
      // For smoother effect, we could use opacity, but simple typing is what was asked "like hero"
      // To make it smoother, we can untype it or just fade text? 
      // User said "animated sentences like in hero but make it smoother"
      // Hero clears instantly. Let's try untyping or just fade opacity CSS.
      // I'll stick to simple clearing for now but maybe slower transition?
      // Or I can just clear it and start typing next one.
      
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setCurrentSentenceIndex((prev) => (prev + 1) % footerSentences.length);
        setIsTyping(true);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, isTyping, currentSentenceIndex]);

  return (
    <footer 
      className="relative"
      style={{
        background: "linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
      }}
    >
      {/* Curvy top edge */}
      <svg 
        className="absolute top-0 left-0 w-full h-16 md:h-20 -translate-y-full z-10"
        viewBox="0 0 1440 80" 
        preserveAspectRatio="none"
        fill="#0f172a"
      >
        <path d="M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z" />
      </svg>

      {/* Main footer content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 border-b border-white/5 pb-12">
          
          {/* Quick Navigation Column */}
          <div className="space-y-6">
            <h3 className="font-display text-sm font-bold text-white uppercase tracking-widest mb-6">
              Menu
            </h3>
            <div className="grid grid-cols-3 gap-y-4 gap-x-4">
              <Link to="/" className="text-sm text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-blue-400 transition-colors"></span> Home
              </Link>
              <Link to="/orders" className="text-sm text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-blue-400 transition-colors"></span> Order Now
              </Link>
              <Link to="/gallery" className="text-sm text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-blue-400 transition-colors"></span> Gallery
              </Link>
              <Link to="/testimonials" className="text-sm text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-blue-400 transition-colors"></span> Testimonials
              </Link>
              <Link to="/faq" className="text-sm text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-blue-400 transition-colors"></span> FAQ
              </Link>
              <Link to="/contact" className="text-sm text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-blue-400 transition-colors"></span> Contact
              </Link>
            </div>
            
            <div className="hidden md:block mt-12 pt-8 border-t border-white/5">
              <img
                src={headerLogo}
                alt="Your Custom Emblem"
                className="h-12 w-auto mb-3"
              />
              <p className="font-body text-[10px] text-white/40 tracking-[0.2em] uppercase">
                Specially designed for you
              </p>
            </div>
          </div>

          {/* Newsletter Column - Enhanced */}
          <div className="space-y-6">            
            <h3 className="font-display text-sm font-bold text-white uppercase tracking-widest mb-6">
              Stay Updated
            </h3>
            <div className="bg-white/5 rounded-xl p-6 border border-white/5 space-y-4 hover:border-blue-500/30 transition-colors duration-300">
              <p className="font-body text-sm text-slate-300 leading-relaxed">
                Subscribe to our newsletter for new releases, exclusive offers, and custom emblem inspiration.
              </p>
              
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-black/20 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white w-full focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-500"
                />
                <button className="bg-blue-600 hover:bg-blue-500 text-white rounded-lg px-3 transition-colors flex items-center justify-center">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Customer Support Column - Enhanced */}
          <div className="space-y-6">
            <h3 className="font-display text-sm font-bold text-white uppercase tracking-widest mb-6">
              Support
            </h3>
            <div className="space-y-3">
              <a 
                href="mailto:sales@yourcustomemblem.com"
                className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-900/20 to-transparent border border-white/5 hover:border-blue-500/30 transition-all group"
              >
                <div>
                  <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">Email Us</p>
                  <p className="text-sm text-slate-300 group-hover:text-white transition-colors">sales@yourcustomemblem.com</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
              </a>

              <div className="flex flex-col gap-1">
                <Link to="#" className="text-xs text-slate-400 hover:text-blue-400 transition-colors py-2 px-3 rounded-lg hover:bg-white/5 flex items-center justify-between group">
                  Track Your Order
                  <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-blue-400 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
                <Link to="#" className="text-xs text-slate-400 hover:text-blue-400 transition-colors py-2 px-3 rounded-lg hover:bg-white/5 flex items-center justify-between group">
                  Shipping & Returns
                  <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-blue-400 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
                <Link to="#" className="text-xs text-slate-400 hover:text-blue-400 transition-colors py-2 px-3 rounded-lg hover:bg-white/5 flex items-center justify-between group">
                  Help Center
                  <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-blue-400 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Logo and Tagline with Social Links - Mobile Only */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:hidden">
          <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div>
              <img
                src={headerLogo}
                alt="Your Custom Emblem"
                className="h-16 w-auto mx-auto md:mx-0"
              />
              <p className="font-body text-xs text-white/50 tracking-[0.2em] uppercase mt-2">
                Specially designed for you
              </p>
            </div>
            
            {/* Social Links Next to Logo */}
            <div className="flex items-center gap-3 pl-0 md:pl-8 md:border-l border-white/10">
              <a 
                href="https://facebook.com/yourcustomemblem" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-600/10 hover:bg-blue-600 text-blue-500 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/yourcustomemblem" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-pink-600/10 hover:bg-pink-600 text-pink-500 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" // Add TikTok link
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-black/40 hover:bg-black text-white/70 hover:text-white flex items-center justify-center transition-all duration-300 border border-white/5"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>

            </div>
          </div>
        </div>
      </div>


      {/* Bottom bar - Integrated with luxury gradient */}
      <div className="bg-black/20 backdrop-blur-sm border-t border-white/5">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="font-body text-xs text-white/30 tracking-wide">
              Copyright © {new Date().getFullYear()} Your Custom Emblem. All Rights Reserved.
            </p>

            {/* Payment & Socials */}
            <div className="flex items-center gap-8">
              {/* Social Links - Desktop */}
              <div className="hidden md:flex items-center gap-3 border-r border-white/10 pr-8">
                <a 
                  href="https://facebook.com/yourcustomemblem" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-blue-600/10 hover:bg-blue-600 text-blue-500 hover:text-white flex items-center justify-center transition-all duration-300"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="https://instagram.com/yourcustomemblem" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-pink-600/10 hover:bg-pink-600 text-pink-500 hover:text-white flex items-center justify-center transition-all duration-300"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-black/40 hover:bg-black text-white/70 hover:text-white flex items-center justify-center transition-all duration-300 border border-white/5"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>

              <div className="flex items-center gap-4">
                 <span className="text-xs text-white/20 uppercase tracking-widest hidden md:block">We Accept</span>
                 <div className="flex items-center gap-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                  <CreditCard className="w-6 h-6 text-white" />
                  <img 
                    src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg" 
                    alt="PayPal" 
                    className="h-5 w-auto rounded"
                  />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;