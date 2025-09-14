import { redirect } from 'next/navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects — Redirecting to GitHub',
  description: "Redirecting to Heleno Vitor Matos Leite's GitHub repositories.",
  robots: { index: false, follow: true },
}

export default function ProjectsRedirect() {
  redirect('https://github.com/helenomatoss')
}
