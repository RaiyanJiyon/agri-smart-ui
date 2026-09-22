import { ArrowRight, Eye, EyeOff, Leaf, LoaderCircle } from 'lucide-react';
import { useState, type InputHTMLAttributes, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import authField from '../../../public/assets/sunset-field-walk.jpg';
import Image from 'next/image';
import Link from 'next/link';

export function AuthShell({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-[calc(100vh-2.5rem)] w-full overflow-hidden rounded-[2rem] bg-[#FDFDF8] shadow-2xl md:grid-cols-[minmax(0,1fr)_minmax(430px,0.9fr)] md:rounded-[2.5rem]">
      <section className="relative hidden overflow-hidden md:block">
        <Image
          src={authField}
          alt="Farmer operating agricultural technology over a field at sunset"
          className="absolute inset-0 size-full object-cover"
          width={1360}
          height={720}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2217]/55 via-[#132A1D]/10 to-[#0F2217]/90" />
        <div className="relative flex h-full min-h-[720px] flex-col justify-between p-8 lg:p-12">
          <Link
            href="/"
            aria-label="AgriSmart home"
            className="flex w-fit items-center gap-2 text-xl font-semibold text-[#FDFDF8]"
          >
            <Leaf className="size-6" strokeWidth={2.2} />
            AgriSmart
          </Link>
          <div className="max-w-md pb-2 text-[#FDFDF8]">
            <div className="mb-5 flex gap-2" aria-hidden="true">
              <span className="h-1.5 w-8 rounded-full bg-[#FDFDF8]" />
              <span className="size-1.5 rounded-full bg-[#FDFDF8]/45" />
              <span className="size-1.5 rounded-full bg-[#FDFDF8]/45" />
            </div>
            <p className="text-3xl font-semibold leading-tight lg:text-4xl">
              Grow Smarter With AI
            </p>
            <p className="mt-3 text-sm text-[#FDFDF8]/80 lg:text-base">
              Your AI-powered partner for better harvests.
            </p>
          </div>
        </div>
      </section>

      <section className="flex min-w-0 items-center justify-center px-5 py-8 sm:px-10 md:px-12 lg:px-20">
        <div className="w-full max-w-[420px]">
          <Link
            href="/"
            aria-label="AgriSmart home"
            className="mx-auto mb-10 flex w-fit items-center gap-2 text-xl font-semibold text-[#132A1D] md:hidden"
          >
            <Leaf className="size-6" strokeWidth={2.2} />
            AgriSmart
          </Link>
          {children}
        </div>
      </section>
    </div>
  );
}

export function AuthToggle({ active }: { active: 'login' | 'register' }) {
  return (
    <div className="mx-auto mb-8 grid w-fit grid-cols-2 rounded-full bg-[#E7EBDA] p-1 text-sm">
      <Link
        href="/login"
        className={`rounded-full px-5 py-2 font-medium transition-colors ${active === 'login' ? 'bg-[#132A1D] text-[#FDFDF8]' : 'text-[#68756B] hover:text-[#132A1D]'}`}
      >
        Log In
      </Link>
      <Link
        href="/register"
        className={`rounded-full px-5 py-2 font-medium transition-colors ${active === 'register' ? 'bg-[#132A1D] text-[#FDFDF8]' : 'text-[#68756B] hover:text-[#132A1D]'}`}
      >
        Sign Up
      </Link>
    </div>
  );
}

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  icon: ReactNode;
  error?: string | undefined;
};

export function AuthField({
  label,
  icon,
  error,
  type = 'text',
  ...props
}: FieldProps) {
  const [visible, setVisible] = useState(false);
  const password = type === 'password';

  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-[#1F3527]">
        {label}
      </span>
      <span className="relative block">
        <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-[#68756B]">
          {icon}
        </span>
        <input
          {...props}
          type={password && visible ? 'text' : type}
          aria-invalid={Boolean(error)}
          className={`h-12 w-full rounded-2xl border bg-[#FDFDF8] pl-11 pr-11 text-sm text-[#132A1D] outline-none transition-shadow placeholder:text-[#68756B]/70 focus:border-[#132A1D] focus:ring-4 focus:ring-[#132A1D]/10 ${error ? 'border-[#B42318]' : 'border-[#D4DAC8]'}`}
        />
        {password && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={visible ? 'Hide password' : 'Show password'}
            onClick={() => setVisible((value) => !value)}
            className="absolute inset-y-0 right-1.5 my-auto size-9 rounded-full text-[#68756B] hover:bg-[#E7EBDA] hover:text-[#132A1D]"
          >
            {visible ? <EyeOff /> : <Eye />}
          </Button>
        )}
      </span>
      {error && (
        <span className="mt-1.5 block text-xs text-[#B42318]">{error}</span>
      )}
    </label>
  );
}

export function SubmitButton({
  children,
  loading = false,
}: {
  children: ReactNode;
  loading?: boolean;
}) {
  return (
    <Button
      type="submit"
      disabled={loading}
      className="group h-13 w-full justify-between rounded-full bg-[#132A1D] py-1.5 pl-6 pr-2 text-sm font-semibold text-[#FDFDF8] shadow-lg hover:bg-[#1F3527]"
    >
      <span className="flex-1 text-center">
        {loading ? 'Please wait…' : children}
      </span>
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#FDFDF8] text-[#132A1D]">
        {loading ? (
          <LoaderCircle className="animate-spin" />
        ) : (
          <ArrowRight className="transition-transform group-hover:rotate-45" />
        )}
      </span>
    </Button>
  );
}

export const authLinkClass =
  'font-semibold text-[#1F3527] underline-offset-4 hover:underline';
