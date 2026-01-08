import { Facebook, Instagram, CreditCard } from "lucide-react";
import headerLogo from "@/assets/header logo.png";

const Footer = () => {
  const testimonials = [
    "Absolutely the best service! Super fast shipping and great communication.",
    "Thank you. Great stuff will be hearing from me again shortly :)",
    "Accurately described item, well made, perfect dimensions and great cooperation.",
  ];

  return (
    <footer className="relative bg-black">
      {/* Curvy top edge */}
      <svg 
        className="absolute top-0 left-0 w-full h-16 md:h-20 -translate-y-full z-10"
        viewBox="0 0 1440 80" 
        preserveAspectRatio="none"
        fill="black"
      >
        <path d="M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z" />
      </svg>

      {/* Main footer content */}
      <div className="container mx-auto px-6 py-12">
        {/* Logo */}
        <div className="mb-10 text-center md:text-left">
          <img
            src={headerLogo}
            alt="Your Custom Emblem"
            className="h-12 w-auto mx-auto md:mx-0"
          />
          <p className="font-body text-xs text-white/50 tracking-[0.2em] uppercase mt-1">
            Specially designed for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Testimonials Column */}
          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-4">
              Some Testimonials
            </h3>
            <div className="space-y-3">
              {testimonials.map((testimonial, index) => (
                <p key={index} className="font-body text-sm text-white/60 leading-relaxed">
                  -{testimonial}
                </p>
              ))}
            </div>
            <a 
              href="#" 
              className="inline-block mt-4 font-body text-sm transition-colors hover:underline"
              style={{ color: "rgb(104, 152, 204)" }}
            >
              Add my testimonial
            </a>
          </div>

          {/* Your Emblem Picture Column */}
          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-4">
              Your Emblem Picture
            </h3>
            <div className="space-y-4 font-body text-sm text-white/60 leading-relaxed">
              <p>
                - Make sure to send us your Emblem picture at{" "}
                <a 
                  href="mailto:sales@yourcustomemblem.com" 
                  className="transition-colors hover:underline"
                  style={{ color: "rgb(104, 152, 204)" }}
                >
                  sales@yourcustomemblem.com
                </a>{" "}
                once attached so that we post it in our Gallery!
              </p>
              <p>
                - Make sure to upload your picture on Facebook & Instagram and tag{" "}
                <a 
                  href="https://instagram.com/yourcustomemblem" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:underline"
                  style={{ color: "rgb(104, 152, 204)" }}
                >
                  @yourcustomemblem
                </a>{" "}
                !
              </p>
            </div>
          </div>

          {/* Method of Payment Column */}
          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-4">
              Method of Payment
            </h3>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white/10 rounded-lg border border-white/10">
                <CreditCard className="w-8 h-8 text-white/60" />
              </div>
              <div className="p-3 bg-white/10 rounded-lg border border-white/10">
                <img 
                  src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg" 
                  alt="PayPal" 
                  className="h-6 w-auto"
                />
              </div>
            </div>
          </div>

          {/* Customer Support Column */}
          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-4">
              Customer Support
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <span className="font-body text-sm text-white/60">Email:</span>
                <a 
                  href="mailto:sales@yourcustomemblem.com"
                  className="font-body text-sm transition-colors hover:underline"
                  style={{ color: "rgb(104, 152, 204)" }}
                >
                  sales@yourcustomemblem.com
                </a>
              </div>
              <a 
                href="#" 
                className="block font-body text-sm transition-colors hover:underline"
                style={{ color: "rgb(104, 152, 204)" }}
              >
                Shipping and Order Tracking
              </a>
              <a 
                href="#" 
                className="block font-body text-sm transition-colors hover:underline"
                style={{ color: "rgb(104, 152, 204)" }}
              >
                General Terms and Conditions
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar - Grey background */}
      <div className="bg-slate-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="font-body text-sm text-slate-400">
              Copyright © {new Date().getFullYear()} Your Custom Emblem. All Rights Reserved.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a 
                href="https://facebook.com/yourcustomemblem" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center transition-colors group"
                style={{ "--hover-bg": "rgb(104, 152, 204)" } as any}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgb(104, 152, 204)"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ""}
              >
                <Facebook className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://instagram.com/yourcustomemblem" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center transition-colors group"
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgb(104, 152, 204)"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ""}
              >
                <Instagram className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;