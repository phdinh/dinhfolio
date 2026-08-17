import Link from 'next/link';
import Image from 'next/image';

const featuredProjects = [
  {
    number: '01',
    title: 'Long Black OS',
    description: 'A branded loyalty and customer-experience layer for a specialty coffee shop.',
    status: 'In progress',
  },
  {
    number: '02',
    title: 'Bilingual Wedding Site',
    description:
      'A custom, accessible celebration experience designed for two languages and one story.',
    status: 'In progress',
  },
  {
    number: '03',
    title: 'Ground Systems Simulator',
    description:
      'An operations-focused interface for interpreting complex data and supporting better decisions.',
    status: 'In progress',
  },
];
const experiences = [
  {
    id: 'gd',
    period: '2024 — 2026',
    role: 'Full-Stack Software Engineer',
    company: 'General Dynamics Nassco-Norfolk',
    summary:
      'Building and modernizing internal software for complex, operations-heavy workflows in a compliance-driven environment. Supporting a lean team of engineers to deliver reliable, maintainable applications that reduce ambiguity and improve business processes.',
    highlights: [
      'Helped migrate a legacy requisition workflow across three business units with convoluted approval processes and business rules.',
      'Translated undocumented operational knowledge into explicit workflow states, validation rules, and dependable system behavior.',
      'Used markup, JavaScript, C#, .NET, SQL, and REST APIs in a multi-project TFS solution to support reliable, maintainable applications.',
      'Focused on reducing duplicate approvals, process drift, and ambiguity in high-dependency systems.',
    ],
    stack: ['ASP.Net', 'JavaScript', 'C#', '.NET', 'SQL', 'REST APIs'],
  },
  {
    id: 'builder',
    period: '2024 — Present',
    role: 'Independent Product Builder',
    company: 'Personal Projects',
    summary:
      'Designing and shipping thoughtful web products from first workflow to polished interface for small business owners or professional skill demonstration.',
    highlights: [
      'Building Long Black OS, a branded customer experience and loyalty layer designed around a specialty café’s existing Square ecosystem.',
      'Creating a bilingual, accessibility-conscious wedding site that treats language and cultural context as core product requirements.',
      'Developing Dinhfolio as a production-minded portfolio with a polished public experience and an optional personal “Off Menu” discovery.',
      'Using rapid iteration, product discovery, and design systems to move concepts toward shippable MVPs.',
    ],
    stack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
  },
];

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Dinhfolio home">
          <span>DINHFOLIO</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link className="nav-cta" href="/contact">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </Link>
      </header>

      <section className="hero-banner" aria-labelledby="hero-title">
        <div className="hero-banner-copy">
          <h1 id="hero-title">
            I build <span className="hero-serif">thoughtful</span>
            <br />
            software for <span className="hero-serif">real-world systems. </span>
          </h1>

          <p className="hero-description">
            I turn complex workflows into reliable, human-centered products—from customer
            experiences to operational tools.
          </p>

          <div className="hero-actions">
            <Link className="button button-primary" href="/work">
              Explore selected work
              <span aria-hidden="true">↗</span>
            </Link>

            <Link className="text-link" href="/about">
              A little about me
              <span aria-hidden="true">↓</span>
            </Link>
          </div>
        </div>

        <div className="avatar-column">
          <Link
            className="avatar-frame avatar-trigger"
            href="/off-menu"
            aria-label="Explore my Secret Menu!"
          >
            <svg className="avatar-role-ring" viewBox="0 0 320 320" aria-hidden="true">
              <defs>
                <path
                  id="avatar-role-path"
                  d="M 160,160 m -136,0 a 136,136 0 1,1 272,0 a 136,136 0 1,1 -272,0"
                />
              </defs>

              <text>
                <textPath href="#avatar-role-path" startOffset="2%">
                  FULL-STACK ENGINEER · PRODUCT-MINDED BUILDER ·
                </textPath>
              </text>
            </svg>

            <div className="avatar-photo-wrap">
              <Image
                src="/images/heroprofile.jpg"
                alt="Portrait of Patricia Dinh"
                width={560}
                height={560}
                priority
                className="avatar-photo"
              />
            </div>

            <span className="avatar-tooltip" aria-hidden="true">
              Explore my secret menu
            </span>
          </Link>

          <p className="avatar-note">
            Building with care.
            <br />
            Brewing with curiosity.
          </p>
        </div>
      </section>

      <section className="work-preview" aria-labelledby="featured-work-title">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2 id="featured-work-title">Products with a point of view.</h2>
        </div>

        <div className="project-list">
          {featuredProjects.map((project) => (
            <article className="project-row" key={project.number}>
              <p className="project-number">{project.number}</p>

              <div>
                <p className="project-status">{project.status}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              <span className="project-arrow" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>
      </section>
      <section className="experience-section" id="experience" aria-labelledby="experience-title">
  <div className="experience-header">
    <div>
      <p className="eyebrow">Professional experience</p>
      <h2 id="experience-title">The work behind the work.</h2>
    </div>

    <p className="experience-intro">
      A little more context on the systems, workflows, and product problems I
      have worked through.
    </p>
  </div>

  <div className="experience-list">
    {experiences.map((experience) => (
      <details className="experience-item" key={experience.id}>
        <summary>
          <span className="experience-period">{experience.period}</span>

          <span className="experience-title-group">
            <span className="experience-role">{experience.role}</span>
            <span className="experience-company">{experience.company}</span>
          </span>

          <span className="experience-toggle" aria-hidden="true">
            <span />
            <span />
          </span>
        </summary>

        <div className="experience-content">
          <p className="experience-summary">{experience.summary}</p>

          <ul className="experience-highlights">
            {experience.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          <div className="experience-stack" aria-label="Technologies used">
            {experience.stack.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </details>
    ))}
  </div>
</section>
    </main>
  );
}
