import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Info, ArrowRight, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

const materials = [
  { id: "matt", label: "Stainless Steel matt finishing" },
  { id: "mirror", label: "Stainless Steel mirror finishing (similar to chrome finishing)" },
  { id: "gold", label: "Gold Plated" },
  { id: "painted", label: "Painted" },
];

const quantities = [
  { id: "1", label: "1 Emblem for US$100", price: 100 },
  { id: "2", label: "2 Emblems for US$150", price: 150 },
  { id: "3", label: "3 Emblems for US$200", price: 200 },
  { id: "4", label: "4 Emblems for US$250", price: 250 },
  { id: "5", label: "5 Emblems for US$300", price: 300 },
];

const shippingTypes = [
  { id: "standard", label: "Standard by post for US$20 (Between 3 to 5 weeks after shipping)", price: 20 },
  { id: "expedited", label: "Expedited by DHL for US$35 (Between 3 to 7 days after shipping)", price: 35 },
];

const OrderForm = () => {
  const [step, setStep] = useState(1);
  const formRef = useRef<HTMLDivElement>(null);
  const isFirstMount = useRef(true);
  const [formData, setFormData] = useState({
    customName: "",
    material: "mirror",
    quantity: "2",
    shippingType: "standard",
    promoCode: "",
    acceptedTerms: false,
  });

  // Scroll to top of form area when step changes
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    if (formRef.current) {
      const headerOffset = 100;
      const elementPosition = formRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }, [step]);

  const activeQuantity = quantities.find(q => q.id === formData.quantity);
  const activeShipping = shippingTypes.find(s => s.id === formData.shippingType);
  const subtotal = activeQuantity?.price || 0;
  const shippingFees = activeShipping?.price || 0;
  const grandTotal = subtotal + shippingFees;

  const handleNext = () => {
    if (step === 1 && !formData.acceptedTerms) {
      alert("Please accept the terms and conditions to proceed.");
      return;
    }
    setStep(2);
  };

  const currentMaterialLabel = materials.find(m => m.id === formData.material)?.label;

  // Material-based styling for preview
  const getEmblemStyle = () => {
    switch (formData.material) {
      case "mirror":
        return {
          background: "linear-gradient(145deg, #e0e0e0 0%, #ffffff 50%, #c0c0c0 100%)",
          textShadow: "2px 2px 4px rgba(0,0,0,0.3), -1px -1px 2px rgba(255,255,255,0.8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.2))",
          fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive",
          fontStyle: "italic",
        };
      case "matt":
        return {
          color: "#5a5a5a",
          textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
          filter: "none",
          fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive",
          fontStyle: "italic",
        };
      case "gold":
        return {
          background: "linear-gradient(145deg, #b8860b 0%, #ffd700 30%, #ffed4e 50%, #ffd700 70%, #b8860b 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "none",
          filter: "drop-shadow(0 2px 4px rgba(184,134,11,0.4)) drop-shadow(0 0 10px rgba(255,215,0,0.3))",
          fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive",
          fontStyle: "italic",
        };
      case "painted":
        return {
          color: "#1a1a1a",
          textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
          filter: "none",
          fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive",
          fontStyle: "italic",
        };
      default:
        return {};
    }
  };

  return (
    <section ref={formRef} className="bg-white py-20 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Step Indicator */}
        <div className="flex items-center justify-center mb-16">
          <div className="flex items-center w-full max-w-md">
            <div className="relative flex flex-col items-center flex-1">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${step >= 1 ? "bg-black border-black text-white" : "border-gray-300 text-gray-300"}`}>
                {step > 1 ? <Check size={20} /> : "1"}
              </div>
              <span className={`absolute -bottom-7 font-body text-xs uppercase tracking-widest whitespace-nowrap ${step >= 1 ? "text-black font-bold" : "text-gray-400"}`}>Emblem Details</span>
            </div>
            
            <div className={`flex-1 h-[2px] mx-4 transition-colors duration-300 ${step > 1 ? "bg-black" : "bg-gray-200"}`} />
            
            <div className="relative flex flex-col items-center flex-1">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${step === 2 ? "bg-black border-black text-white" : "border-gray-300 text-gray-300"}`}>
                2
              </div>
              <span className={`absolute -bottom-7 font-body text-xs uppercase tracking-widest whitespace-nowrap ${step === 2 ? "text-black font-bold" : "text-gray-400"}`}>Shipping Details</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-20">
          
          {/* Main Form Area */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-10"
                >
                  <h2 className="text-3xl font-heading text-black border-b pb-4">Your Emblem Details</h2>
                  
                  {/* Custom Name */}
                  <div className="space-y-4">
                    <Label htmlFor="customName" className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      Custom Name <span className="text-gray-400 font-normal normal-case">(The text that will be written on your Emblem)</span>
                    </Label>
                    <Input 
                      id="customName"
                      placeholder="Enter the name for your emblem"
                      className="h-12 border-gray-200 focus:border-black transition-all text-black bg-white"
                      value={formData.customName}
                      onChange={(e) => setFormData({...formData, customName: e.target.value})}
                    />
                  </div>

                  {/* Material Selection */}
                  <div className="space-y-4">
                    <Label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Select Material</Label>
                    <RadioGroup 
                      value={formData.material} 
                      onValueChange={(val) => setFormData({...formData, material: val})}
                      className="space-y-3"
                    >
                      {materials.map((m) => (
                        <div key={m.id} className="flex items-center space-x-3 group cursor-pointer">
                          <RadioGroupItem value={m.id} id={`material-${m.id}`} className="border-gray-300 text-black bg-white" />
                          <Label htmlFor={`material-${m.id}`} className="text-gray-600 font-body cursor-pointer transition-colors group-hover:text-black">
                            {m.label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Quantity Selection */}
                  <div className="space-y-4">
                    <Label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Select Quantity</Label>
                    <RadioGroup 
                      value={formData.quantity} 
                      onValueChange={(val) => setFormData({...formData, quantity: val})}
                      className="space-y-3"
                    >
                      {quantities.map((q) => (
                        <div key={q.id} className="flex items-center space-x-3 group">
                          <RadioGroupItem value={q.id} id={`qty-${q.id}`} className="border-gray-300 text-black bg-white" />
                          <Label htmlFor={`qty-${q.id}`} className="text-gray-600 font-body cursor-pointer transition-colors group-hover:text-black">
                            {q.label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                    <a href="#contact" className="text-xs text-blue-500 hover:underline font-body mt-2 inline-block">
                      Click here to contact us if you want more quantity
                    </a>
                  </div>

                  {/* Shipping Type */}
                  <div className="space-y-4">
                    <Label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Shipping Type (worldwide fixed rate)</Label>
                    <RadioGroup 
                      value={formData.shippingType} 
                      onValueChange={(val) => setFormData({...formData, shippingType: val})}
                      className="space-y-3"
                    >
                      {shippingTypes.map((s) => (
                        <div key={s.id} className="flex items-center space-x-3 group">
                          <RadioGroupItem value={s.id} id={`ship-${s.id}`} className="border-gray-300 text-black bg-white" />
                          <Label htmlFor={`ship-${s.id}`} className="text-gray-600 font-body cursor-pointer transition-colors group-hover:text-black">
                            {s.label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Promo Code */}
                  <div className="flex gap-4 max-w-sm">
                    <Input 
                      placeholder="Promo Code" 
                      className="h-10 border-gray-200 text-black bg-white"
                      value={formData.promoCode}
                      onChange={(e) => setFormData({...formData, promoCode: e.target.value})}
                    />
                    <Button variant="outline" className="border-gray-300 hover:bg-gray-50 uppercase tracking-widest text-xs h-10 px-8">Apply</Button>
                  </div>

                  {/* Important Notes */}
                  <div className="bg-gray-50 p-6 rounded-lg space-y-4 border border-gray-100">
                    <div className="flex items-start gap-3">
                      <Info size={18} className="text-red-600 shrink-0 mt-1" />
                      <div className="space-y-4 text-sm font-body leading-relaxed text-gray-600">
                        <p className="text-red-600 font-semibold">* We need approximately 3 weeks to ship the Emblems.</p>
                        <div className="space-y-2">
                          <p className="font-bold text-gray-800 uppercase text-xs">Note regarding the size:</p>
                          <p className="text-red-600">
                            * All prices above are for Emblems with length up to <span className="underline font-bold">20 cm (7.9 inches)</span> and are excluding any sort of clearance, taxes or customs fees.
                          </p>
                          <p>
                            If you want a size bigger than 20 cm (7.9 inches) make sure to <a href="#contact" className="text-blue-500 hover:underline">click here</a> in order to contact us before ordering.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <p className="font-bold text-gray-800 uppercase text-xs">Note regarding the design:</p>
                          <p className="text-red-600">
                            * After you complete your order, the design and sizes will be sent to you for confirmation before proceeding with the Emblem itself, the style of design will be similar to the pictures of the slideshow above and cannot be seen prior to ordering since each design is custom made.
                          </p>
                          <p>
                            In case you have your own design OR want another specific design/font make sure to <a href="#contact" className="text-blue-500 hover:underline">click here</a> in order to contact us before ordering.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="flex items-center space-x-3 p-2">
                    <Checkbox 
                      id="terms" 
                      className="bg-white border-gray-300"
                      checked={formData.acceptedTerms}
                      onCheckedChange={(checked) => setFormData({...formData, acceptedTerms: checked as boolean})}
                    />
                    <Label htmlFor="terms" className="text-sm text-gray-600 font-body leading-none cursor-pointer">
                      I HAVE READ THE IMPORTANT NOTES ABOVE AND ACCEPTED THE GENERAL <a href="#" className="font-bold text-blue-600 uppercase hover:underline">Terms and Conditions</a>
                    </Label>
                  </div>

                  <Button 
                    className="w-full h-14 bg-black hover:bg-gray-900 text-white uppercase tracking-[0.3em] font-bold text-lg rounded-none transition-all group"
                    onClick={handleNext}
                  >
                    Next <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-heading text-black border-b pb-4">Shipping Details</h2>
                  
                  <div className="space-y-4">
                    <Input placeholder="Name" className="h-12 border-gray-200 bg-white text-black" />
                    <Input placeholder="Email" type="email" className="h-12 border-gray-200 bg-white text-black" />
                    <Input placeholder="address" className="h-12 border-gray-200 bg-white text-black" />
                    <Input placeholder="city" className="h-12 border-gray-200 bg-white text-black" />
                    <Input placeholder="state" className="h-12 border-gray-200 bg-white text-black" />
                    <Input placeholder="country" className="h-12 border-gray-200 bg-white text-black" />
                    <Input placeholder="zipcode" className="h-12 border-gray-200 bg-white text-black" />
                    <Input placeholder="Phone number" className="h-12 border-gray-200 bg-white text-black" />
                    <Textarea 
                      placeholder="How did you find us ? ex:Word of mouth,Facebook,Instagram (if instagram ,what page)" 
                      className="min-h-[100px] border-gray-200 bg-white text-black"
                    />
                  </div>

                  {/* Payment Icons Placeholder */}
                  <div className="pt-8 flex flex-wrap items-center justify-center gap-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="font-bold text-[#003087] text-xl italic">PayPal</div>
                    <div className="font-bold text-[#1a1f71] text-xl italic underline uppercase">Visa</div>
                    <div className="font-bold text-red-500 text-xl italic">MasterCard</div>
                    <div className="font-bold text-orange-500 text-xl uppercase">Discover</div>
                    <div className="font-bold text-blue-400 text-xl uppercase">Amex</div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4 pt-8">
                    <Button 
                      variant="outline"
                      className="h-14 flex-1 border-black text-black hover:bg-gray-100 uppercase tracking-widest font-bold"
                      onClick={() => setStep(1)}
                    >
                      <ArrowLeft className="mr-2" size={20} /> Back
                    </Button>
                    <Button 
                      className="h-14 flex-[2] bg-black hover:bg-gray-900 text-white uppercase tracking-[0.2em] font-bold text-lg rounded-none transition-all group"
                    >
                      Proceed to Payment <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Sidebar - Order Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-gray-50 border border-gray-100 p-8 rounded-xl space-y-8">
              <h3 className="text-xl font-heading text-black tracking-wider uppercase border-b border-gray-200 pb-4">Your Order Info</h3>
              
              {/* Emblem Preview */}
              {formData.customName && (
                <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 p-8 rounded-lg border-2 border-gray-700 shadow-2xl">
                  <div className="flex flex-col items-center justify-center min-h-[120px]">
                    <h2 
                      className="text-4xl md:text-5xl font-bold text-center"
                      style={getEmblemStyle()}
                    >
                      {formData.customName}
                    </h2>
                  </div>
                </div>
              )}
              
              <div className="space-y-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Custom Name</span>
                  <span className="text-black font-body font-semibold">{formData.customName || "Not set yet"}</span>
                </div>
                
                <Separator className="bg-gray-200" />
                
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Material</span>
                  <span className="text-black font-body">{currentMaterialLabel}</span>
                </div>

                <Separator className="bg-gray-200" />

                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Quantity</span>
                  <span className="text-black font-body">{formData.quantity} {parseInt(formData.quantity) > 1 ? "Emblems" : "Emblem"}</span>
                </div>

                <Separator className="bg-gray-200" />

                <div className="space-y-2 pt-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 font-body">Sub-total</span>
                    <span className="text-black font-semibold">US${subtotal}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 font-body">Shipping Fees</span>
                    <span className="text-black font-semibold">US${shippingFees}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 font-body">Shipping Type</span>
                    <span className="text-black lowercase first-letter:uppercase">{formData.shippingType}</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-black/10 mt-6">
                  <div className="flex justify-between items-end">
                    <span className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400">Grand Total</span>
                    <span className="text-3xl font-heading text-black">US${grandTotal}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest leading-relaxed">
                  Secure Checkout Guaranteed <br />
                  Worldwide Shipping Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
