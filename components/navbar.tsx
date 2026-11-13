"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Bio", href: "/bio" },
    { name: "Assignment", href: "/assignment" },
  ];

  return (
    <header className="border-b bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg tracking-tight">
          IT Portfolio
        </Link>
        <nav className="flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={buttonVariants({
                variant: pathname === item.href ? "default" : "ghost",
              })}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}