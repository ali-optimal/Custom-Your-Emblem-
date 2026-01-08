import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrdersHero from "@/components/OrdersHero";
import OrderForm from "@/components/OrderForm";

const Orders = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-[88px]">
        <OrdersHero />
        <OrderForm />
      </main>
      <Footer />
    </div>
  );
};

export default Orders;
