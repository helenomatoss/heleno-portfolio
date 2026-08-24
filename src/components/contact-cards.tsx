"use client";
import { ExternalLink } from "lucide-react";

type Item = {
  title: string;
  href: string;
  subtitle?: string;
};

const ITEMS: Item[] = [
  {
    title: "Email",
    href: "mailto:helenovitor15@gmail.com",
    subtitle: "helenovitor15@gmail.com",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/heleno-vitor-matos-leite-993684211/",
    subtitle: "linkedin.com/in/heleno-vitor-matos-leite-993684211",
  },
  {
    title: "GitHub",
    href: "https://github.com/helenomatoss",
    subtitle: "github.com/helenomatoss",
  },
];

export function ContactCards() {
  return (
    <div className="grid gap-4">
      {ITEMS.map((it) => (
        <a
          key={it.title}
          href={it.href}
          target={it.href.startsWith("http") ? "_blank" : undefined}
          rel={it.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="group rounded-2xl border border-app bg-card p-5 backdrop-blur transition-all duration-300 hover:shadow-app motion-safe:hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          aria-label={`${it.title}: ${it.subtitle ?? it.href}`}
        >
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-card p-3 border border-app">
              <ExternalLink className="size-5" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <p className="font-semibold">{it.title}</p>
              <p className="text-sm text-muted">{it.subtitle ?? it.href}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
