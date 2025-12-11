import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import LanguageSwitcher from "../components/LanguageSwitcher";

export const metadata: Metadata = {
  title: "Guide to New Zealand",
  description: "Smart NZ trip planning for international travellers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <header className="border-b bg-white">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="font-bold text-lg">
              Guide to New Zealand
            </Link>
            <div className="flex items-center gap-4">
              <nav className="flex gap-4 text-sm">
                <Link href="/trip-quiz" className="hover:text-blue-600">
                  Trip quiz
                </Link>
                <Link href="/ai-trip-planner" className="hover:text-blue-600">
                  Trip planner
                </Link>
                <Link href="/regions" className="hover:text-blue-600">
                  Regions
                </Link>
                <Link href="/things-to-do" className="hover:text-blue-600">
                  Things to do
                </Link>
                <Link href="/tours" className="hover:text-blue-600">
                  Tours
                </Link>
                <Link href="/work-with-us" className="hover:text-blue-600">
                  Work with us
                </Link>
                <Link href="/about" className="hover:text-blue-600">
                  About
                </Link>
              </nav>
              <LanguageSwitcher />
            </div>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>

        <footer className="border-t mt-12 bg-white">
          <div className="max-w-5xl mx-auto px-4 py-4 text-xs text-slate-500 flex justify-between">
            <span>© {new Date().getFullYear()} Guide to New Zealand</span>
            <span>Built for NZ & European travellers</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
