import { Eyebrow, PillButton } from '@/shared/components/layout/ui';
import n1 from '../../../../public/assets/news-1.jpg';
import n2 from '../../../../public/assets/news-2.jpg';
import n3 from '../../../../public/assets/news-3.jpg';
import Image from 'next/image';

const posts = [
  {
    img: n1,
    tag: 'AI Advisory',
    title:
      'How AI crop recommendations are helping smallholder farmers choose the right crop.',
    date: 'October 30, 2025',
  },
  {
    img: n2,
    tag: 'Crop Health',
    title:
      '5 early signs of plant disease to watch for, and what a photo diagnosis can reveal.',
    date: 'October 20, 2025',
  },
  {
    img: n3,
    tag: 'Soil Data',
    title:
      'How soil data on NPK and pH improves yield predictions season after season.',
    date: 'October 10, 2025',
  },
];

export function Newsroom() {
  return (
    <section id="newsroom" className="py-16 md:py-24">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Eyebrow>Newsroom</Eyebrow>
          <h2 className="mt-6 max-w-lg text-3xl font-bold leading-tight md:text-5xl">
            Insights, Trends & Stories From Smart Farming
          </h2>
        </div>
        <div className="max-w-sm">
          <p className="text-sm leading-relaxed text-[#68756B]">
            Explore the latest articles, guides, and perspectives on how AI is
            helping farmers make better decisions, season after season.
          </p>
          <div className="mt-5">
            <PillButton variant="dark">Explore More</PillButton>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <article
            key={p.title}
            className="rounded-[2rem] bg-[#F2F4EA] p-3 transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <Image
              src={p.img}
              alt={p.title}
              width={944}
              height={704}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
            />
            <div className="p-4">
              <span className="inline-flex rounded-full border border-[#D4DAC8] px-3 py-1 text-xs text-[#68756B]">
                {p.tag}
              </span>
              <h3 className="mt-4 text-sm font-medium leading-relaxed md:text-base">
                {p.title}
              </h3>
              <p className="mt-6 text-xs text-[#68756B]">{p.date}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
