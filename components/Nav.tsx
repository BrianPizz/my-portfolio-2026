"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  document.body.scrollTo({ top: 0, behavior: "smooth" });
};

const Nav = () => {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === null;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-20 px-4 sm:px-6 lg:px-8 py-4 bg-black/40 backdrop-blur-md border-b border-white/5"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-y-3 min-w-0">
        {isHome ? (
          <button
            type="button"
            onClick={scrollToTop}
            className="text-white text-lg font-semibold tracking-tight hover:text-gray-200 transition-colors bg-transparent border-0 cursor-pointer p-0 font-[family-name:var(--font-heading)]"
            aria-label="Scroll to top"
          >
            BP
          </button>
        ) : (
          <Link
            href="/"
            className="text-white text-lg font-semibold tracking-tight hover:text-gray-200 transition-colors font-[family-name:var(--font-heading)]"
          >
            BP
          </Link>
        )}
        <ul className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 sm:gap-x-6 sm:gap-8 min-w-0">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-base font-medium text-white/90 hover:text-white transition-colors text-readable"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
