import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, ArrowDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import contactImage from "@/assets/ChatGPT Image Jan 9, 2026, 11_26_28 AM.png";

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

      {/* Hero Section - Luxury Redesign */}
      <section 
        className="relative h-[90vh] flex flex-col items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)" }}
      >
        {/* Animated Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              rotate: 360,
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-64 h-64 border border-white/10 rounded-full"
          />
          <motion.div
            animate={{
              rotate: -360,
              x: [0, -80, 0],
              y: [0, 100, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-white/10 rounded-[40%]"
          />
          <motion.div
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"
          />
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <div className="inline-block mb-6">
              <span className="py-1 px-3 border border-white/20 rounded-full text-[10px] md:text-xs font-body tracking-[0.3em] text-[#6898cc] uppercase bg-white/5 backdrop-blur-sm">
                Connect With Us
              </span>
            </div>
            
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tighter leading-none">
              LET'S CREATE<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">SOMETHING NEW</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-slate-400 font-body text-lg md:text-xl tracking-wide leading-relaxed">
              Experience the pinnacle of automotive customization. Reach out to our design experts today.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' })}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Scroll</span>
          <ArrowDown className="text-white/60 w-5 h-5" />
        </motion.div>

        {/* Angled Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg 
            className="relative block w-[calc(100%+1.3px)] h-8 md:h-16" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path d="M1200 120L0 120L0 0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Main Contact Section */}
      <main className="py-32 px-4 sm:px-6 bg-white relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Large Image - No borders or shadows as requested */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src={contactImage} 
                alt="Custom Emblem Craftsmanship" 
                className="w-full h-auto object-cover rounded-none"
              />
              {/* Optional subtle overlay to tie into theme if needed, but keeping it clean as requested */}
            </motion.div>

            {/* Right: Contact Form with 3D Creative Touches */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ perspective: "1200px" }}
            >
              <motion.div 
                whileHover={{ 
                  rotateX: 1, 
                  rotateY: -1, 
                  y: -10,
                  boxShadow: "0 40px 80px -15px rgba(104, 152, 204, 0.15)"
                }}
                className="bg-white rounded-3xl p-10 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border-2 border-[#0f172a]/10 relative overflow-hidden transition-all duration-500 hover:border-[#0f172a]/30"
              >
                {/* Decorative background element for the card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100px] -z-0" />
                
                <div className="relative z-10">
                  <h2 className="font-display text-4xl font-bold text-slate-900 mb-2">
                    Send Us a Message
                  </h2>
                  <p className="font-body text-slate-500 mb-10">
                    We typically respond to all inquiries within 24 business hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Name Field */}
                    <div className="space-y-3 group">
                      <Label htmlFor="name" className="font-body text-sm font-bold text-slate-700 uppercase tracking-widest pl-1">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full h-14 bg-slate-50/50 text-slate-900 border-slate-200 focus:border-[#6898cc] focus:ring-[#6898cc] rounded-xl transition-all duration-300"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-3">
                      <Label htmlFor="email" className="font-body text-sm font-bold text-slate-700 uppercase tracking-widest pl-1">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full h-14 bg-slate-50/50 text-slate-900 border-slate-200 focus:border-[#6898cc] focus:ring-[#6898cc] rounded-xl transition-all duration-300"
                      />
                    </div>

                    {/* Comments Field */}
                    <div className="space-y-3">
                      <Label htmlFor="comments" className="font-body text-sm font-bold text-slate-700 uppercase tracking-widest pl-1">
                        Message Details
                      </Label>
                      <Textarea
                        id="comments"
                        name="comments"
                        placeholder="Tell us about your project or ask a question..."
                        value={formData.comments}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-slate-50/50 text-slate-900 border-slate-200 focus:border-[#6898cc] focus:ring-[#6898cc] resize-none rounded-xl transition-all duration-300"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-16 bg-[#313b5e] hover:bg-[#1e7ca0] text-white font-body font-bold text-lg rounded-xl transition-all duration-500 shadow-xl hover:shadow-[#2596be]/20 group"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-3">
                          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          PROCESSING
                        </span>
                      ) : (
                        <span className="flex items-center gap-3 tracking-widest uppercase">
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                  
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;
