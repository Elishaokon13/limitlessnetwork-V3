'use client'
import Hero from './components/Hero';
import Features from './components/Features';
import Navbar from './components/Navbar';

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
    </>
  );
}