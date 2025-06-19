'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { usePathname } from 'next/navigation';
import AnimatedSection from '@/components/sections/AnimatedSection';

export default function AboutPage() {
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
			<AnimatedSection title='About Us' desc='We love smooth animations.' />
			<AnimatedSection
				title='Our Team'
				desc='Meet the creators of this demo.'
			/>
			<AnimatedSection
				title='Our Vision'
				desc='To animate the web beautifully.'
			/>
		</>
	);
}
