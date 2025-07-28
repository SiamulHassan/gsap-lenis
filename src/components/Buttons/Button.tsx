export default function Button({
	children,
	variant = 'primary',
	onClick,
}: any) {
	const styles = 'px-4 py-2 rounded-md font-medium transition-all';
	const variants: any = {
		primary: 'bg-blue-500 text-white hover:bg-blue-600',
		secondary: 'bg-gray-500 text-white hover:bg-gray-600',
		tertiary: 'bg-red-500 text-white hover:bg-red-600',
	};

	return (
		<button
			onClick={onClick}
			className={`cursor-pointer ${styles} ${variants[variant]}`}
		>
			{children}
		</button>
	);
}
