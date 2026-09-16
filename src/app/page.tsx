import { CtaBanner } from '@/features/landing/components/CtaBanner';
import { Features } from '@/features/landing/components/Features';
import { Hero } from '@/features/landing/components/Hero';
import { Footer } from '@/shared/components/layout/Footer';

export default function Home() {
  return (
    <div className="">
      <main>
        <Hero />
        <Features />
        <CtaBanner />
      </main>

      <Footer />
    </div>
  );
}
