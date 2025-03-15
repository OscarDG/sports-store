'use client';

import Providers from '@/app/providers'
import Features from "./ui/Features";
import Header from "./ui/Header";
import Hero from "./ui/Hero";
import Collection from './ui/Collection';

export default function Home() {
  return (
    <>
        <Providers>
          <Header />
          <Hero />
          <Features />
          <Collection />
        </Providers>
    </>
  );
}
