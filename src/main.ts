import {
  categories,
  education,
  profile,
  projects,
  roles,
  skills,
  type Category,
  type Project,
} from "./data";

function root(): HTMLElement {
  const element = document.querySelector<HTMLElement>("#main");
  if (!element) throw new Error("Missing #main");
  return element;
}

const asset = (path: string): string => `${import.meta.env.BASE_URL}${path}`;

const esc = (value: string): string =>
  value.replace(/[&<>"']/g, (char) => {
    const map: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return map[char] ?? char;
  });

let filter: "All" | Category = "All";

function projectFromHash(): Project | undefined {
  const match = location.hash.match(/^#project\/([a-z0-9-]+)$/);
  if (!match) return undefined;
  return projects.find((project) => project.slug === match[1]);
}

function setCurrentNav(): void {
  const section = projectFromHash() ? "work" : location.hash.replace("#", "") || "work";
  document.querySelectorAll<HTMLAnchorElement>(".nav a").forEach((link) => {
    const active = link.getAttribute("href") === `#${section}`;
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

function card(project: Project, index: number): string {
  const year = project.year ? ` · ${project.year}` : "";
  return `
    <a class="card" href="#project/${project.slug}">
      <div class="card-media">
        <img src="${esc(asset(project.image))}" alt="${esc(project.imageAlt)}" />
      </div>
      <div class="card-body">
        <div>
          <div class="card-kicker">${String(index + 1).padStart(2, "0")} · ${esc(project.category)}${year}</div>
          <h3>${esc(project.name)}</h3>
          <p>${esc(project.summary)}</p>
        </div>
      </div>
    </a>
  `;
}

function home(): string {
  const visible = projects.filter((project) => filter === "All" || project.category === filter);
  return `
    <div class="wrap">
      <section class="hero">
        <div>
          <p class="eyebrow">${esc(profile.role)}</p>
          <h1>Apps that make the work easier.</h1>
          <p class="lede">
            I build Android and iOS products for field teams, shops, rewards, estate planning, and city services. Based in ${esc(profile.location)}.
          </p>
          <div class="hero-actions">
            <a class="button" href="#work">Selected work</a>
            <a class="button ghost" href="mailto:${esc(profile.email)}">Email me</a>
          </div>
        </div>
        <figure class="portrait">
          <img src="${esc(asset(profile.portrait))}" alt="Portrait of ${esc(profile.name)}" />
          <figcaption>${esc(profile.location)} · mobile apps since 2016</figcaption>
        </figure>
      </section>

      <section id="work">
        <div class="section-head">
          <h2>Selected work</h2>
          <div class="filters" role="group" aria-label="Filter projects">
            ${categories
              .map(
                (category) => `
                  <button type="button" data-filter="${category}" aria-pressed="${category === filter}">
                    ${category}
                  </button>
                `,
              )
              .join("")}
          </div>
        </div>
        <div class="grid">
          ${visible.map((project) => card(project, projects.indexOf(project))).join("")}
        </div>
      </section>

      <section class="about" id="about">
        <div class="section-head"><h2>About</h2></div>
        <div class="split">
          <div class="prose">
            <p>
              I like building mobile apps, and I like learning the next tool that makes one possible. The part I enjoy is an application that makes someone’s task easier. If it can be built, it is worth trying.
            </p>
            <p>Indonesian and English.</p>
            <h3>Education</h3>
            <ul class="timeline">
              ${education
                .map(
                  (item) => `
                    <li>
                      <span class="when">${esc(item.period)}</span>
                      <strong>${esc(item.title)}</strong>
                      <span class="place">${esc(item.place)}</span>
                    </li>
                  `,
                )
                .join("")}
            </ul>
            <ul class="chips" aria-label="Skills">
              ${skills.map((skill) => `<li>${esc(skill)}</li>`).join("")}
            </ul>
          </div>
          <div>
            <h3>Experience</h3>
            <ul class="timeline">
              ${roles
                .map(
                  (role) => `
                    <li>
                      <span class="when">${esc(role.period)}</span>
                      <strong>${esc(role.title)}</strong>
                      <span class="place">${esc(role.place)}</span>
                      <p>${esc(role.detail)}</p>
                    </li>
                  `,
                )
                .join("")}
            </ul>
          </div>
        </div>
      </section>

      <section class="contact" id="contact">
        <div class="section-head"><h2>Contact</h2></div>
        <div class="split">
          <p class="lede">If you have a mobile product to talk through, send a note.</p>
          <ul class="contact-list">
            <li><a href="mailto:${esc(profile.email)}">${esc(profile.email)}</a></li>
            <li><a href="${esc(profile.phoneHref)}">${esc(profile.phone)}</a></li>
            <li><a href="${esc(profile.linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </section>
    </div>
  `;
}

function caseStudy(project: Project): string {
  const index = projects.indexOf(project) + 1;
  return `
    <article class="case wrap">
      <a class="back" href="#work">← All work</a>
      <p class="eyebrow">${String(index).padStart(2, "0")} · ${esc(project.category)}</p>
      <h1>${esc(project.name)}</h1>
      <p class="lede">${esc(project.summary)}</p>
      <dl class="meta">
        <div><dt>Platforms</dt><dd>${esc(project.platforms.join(", "))}</dd></div>
        <div><dt>Tools</dt><dd>${esc(project.tools.join(", "))}</dd></div>
        ${project.year ? `<div><dt>Year</dt><dd>${esc(project.year)}</dd></div>` : ""}
      </dl>
      <figure class="case-figure">
        <img src="${esc(asset(project.image))}" alt="${esc(project.imageAlt)}" />
      </figure>
      <div class="case-grid">
        <div>
          <p>${esc(project.story)}</p>
          ${project.note ? `<p class="note">${esc(project.note)}</p>` : ""}
          <div class="store-links">
            ${project.links
              .map(
                (link) =>
                  `<a class="button" href="${esc(link.href)}" target="_blank" rel="noopener noreferrer">${esc(link.label)}</a>`,
              )
              .join("")}
          </div>
        </div>
        <div>
          <h2>In the app</h2>
          <ul>
            ${project.highlights.map((item) => `<li>${esc(item)}</li>`).join("")}
          </ul>
        </div>
      </div>
    </article>
  `;
}

function render(scroll: boolean): void {
  const project = projectFromHash();
  document.title = project
    ? `${project.name} — Ishak`
    : "Ishak — Mobile application developer";
  root().innerHTML = project ? caseStudy(project) : home();
  setCurrentNav();
  if (!scroll) return;
  if (!project && (location.hash === "#about" || location.hash === "#contact" || location.hash === "#work")) {
    document.querySelector(location.hash)?.scrollIntoView();
  } else {
    window.scrollTo(0, 0);
  }
}

root().addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLButtonElement)) return;
  const next = target.dataset.filter;
  if (!next) return;
  filter = next as "All" | Category;
  render(false);
});

window.addEventListener("hashchange", () => render(true));
render(false);
