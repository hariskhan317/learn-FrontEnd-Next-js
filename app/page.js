// pages/app/index.js (or pages/index.js if your structure is different)
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex h-screen justify-center gap-10 p-24">
      <Link href="/home">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/products">Products</Link>
    </main>
  );
}
