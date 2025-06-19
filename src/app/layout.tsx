import Navbar from '@/components/sections/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = { title: 'AnimatedApp' };

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>
				<Navbar />
				<main className=''>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
