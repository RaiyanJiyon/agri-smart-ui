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
    <div className="bg-[#132A1D] p-3 sm:p-5">
      <div className="mx-auto max-w-[1360px]">
        <Hero />
      </div>
      <main className="mt-4 rounded-[2rem] bg-[#E7EBDA] px-5 sm:px-8 lg:px-12">
        <TrustBar />
        <WhoWeAre />
        <Products />
        <Features />
        <CtaBanner />
        <Newsroom />
        <Testimonials />
        <Stats />
      </main>

      <Footer />
    </div>
  );
}
