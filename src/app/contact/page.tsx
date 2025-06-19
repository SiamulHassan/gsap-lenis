'use client';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import AnimatedSection from '@/components/sections/AnimatedSection';
import Lenis from 'lenis';
export default function ContactPage() {
	const pathname = usePathname();

	const lenisRef = useRef<Lenis>(null);

	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		});

		lenisRef.current = lenis;

		const raf = (time: number) => {
			lenis.raf(time);
			requestAnimationFrame(raf);
		};

		requestAnimationFrame(raf);
		lenis.scrollTo(0); // scroll to top
		return () => {
			lenis.destroy();
		};
	}, [pathname]);

	return (
		<>
			<AnimatedSection title='Contact Us' desc='Get in touch with our team.' />
			<AnimatedSection
				title='Follow Us'
				desc='Check out our social media handles.'
			/>
			<AnimatedSection title='Careers' desc='Join the animation revolution.' />
		</>
	);
}
