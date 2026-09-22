'use client';

import { Check, KeyRound, LockKeyhole } from 'lucide-react';
import { AuthField, AuthShell, SubmitButton } from './AuthShell';
import { Heading } from './AuthHeading';
import { FormEvent, useState } from 'react';

export function ResetPasswordForm() {
  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setComplete(true);
    }, 1000); // UI-only simulation
  }

  if (complete) {
    return (
      <AuthShell>
        <div className="text-center">
          <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-[#E7EBDA] text-[#132A1D]">
            <Check className="size-7" />
          </span>
          <Heading
            title="Password Updated"
            copy="Your new password is ready. Taking you back to log in…"
          />
        </div>
      </AuthShell>
    );
  }

  return (
    <AuthShell>
      <div className="mx-auto mb-6 flex size-12 items-center justify-center rounded-full bg-[#E7EBDA] text-[#132A1D]">
        <KeyRound className="size-5" />
      </div>
      <Heading
        title="Set a New Password"
        copy="Choose a secure password you haven’t used before."
      />
      <form onSubmit={submit} className="space-y-5" noValidate>
        <AuthField
          name="password"
          label="New Password"
          type="password"
          autoComplete="new-password"
          placeholder="At least 8 characters"
          icon={<LockKeyhole className="size-4" />}
        />
        <AuthField
          name="confirm"
          label="Confirm New Password"
          type="password"
          autoComplete="new-password"
          placeholder="Enter it again"
          icon={<LockKeyhole className="size-4" />}
        />
        <SubmitButton loading={loading}>Reset Password</SubmitButton>
      </form>
    </AuthShell>
  );
}
