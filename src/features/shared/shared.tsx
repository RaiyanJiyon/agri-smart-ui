import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { Button } from '@/components/ui/button';

export function PageIntro({
  title,
  description,
  aside,
}: {
  title: string;
  description: string;
  aside?: ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="text-2xl font-semibold text-[#132A1D] sm:text-3xl">
          {title}
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#68756B] sm:text-base">
          {description}
        </p>
      </div>
      {aside}
    </div>
  );
}

export function StatusBadge({
  status,
}: {
  status: 'Completed' | 'Processing' | 'Failed';
}) {
  const style =
    status === 'Completed'
      ? 'bg-[#E2F2E8] text-[#21633A]'
      : status === 'Processing'
        ? 'bg-[#FFF1D6] text-[#8A5A16]'
        : 'bg-[#FDECEA] text-[#B42318]';
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${style}`}
    >
      {status}
    </span>
  );
}

export function PrimaryAction({
  children,
  type = 'button',
}: {
  children: ReactNode;
  type?: 'button' | 'submit';
}) {
  return (
    <Button
      type={type}
      className="group h-12 rounded-full bg-[#132A1D] py-1.5 pl-5 pr-1.5 text-sm font-semibold text-[#FDFDF8] shadow-sm hover:bg-[#1F3527]"
    >
      {children}
      <span className="flex size-9 items-center justify-center rounded-full bg-[#FDFDF8] text-[#132A1D]">
        <ArrowRight className="transition-transform group-hover:rotate-45" />
      </span>
    </Button>
  );
}

export const cardClass =
  'rounded-[1.5rem] border border-[#D4DAC8] bg-[#FDFDF8]';
export const inputClass =
  'h-12 w-full rounded-2xl border border-[#D4DAC8] bg-[#FDFDF8] px-4 text-sm text-[#132A1D] outline-none placeholder:text-[#68756B]/65 focus:border-[#132A1D] focus:ring-4 focus:ring-[#132A1D]/10';
