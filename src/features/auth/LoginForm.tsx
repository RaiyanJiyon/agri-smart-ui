'use client';

import { Mail, LockKeyhole } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import Link from 'next/link';

import {
  AuthField,
  AuthShell,
  AuthToggle,
  SubmitButton,
  authLinkClass,
} from '@/features/auth/AuthShell';
import { Heading } from './AuthHeading';

export function LoginForm() {
  const [loading, setLoading] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    // TODO: Replace with actual logic (e.g., Zod validation + Supabase signIn)
    setTimeout(() => setLoading(false), 1000);
  }

  return (
    <AuthShell>
      <AuthToggle active="login" />
      <Heading
        title="Welcome Back"
        copy="Log in to continue growing smarter with AgriSmart."
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
          autoComplete="current-password"
          placeholder="Enter your password"
          icon={<LockKeyhole className="size-4" />}
        />
        <div className="flex items-center justify-between gap-4 text-xs text-[#68756B]">
          <label className="flex items-center gap-2">
            <input
              name="remember"
              type="checkbox"
              className="size-4 accent-[#132A1D]"
            />
            Remember me
          </label>
          <Link href="/forgot-password" className={authLinkClass}>
            Forgot password?
          </Link>
        </div>
        <SubmitButton loading={loading}>Log In</SubmitButton>
      </form>
      <p className="mt-7 text-center text-sm text-[#68756B]">
        Don&apos;t have an account?{' '}
        <Link href="/register" className={authLinkClass}>
          Sign Up
        </Link>
      </p>
    </AuthShell>
  );
}
