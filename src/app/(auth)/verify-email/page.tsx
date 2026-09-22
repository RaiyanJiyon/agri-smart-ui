import { VerifyEmailForm } from '@/features/auth/VerifyEmailForm';
import { Suspense } from 'react';

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
      <VerifyEmailForm />
    </Suspense>
  );
}