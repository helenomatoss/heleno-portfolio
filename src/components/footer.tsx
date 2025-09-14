export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl border-t border-app px-4 py-6 text-sm text-muted">
      <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
        <p className="notranslate select-none" translate="no">
          © {new Date().getFullYear()} Heleno Vitor Matos Leite. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            aria-label="Hosted and deployed on Vercel"
            title="Hosted and deployed on Vercel"
          >
            Deployed on Vercel
          </a>
        </div>
      </div>
    </footer>
  )
}
