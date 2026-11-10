import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="container flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-3 text-muted">The page you’re looking for doesn’t exist.</p>
      <Link href="/" className="mt-8 inline-flex h-11 items-center rounded-full bg-fg px-6 text-sm font-medium text-bg">
        Go back home
      </Link>
    </section>
  )
}
