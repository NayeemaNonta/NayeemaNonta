"use client";

import { usePathname } from "next/navigation";

import { SmartLink } from "@/components/SmartLink";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  // Research page is temporarily hidden; restore this item when app/research/page.tsx is restored.
  // { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" },
  { label: "Projects", href: "/projects" },
  // Teaching / Service page is temporarily hidden; restore this item when app/teaching/page.tsx is restored.
  // { label: "Teaching / Service", href: "/teaching" },
  { label: "News / Media", href: "/news" },
  { label: "CV", href: "/cv" }
];

export function Navbar() {
  const pathname = usePathname();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const normalizedPath =
    basePath && pathname.startsWith(basePath) ? pathname.slice(basePath.length) || "/" : pathname;

  return (
    <header className="sticky top-3 z-50 px-4 pt-3">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-4xl items-center justify-center overflow-x-auto rounded-full border border-line bg-white/85 px-2 py-2 shadow-card backdrop-blur-md"
      >
        <ul className="flex min-w-max items-center gap-1">
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? normalizedPath === "/" : normalizedPath.startsWith(item.href);

            return (
              <li key={item.href}>
                <SmartLink
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-slate-100 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                    isActive && "bg-ink text-white hover:bg-ink hover:text-white"
                  )}
                >
                  {item.label}
                </SmartLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
