import Section from '@/components/section'
import { Timeline } from '@/components/timeline'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'About',
  description: 'About Heleno Vitor Matos Leite',
}

export default function AboutPage() {
  return (
    <Section>
      <h1 className="text-3xl font-bold">About</h1>
      <p className="mt-4 max-w-3xl text-app">
        I&apos;m a front-end developer based in Dublin, Ireland with 2+ years of hands-on
        experience. I focus on clean, accessible interfaces and reliable delivery. At
        Odontoprev, I contributed to a large e-commerce redesign, building reusable Vue
        components and improving mobile performance. I also have experience shipping mobile
        features with the Ionic Framework and collaborating in Agile squads.
      </p>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Highlights</h2>
        <ul className="mt-3 list-disc space-y-1 pl-6 text-app">
          <li>
            <span className="font-medium">Front-end:</span> Vue.js (2/3), Ionic, JavaScript (ES6+), HTML5, CSS3
          </li>
          <li>
            <span className="font-medium">Practices:</span> Responsive Design, Accessible UI, REST APIs, Git/GitHub,
            Agile/Scrum
          </li>
          <li>
            <span className="font-medium">Extras:</span> Python/Java (basic), MySQL (basic), Arduino/Robotics
            (prototyping)
          </li>
        </ul>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-xl font-semibold">Experience</h2>
          <Timeline
            items={[
              {
                content: (
                  <div>
                    <h3 className="text-lg font-semibold">Junior Front-End Analyst — Odontoprev</h3>
                    <p className="text-sm text-muted">Jun 2022 — May 2023 — Barueri, Brazil</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-app">
                      <li>
                        Built and maintained front-end features for a new e-commerce platform using
                        Vue.js.
                      </li>
                      <li>Collaborated with designers and back-end engineers across Agile squads.</li>
                      <li>
                        Refactored components and improved state management, reducing defects and
                        increasing consistency.
                      </li>
                      <li>Improved mobile performance and UX.</li>
                    </ul>
                  </div>
                ),
              },
              {
                content: (
                  <div>
                    <h3 className="text-lg font-semibold">
                      Digital Channels Intern (Mobile/Ionic) — Odontoprev
                    </h3>
                    <p className="text-sm text-muted">Jul 2021 — Jun 2022 — Barueri, Brazil</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-app">
                      <li>Built and maintained mobile features with the Ionic Framework.</li>
                      <li>Resolved UI and performance issues and optimized app startup time.</li>
                      <li>Rotated across mobile, marketing, and infrastructure teams.</li>
                    </ul>
                  </div>
                ),
              },
            ]}
          />
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold">Education</h2>
          <Timeline
            items={[
              {
                content: (
                  <div>
                    <h3 className="text-lg font-semibold">
                      B.Sc. — Systems Analysis and Development (FMU)
                    </h3>
                    <p className="text-sm text-muted">Jan 2023 — Dec 2025, expected</p>
                  </div>
                ),
              },
              {
                content: (
                  <div>
                    <h3 className="text-lg font-semibold">Computer Technician — CEAP</h3>
                    <p className="text-sm text-muted">2019 — 2021</p>
                  </div>
                ),
              },
              {
                content: (
                  <div>
                    <h3 className="text-lg font-semibold">
                      Samsung Innovation Campus — Programming &amp; Software Development
                    </h3>
                    <p className="text-sm text-muted">2019 — 2021</p>
                  </div>
                ),
              },
              {
                content: (
                  <div>
                    <h3 className="text-lg font-semibold">English Studies — Berlitz Dublin</h3>
                    <p className="text-sm text-muted">Sep 2024 — Apr 2025</p>
                  </div>
                ),
              },
            ]}
          />

          <div className="mt-8">
            <Button asChild variant="outline">
              <a href="/cv/heleno-vitor-matos-leite.pdf" download>
                Download CV (PDF)
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
