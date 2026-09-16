import { Eyebrow } from '@/shared/components/layout/ui';

const brands = [
  'Blossom',
  'Iceberg',
  'Leafe',
  'Minty',
  'luminous',
  'Blossom',
  'Iceberg',
];

export function TrustBar() {
  return (
    <section className="py-16 text-center md:py-24">
      <Eyebrow>Trusted by Top Agriculture Leader</Eyebrow>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
        {brands.map((b, i) => (
          <span
            key={`${b}-${i}`}
            className="text-xl font-semibold tracking-tight text-[#68756B]/60 transition-opacity hover:opacity-100 md:text-2xl"
            style={{
              opacity: i > 4 ? 0.35 : 0.8,
              fontFamily: 'var(--font-display)',
            }}
          >
            {b}
          </span>
        ))}
      </div>
    </section>
  );
}
