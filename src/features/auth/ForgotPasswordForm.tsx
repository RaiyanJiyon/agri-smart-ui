'use client';

import { Mail } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import Link from 'next/link';

import {
  AuthField,
  AuthShell,
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

export function ForgotPasswordForm() {
  const [loading, setLoading] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    // TODO: Replace with actual logic (e.g., Zod validation + Supabase resetPasswordForEmail)
    setTimeout(() => setLoading(false), 1000);
  }

  return (
    <AuthShell>
      <Heading
        title="Forgot Your Password?"
        copy="Enter your email and we’ll send you a code to reset your password."
      />
      <form onSubmit={submit} className="space-y-6" noValidate>
        <AuthField
          name="email"
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="farmer@example.com"
          icon={<Mail className="size-4" />}
        />
        <SubmitButton loading={loading}>Send Reset Code</SubmitButton>
      </form>
      <p className="mt-7 text-center text-sm">
        <Link href="/login" className={authLinkClass}>
          Back to Log In
        </Link>
      </p>
    </AuthShell>
  );
}
