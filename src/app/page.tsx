'use client';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { usePathname } from 'next/navigation';
import AnimatedSection from '@/components/sections/AnimatedSection';

export default function HomePage() {
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
			<AnimatedSection title='Welcome Home' desc='This is the home page.' />
			<AnimatedSection
				title='Our Mission'
				desc='Animating with GSAP and Lenis.'
			/>
			<AnimatedSection
				title='Get Started'
				desc='Use this setup to learn scroll animations.'
			/>
		</>
	);
}
