import Image from 'next/image';
import { Eyebrow, PillButton } from '@/shared/components/layout/ui';
import who1 from '../../../../public/assets/who-1.jpg';
import who2 from '../../../../public/assets/who-2.jpg';

export function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="grid gap-12 py-16 md:grid-cols-2 md:py-24"
    >
      <div>
        <Eyebrow>Who We Are</Eyebrow>
        <h2 className="mt-6 max-w-md text-3xl font-bold leading-tight md:text-5xl">
          We Help Farmers Grow Smarter, Not Harder
        </h2>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-[#68756B] md:text-base">
          AgriSmart is an AI-driven platform built for farmers. It turns your
          soil and weather data into clear crop recommendations, spots plant
          disease from a single photo, and puts expert guidance a question away
          — so every decision on your land is backed by data.
        </p>
        <div className="mt-8">
          <PillButton variant="dark">Know More</PillButton>
        </div>
      </div>

      <div className="relative">
        <Image
          src={who1}
          alt="Operator flying a spraying drone over a field at sunset"
          width={1024}
          height={768}
          loading="lazy"
          className="ml-auto w-[85%] rounded-[2rem] object-cover shadow-xl"
        />
        <Image
          src={who2}
          alt="Drone flying over rolling farmland"
          width={816}
          height={816}
          loading="lazy"
          className="-mt-16 w-1/2 rounded-[2rem] border-4 border-[#E7EBDA] object-cover shadow-xl"
        />
      </div>
    </section>
  );
}
