"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";
import Portal from "@/components/portal";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "https://github.com/helenomatoss", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);

  // Fecha o drawer ao mudar de rota
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Scroll lock no body/html quando aberto
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    if (open) {
      html.classList.add("overflow-hidden");
      body.classList.add("overflow-hidden");
    } else {
      html.classList.remove("overflow-hidden");
      body.classList.remove("overflow-hidden");
    }
    return () => {
      html.classList.remove("overflow-hidden");
      body.classList.remove("overflow-hidden");
    };
  }, [open]);

  // Foco inicial + laço simples de foco dentro do painel
  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    if (!panel) return;

    const focusable = panel.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
      }
      if (e.key === "Tab" && focusable.length > 0) {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          (last || first).focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          (first || last).focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const closeOnClick = useCallback(() => setOpen(false), []);

  return (
    <div className="sticky top-0 z-50 bg-app/80 backdrop-blur supports-[backdrop-filter]:backdrop-blur border-b border-app">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3"
        aria-label="Primary"
      >
        {/* Logo HV com notranslate */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-lg px-2 py-1"
          aria-label="Go to homepage"
        >
          <span
            className="notranslate grid h-8 w-8 place-items-center rounded-full bg-accent font-extrabold text-[#031A6B]"
            translate="no"
          >
            HV
          </span>
          <span className="sr-only">Heleno Vitor Matos Leite</span>
        </Link>

        {/* Links desktop */}
        <div className="hidden md:flex md:items-center md:gap-6">
          {NAV_LINKS.map((item) => {
            const isExternal = item.href.startsWith("http")
            if (isExternal) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md px-2 py-1 text-sm text-muted transition hover:text-app"
                  aria-label="Open GitHub projects in a new tab"
                >
                  {item.label}
                </a>
              )
            }
            const isActive = pathname === item.href || pathname?.startsWith(item.href + "/")
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-md px-2 py-1 text-sm transition ${
                  isActive ? "font-semibold text-app" : "text-muted hover:text-app"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-indicator"
                    className="absolute -bottom-1 left-2 right-2 h-[2px] rounded-full bg-[var(--accent)]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </Link>
            )
          })}
        </div>

        {/* Ações à direita (desktop) */}
        <div className="hidden md:flex md:items-center md:gap-3">
          <ThemeToggle />
        </div>

        {/* Botão mobile */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-app bg-card px-3 py-2 shadow-app"
          aria-controls="mobile-drawer"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
        </button>
      </nav>

      {/* Drawer via Portal */}
      <Portal>
        {/* Backdrop */}
        {open && (
          <div
            className="fixed inset-0 z-[98] bg-black/55 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden
          />
        )}

        {/* Painel do Drawer */}
        <aside
          id="mobile-drawer"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-drawer-title"
          className={`fixed right-0 top-0 z-[99] h-dvh w-[88vw] max-w-sm bg-card border-l border-app shadow-app transition-transform duration-200 md:hidden ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-app">
            <h2 id="mobile-drawer-title" className="text-base font-semibold">
              Menu
            </h2>
            <button
              type="button"
              className="rounded-lg border border-app bg-card px-3 py-2"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>

          <div className="flex flex-col gap-2 px-4 py-4">
            {NAV_LINKS.map((item) => {
              const isExternal = item.href.startsWith("http")
              if (isExternal) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeOnClick}
                    className="rounded-lg px-3 py-2 text-base text-muted transition hover:text-app"
                    aria-label="Open GitHub projects in a new tab"
                  >
                    {item.label}
                  </a>
                )
              }
              const isActive = pathname === item.href || pathname?.startsWith(item.href + "/")
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeOnClick}
                  className={`rounded-lg px-3 py-2 text-base transition ${
                    isActive ? "font-semibold" : "text-muted hover:text-app"
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}

            {/* ThemeToggle apenas no drawer no mobile */}
            <div className="mt-2 border-t border-app pt-3">
              <ThemeToggle />
            </div>
          </div>
        </aside>
      </Portal>
    </div>
  );
}
