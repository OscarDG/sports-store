'use client'
import Footer from "../ui/Footer";
import { CartProvider } from "../context/ProductsContext";

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div className="flex flex-col min-h-screen">
      <CartProvider>
        <main className="flex-grow">
          {children}
        </main>
      </CartProvider>
        <Footer />
    </div>
  );
}