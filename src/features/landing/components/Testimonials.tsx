import { Eyebrow } from '@/shared/components/layout/ui';

type Item = { name: string; quote: string; brand?: string };

const columns: Item[][] = [
  [
    {
      name: 'Robert Davis',
      quote:
        'AgriSmart told me to change my planting mix based on my soil report, and my yield improved noticeably this season.',
    },
    {
      brand: 'Minty',
      name: 'Minty',
      quote:
        'Our members log in from phones in the field and get a crop recommendation in under a minute. Adoption was instant.',
    },
  ],
  [
    {
      brand: 'Leafe',
      name: 'Leafe',
      quote:
        'The photo diagnosis caught leaf blight in one of our citrus blocks early. We treated it before it moved across the orchard.',
    },
    {
      name: 'David Wilson',
      quote:
        'I asked the assistant about fertiliser timing at midnight and had a clear answer right away.',
    },
  ],
  [
    {
      name: 'Maria Thompson',
      quote:
        'Seeing my past recommendations in one dashboard changed how I plan. I now treat each field on its own data.',
    },
    {
      brand: 'Iceberg',
      name: 'Iceberg',
      quote:
        'Soil values in, crop suggestions out. It is the simplest tool our agronomy team has rolled out.',
    },
  ],
  [
    {
      brand: 'luminous',
      name: 'luminous',
      quote:
        'Signing in works the same on every device, and even our older farmhands picked it up in one afternoon.',
    },
    {
      name: 'Grace Lin',
      quote:
        'Two seasons of following the recommendations and our input costs are down 28% with no drop in yield.',
    },
  ],
];

function Card({ item }: { item: Item }) {
  return (
    <div className="rounded-[1.75rem] border border-[#D4DAC8] bg-[#F2F4EA]/60 p-5 transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center gap-3">
        <span className="flex size-9 items-center justify-center rounded-full bg-[#132A1D] text-xs font-semibold text-[#FDFDF8]">
          {item.name.slice(0, 1)}
        </span>
        <span className="text-sm font-semibold">{item.name}</span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-[#68756B]">
        “{item.quote}”
      </p>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-16 text-center md:py-24">
      <Eyebrow>Testimonials</Eyebrow>
      <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-semibold leading-tight md:text-5xl">
        What Farmers & Partners Say About AgriSmart
      </h2>

      <div className="mt-12 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
        {columns.map((col, i) => (
          <div
            key={i}
            className={`flex flex-col gap-6 ${i % 2 === 1 ? 'lg:mt-10' : ''}`}
          >
            {col.map((item) => (
              <Card key={item.quote} item={item} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
