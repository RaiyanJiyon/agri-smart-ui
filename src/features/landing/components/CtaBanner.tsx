import { PillButton } from '@/shared/components/layout/ui';

export function CtaBanner() {
  return (
    <section className="py-8 md:py-12">
      <div className="rounded-[2rem] bg-[#132A1D] px-6 py-16 text-center md:px-16 md:py-20">
        <p className="mx-auto max-w-2xl text-xl font-medium leading-snug text-[#FDFDF8] md:text-3xl">
          Get AI-powered crop recommendations and disease alerts for your farm —
          sign up and get started in minutes.
        </p>
        <div className="mt-8">
          <PillButton>Get Started</PillButton>
        </div>
      </div>
    </section>
  );
}
