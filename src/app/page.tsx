import { CtaBanner } from '@/features/landing/components/CtaBanner';
import { Features } from '@/features/landing/components/Features';
import { Hero } from '@/features/landing/components/Hero';
import { Newsroom } from '@/features/landing/components/Newsroom';
import { Products } from '@/features/landing/components/Products';
import { Stats } from '@/features/landing/components/Stats';
import { Testimonials } from '@/features/landing/components/Testimonials';
import { TrustBar } from '@/features/landing/components/TrustBar';
import { WhoWeAre } from '@/features/landing/components/WhoWeAre';
import { Footer } from '@/shared/components/layout/Footer';

export default function Home() {
  return (
    <div className="">
      <main>
        <Hero />
        <Features />
        <Newsroom />
        <CtaBanner />
        <Products />
        <Testimonials />
        <Stats />
        <TrustBar />
        <WhoWeAre />
      </main>

      <Footer />
    </div>
  );
}
