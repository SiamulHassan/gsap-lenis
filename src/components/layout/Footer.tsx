export default function Footer() {
	return (
		<footer className='bg-primary text-black py-6'>
			<div className='container mx-auto px-4 text-center'>
				<p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
			</div>
		</footer>
	);
}
