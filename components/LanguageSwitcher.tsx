"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const isGerman = pathname.startsWith("/de");

  const base = "px-2 py-1 rounded-full border transition text-xs md:text-sm";
  const enClasses = isGerman
    ? "border-transparent text-slate-400 hover:text-white"
    : "border-white/40 text-white bg-white/5";
  const deClasses = isGerman
    ? "border-white/40 text-white bg-white/5"
    : "border-transparent text-slate-400 hover:text-white";

  return (
    <div className="flex items-center gap-1">
      <Link href="/" className={`${base} ${enClasses}`}>
        EN
      </Link>
      <Link href="/de" className={`${base} ${deClasses}`}>
        DE
      </Link>
    </div>
  );
}
