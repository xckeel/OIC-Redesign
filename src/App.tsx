import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Store,
  X,
} from "lucide-react";

const memberUrl = "https://membership.orointegrated.coop/";

const services = [
  {
    title: "Savings & deposits",
    description:
      "Build a steady foundation with savings options for your plans, big and small.",
    label: "Explore savings",
    href: "https://orointegrated.coop/savings-deposit/",
    Icon: Landmark,
  },
  {
    title: "Loans",
    description:
      "Find flexible support for life’s milestones, emergencies, and livelihood goals.",
    label: "Explore loans",
    href: "https://orointegrated.coop/productive-loan-6/",
    Icon: BriefcaseBusiness,
  },
  {
    title: "Insurance",
    description:
      "Help protect the people you love and the plans you are working toward.",
    label: "Explore protection",
    href: "https://orointegrated.coop/life-plan/",
    Icon: ShieldCheck,
  },
  {
    title: "Member services",
    description:
      "Discover everyday services and opportunities available through the OIC community.",
    label: "Explore services",
    href: "https://orointegrated.coop/shop/",
    Icon: Store,
  },
];

const stories = [
  {
    image:
      "https://orointegrated.coop/wp-content/uploads/2026/06/SAMPLE-SLIDER.jpg",
    imageAlt: "OIC Ginintuang Puso Program community school activity",
    category: "Community · June 2026",
    title: "Bayanihan in action: building better schools together",
    description:
      "OIC and the Ginintuang Puso Program joined the regional Brigada Eskwela kick-off in Cagayan de Oro.",
    href: "https://orointegrated.coop/news-4/",
    featured: true,
  },
  {
    image:
      "https://orointegrated.coop/wp-content/uploads/2025/11/462643643_579404834745775_1353284135135989852_n.jpg",
    imageAlt: "Women members participating in a health screening",
    category: "Member wellbeing",
    title: "Care that reaches our women members",
    description:
      "A health partnership brought free breast and cervical cancer screening closer to women members.",
    href: "https://orointegrated.coop/news-2/",
  },
  {
    image:
      "https://orointegrated.coop/wp-content/uploads/2025/11/oic-toril-3rd-anniversary.jpg",
    imageAlt: "OIC Toril branch anniversary celebration",
    category: "Member milestones",
    title: "Three years of growing together in Toril",
    description:
      "OIC Toril celebrates three years of service, community, and shared progress in Davao.",
    href: "https://orointegrated.coop/news-2/",
  },
];

const ArrowLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a className="text-link" href={href}>
    {children}
    <ArrowRight aria-hidden="true" size={16} />
  </a>
);

