import Link from 'next/link';
export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow z-50 py-4 px-8 flex gap-6">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}