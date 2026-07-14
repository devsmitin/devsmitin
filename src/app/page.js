export default function Home() {
  return (
    <>
      <nav>
        <div className="nav-logo">smit<span>.</span>modi</div>
        <ul className="nav-links">
          <li><a href="#work">Work</a></li>
          <li><a href="#timeline">Experience</a></li>
          <li><a href="#stack">Stack</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main>
        <section id="hero">
          <div className="hero-inner">
            <p className="hero-tag">Senior Shopify Developer</p>
            <h1>Building storefronts<br /><em>that don&apos;t look built.</em></h1>
            <p className="hero-sub">10 years of agency-side Shopify work — custom themes, checkout extensions, platform migrations, and API integrations for international brands.</p>

            <div className="stat-bar">
              <div className="stat-bar-item">
                <div className="n">300<sup>+</sup></div>
                <div className="l">storefronts delivered</div>
              </div>
              <div className="stat-bar-item">
                <div className="n">7<sup>+</sup></div>
                <div className="l">years Shopify focused</div>
              </div>
              <div className="stat-bar-item">
                <div className="n">10</div>
                <div className="l">years total experience</div>
              </div>
            </div>

            <div className="hero-actions">
              <a className="btn primary" href="mailto:smitm.official@gmail.com">get in touch</a>
              <a className="btn" href="#work">see the work</a>
              <a className="btn" href="#">resume</a>
            </div>
          </div>
        </section>

        <section id="work" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-label">01 / featured work</span>
              <h2>Selected projects</h2>
            </div>
            <div className="work-grid">
              <div className="work-card">
                <div className="work-card-top">
                  <span className="work-year">2019–2021</span>
                  <span className="work-badge plus">Shopify Plus</span>
                </div>
                <h3>The Man Company</h3>
                <p>Custom checkout experiences and React-powered storefront components for one of India&apos;s leading men&apos;s grooming brands on Shopify Plus.</p>
                <div className="work-stack">
                  <span>Shopify Plus</span><span>React</span><span>Liquid</span><span>Checkout customisation</span>
                </div>
              </div>

              <div className="work-card">
                <div className="work-card-top">
                  <span className="work-year">2022</span>
                  <span className="work-badge">Shopify</span>
                </div>
                <h3>Woolzies Home Essentials</h3>
                <p>Pixel-perfect conversion of Adobe XD designs into a fully responsive Shopify theme. Reusable component architecture built for long-term maintainability.</p>
                <div className="work-stack">
                  <span>Liquid</span><span>JavaScript</span><span>Adobe XD</span><span>Responsive</span>
                </div>
              </div>

              <div className="work-card">
                <div className="work-card-top">
                  <span className="work-year">2024</span>
                  <span className="work-badge">Shopify</span>
                </div>
                <h3>MV Agusta</h3>
                <p>Single-page pre-booking storefront for a product launch campaign. Lead generation focus with tight deadline delivery and AICO ERP integration.</p>
                <div className="work-stack">
                  <span>Liquid</span><span>JavaScript</span><span>AICO ERP</span><span>Landing page</span>
                </div>
              </div>

              <div className="work-card">
                <div className="work-card-top">
                  <span className="work-year">2025</span>
                  <span className="work-badge">Shopify</span>
                </div>
                <h3>Ecofort</h3>
                <p>Pixel-perfect Figma-to-Shopify build with full AICO ERP integration to streamline business operations. Scalable, maintainable component architecture.</p>
                <div className="work-stack">
                  <span>Liquid</span><span>Figma</span><span>AICO ERP</span><span>JavaScript</span>
                </div>
              </div>

              <div className="work-card">
                <div className="work-card-top">
                  <span className="work-year">2026</span>
                  <span className="work-badge">Migration</span>
                </div>
                <h3>Laviss</h3>
                <p>Full store migration from Vilkas ePages to Shopify. 3,300+ orders, 2,500+ customers, 275+ products migrated with custom data mapping and zero business disruption.</p>
                <div className="work-stack">
                  <span>Adorn Precious</span><span>GraphQL</span><span>Storefront API</span><span>Data migration</span>
                </div>
              </div>

              <div className="work-card">
                <div className="work-card-top">
                  <span className="work-year">2026</span>
                  <span className="work-badge">Shopify</span>
                </div>
                <h3>Vultera</h3>
                <p>Full storefront redesign from updated Figma specs. Reusable theme components and responsive layouts built for scalability and ongoing maintainability.</p>
                <div className="work-stack">
                  <span>Liquid</span><span>Figma</span><span>JavaScript</span><span>Responsive</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="timeline" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-label">02 / experience</span>
              <h2>Career timeline</h2>
            </div>
            <div className="timeline">
              <div className="timeline-item">
                <div className="tl-meta">
                  <span className="tl-period">Oct 2023 – Present</span>
                </div>
                <div className="tl-company">Brightness Software Development</div>
                <div className="tl-role">Senior Shopify Developer <span className="tl-current">current</span></div>
                <div className="tl-detail">Lead end-to-end Shopify Plus development for international brands. Theme App Extensions, Admin UI Extensions, Checkout UI Extensions. GraphQL, Storefront API, Admin API integrations. Mentoring developers through code reviews.</div>
              </div>

              <div className="timeline-item">
                <div className="tl-meta">
                  <span className="tl-period">Jun – Sep 2023</span>
                </div>
                <div className="tl-company">Dit Interactive</div>
                <div className="tl-role">Senior Shopify Developer / Team Lead</div>
                <div className="tl-detail">Direct client engagement, technical leadership on complex custom theme builds, developer mentoring.</div>
              </div>

              <div className="timeline-item">
                <div className="tl-meta">
                  <span className="tl-period">Jan – Jun 2023</span>
                </div>
                <div className="tl-company">e-Wise Solutions</div>
                <div className="tl-role">Shopify / Full-stack Developer</div>
                <div className="tl-detail">Custom payment gateway integration built with Laravel. Product, collection, and cart experience customisation.</div>
              </div>

              <div className="timeline-item">
                <div className="tl-meta">
                  <span className="tl-period">Jun 2021 – Oct 2022</span>
                </div>
                <div className="tl-company">ManekTech</div>
                <div className="tl-role">Shopify Developer</div>
                <div className="tl-detail">Dedicated Shopify developer working directly with clients. Figma and Adobe XD to responsive Shopify theme conversion. Cross-functional team collaboration.</div>
              </div>

              <div className="timeline-item">
                <div className="tl-meta">
                  <span className="tl-period">Sep 2019 – Jun 2021</span>
                </div>
                <div className="tl-company">Lucent Innovation</div>
                <div className="tl-role">Frontend Developer &amp; Project Manager</div>
                <div className="tl-detail">Shopify storefronts, reusable React components, client communication and project planning. Dual technical and managerial role.</div>
              </div>

              <div className="timeline-item">
                <div className="tl-meta">
                  <span className="tl-period">Nov 2016 – Feb 2019</span>
                </div>
                <div className="tl-company">Multidots Solutions</div>
                <div className="tl-role">Frontend Web Developer</div>
                <div className="tl-detail">Responsive websites in HTML, CSS, JavaScript, and WordPress. UI design to production-ready interface conversion.</div>
              </div>

              <div className="timeline-item">
                <div className="tl-meta">
                  <span className="tl-period">Jul – Nov 2016</span>
                </div>
                <div className="tl-company">Biznovare Solutions</div>
                <div className="tl-role">Web Developer / Designer — Intern</div>
                <div className="tl-detail">Frontend development and UI design in Odoo. The beginning.</div>
              </div>
            </div>
          </div>
        </section>

        <section id="stack" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-label">03 / technical depth</span>
              <h2>Stack &amp; expertise</h2>
            </div>
            <div className="stack-table">
              <div className="stack-row">
                <div className="stack-row-label">Shopify</div>
                <div className="stack-row-items">
                  <span className="stack-tag highlight">Shopify Plus</span>
                  <span className="stack-tag primary">Liquid</span>
                  <span className="stack-tag primary">Checkout UI Extensions</span>
                  <span className="stack-tag primary">Theme App Extensions</span>
                  <span className="stack-tag">Shopify Functions</span>
                  <span className="stack-tag">Metafields</span>
                  <span className="stack-tag">Metaobjects</span>
                  <span className="stack-tag">Shopify CLI</span>
                </div>
              </div>

              <div className="stack-row">
                <div className="stack-row-label">Frontend</div>
                <div className="stack-row-items">
                  <span className="stack-tag primary">JavaScript ES6+</span>
                  <span className="stack-tag primary">Sass / CSS3</span>
                  <span className="stack-tag primary">React</span>
                  <span className="stack-tag">TypeScript</span>
                  <span className="stack-tag">HTML5</span>
                  <span className="stack-tag">Responsive Design</span>
                  <span className="stack-tag">Accessibility</span>
                </div>
              </div>

              <div className="stack-row">
                <div className="stack-row-label">APIs</div>
                <div className="stack-row-items">
                  <span className="stack-tag primary">Storefront API</span>
                  <span className="stack-tag primary">Admin API</span>
                  <span className="stack-tag primary">GraphQL</span>
                  <span className="stack-tag">REST API</span>
                  <span className="stack-tag">AICO ERP</span>
                  <span className="stack-tag">Matrixify</span>
                  <span className="stack-tag">GTM / GA4</span>
                </div>
              </div>

              <div className="stack-row">
                <div className="stack-row-label">Themes</div>
                <div className="stack-row-items">
                  <span className="stack-tag primary">Dawn</span>
                  <span className="stack-tag primary">Horizon</span>
                  <span className="stack-tag primary">Prestige</span>
                  <span className="stack-tag">Impulse</span>
                  <span className="stack-tag">Turbo</span>
                  <span className="stack-tag">Concept</span>
                  <span className="stack-tag">Adorn Precious</span>
                </div>
              </div>

              <div className="stack-row">
                <div className="stack-row-label">Tooling</div>
                <div className="stack-row-items">
                  <span className="stack-tag primary">Git / GitHub</span>
                  <span className="stack-tag primary">Figma</span>
                  <span className="stack-tag">Postman</span>
                  <span className="stack-tag">Jira</span>
                  <span className="stack-tag">SSH</span>
                  <span className="stack-tag green">Claude</span>
                  <span className="stack-tag green">OpenCode</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-copy">
                <h2>Let&apos;s build something.</h2>
                <p>Available for contract and freelance work — Shopify theme builds, custom sections, checkout extensions, migrations, or ongoing agency support.</p>
                <div className="hero-actions">
                  <a className="btn primary" href="mailto:smitm.official@gmail.com">send an email</a>
                </div>
              </div>
              <div className="contact-links">
                <a href="mailto:smitm.official@gmail.com">
                  <div>
                    <div className="link-label">email</div>
                    <div>smitm.official@gmail.com</div>
                  </div>
                  <span className="arrow">↗</span>
                </a>
                <a href="https://github.com/devsmitin" target="_blank" rel="noopener noreferrer">
                  <div>
                    <div className="link-label">github</div>
                    <div>github.com/devsmitin</div>
                  </div>
                  <span className="arrow">↗</span>
                </a>
                <a href="https://in.linkedin.com/in/devsmitin" target="_blank" rel="noopener noreferrer">
                  <div>
                    <div className="link-label">linkedin</div>
                    <div>linkedin.com/in/devsmitin</div>
                  </div>
                  <span className="arrow">↗</span>
                </a>
                <a href="#">
                  <div>
                    <div className="link-label">resume</div>
                    <div>download PDF</div>
                  </div>
                  <span className="arrow">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>&copy; 2026 Smit Modi · Ahmedabad, India</span>
        <span>built to spec. deployed on time.</span>
      </footer>
    </>
  );
}
