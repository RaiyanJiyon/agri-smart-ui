import { PillButton } from '@/shared/components/layout/ui';

export function Stats() {
  return (
    <section className="py-8 md:py-12">
      <div className="grid gap-10 rounded-[2rem] bg-[#132A1D] px-8 py-14 md:grid-cols-2 md:items-center md:px-14 md:py-20">
        <div>
          <p className="text-5xl font-semibold text-[#FDFDF8] md:text-7xl">
            50k+
          </p>
          <p className="mt-3 text-[#FDFDF8]/80">
            Crop Recommendations Generated
          </p>
          <p className="mt-2 max-w-xs text-sm text-[#FDFDF8]/55">
            Tens of thousands of fields planned with soil and weather data.
          </p>
        </div>
        <div>
          <p className="max-w-md text-sm leading-relaxed text-[#FDFDF8]/80 md:text-base">
            Real numbers from real farms: recommendations acted on, diseases
            caught early, and questions answered. Get started with AgriSmart
            today.
          </p>
          <div className="mt-6">
            <PillButton>Get Started</PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
