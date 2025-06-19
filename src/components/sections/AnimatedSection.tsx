'use client';
import { useRef, useEffect } from 'react';
import { setupGsapSectionAnimation } from '@/lib/gsapUtils';

type Props = { title: string; desc: string };
export default function AnimatedSection({ title, desc }: Props) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (ref.current) {
			setupGsapSectionAnimation(ref.current, ref.current);
		}
	}, []);

	return (
		<div
			ref={ref}
			className='h-screen flex flex-col items-center justify-center bg-gray-100 border-b'
		>
			<h2 className='text-4xl font-bold mb-4'>{title}</h2>
			<p className='text-lg max-w-xl text-center'>{desc}</p>
		</div>
	);
}
