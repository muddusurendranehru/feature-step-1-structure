"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

const items = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/franchise", label: "Franchise" },
  { href: "/dashboard/ddd-operations", label: "DDD operations" },
  { href: "/dashboard/metabolism", label: "Metabolism" },
  { href: "/dashboard/camps", label: "Camps" },
  { href: "/dashboard/volunteers", label: "Volunteers" },
  { href: "/dashboard/voice-settings", label: "Voice settings" },
] as const;

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full shrink-0 border-b border-gray-200 bg-gray-50/80 dark:border-gray-700 dark:bg-gray-900/50 lg:w-56 lg:border-b-0 lg:border-r">
      <div className="flex flex-col gap-1 p-4">
        <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
          Clinic console
        </p>
        {items.map(({ href, label }) => {
          const active =
            href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                active
                  ? "bg-primary/15 text-primary"
                  : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
              )}
            >
              {label}
            </Link>
          );
        })}
        <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-700">
          <span className="text-xs text-gray-500 dark:text-gray-400">Account</span>
          <UserButton afterSignOutUrl="/" />
        </div>
        <Link
          href="/"
          className="mt-2 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          ← Public site
        </Link>
      </div>
    </aside>
  );
}
