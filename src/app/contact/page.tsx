import Section from '@/components/section'
import { ContactCards } from '@/components/contact-cards'
import ContactForm from '@/components/contact-form'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Heleno',
}

export default function ContactPage() {
  return (
    <Section>
      <SectionHeading as="h1" eyebrow="GET IN TOUCH" title="Contact" />
      <Reveal delay={0.05}>
        <p className="mt-2 text-muted">
          Have a project, a piece of code, or just want to say hi? Reach out through any of
          the channels below.
        </p>
      </Reveal>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Reveal delay={0.1}>
          <ContactCards />
        </Reveal>
        <Reveal delay={0.15}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  )
}
