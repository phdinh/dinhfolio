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
          <h1 id="hero-title">I build thoughtful software for real-world systems.</h1>

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
          <div className="avatar-frame">
            <svg className="avatar-role-ring" viewBox="0 0 320 320" aria-hidden="true">
              <defs>
                <path
                  id="avatar-role-path"
                  d="M 160,160 m -136,0 a 136,136 0 1,1 272,0 a 136,136 0 1,1 -272,0"
                />
              </defs>

              <text>
                <textPath href="#avatar-role-path" startOffset="2%">
                  FULL-STACK ENGINEER · PRODUCT-MINDED DEVELOPER
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
          </div>

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
    </main>
  );
}
