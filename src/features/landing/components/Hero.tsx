'use client';
import { useState } from 'react';
import { Menu, X, MousePointer2 } from 'lucide-react';
import { Logo, PillButton } from '@/shared/components/layout/ui';
import Image from 'next/image';
import heroField from '../../../../public/assets/hero-field.jpg';
import drone from '../../../../public/assets/drone-cutout.png';

const navLinks = [
  { label: 'About Us', href: '#about-us' },
  { label: 'Who We Are', href: '#who-we-are' },
  { label: 'Features', href: '#features' },
  { label: 'Newsroom', href: '#newsroom' },
];

export function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative">
      <div className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem]">
        <Image
          src={heroField}
          alt="Aerial view of farmland crop rows at golden hour"
          priority
          width={1920}
          height={1200}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2217]/80 via-[#132A1D]/35 to-[#0F2217]/70" />

        <div className="relative px-5 pb-32 pt-5 sm:px-8 md:pb-40">
          <nav className="flex items-center justify-between">
            <Logo light />
            <div className="hidden items-center gap-7 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[#FDFDF8]/85 transition-colors hover:text-[#FDFDF8]"
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            {/* FIX: Pass href directly to PillButton */}
            <div className="hidden lg:block">
              <PillButton href="/login">Login</PillButton>
            </div>

            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="flex size-10 items-center justify-center rounded-full bg-[#FDFDF8]/15 text-[#FDFDF8] lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </nav>

          {open && (
            <div className="mt-4 flex flex-col gap-3 rounded-3xl bg-[#0F2217]/80 p-5 backdrop-blur lg:hidden">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[#FDFDF8]/90"
                >
                  {link.label}
                </a>
              ))}
              
              {/* FIX: Pass href directly to PillButton here as well */}
              <div className="pt-1">
                <PillButton href="/login">Login</PillButton>
              </div>
            </div>
          )}

          <h1 className="mx-auto mt-16 max-w-4xl text-center font-heading text-4xl font-bold leading-[1.05] text-[#FDFDF8] sm:text-5xl md:mt-24 md:text-6xl lg:text-7xl">
            Smarter Farming, Powered by AI
          </h1>

          <div className="relative mx-auto mt-14 max-w-3xl md:mt-20">
            <div className="pointer-events-none absolute left-0 right-0 top-1/2 h-24 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,#D9A15B_0%,transparent_70%)] opacity-60 blur-2xl" />
            <Image
              src={drone}
              alt="AgriSmart agricultural drone visual"
              width={1024}
              height={640}
              className="relative mx-auto w-2/3 max-w-md drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* rotating badge overlapping bottom edge */}
      <div className="relative mx-auto -mt-14 flex size-28 items-center justify-center md:-mt-16 md:size-32">
        <div className="absolute inset-0 rounded-full bg-[#0F2217] ring-1 ring-[#FDFDF8]/40" />
        <svg
          viewBox="0 0 100 100"
          className="spin-slow absolute inset-0 size-full"
        >
          <defs>
            <path
              id="badgeCircle"
              d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"
            />
          </defs>
          <text
            fill="currentColor"
            className="text-[#FDFDF8]"
            style={{ fontSize: '9.5px', letterSpacing: '1.4px' }}
          >
            <textPath href="#badgeCircle">
              EXPLORE MORE ABOUT SMART FARMING •
            </textPath>
          </text>
        </svg>
        <span className="relative flex size-9 items-center justify-center rounded-full bg-[#FDFDF8]/10 text-[#FDFDF8]">
          <MousePointer2 className="size-4" />
        </span>
      </div>
    </header>
  );
}