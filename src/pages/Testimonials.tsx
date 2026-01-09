import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import testimonialQuoteAnimation from "@/assets/lottie/testimonial-quote.json";
import TestimonialMarquee from "@/components/TestimonialMarquee";

type Testimonial = {
  id: number;
  username: string;
  country: string;
  countryCode: string;
  sentence: string;
};

const flagUrlFromIsoCode = (code: string) => {
  const normalized = code.trim().toLowerCase();
  if (!/^[a-z]{2}$/.test(normalized)) return "";
  return `https://flagcdn.com/w40/${normalized}.png`;
};

const flagUrlFromIsoCode2x = (code: string) => {
  const normalized = code.trim().toLowerCase();
  if (!/^[a-z]{2}$/.test(normalized)) return "";
  return `https://flagcdn.com/w80/${normalized}.png`;
};

const Testimonials = () => {
  const { toast } = useToast();

  const testimonials = useMemo<Testimonial[]>(
    () => [
      {
        id: 1,
        username: "Alex M.",
        country: "United States",
        countryCode: "US",
        sentence: "The emblem looks factory-perfect — clean edges, premium weight, and flawless finish.",
      },
      {
        id: 2,
        username: "Nadia K.",
        country: "Canada",
        countryCode: "CA",
        sentence: "Communication was excellent and the final result exceeded what I imagined.",
      },
      {
        id: 3,
        username: "Omar S.",
        country: "United Arab Emirates",
        countryCode: "AE",
        sentence: "Luxury quality. The detailing is sharp and the plating looks incredible in person.",
      },
      {
        id: 4,
        username: "Daniel R.",
        country: "United Kingdom",
        countryCode: "GB",
        sentence: "Fast shipping, careful packaging, and the emblem sits perfectly on the interior trim.",
      },
      {
        id: 5,
        username: "Lina P.",
        country: "Germany",
        countryCode: "DE",
        sentence: "Beautiful craftsmanship — it feels truly bespoke and elevates the whole cabin.",
      },
      {
        id: 6,
        username: "Hiro T.",
        country: "Japan",
        countryCode: "JP",
        sentence: "Precise sizing and premium materials. The finish is exactly as requested.",
      },
      {
        id: 7,
        username: "Sofia G.",
        country: "Spain",
        countryCode: "ES",
        sentence: "The design proofing process was smooth, and the final piece looks stunning.",
      },
      {
        id: 8,
        username: "Marco L.",
        country: "Italy",
        countryCode: "IT",
        sentence: "Perfect fit, no imperfections, and it instantly makes the car feel more exclusive.",
      },
      {
        id: 9,
        username: "Isabelle C.",
        country: "France",
        countryCode: "FR",
        sentence: "Elegant and premium. The emblem catches the light beautifully.",
      },
      {
        id: 10,
        username: "Ethan W.",
        country: "Australia",
        countryCode: "AU",
        sentence: "Exactly what I wanted — high-end look, durable build, and excellent service.",
      },
      {
        id: 11,
        username: "Priya N.",
        country: "India",
        countryCode: "IN",
        sentence: "Top-notch quality and very responsive support. Would order again.",
      },
      {
        id: 12,
        username: "Lucas B.",
        country: "Brazil",
        countryCode: "BR",
        sentence: "Incredible finish and attention to detail — truly a premium custom piece.",
      },
      {
        id: 13,
        username: "Mariam A.",
        country: "Saudi Arabia",
        countryCode: "SA",
        sentence: "Beautiful work. The emblem feels solid and the installation was easy.",
      },
      {
        id: 14,
        username: "Noah V.",
        country: "Netherlands",
        countryCode: "NL",
        sentence: "Clean design, flawless polishing, and it looks like an OEM upgrade.",
      },
      {
        id: 15,
        username: "Grace H.",
        country: "Singapore",
        countryCode: "SG",
        sentence: "Super premium feel — it turned out even better than the mockup.",
      },
    ],
    [],
  );

  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [comment, setComment] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);

  const gridVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.05 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0 },
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "Message received",
      description: "Thanks for your testimonial — we’ll review it shortly.",
    });

    setName("");
    setCountry("");
    setComment("");
    setImageFile(null);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Header />

      <main
        className="flex-1 pt-24"
        style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, rgba(104, 152, 204, 0.08) 38%, #ffffff 100%)",
        }}
      >
        {/* Hero */}
        <section
          className="relative overflow-hidden"
          style={{
            background:
              "radial-gradient(900px 420px at 20% 20%, rgba(104, 152, 204, 0.24) 0%, rgba(104, 152, 204, 0.00) 70%), radial-gradient(700px 380px at 85% 5%, rgba(72, 116, 163, 0.18) 0%, rgba(72, 116, 163, 0.00) 65%), linear-gradient(135deg, rgba(104, 152, 204, 0.12) 0%, rgba(88, 129, 173, 0.06) 45%, rgba(255,255,255, 1) 100%)",
          }}
        >
          {/* Animated geometric accents */}
          <motion.div
            aria-hidden="true"
            className="absolute top-16 left-6 w-44 h-44 rounded-full border"
            style={{ borderColor: "rgba(104, 152, 204, 0.28)" }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute top-44 left-24 w-20 h-20 rounded-full border"
            style={{ borderColor: "rgba(104, 152, 204, 0.22)" }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute -top-10 right-10 w-44 h-44 rounded-3xl border rotate-12"
            style={{ borderColor: "rgba(72, 116, 163, 0.25)" }}
            animate={{ rotate: [12, 16, 12] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute bottom-10 right-16 w-52 h-52 rounded-full border"
            style={{ borderColor: "rgba(104, 152, 204, 0.24)" }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute top-28 right-52 w-16 h-16 rounded-2xl border"
            style={{ borderColor: "rgba(104, 152, 204, 0.22)" }}
            animate={{ rotate: [0, 12, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute bottom-16 left-20 w-56 h-56 rounded-full blur-2xl"
            style={{ background: "rgba(104, 152, 204, 0.14)" }}
            animate={{ opacity: [0.55, 0.8, 0.55] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute top-10 left-1/2 -translate-x-1/2 w-[560px] h-[1px]"
            style={{ background: "linear-gradient(90deg, transparent, rgba(104, 152, 204, 0.45), transparent)" }}
            animate={{ opacity: [0.4, 0.85, 0.4] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />

          <div className="relative container mx-auto px-6 py-10 md:py-14">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="w-10 h-[1px] bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
                <span className="font-body text-xs tracking-[0.3em] uppercase text-slate-500">
                  Customer Words
                </span>
                <span className="w-10 h-[1px] bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
              </div>
              <div className="flex items-center gap-4">
                <h1 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
                  Testimonials
                </h1>
                <div className="hidden sm:block w-14 h-14 md:w-16 md:h-16">
                  <Lottie animationData={testimonialQuoteAnimation} loop autoplay />
                </div>
              </div>
              <p className="font-body text-slate-600 mt-3 leading-relaxed">
                Real feedback from customers who chose a premium custom emblem.
              </p>
            </motion.div>
          </div>
        </section>

        <TestimonialMarquee />

        <section className="container mx-auto px-6 pb-24 md:pb-32">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Cards */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between gap-4 mb-6">
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-slate-900">What people say</h2>
                <div className="hidden md:flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
                  <span className="text-xs font-body tracking-[0.25em] uppercase text-slate-500">15 Reviews</span>
                </div>
              </div>

              <motion.div
                variants={gridVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {testimonials.map((t) => (
                  <motion.div key={t.id} variants={cardVariants}>
                    <Card
                      className="bg-white text-slate-900 border-slate-200 shadow-glow hover:shadow-luxury transition-all duration-300 hover:-translate-y-1"
                      style={{
                        boxShadow:
                          "0 18px 45px -22px rgba(0,0,0,0.25), 0 0 60px rgba(104, 152, 204, 0.18)",
                      }}
                    >
                      <div
                        aria-hidden="true"
                        className="h-[2px] w-full"
                        style={{
                          background:
                            "linear-gradient(90deg, rgba(104, 152, 204, 0.0), rgba(104, 152, 204, 0.85), rgba(104, 152, 204, 0.0))",
                        }}
                      />
                      <CardHeader className="p-7 pb-4">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <CardTitle className="text-xl md:text-2xl font-display text-slate-900">
                              {t.username}
                            </CardTitle>
                            <div className="mt-2">
                              <Badge
                                variant="outline"
                                className="font-body tracking-wide border-slate-200 text-slate-700 bg-white"
                              >
                                <img
                                  src={flagUrlFromIsoCode(t.countryCode)}
                                  srcSet={`${flagUrlFromIsoCode2x(t.countryCode)} 2x`}
                                  alt={`${t.country} flag`}
                                  className="mr-2 h-4 w-6 rounded-sm border border-slate-200 object-cover"
                                  loading="lazy"
                                  onError={(e) => {
                                    e.currentTarget.style.display = "none";
                                  }}
                                />
                                {t.country}
                              </Badge>
                            </div>
                          </div>
                          <div className="text-primary/70 text-4xl leading-none select-none">“</div>
                        </div>
                      </CardHeader>
                      <CardContent className="px-7 pb-7 pt-0">
                        <p className="font-body text-base text-slate-700 leading-relaxed">{t.sentence}</p>
                        <div className="mt-6">
                          <Separator className="bg-slate-200" />
                          <div className="mt-4 flex items-center justify-between">
                            <span className="text-xs font-body tracking-[0.2em] uppercase text-slate-500">
                              Verified Customer
                            </span>
                            <span className="text-gradient-gold font-display text-sm font-semibold">Premium</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Form */}
            <div className="lg:sticky lg:top-28">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
              <Card className="bg-white text-slate-900 border-slate-200 shadow-luxury">
                <CardHeader>
                  <CardTitle className="font-display text-2xl text-slate-900">Add your testimonial</CardTitle>
                  <p className="font-body text-sm text-slate-600 mt-2">
                    Share your experience — we love seeing your custom emblem in the wild.
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-5" onSubmit={onSubmit}>
                    <div className="space-y-2">
                      <Label htmlFor="testimonial-name" className="font-body text-slate-700">
                        Name
                      </Label>
                      <Input
                        id="testimonial-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="bg-white text-slate-900 placeholder:text-slate-400 border-slate-200"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="testimonial-country" className="font-body text-slate-700">
                        Country
                      </Label>
                      <Input
                        id="testimonial-country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder="Your country"
                        className="bg-white text-slate-900 placeholder:text-slate-400 border-slate-200"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="testimonial-comment" className="font-body text-slate-700">
                        Comment
                      </Label>
                      <Textarea
                        id="testimonial-comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Write your testimonial..."
                        className="min-h-[120px] bg-white text-slate-900 placeholder:text-slate-400 border-slate-200"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="testimonial-image" className="font-body text-slate-700">
                        Upload image
                      </Label>
                      <Input
                        id="testimonial-image"
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImageFile(e.target.files?.[0] ?? null)}
                        className="bg-white text-slate-900 border-slate-200"
                      />
                      {imageFile ? (
                        <p className="font-body text-xs text-slate-500">Selected: {imageFile.name}</p>
                      ) : (
                        <p className="font-body text-xs text-slate-500">
                          Optional — add a photo of your emblem.
                        </p>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full text-white transition-all duration-300 hover:opacity-90 shadow-lg"
                      style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)" }}
                    >
                      Send message
                    </Button>

                    <p className="font-body text-xs text-slate-500 leading-relaxed">
                      By submitting, you allow us to feature your testimonial on our website.
                    </p>
                  </form>
                </CardContent>
              </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Testimonials;
