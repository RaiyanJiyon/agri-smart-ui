import { CheckCircle2, FlaskConical, Leaf, Save, Sprout } from 'lucide-react';
import { AppShell } from '@/features/shared/AppShell';
import {
  PageIntro,
  PrimaryAction,
  StatusBadge,
  cardClass,
  inputClass,
} from '@/features/shared/shared';
import { Button } from '@/components/ui/button';

const fields = [
  { label: 'Nitrogen (N)', value: '82', unit: 'kg/ha' },
  { label: 'Phosphorus (P)', value: '42', unit: 'kg/ha' },
  { label: 'Potassium (K)', value: '38', unit: 'kg/ha' },
  { label: 'Temperature', value: '26', unit: '°C' },
  { label: 'Humidity', value: '84', unit: '%' },
  { label: 'Soil pH', value: '6.5', unit: '0–14' },
  { label: 'Rainfall', value: '218', unit: 'mm' },
];

const history = [
  ['Sep 18, 2026', 'Rice', '95%', 'Completed'],
  ['Sep 12, 2026', 'Maize', '89%', 'Completed'],
  ['Sep 08, 2026', 'Cotton', '—', 'Processing'],
  ['Aug 27, 2026', 'Chickpea', '86%', 'Completed'],
  ['Aug 21, 2026', '—', '—', 'Failed'],
] as const;

export default function CropRecommendationPage() {
  return (
    <AppShell title="Crop Recommendation">
      <div className="mx-auto max-w-[1440px]">
        <PageIntro
          title="AI Crop Recommendation"
          description="Enter your soil and climate data to get an AI-powered crop suggestion."
        />
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.25fr)_minmax(340px,0.75fr)]">
          <section className={`${cardClass} p-5 sm:p-7`}>
            <div className="mb-6 flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-[#E7EBDA] text-[#132A1D]">
                <FlaskConical />
              </span>
              <div>
                <h3 className="font-semibold text-[#132A1D]">
                  Soil & Climate Data
                </h3>
                <p className="mt-1 text-xs text-[#68756B]">
                  Use the latest readings from your field
                </p>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {fields.map((field) => (
                <label
                  key={field.label}
                  className={field.label === 'Rainfall' ? 'sm:col-span-2' : ''}
                >
                  <span className="mb-2 block text-sm font-medium text-[#1F3527]">
                    {field.label}
                  </span>
                  <span className="relative block">
                    <input
                      type="number"
                      defaultValue={field.value}
                      className={`${inputClass} pr-16`}
                    />
                    <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-xs font-medium text-[#68756B]">
                      {field.unit}
                    </span>
                  </span>
                </label>
              ))}
            </div>
            <div className="mt-7">
              <PrimaryAction>Get Recommendation</PrimaryAction>
            </div>
          </section>

          <aside className="relative overflow-hidden rounded-[1.5rem] bg-[#132A1D] p-6 text-[#FDFDF8] shadow-sm sm:p-7">
            <div className="absolute right-[-2rem] top-[-2rem] text-[#FDFDF8]/5">
              <Leaf className="size-40" />
            </div>
            <div className="relative">
              <div className="flex items-start justify-between gap-3">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-[#FDFDF8]/10">
                  <Sprout />
                </span>
                <span className="rounded-full bg-[#E2F2E8] px-3 py-1 text-xs font-semibold text-[#21633A]">
                  95% Confidence
                </span>
              </div>
              <p className="mt-8 text-xs font-semibold uppercase text-[#FDFDF8]/50">
                Recommended crop
              </p>
              <h3 className="mt-2 text-4xl font-semibold">Rice</h3>
              <p className="mt-4 text-sm leading-7 text-[#FDFDF8]/72">
                Your field&apos;s strong nitrogen level, high humidity, and
                recent rainfall create excellent conditions for rice
                cultivation.
              </p>
              <div className="mt-6 space-y-3 border-t border-[#FDFDF8]/12 pt-5">
                <p className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="size-4 text-[#D9A15B]" /> Optimal
                  humidity range
                </p>
                <p className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="size-4 text-[#D9A15B]" /> Suitable
                  soil acidity
                </p>
                <p className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="size-4 text-[#D9A15B]" /> Strong
                  nitrogen availability
                </p>
              </div>
              <Button
                type="button"
                variant="outline"
                className="mt-7 h-11 rounded-full border-[#FDFDF8]/25 bg-transparent px-5 text-[#FDFDF8] hover:bg-[#FDFDF8] hover:text-[#132A1D]"
              >
                <Save /> Save to Farm
              </Button>
            </div>
          </aside>
        </div>

        <section className={`${cardClass} mt-6 overflow-hidden`}>
          <div className="border-b border-[#D4DAC8] px-5 py-5 sm:px-7">
            <h3 className="font-semibold text-[#132A1D]">
              Recommendation History
            </h3>
            <p className="mt-1 text-xs text-[#68756B]">
              Your recent crop matches
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead className="bg-[#F2F4EA] text-xs uppercase text-[#68756B]">
                <tr>
                  <th className="px-7 py-3 font-semibold">Date</th>
                  <th className="px-5 py-3 font-semibold">Crop Recommended</th>
                  <th className="px-5 py-3 font-semibold">Confidence</th>
                  <th className="px-7 py-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D4DAC8]">
                {history.map((row) => (
                  <tr key={row[0]}>
                    <td className="px-7 py-4 text-[#68756B]">{row[0]}</td>
                    <td className="px-5 py-4 font-semibold text-[#1F3527]">
                      {row[1]}
                    </td>
                    <td className="px-5 py-4 text-[#68756B]">{row[2]}</td>
                    <td className="px-7 py-4">
                      <StatusBadge status={row[3]} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
