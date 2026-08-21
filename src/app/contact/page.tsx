import Section from '@/components/section'
import { ContactCards } from '@/components/contact-cards'
import ContactForm from '@/components/contact-form'

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Heleno',
}

export default function ContactPage() {
  return (
    <Section>
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-2 text-muted">
        Have a project, a piece of code, or just want to say hi? Reach out through any of
        the channels below.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContactCards />
        <ContactForm />
      </div>
    </Section>
  )
}
