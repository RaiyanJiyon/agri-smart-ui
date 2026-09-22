'use client';

import { Mail, LockKeyhole } from 'lucide-react';
import { FormEvent, useState } from 'react';
import Link from 'next/link';

import {
  AuthField,
  AuthShell,
  AuthToggle,
  SubmitButton,
  authLinkClass,
} from '@/features/auth/AuthShell';

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

export function RegisterForm() {
  const [loading, setLoading] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    // TODO: Replace with actual logic (e.g., Zod validation + Supabase mutation)
    setTimeout(() => setLoading(false), 1000);
  }

  return (
    <AuthShell>
      <AuthToggle active="register" />
      <Heading
        title="Create An Account"
        copy="Start using AI-powered insights for better farming decisions."
      />
      <form onSubmit={submit} className="space-y-5" noValidate>
        <AuthField
          name="email"
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="farmer@example.com"
          icon={<Mail className="size-4" />}
        />
        <AuthField
          name="password"
          label="Password"
          type="password"
          autoComplete="new-password"
          placeholder="Create a password"
          icon={<LockKeyhole className="size-4" />}
        />
        <p className="-mt-3 text-xs text-[#68756B]">
          Use at least 8 characters.
        </p>
        <AuthField
          name="confirm"
          label="Confirm Password"
          type="password"
          autoComplete="new-password"
          placeholder="Enter it again"
          icon={<LockKeyhole className="size-4" />}
        />
        <SubmitButton loading={loading}>Create an Account</SubmitButton>
      </form>
      <p className="mt-7 text-center text-sm text-[#68756B]">
        Already have an account?{' '}
        <Link href="/login" className={authLinkClass}>
          Log In
        </Link>
      </p>
    </AuthShell>
  );
}
