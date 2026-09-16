import { CtaBanner } from '@/features/landing/components/CtaBanner';
import { Hero } from '@/features/landing/components/Hero';
import { Footer } from '@/shared/components/layout/Footer';

export default function Home() {
  return (
    <div className="">
      <main>
        <Hero />
        <CtaBanner />
      </main>

      <Footer />
    </div>
  );
}
