import { ArrowRight, Leaf } from 'lucide-react';
import type { ReactNode } from 'react';

export function Eyebrow({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium ${
        dark
          ? 'bg-[#FDFDF8]/10 text-[#FDFDF8]'
          : 'bg-[#F2F4EA] text-[#1F3527] border border-[#D4DAC8]'
      }`}
    >
      <Leaf className="size-3.5" strokeWidth={2.2} />
      {children}
    </span>
  );
}

export function PillButton({
  children,
  variant = 'light',
  href = '#',
}: {
  children: ReactNode;
  variant?: 'light' | 'dark';
  href?: string;
}) {
  const light = variant === 'light';
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full py-1.5 pl-5 pr-1.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-lg ${
        light
          ? 'bg-[#FDFDF8] text-[#132A1D] shadow-sm'
          : 'bg-[#132A1D] text-[#FDFDF8]'
      }`}
    >
      {children}
      <span
        className={`flex size-8 items-center justify-center rounded-full transition-transform group-hover:rotate-45 ${
          light ? 'bg-[#132A1D] text-[#FDFDF8]' : 'bg-[#FDFDF8] text-[#132A1D]'
        }`}
      >
        <ArrowRight className="size-4" />
      </span>
    </a>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span
      className={`flex items-center gap-2 text-xl font-semibold tracking-tight ${
        light ? 'text-[#FDFDF8]' : 'text-[#132A1D]'
      }`}
      style={{ fontFamily: 'var(--font-display)' }}
    >
      <Leaf className="size-6" strokeWidth={2.2} />
      AgriSmart
    </span>
  );
}