function Brand() {
  return (
    <a className="brand" href="#" aria-label="Oro Integrated Cooperative home">
      <span className="brand-mark" aria-hidden="true">
        OIC
      </span>
      <span className="brand-name">
        ORO INTEGRATED
        <span>COOPERATIVE</span>
      </span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="bg-forest-deep text-[#e3ebe5]">
        <div className="page-wrap utility-inner">
          <div className="flex items-center gap-3 text-[10px] sm:gap-[22px] sm:text-[11px]">
            <a className="transition-colors hover:text-gold" href="tel:+63888562371">
              Member care: (088) 856-2371
            </a>
            <span className="size-1 rounded-full bg-gold" aria-hidden="true" />
            <a
              className="transition-colors hover:text-gold"
              href="https://memberconcern.orointegrated.coop/posts/create/concern"
            >
              Member concern
            </a>
          </div>
          <div className="hidden items-center gap-[22px] text-[11px] sm:flex">
            <span>Cagayan de Oro City, Philippines</span>
            <a
              className="transition-colors hover:text-gold"
              href="https://www.facebook.com/taranasaOIC"
            >
              Facebook ↗
            </a>
          </div>
        </div>
      </div>

      <header className="relative z-10 bg-paper-white">
        <div className="page-wrap flex h-[70px] items-center justify-between md:h-[82px]">
          <Brand />
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="rounded-sm p-2 text-forest md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
          <nav
            aria-label="Main navigation"
            className={`${menuOpen ? "flex" : "hidden"} nav-menu md:flex`}
          >
            <a href="#about" onClick={closeMenu}>Our story</a>
            <a href="#services" onClick={closeMenu}>Products & services</a>
            <a href="#stories" onClick={closeMenu}>Community</a>
            <a href="https://orointegrated.coop/contact-us-3/" onClick={closeMenu}>
              Contact
            </a>
            <a className="button button-green" href={memberUrl} onClick={closeMenu}>
              Become a member <ArrowUpRight aria-hidden="true" size={15} />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section aria-labelledby="hero-title" className="hero-section">
          <div
            aria-label="OIC members celebrating a branch anniversary"
            className="hero-image"
            role="img"
          />
          <div className="page-wrap hero-inner">
            <div className="hero-copy">
              <span className="eyebrow eyebrow-light">
                A cooperative for every chapter
              </span>
              <h1 id="hero-title">
                A future we build <em>together.</em>
              </h1>
              <p>
                More than financial services, OIC is a community of people
                helping one another move forward — one goal, one family, one
                generation at a time.
              </p>
              <div className="mt-[29px] flex flex-wrap gap-3">
                <a className="button button-gold" href={memberUrl}>
                  Find your place at OIC <ArrowUpRight aria-hidden="true" size={15} />
                </a>
                <a className="button button-outline" href="#services">
                  Explore what we offer <ArrowDown aria-hidden="true" size={15} />
                </a>
              </div>
            </div>
            <div aria-label="Serving members since 1966" className="hero-stamp">
              <strong>1966</strong>
              <span>Growing together since</span>
            </div>
            <div className="hero-note">
              Rooted in Cagayan de Oro. Growing with our members.
            </div>
          </div>
          <span className="scroll-mark" aria-hidden="true" />
        </section>

        <section aria-label="OIC at a glance" className="bg-paper-white">
          <div className="page-wrap proof-grid">
            <div className="proof-item">
              <strong>209,000+</strong>
              <span>Members and counting</span>
            </div>
            <div className="proof-item">
              <strong>Since 1966</strong>
              <span>Built on shared purpose</span>
            </div>
            <div className="proof-item">
              <strong>One community</strong>
              <span>Many ways to grow</span>
            </div>
            <p className="proof-note">
              <strong>When members thrive, communities thrive.</strong>
              <br />
              That belief has guided the OIC community for generations.
            </p>
          </div>
        </section>

        <section className="section-space" id="about">
          <div className="page-wrap intro-grid">
            <div className="intro-art">
              <div
                aria-label="Community gathering with OIC members"
                className="intro-photo"
                role="img"
              />
              <div className="intro-caption">
                <strong>People first.</strong>
                <span>Shared progress, made possible together.</span>
              </div>
            </div>
            <div className="intro-copy">
              <span className="eyebrow">A little more about us</span>
              <h2>Big enough to help. Close enough to care.</h2>
              <p>
                Oro Integrated Cooperative began with a simple idea: people can
                do more when they work together. Today, that spirit connects
                members across generations and communities.
              </p>
              <p>
                Whether you are saving for a first home, building a livelihood,
                or planning for the future, we are here to help you take the
                next step with confidence.
              </p>
              <ArrowLink href="https://orointegrated.coop/history-of-oic/">
                Get to know OIC
              </ArrowLink>
            </div>
          </div>
        </section>

        <section className="services-section section-space" id="services">
          <div className="page-wrap">
            <div className="section-heading">
              <div>
                <span className="eyebrow">Your goals, supported</span>
                <h2>Good things grow with a little help.</h2>
              </div>
              <p>
                Practical financial services, backed by people who understand
                what it takes to build a more secure future.
              </p>
            </div>
            <div className="service-grid">
              {services.map(({ title, description, label, href, Icon }) => (
                <article className="service-card" key={title}>
                  <span className="service-icon">
                    <Icon aria-hidden="true" size={21} strokeWidth={1.6} />
                  </span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <ArrowLink href={href}>{label}</ArrowLink>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="join-title" className="join-section">
          <div className="page-wrap join-inner">
            <div>
              <span className="eyebrow eyebrow-light">
                Your next chapter starts here
              </span>
              <h2 id="join-title">Your goals belong in a community.</h2>
              <p>
                Join over 209,000 members building a stronger financial future
                together.
              </p>
            </div>
            <a className="button button-gold" href={memberUrl}>
              Become an OIC member <ArrowUpRight aria-hidden="true" size={15} />
            </a>
          </div>
        </section>

        <section className="section-space stories-section" id="stories">
          <div className="page-wrap">
            <div className="section-heading">
              <div>
                <span className="eyebrow">The OIC community</span>
                <h2>Progress worth sharing.</h2>
              </div>
              <p>
                From member milestones to community action, these are the
                moments that bring our cooperative spirit to life.
              </p>
            </div>
            <div className="story-grid">
              {stories.map((story) => (
                <article
                  className={`story-card${story.featured ? " story-featured" : ""}`}
                  key={story.title}
                >
                  <a className="story-image" href={story.href}>
                    <img alt={story.imageAlt} loading="lazy" src={story.image} />
                  </a>
                  <span className="story-category">{story.category}</span>
                  <h3>{story.title}</h3>
                  <p>{story.description}</p>
                  <ArrowLink href={story.href}>Read the story</ArrowLink>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="page-wrap contact-card">
            <div className="contact-main">
              <span className="eyebrow">We’re here to help</span>
              <h2>Let’s talk about what’s next.</h2>
              <p>
                Have a question about membership or a service? Our team is ready
                to point you in the right direction.
              </p>
            </div>
            <div className="contact-details">
              <div className="contact-line">
                <MapPin aria-hidden="true" />
                <span>
                  3/F, OIC Building, Tiano-Yacapin St.,
                  <br />
                  Cagayan de Oro City, 9000
                </span>
              </div>
              <div className="contact-line">
                <Phone aria-hidden="true" />
                <a href="tel:+63888562371">(088) 856-2371</a>
              </div>
              <div className="contact-line">
                <Mail aria-hidden="true" />
                <a href="mailto:oic_customerservice@orointegrated.coop">
                  oic_customerservice@orointegrated.coop
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="page-wrap">
          <div className="footer-top">
            <div className="footer-brand">
              <Brand />
              <p>
                Stronger futures start when we move forward together. Proudly
                serving members and communities since 1966.
              </p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h3>Discover OIC</h3>
                <a href="https://orointegrated.coop/history-of-oic/">Our story</a>
                <a href="https://orointegrated.coop/news-2/">News & events</a>
                <a href="https://orointegrated.coop/annual-program-2/">
                  Publications
                </a>
              </div>
              <div className="footer-column">
                <h3>For members</h3>
                <a href="https://orointegrated.coop/savings-deposit/">Savings</a>
                <a href="https://orointegrated.coop/productive-loan-6/">Loans</a>
                <a href="https://memberconcern.orointegrated.coop/posts/create/concern">
                  Member concern
                </a>
              </div>
              <div className="footer-column">
                <h3>Get in touch</h3>
                <a href="https://orointegrated.coop/contact-us-3/">Contact us</a>
                <a href="https://orointegrated.coop/data-privacy-page/">
                  Data privacy
                </a>
                <a href="https://www.facebook.com/taranasaOIC">Facebook ↗</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Oro Integrated Cooperative. All rights reserved.</span>
            <div className="social-links">
              <a href="https://www.facebook.com/taranasaOIC">Facebook</a>
              <a href="https://www.instagram.com/taranasaoic/">Instagram</a>
              <a href="https://www.youtube.com/@orointegratedcooperativeof2791">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
