import { CtaBanner } from '@/features/landing/components/CtaBanner';
import { Features } from '@/features/landing/components/Features';
import { Hero } from '@/features/landing/components/Hero';
import { Newsroom } from '@/features/landing/components/Newsroom';
import { Footer } from '@/shared/components/layout/Footer';

export default function Home() {
  return (
    <div className="">
      <main>
        <Hero />
        <Features />
        <Newsroom />
        <CtaBanner />
      </main>

      <Footer />
    </div>
  );
}
