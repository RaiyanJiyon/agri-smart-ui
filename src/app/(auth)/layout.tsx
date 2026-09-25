import type { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#132A1D] p-3 sm:p-5">
      <div className="mx-auto flex min-h-screen max-w-[1360px] flex-col justify-center">
        {children}
      </div>
    </div>
  );
}
