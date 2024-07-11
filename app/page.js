// pages/app/index.js (or pages/index.js if your structure is different)
import Link from 'next/link';
import RenderClient from '@/app/components/RenderClient'
import RenderServer from '@/app/components/RenderServer'
export default function Home() {
  return (
    <div className='p-20'>
        <main className="flex  justify-center gap-10 pb-20">
          <Link href="/home">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
        </main>
        <RenderClient />
        <RenderServer />
    </div>
  );
}
