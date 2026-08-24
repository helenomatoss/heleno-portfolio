import Section from '@/components/section'
import { Timeline } from '@/components/timeline'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export const metadata = {
  title: 'About',
  description: 'About Heleno Vitor Matos Leite',
}

export default function AboutPage() {
  return (
    <Section>
      <SectionHeading as="h1" eyebrow="ABOUT ME" title="About" />
      <Reveal delay={0.05}>
        <p className="mt-4 max-w-3xl text-app">
          I&apos;m a Full-Stack Developer based in Dublin, Ireland, with 5+ years of
          hands-on experience building and shipping production web applications. I
          co-founded Webgest Solutions, a freelance studio delivering end-to-end websites
          and web apps with React, Next.js, Vue.js, and Node.js — using AI-assisted
          workflows (Claude, ChatGPT) to move faster without cutting corners. Earlier, at
          Odontoprev, I helped rebuild a large-scale e-commerce platform in Vue.js and
          shipped mobile features with the Ionic Framework. I&apos;m currently completing a
          BSc in Computing at Dorset College Dublin.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-6">
        <div>
          <h2 className="text-xl font-semibold">Highlights</h2>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-app">
            <li>
              <span className="font-medium">Frontend:</span> React, Next.js, Vue.js (2/3),
              Ionic, TypeScript, JavaScript (ES6+), Tailwind CSS
            </li>
            <li>
              <span className="font-medium">Backend &amp; Tooling:</span> Node.js, REST
              APIs, Git/GitHub, Vercel
            </li>
            <li>
              <span className="font-medium">AI-Assisted Development:</span> Claude and
              ChatGPT for code generation, automation, and content workflows
            </li>
            <li>
              <span className="font-medium">Practices:</span> Responsive &amp; Accessible
              UI, Agile/Scrum, cross-functional collaboration with international clients
            </li>
            <li>
              <span className="font-medium">Languages:</span> Portuguese (native), English
              (full professional), Spanish (elementary)
            </li>
          </ul>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <Reveal delay={0.05}>
          <h2 className="mb-4 text-xl font-semibold">Experience</h2>
          <Timeline
            items={[
              {
                content: (
                  <div>
                    <h3 className="text-lg font-semibold">
                      Co-Founder &amp; Full-Stack Developer — Webgest Solutions
                    </h3>
                    <p className="text-sm text-muted">
                      Jun 2025 — Present — Dublin (Remote)
                    </p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-app">
                      <li>
                        Delivered end-to-end web solutions — from planning and UX
                        structure to development, deployment, and delivery — with React,
                        Next.js, Vue.js, and JavaScript.
                      </li>
                      <li>
                        Used AI tools (Claude, ChatGPT) to speed up development,
                        generate code, and automate repetitive tasks.
                      </li>
                      <li>
                        Built responsive interfaces and reusable component libraries for
                        fast, modern user experiences.
                      </li>
                      <li>
                        Integrated back-end features with Node.js and REST APIs;
                        deployed and maintained applications on Vercel.
                      </li>
                      <li>Worked directly with international clients and remote teams.</li>
                    </ul>
                  </div>
                ),
              },
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
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mb-4 text-xl font-semibold">Education</h2>
          <Timeline
            items={[
              {
                content: (
                  <div>
                    <h3 className="text-lg font-semibold">
                      BSc Computing — Dorset College Dublin
                    </h3>
                    <p className="text-sm text-muted">Aug 2026 — Sep 2028 · In progress</p>
                  </div>
                ),
              },
              {
                content: (
                  <div>
                    <h3 className="text-lg font-semibold">
                      B.Sc. — Systems Analysis and Development (FMU | FIAM-FAAM)
                    </h3>
                    <p className="text-sm text-muted">Jan 2023 — Dec 2025 · Completed</p>
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
            ]}
          />
        </Reveal>
      </div>
    </Section>
  )
}
