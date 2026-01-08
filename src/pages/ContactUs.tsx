import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ContactUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comments: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", comments: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-black pt-32 pb-24 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full border border-white/10 opacity-30" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full border border-white/5 opacity-40" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-white/40" />
              <span className="font-body text-xs tracking-[0.3em] uppercase text-white/60">
                Get In Touch
              </span>
              <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-white/40" />
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Contact Us
            </h1>
            
            <p className="text-white/70 font-body text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Have a question or ready to create your custom emblem? We're here to help!
            </p>
          </motion.div>
        </div>

        {/* Wavy bottom edge */}
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none rotate-180">
          <svg 
            className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]" 
            data-name="Layer 1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              className="fill-slate-50"
            ></path>
          </svg>
        </div>
      </section>

      {/* Contact Section */}
      <main className="py-20 px-4 sm:px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 sm:gap-12">
            {/* Left: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-slate-200">
                <h2 className="font-display text-3xl font-bold text-slate-800 mb-6">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-body text-sm font-medium text-slate-700">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full h-12 bg-white text-slate-900 border-slate-300 focus:border-[#6898cc] focus:ring-[#6898cc]"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-body text-sm font-medium text-slate-700">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full h-12 bg-white text-slate-900 border-slate-300 focus:border-[#6898cc] focus:ring-[#6898cc]"
                    />
                  </div>

                  {/* Comments Field */}
                  <div className="space-y-2">
                    <Label htmlFor="comments" className="font-body text-sm font-medium text-slate-700">
                      Comments *
                    </Label>
                    <Textarea
                      id="comments"
                      name="comments"
                      placeholder="Tell us about your custom emblem project..."
                      value={formData.comments}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-white text-slate-900 border-slate-300 focus:border-[#6898cc] focus:ring-[#6898cc] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-[#6898cc] hover:bg-[#5a86b8] text-white font-body font-semibold text-base rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Right: Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-xl p-6 sm:p-8 text-white h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-[#6898cc]/20 rounded-lg">
                    <Mail className="w-6 h-6 text-[#6898cc]" />
                  </div>
                  <h2 className="font-display text-2xl font-bold">
                    Contact Information
                  </h2>
                </div>

                <div className="space-y-6">
                  <p className="font-body text-white/80 leading-relaxed">
                    If you have any questions please check the <a href="/faq" className="text-[#6898cc] hover:underline font-semibold">FAQ page</a> for an overview of the most frequently asked questions, or contact us using e-mail.
                  </p>

                  <div className="pt-6 border-t border-white/10">
                    <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                      <Mail className="w-5 h-5 text-[#6898cc]" />
                      Email
                    </h3>
                    <a 
                      href="mailto:sales@yourcustomemblem.com"
                      className="font-body text-xl text-[#6898cc] hover:text-[#7da8d8] transition-colors duration-300 break-all"
                    >
                      sales@yourcustomemblem.com
                    </a>
                  </div>

                  {/* Quick Info Badges */}
                  <div className="pt-6 space-y-3">
                    <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-body text-sm font-semibold">Fast Response</p>
                        <p className="font-body text-xs text-white/60">We reply within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-body text-sm font-semibold">Expert Support</p>
                        <p className="font-body text-xs text-white/60">Dedicated design team</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;
