"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Education", href: "/education" },
  { label: "Community", href: "/community" },
  { label: "Investors", href: "/investors" },
  { label: "Content Studio", href: "/content-studio" },
  { label: "Doctor Training", href: "/doctor-training" },
];

export function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 shadow-sm backdrop-blur-md dark:bg-gray-900/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
        >
          <Image
            src="/logo.png"
            alt="HOMA Clinics"
            width={180}
            height={180}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="rounded-md px-3 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/#enroll"
            className="inline-flex items-center justify-center rounded-xl font-medium px-4 py-2.5 sm:px-5 sm:py-3 bg-primary hover:bg-primary-dark text-white shadow-sm transition-colors"
          >
            Enroll Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-primary/10 hover:text-primary dark:text-gray-300 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="border-t border-gray-200 bg-white/95 px-4 py-4 backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/95">
          <ul className="flex flex-col gap-1">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block rounded-md px-3 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
              <Link
                href="/#enroll"
                onClick={() => setMobileOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-xl bg-primary hover:bg-primary-dark text-white font-medium px-4 py-2.5 shadow-sm transition-colors"
              >
                Enroll Now
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
