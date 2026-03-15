import type { ReactNode } from "react";
import { BarChart3, LayoutDashboard, Star, Settings } from "lucide-react";
import Header from "@/components/layout/platform/header";
import UserProvider from "@/providers/user-provider";
import { getUserProfile } from "@/lib/data/me";

type PlatformLayoutProps = {
  children: ReactNode;
};

const navItems = [
  {
    label: "Dashboard",
    href: "/platform",
    icon: LayoutDashboard,
  },
  {
    label: "Analytics",
    href: "/platform/analytics",
    icon: BarChart3,
  },
  {
    label: "Watchlist",
    href: "/platform/watchlist",
    icon: Star,
  },
  {
    label: "Settings",
    href: "/platform/settings",
    icon: Settings,
  },
];

export default async function PlatformLayout({
  children,
}: PlatformLayoutProps) {
  const user = await getUserProfile();

  return (
    <UserProvider initialUser={user}>
      <div className="min-h-screen bg-background text-foreground">
        <Header />

        <main className="mx-auto max-w-7xl px-6 py-5">{children}</main>
      </div>
    </UserProvider>
  );
}
