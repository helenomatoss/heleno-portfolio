import { profile } from '@/lib/data'

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container flex flex-col items-center justify-between gap-3 py-8 text-sm text-muted md:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.fullName}
        </p>
        <p className="font-mono text-xs">Built with Next.js, Tailwind CSS and TypeScript.</p>
      </div>
    </footer>
  )
}
