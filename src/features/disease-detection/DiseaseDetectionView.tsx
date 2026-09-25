'use client';

import {
  CheckCircle2,
  ImageUp,
  Microscope,
  ShieldCheck,
  Upload,
  X,
} from 'lucide-react';
import Image from 'next/image';

import { AppShell } from '@/features/shared/AppShell';
import {
  PageIntro,
  PrimaryAction,
  StatusBadge,
  cardClass,
} from '@/features/shared/shared';
import { Button } from '@/components/ui/button';

// Next.js Best Practice: Reference public folder assets with absolute paths
// instead of fragile relative imports (../../../../)
const reports = [
  {
    image: '/assets/news-1.jpg',
    disease: 'Early Blight',
    date: 'Sep 16, 2026',
    status: 'Completed' as const,
  },
  {
    image: '/assets/news-2.jpg',
    disease: 'Leaf Spot',
    date: 'Sep 11, 2026',
    status: 'Completed' as const,
  },
  {
    image: '/assets/news-3.jpg',
    disease: 'Under Review',
    date: 'Sep 08, 2026',
    status: 'Processing' as const,
  },
  {
    image: '/assets/news-1.jpg',
    disease: 'Image Unclear',
    date: 'Aug 29, 2026',
    status: 'Failed' as const,
  },
];

export function DiseaseDetectionView() {
  return (
    <AppShell title="Disease Detection">
      <div className="mx-auto max-w-[1440px]">
        <PageIntro
          title="Plant Disease Detection"
          description="Upload a photo of your crop to detect diseases instantly."
        />
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)]">
          <section className={`${cardClass} p-5 sm:p-7`}>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-[#E7EBDA] text-[#132A1D]">
                <ImageUp className="size-5" />
              </span>
              <div>
                <h3 className="font-semibold text-[#132A1D]">Crop Image</h3>
                <p className="mt-1 text-xs text-[#68756B]">
                  Clear, well-lit leaf photos work best
                </p>
              </div>
            </div>
            <div className="flex min-h-64 flex-col items-center justify-center rounded-[1.25rem] border-2 border-dashed border-[#AEB8A5] bg-[#F2F4EA] px-6 text-center">
              <span className="flex size-14 items-center justify-center rounded-full bg-[#FDFDF8] text-[#132A1D] shadow-sm">
                <Upload className="size-6" />
              </span>
              <p className="mt-5 font-semibold text-[#1F3527]">
                Drag & drop an image, or click to browse
              </p>
              <p className="mt-2 text-xs text-[#68756B]">
                JPG or PNG, up to 10 MB
              </p>
              <Button
                type="button"
                variant="outline"
                className="mt-5 h-10 rounded-full border-[#D4DAC8] bg-[#FDFDF8] px-5 text-[#132A1D] hover:bg-[#E7EBDA]"
              >
                Choose Image
              </Button>
            </div>
            <div className="mt-4 flex items-center gap-3 rounded-2xl border border-[#D4DAC8] p-3">
              <Image
                src="/assets/news-3.jpg"
                alt="Selected crop leaf preview"
                className="size-14 rounded-xl object-cover"
                width={56}
                height={56}
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-[#1F3527]">
                  tomato-leaf.jpg
                </p>
                <p className="mt-1 text-xs text-[#68756B]">
                  2.4 MB · Ready to analyze
                </p>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label="Remove image"
                className="size-9 rounded-full text-[#68756B] hover:bg-[#FDECEA] hover:text-[#B42318]"
              >
                <X className="size-4" />
              </Button>
            </div>
            <div className="mt-6">
              <PrimaryAction>Analyze Image</PrimaryAction>
            </div>
          </section>

          <aside className={`${cardClass} overflow-hidden shadow-sm`}>
            <Image
              src="/assets/news-3.jpg"
              alt="Tomato leaf used for the mock disease analysis"
              className="h-48 w-full object-cover"
              width={400}
              height={200}
            />
            <div className="p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase text-[#68756B]">
                    Diagnosis
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold text-[#132A1D]">
                    Early Blight
                  </h3>
                </div>
                <span className="rounded-full bg-[#E2F2E8] px-3 py-1 text-xs font-semibold text-[#21633A]">
                  92% Confidence
                </span>
              </div>
              <div className="mt-5 rounded-2xl bg-[#F2F4EA] p-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-[#1F3527]">
                  <ShieldCheck className="size-4 text-[#21633A]" /> Recommended
                  Remedies
                </p>
                <ul className="mt-3 space-y-3 text-sm leading-relaxed text-[#68756B]">
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#21633A]" />{' '}
                    Apply a copper-based fungicide.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#21633A]" />{' '}
                    Remove affected lower leaves.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#21633A]" />{' '}
                    Improve airflow around plants.
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>

        <section className="mt-8">
          <div className="mb-4 flex items-center gap-3">
            <Microscope className="size-5 text-[#132A1D]" />
            <h3 className="font-semibold text-[#132A1D]">
              Past Disease Reports
            </h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {reports.map((report) => (
              <article
                key={`${report.disease}-${report.date}`}
                className={`${cardClass} overflow-hidden shadow-sm`}
              >
                <Image
                  src={report.image}
                  alt="Crop report thumbnail"
                  className="h-36 w-full object-cover"
                  width={400}
                  height={200}
                />
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-semibold text-[#1F3527]">
                        {report.disease}
                      </h4>
                      <p className="mt-1 text-xs text-[#68756B]">
                        {report.date}
                      </p>
                    </div>
                    <StatusBadge status={report.status} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}
