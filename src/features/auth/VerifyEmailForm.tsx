'use client';

import {
  useState,
  useEffect,
  useRef,
  type ClipboardEvent,
  type FormEvent,
  type KeyboardEvent,
} from 'react';
import { useSearchParams } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { AuthShell, SubmitButton } from '@/features/auth/AuthShell';

function Heading({ title, copy }: { title: string; copy?: string }) {
  return (
    <div className="mb-8 text-center">
      <h1 className="text-3xl font-semibold text-[#132A1D] sm:text-4xl">
        {title}
      </h1>
      {copy && (
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-[#68756B]">
          {copy}
        </p>
      )}
    </div>
  );
}

export function VerifyEmailForm() {
  const searchParams = useSearchParams();

  // UI-only: Fallback mock values if no search params are present
  const recovery = searchParams.get('mode') === 'recovery';
  const email = searchParams.get('email') || 'farmer@example.com';

  const [digits, setDigits] = useState(['', '', '', '', '', '']);
  const [seconds, setSeconds] = useState(45);
  const [loading, setLoading] = useState(false);
  const inputs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    if (seconds <= 0) return;
    const timer = window.setInterval(
      () => setSeconds((value) => value - 1),
      1000
    );
    return () => window.clearInterval(timer);
  }, [seconds]);

  function setDigit(index: number, value: string) {
    const digit = value.replace(/\D/g, '').slice(-1);
    setDigits((current) =>
      current.map((item, itemIndex) => (itemIndex === index ? digit : item))
    );
    if (digit && index < 5) inputs.current[index + 1]?.focus();
  }

  function keyDown(index: number, event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Backspace' && !digits[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  }

  function paste(event: ClipboardEvent<HTMLInputElement>) {
    const code = event.clipboardData
      .getData('text')
      .replace(/\D/g, '')
      .slice(0, 6);
    if (!code) return;
    event.preventDefault();
    setDigits(Array.from({ length: 6 }, (_, index) => code[index] ?? ''));
    inputs.current[Math.min(code.length, 6) - 1]?.focus();
  }

  function verify(event: FormEvent) {
    event.preventDefault();
    setLoading(true);

    // TODO: Replace with actual logic (e.g., Supabase verifyOtp)
    setTimeout(() => setLoading(false), 1000);
  }

  function resend() {
    if (seconds > 0) return;

    // TODO: Replace with actual logic (e.g., Supabase resend)
    setSeconds(45);
  }

  return (
    <AuthShell>
      <Heading
        title={recovery ? 'Enter Reset Code' : 'Verify Your Email'}
        copy={`We sent a 6-digit code to ${email}. Enter it below to continue.`}
      />
      <form onSubmit={verify} className="space-y-7">
        <div className="grid grid-cols-6 gap-2 sm:gap-3">
          {digits.map((digit, index) => (
            <input
              key={index}
              ref={(element) => {
                inputs.current[index] = element;
              }}
              value={digit}
              onChange={(event) => setDigit(index, event.target.value)}
              onKeyDown={(event) => keyDown(index, event)}
              onPaste={paste}
              inputMode="numeric"
              autoComplete={index === 0 ? 'one-time-code' : 'off'}
              aria-label={`Digit ${index + 1}`}
              className="aspect-square min-w-0 rounded-xl border border-[#D4DAC8] bg-[#FDFDF8] text-center text-xl font-semibold text-[#132A1D] outline-none focus:border-[#132A1D] focus:ring-4 focus:ring-[#132A1D]/10"
            />
          ))}
        </div>
        <SubmitButton loading={loading}>Verify Code</SubmitButton>
      </form>
      <p className="mt-7 text-center text-sm text-[#68756B]">
        Didn&apos;t receive a code?{' '}
        <Button
          type="button"
          variant="link"
          disabled={seconds > 0}
          onClick={resend}
          className="h-auto p-0 font-semibold text-[#1F3527]"
        >
          {seconds > 0 ? `Resend in ${seconds}s` : 'Resend'}
        </Button>
      </p>
    </AuthShell>
  );
}
