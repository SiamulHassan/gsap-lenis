'use client';
import { useEffect } from 'react';
import lenis from '@/lib/lenis';
import { usePathname } from 'next/navigation';
import AnimatedSection from '@/components/sections/AnimatedSection';

export default function AboutPage() {
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
