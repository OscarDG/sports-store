import Providers from '@/app/providers'
import Features from "@/app/ui/Features";
import Header from "@/app/ui/Header";
import Hero from "@/app/ui/Hero";
import Collection from '@/app/ui/Collection';
import Footer from './ui/Footer';

export default function Home() {
  return (
    <>
        <Providers>
          <Header />
          <Hero />
          <Features />
          <Collection />
          <Footer />
        </Providers>
    </>
  );
}
