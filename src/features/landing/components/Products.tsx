import {
  ArrowUpRight,
  BarChart3,
  Leaf,
  MessageCircle,
  ScanLine,
  ShieldCheck,
} from 'lucide-react';
import { Eyebrow, PillButton } from '@/shared/components/layout/ui';

const features = [
  {
    Icon: Leaf,
    name: 'AI Crop Recommendation',
    desc: "Personalized crop suggestions based on your soil's NPK levels, pH, rainfall, temperature, and humidity.",
  },
  {
    Icon: ScanLine,
    name: 'Plant Disease Detection',
    desc: 'Upload a photo of your crop and get an instant AI diagnosis, so problems are caught before they spread.',
  },
  {
    Icon: MessageCircle,
    name: 'AI Farming Assistant',
    desc: 'Chat with an AI assistant for farming advice, answers, and practical guidance any time of day.',
  },
  {
    Icon: BarChart3,
    name: 'Personal Dashboard',
    desc: 'Track your farm activity, past recommendations, and diagnosis history in one simple dashboard.',
  },
  {
    Icon: ShieldCheck,
    name: 'Secure Account & Login',
    desc: 'Safe, modern sign-in with multi-device sessions and account recovery, so your farm data stays yours.',
  },
];

export function Products() {
  return (
    <section className="py-16 md:py-24">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Eyebrow>Our Features</Eyebrow>
          <h2 className="mt-6 max-w-lg text-3xl font-bold leading-tight md:text-5xl">
            Everything You Need to Farm Smarter
          </h2>
        </div>
        <div className="max-w-sm">
          <p className="text-sm leading-relaxed text-[#68756B]">
            One platform bringing crop recommendations, disease detection, and
            expert guidance together for everyday farming decisions.
          </p>
          <div className="mt-5">
            <PillButton variant="dark">Explore More</PillButton>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {features.map(({ Icon, ...p }) => (
          <article
            key={p.name}
            className="group rounded-[2rem] bg-[#F2F4EA] p-3 transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex aspect-[4/3] w-full items-center justify-center rounded-[1.5rem] bg-[#F2F4EA]">
              <span className="flex size-20 items-center justify-center rounded-full bg-[#132A1D] text-[#FDFDF8]">
                <Icon className="size-9" strokeWidth={1.6} />
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#68756B]">
                {p.desc}
              </p>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#132A1D]"
              >
                Learn More
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
