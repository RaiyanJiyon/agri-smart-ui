'use client';

import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { Eyebrow } from '@/shared/components/layout/ui';
import featuresImg from '../../../../public/assets/features.jpg';
import Image from 'next/image';

const features = [
  {
    title: 'AI Crop Recommendation',
    body: "AgriSmart factors in your soil's nitrogen, phosphorus and potassium levels, pH, rainfall, temperature, and humidity to suggest the crops best suited to each field — so every planting decision starts from your own land's data.",
  },
  {
    title: 'Plant Disease Detection',
    body: 'Upload a photo of an affected crop and get an instant AI diagnosis, with the likely disease identified before it spreads through the field.',
  },
  {
    title: 'AI Farming Assistant',
    body: 'Ask farming questions any time and get instant, AI-powered answers — from planting windows to fertiliser timing.',
  },
  {
    title: 'Personalized Dashboard',
    body: 'See your recommendation history, diagnosis results, and farm activity together in one clear view.',
  },
  {
    title: 'Secure & Reliable Access',
    body: 'Safe login, multi-device support, and account recovery are built in, so you can reach your account from anywhere.',
  },
];

export function Features() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 md:py-24">
      <Eyebrow>Our Core Features</Eyebrow>
      <h2 className="mt-6 max-w-2xl text-3xl font-semibold leading-tight md:text-5xl">
        Powerful Features Behind Every Recommendation
      </h2>

      <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-start">
        <Image
          src={featuresImg}
          alt="Drone lowering a payload crate over misty fields"
          width={1024}
          height={1024}
          loading="lazy"
          className="aspect-square w-full rounded-[2rem] object-cover shadow-xl"
        />

        <div>
          {features.map((f, i) => {
            const open = i === active;
            return (
              <div key={f.title} className="border-b border-[#D4DAC8]">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span
                    className={`text-base font-medium md:text-lg ${open ? 'text-[#132A1D]' : 'text-[#68756B]'}`}
                  >
                    {f.title}
                  </span>
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-[#D4DAC8] text-[#132A1D]">
                    {open ? (
                      <Minus className="size-4" />
                    ) : (
                      <Plus className="size-4" />
                    )}
                  </span>
                </button>
                {open && (
                  <p className="pb-6 pr-10 text-sm leading-relaxed text-[#68756B]">
                    {f.body}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
