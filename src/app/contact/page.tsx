'use client';
import { useEffect } from 'react';
import lenis from '@/lib/lenis';
import { usePathname } from 'next/navigation';
import AnimatedSection from '@/components/sections/AnimatedSection';

export default function ContactPage() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
    lenis.start();
  }, [pathname]);

  useEffect(() => {
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <AnimatedSection title="Contact Us" desc="Get in touch with our team." />
      <AnimatedSection title="Follow Us" desc="Check out our social media handles." />
      <AnimatedSection title="Careers" desc="Join the animation revolution." />
    </>
  );
}