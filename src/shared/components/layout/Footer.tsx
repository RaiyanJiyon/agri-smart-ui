import { Logo } from './ui';

// Define standard Lucide-styled SVGs for your social icons
const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://w3.org"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://w3.org"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://w3.org"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://w3.org"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const groups = [
  { title: 'Company', links: ['About Us', 'Who We Are', 'Careers', 'Contact'] },
  {
    title: 'Features',
    links: [
      'Crop Recommendation',
      'Disease Detection',
      'Farming Assistant',
      'Dashboard',
    ],
  },
  {
    title: 'Resources',
    links: ['Newsroom', 'Guides', 'Support', 'Help Center'],
  },
];

export function Footer() {
  return (
    <footer className="mt-8 rounded-[2rem] bg-[#0F2217] px-8 py-14 md:px-14">
      <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#FDFDF8]/60">
            AI-powered crop advice, disease detection, and farm insights, built
            with farmers for farmers.
          </p>
          <div className="mt-6 flex gap-3">
            {[Twitter, Linkedin, Instagram, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex size-9 items-center justify-center rounded-full bg-[#FDFDF8]/10 text-[#FDFDF8] transition-colors hover:bg-[#FDFDF8]/20"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        {groups.map((g) => (
          <div key={g.title}>
            <h3 className="text-sm font-semibold text-[#FDFDF8]">{g.title}</h3>
            <ul className="mt-4 space-y-3">
              {g.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm text-[#FDFDF8]/60 transition-colors hover:text-[#FDFDF8]"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 border-t border-[#FDFDF8]/10 pt-6 text-xs text-[#FDFDF8]/50">
        © {new Date().getFullYear()} AgriSmart. All rights reserved.
      </div>
    </footer>
  );
}
