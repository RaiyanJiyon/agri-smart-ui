"use client";

import {
  Bell,
  Bot,
  ChevronDown,
  CircleUserRound,
  LayoutDashboard,
  Leaf,
  LogOut,
  Map,
  Microscope,
  Settings,
  Sprout,
  UserRound,
} from "lucide-react";
import * as React from "react";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const mainItems = [
  { title: "Dashboard", to: "/dashboard" as const, icon: LayoutDashboard },
  { title: "Crop Recommendation", to: "/crop-recommendation" as const, icon: Sprout },
  { title: "Disease Detection", to: "/disease-detection" as const, icon: Microscope },
  { title: "AI Assistant", to: "/ai-assistant" as const, icon: Bot },
];

const futureItems = [
  { title: "Farms", icon: Map },
  { title: "Profile", icon: CircleUserRound },
];

function Brand() {
  const { state, isMobile } = useSidebar();
  return (
    <Link
      href="/"
      aria-label="AgriSmart home"
      className="flex h-14 items-center gap-2 overflow-hidden px-3 text-[#FDFDF8]"
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#FDFDF8] text-[#132A1D]">
        <Leaf className="size-5" strokeWidth={2.3} />
      </span>
      {(state === "expanded" || isMobile) && (
        <span className="text-xl font-semibold">AgriSmart</span>
      )}
    </Link>
  );
}

function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar
      collapsible="icon"
      style={
        {
          "--sidebar": "#132A1D",
          "--sidebar-foreground": "#FDFDF8",
          "--sidebar-primary": "#FDFDF8",
          "--sidebar-primary-foreground": "#132A1D",
          "--sidebar-accent": "rgba(253, 253, 248, 0.1)",
          "--sidebar-accent-foreground": "#FDFDF8",
          "--sidebar-border": "rgba(253, 253, 248, 0.1)",
        } as React.CSSProperties
      }
      className="border-r-0 bg-[#132A1D] text-[#FDFDF8] [&_[data-sidebar=sidebar]]:!bg-[#132A1D] [&_[data-sidebar=sidebar]]:!text-[#FDFDF8]"
    >
      <SidebarHeader className="p-3">
        <Brand />
      </SidebarHeader>
      <SidebarContent className="px-3 py-4">
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu className="gap-2">
              {mainItems.map((item) => {
                const active = pathname === item.to;
                return (
                  <SidebarMenuItem key={item.to}>
                    <SidebarMenuButton
                      render={<Link href={item.to} />}
                      isActive={active}
                      tooltip={item.title}
                      className={`h-11 rounded-full px-3 text-sm transition-colors ${active ? "bg-[#FDFDF8] text-[#132A1D] hover:bg-[#FDFDF8] hover:text-[#132A1D]" : "text-[#FDFDF8]/72 hover:bg-[#FDFDF8]/10 hover:text-[#FDFDF8]"}`}
                    >
                      <item.icon className="size-4.5" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="mt-6 p-0">
          <p className="mb-2 px-3 text-[11px] font-semibold uppercase text-[#FDFDF8]/40 group-data-[collapsible=icon]:hidden">
            Workspace
          </p>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2">
              {futureItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    disabled
                    tooltip={`${item.title} — coming soon`}
                    className="h-11 rounded-full px-3 text-[#FDFDF8]/38 disabled:opacity-100"
                  >
                    <item.icon className="size-4.5" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-3">
        <div className="rounded-2xl bg-[#FDFDF8]/8 p-3 text-xs leading-relaxed text-[#FDFDF8]/60 group-data-[collapsible=icon]:hidden">
          Better decisions begin with better farm data.
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

function TopBar({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-20 flex h-18 items-center justify-between border-b border-[#D4DAC8] bg-[#FDFDF8]/95 px-4 backdrop-blur sm:px-6 lg:px-8">
      <div className="flex min-w-0 items-center gap-3">
        <SidebarTrigger className="size-9 rounded-full text-[#132A1D] hover:bg-[#E7EBDA] hover:text-[#132A1D]" />
        <h1 className="truncate text-lg font-semibold text-[#132A1D] sm:text-xl">{title}</h1>
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Notifications"
          className="relative size-10 rounded-full text-[#1F3527] hover:bg-[#E7EBDA] hover:text-[#132A1D]"
        >
          <Bell className="size-5" />
          <span className="absolute right-2 top-2 size-2 rounded-full border-2 border-[#FDFDF8] bg-[#D9A15B]" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                type="button"
                variant="ghost"
                className="h-11 gap-2 rounded-full px-1.5 pr-2 text-[#132A1D] hover:bg-[#E7EBDA] hover:text-[#132A1D] sm:pr-3"
              />
            }
          >
            <span className="flex size-8 items-center justify-center rounded-full bg-[#132A1D] text-xs font-semibold text-[#FDFDF8]">
              AR
            </span>
            <span className="hidden text-left sm:block">
              <span className="block text-sm font-semibold leading-none">Amina Rahman</span>
              <span className="mt-1 block text-[11px] font-normal text-[#68756B]">
                Green Valley Farm
              </span>
            </span>
            <ChevronDown className="hidden size-4 sm:block" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-52 rounded-2xl border-[#D4DAC8] bg-[#FDFDF8] p-2 text-[#132A1D]"
          >
            <DropdownMenuLabel className="px-3 py-2">My account</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-[#D4DAC8]" />
            <DropdownMenuItem className="rounded-xl px-3 py-2 focus:bg-[#E7EBDA] focus:text-[#132A1D]">
              <UserRound /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="rounded-xl px-3 py-2 focus:bg-[#E7EBDA] focus:text-[#132A1D]">
              <Settings /> Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-[#D4DAC8]" />
            <DropdownMenuItem className="rounded-xl px-3 py-2 text-[#B42318] focus:bg-[#FDECEA] focus:text-[#B42318]">
              <LogOut /> Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

export function AppShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <SidebarProvider defaultOpen>
      <AppSidebar />
      <SidebarInset className="min-w-0 bg-[#E7EBDA]">
        <TopBar title={title} />
        <div className="flex-1 p-4 sm:p-6 lg:p-8">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}