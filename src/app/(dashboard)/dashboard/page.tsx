import { ArrowUpRight, Bot, CalendarDays, Microscope, Sprout, Tractor } from "lucide-react";
import { AppShell } from "@/features/shared/AppShell";
import { StatusBadge, cardClass } from "@/features/shared/shared";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const stats = [
  { label: "Crop Recommendations", value: "12", icon: Sprout, note: "+3 this month" },
  { label: "Disease Reports", value: "5", icon: Microscope, note: "2 this month" },
  { label: "Active Farms", value: "3", icon: Tractor, note: "42 acres tracked" },
  { label: "AI Conversations", value: "8", icon: Bot, note: "+5 this week" },
];

const activities = [
  {
    text: "Crop recommendation generated for Green Valley Farm",
    time: "2 hours ago",
    status: "Completed" as const,
  },
  { text: "Disease detected: Early Blight", time: "Yesterday", status: "Completed" as const },
  {
    text: "Soil data analysis for Riverside Plot",
    time: "Sep 16, 2026",
    status: "Processing" as const,
  },
  { text: "Leaf image quality check", time: "Sep 14, 2026", status: "Failed" as const },
];

export default function DashboardPage() {
  return (
    <AppShell title="Dashboard">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-[#68756B]">Farm overview</p>
            <h2 className="mt-1 text-2xl font-semibold text-[#132A1D] sm:text-3xl">
              Welcome back, Amina <span aria-hidden="true">👋</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#68756B]">
            <CalendarDays className="size-4 text-[#132A1D]" /> Friday, September 18, 2026
          </div>
        </div>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Farm statistics">
          {stats.map((stat) => (
            <article key={stat.label} className={`${cardClass} p-5 shadow-sm`}>
              <div className="flex items-start justify-between">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-[#E7EBDA] text-[#132A1D]">
                  <stat.icon className="size-5" />
                </span>
                <span className="text-xs font-medium text-[#21633A]">{stat.note}</span>
              </div>
              <p className="mt-6 text-3xl font-semibold text-[#132A1D]">{stat.value}</p>
              <p className="mt-1 text-sm text-[#68756B]">{stat.label}</p>
            </article>
          ))}
        </section>

        <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(320px,0.8fr)]">
          <section className={`${cardClass} overflow-hidden`}>
            <div className="flex items-center justify-between border-b border-[#D4DAC8] px-5 py-5 sm:px-6">
              <div>
                <h3 className="font-semibold text-[#132A1D]">Recent Activity</h3>
                <p className="mt-1 text-xs text-[#68756B]">Latest updates across your farms</p>
              </div>
              <Button
                type="button"
                variant="ghost"
                className="h-8 rounded-full px-3 text-xs font-semibold text-[#1F3527] hover:bg-[#E7EBDA] hover:text-[#132A1D]"
              >
                View all
              </Button>
            </div>
            <div className="divide-y divide-[#D4DAC8]">
              {activities.map((activity) => (
                <div
                  key={activity.text}
                  className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-[#1F3527]">{activity.text}</p>
                    <p className="mt-1 text-xs text-[#68756B]">{activity.time}</p>
                  </div>
                  <StatusBadge status={activity.status} />
                </div>
              ))}
            </div>
          </section>
          <section>
            <h3 className="mb-3 font-semibold text-[#132A1D]">Quick Actions</h3>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
              <Link
                href="/crop-recommendation"
                className="group rounded-[1.5rem] bg-[#132A1D] p-5 text-[#FDFDF8] shadow-sm transition-transform hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-[#FDFDF8]/10">
                    <Sprout />
                  </span>
                  <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <h4 className="mt-7 font-semibold">Get a Crop Recommendation</h4>
                <p className="mt-2 text-sm leading-relaxed text-[#FDFDF8]/65">
                  Match your soil and climate data with the right crop.
                </p>
              </Link>
              <Link
                href="/disease-detection"
                className={`group ${cardClass} p-5 shadow-sm transition-transform hover:-translate-y-0.5`}
              >
                <div className="flex items-start justify-between">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-[#E7EBDA] text-[#132A1D]">
                    <Microscope />
                  </span>
                  <ArrowUpRight className="text-[#132A1D] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <h4 className="mt-7 font-semibold text-[#132A1D]">Check Plant Health</h4>
                <p className="mt-2 text-sm leading-relaxed text-[#68756B]">
                  Review a crop image for signs of disease.
                </p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </AppShell>
  );
}
