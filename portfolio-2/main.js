/* ============================================================
   Mehak Fatima Naqvi — main.js
   ============================================================ */

// ── DATA ─────────────────────────────────────────────────────

/** Mehak's 4 real services — shown as highlight cards */
const SERVICES_HIGHLIGHT = [
  {
    icon: "ri-layout-masonry-line",
    title: "Frontend Development",
    subtitle: "Figma → Pixel-Perfect Implementation",
    description: "I take your Figma designs and bring them to life with React & Tailwind — every spacing, shadow, and interaction exactly as designed. Zero compromise on fidelity.",
    tags: ["React", "Tailwind", "Figma"],
    color: "#7b2cbf",
  },
  {
    icon: "ri-smartphone-line",
    title: "Responsiveness",
    subtitle: "Seamless Desktop-to-Mobile Experience",
    description: "Every layout I build works beautifully across all screen sizes — from a 4K monitor to a 320px phone. Mobile-first, fluid, and tested across devices.",
    tags: ["Mobile-First", "CSS Grid", "Flex"],
    color: "#9d4edd",
  },
  {
    icon: "ri-user-heart-line",
    title: "UX Design",
    subtitle: "Clean, Intuitive Interfaces",
    description: "I design and implement interfaces that users enjoy using — clear navigation, meaningful micro-interactions, and thoughtful information hierarchy.",
    tags: ["UX Patterns", "Accessibility", "Motion"],
    color: "#c77dff",
  },
  {
    icon: "ri-server-2-line",
    title: "Backend Engineering",
    subtitle: "Scalable APIs & Databases",
    description: "Need a backend too? I build robust REST APIs with Node.js, manage data with Prisma ORM, and design PostgreSQL schemas that scale as you grow.",
    tags: ["Node.js", "Prisma", "PostgreSQL"],
    color: "#5a189a",
  },
];

/** Extra visual service cards with images */
const SERVICES_VISUAL = [
  {
    title: "UI / UX Design",
    description: "Pixel-perfect interfaces backed by user psychology. Experiences that feel intuitive and convert.",
    icon: "ri-palette-line",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    tags: ["Figma", "Prototyping", "Systems"],
  },
  {
    title: "Landing Pages",
    description: "High-converting landing pages engineered for speed, clarity, and measurable growth — live in days.",
    icon: "ri-pages-line",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["Conversion", "SEO", "Performance"],
  },
  {
    title: "SaaS Products",
    description: "From idea to production-grade SaaS. Architect, build, and ship scalable web applications.",
    icon: "ri-cloud-line",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
];

const PROJECTS = [
  {
    id: 1, title: "Luminary – SaaS Dashboard",
    description: "Analytics platform with real-time insights for e-commerce teams.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    category: "SaaS", link: "#",
  },
  {
    id: 2, title: "Nova – Landing Page",
    description: "Award-winning launch page with 38% conversion rate for a B2B startup.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    category: "Landing page", link: "#",
  },
  {
    id: 3, title: "Forma – Design System UI",
    description: "Component library & Figma design system for a fintech product.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    category: "UI", link: "#",
  },
  {
    id: 4, title: "ShipFast – Frontend App",
    description: "React SPA with complex state management for a logistics company.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    category: "Frontend", link: "#",
  },
  {
    id: 5, title: "Nexus – Full Stack Platform",
    description: "Event management system with payments, auth, and admin portal.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
    category: "Full stack", link: "#",
  },
  {
    id: 6, title: "Orbit – SaaS CRM",
    description: "Customer relationship tool built for remote-first sales teams.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    category: "SaaS", link: "#",
  },
  {
    id: 7, title: "Pixel – Portfolio UI Kit",
    description: "Open-source UI kit with 60+ components in light and dark mode.",
    image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=800&q=80",
    category: "UI", link: "#",
  },
  {
    id: 8, title: "TractionX – Landing Page",
    description: "Conversion-optimised landing page for a growth-hacking SaaS.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f5a07e?w=800&q=80",
    category: "Landing page", link: "#",
  },
  {
    id: 9, title: "BuildAI – Full Stack App",
    description: "AI-powered code review tool with GitHub integration and SSO.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    category: "Full stack", link: "#",
  },
];

const SOCIAL_LINKS = [
  { icon: "ri-twitter-x-line",   href: "#", label: "Twitter / X" },
  { icon: "ri-github-line",       href: "#", label: "GitHub" },
  { icon: "ri-linkedin-box-line", href: "#", label: "LinkedIn" },
  { icon: "ri-dribbble-line",     href: "#", label: "Dribbble" },
  { icon: "ri-instagram-line",    href: "#", label: "Instagram" },
];

const TECH_STACK = [
  "React", "Next.js", "TypeScript", "Tailwind CSS",
  "Node.js", "Prisma", "PostgreSQL", "Figma",
  "GSAP", "Vercel", "Git", "REST APIs",
];

const MARQUEE_ITEMS = [
  "Frontend Dev", "Figma to Code", "React", "Tailwind",
  "Node.js", "Prisma", "PostgreSQL", "Responsive Design",
  "Full Stack", "UX Craft",
];

const FILTERS = ["All", "UI", "Landing page", "SaaS", "Frontend", "Full stack"];

// ── Helpers ──────────────────────────────────────────────────
const qs  = (s) => document.querySelector(s);
const qsa = (s) => [...document.querySelectorAll(s)];

// ── THEME ────────────────────────────────────────────────────

const HTML = document.documentElement;

function getTheme() { return localStorage.getItem("theme") || "dark"; }

function applyTheme(theme) {
  HTML.classList.remove("dark", "light");
  HTML.classList.add(theme);
  localStorage.setItem("theme", theme);

  const moonOrSun = theme === "dark" ? "ri-moon-line" : "ri-sun-line";
  const iconEl    = qs("#toggle-icon");
  const iconMob   = qs("#toggle-icon-mob");
  if (iconEl)  iconEl.className  = moonOrSun;
  if (iconMob) iconMob.className = moonOrSun;
}

function toggleTheme() {
  applyTheme(getTheme() === "dark" ? "light" : "dark");
}

function initTheme() {
  applyTheme(getTheme());
  const btn    = qs("#theme-toggle");
  const btnMob = qs("#theme-toggle-mob");
  if (btn)    btn.addEventListener("click", toggleTheme);
  if (btnMob) btnMob.addEventListener("click", toggleTheme);
}

// ── RENDER: Service highlight cards ─────────────────────────

function renderServicesHighlight() {
  const grid = qs("#services-highlight");
  if (!grid) return;
  grid.innerHTML = SERVICES_HIGHLIGHT.map((s, i) => `
    <div class="svc-card reveal" style="--i:${i}">
      <div class="flex items-start gap-4 mb-4">
        <span class="svc-icon-box w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style="color:${s.color}">
          <i class="${s.icon} text-2xl"></i>
        </span>
        <div>
          <h3 class="font-display font-bold mb-0.5" style="font-size:clamp(1rem,2vw,1.15rem)">${s.title}</h3>
          <p class="text-xs font-semibold" style="color:${s.color};letter-spacing:0.04em">${s.subtitle}</p>
        </div>
      </div>
      <p class="t-muted text-sm leading-relaxed mb-4">${s.description}</p>
      <div class="flex flex-wrap gap-2">
        ${s.tags.map(t => `<span class="tag-pill">${t}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

// ── RENDER: Visual image service cards ───────────────────────

function renderServicesVisual() {
  const grid = qs("#services-grid");
  if (!grid) return;
  grid.innerHTML = SERVICES_VISUAL.map((s, i) => `
    <div class="card reveal" style="--i:${i}">
      <div class="overflow-hidden">
        <img src="${s.image}" alt="${s.title}" class="service-img" loading="lazy" />
      </div>
      <div class="p-5">
        <div class="flex items-center gap-3 mb-3">
          <span class="svc-icon-box w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-primary-light">
            <i class="${s.icon} text-lg"></i>
          </span>
          <h3 class="font-display font-bold" style="font-size:clamp(0.95rem,2vw,1.1rem)">${s.title}</h3>
        </div>
        <p class="t-muted text-sm leading-relaxed mb-4">${s.description}</p>
        <div class="flex flex-wrap gap-2">
          ${s.tags.map(t => `<span class="tag-pill">${t}</span>`).join("")}
        </div>
      </div>
    </div>
  `).join("");
}

// ── RENDER: Project filters ───────────────────────────────────

let activeFilter = "All";

function renderFilters() {
  const container = qs("#filter-btns");
  if (!container) return;
  container.innerHTML = FILTERS.map(f => `
    <button class="filter-btn px-4 py-2 ${f === "All" ? "active" : ""}" data-filter="${f}">${f}</button>
  `).join("");

  container.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn || btn.dataset.filter === activeFilter) return;
    activeFilter = btn.dataset.filter;
    qsa(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(activeFilter);
  });
}

// ── RENDER: Projects ─────────────────────────────────────────

function renderProjects(filter = "All") {
  const grid = qs("#projects-grid");
  if (!grid) return;
  const list = filter === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.category.toLowerCase() === filter.toLowerCase());

  grid.innerHTML = list.map((p, i) => `
    <div class="card reveal" style="--i:${i}" data-cat="${p.category}">
      <div class="overflow-hidden">
        <img src="${p.image}" alt="${p.title}" class="project-img" loading="lazy" />
      </div>
      <div class="p-5">
        <div class="flex items-start justify-between gap-3 mb-2">
          <h3 class="font-display font-bold" style="font-size:clamp(0.95rem,2vw,1.1rem)">${p.title}</h3>
          <a href="${p.link}"
            class="shrink-0 w-8 h-8 rounded-full border flex items-center justify-center t-muted hover:text-white hover:bg-primary hover:border-primary transition-all"
            style="border-color:rgba(123,44,191,0.25)" aria-label="View project">
            <i class="ri-arrow-right-up-line text-sm"></i>
          </a>
        </div>
        <p class="t-muted text-sm leading-relaxed mb-3">${p.description}</p>
        <span class="tag-pill">${p.category}</span>
      </div>
    </div>
  `).join("");

  gsap.fromTo("#projects-grid .card",
    { opacity: 0, y: 28 },
    { opacity: 1, y: 0, duration: 0.5, stagger: 0.07, ease: "power3.out" }
  );
}

// ── RENDER: Tech stack ────────────────────────────────────────

function renderTechStack() {
  const el = qs("#tech-stack");
  if (!el) return;
  el.innerHTML = TECH_STACK.map(t => `<span class="tech-chip">${t}</span>`).join("");
}

// ── RENDER: Social icons ──────────────────────────────────────

function renderSocial() {
  const el = qs("#social-icons");
  if (!el) return;
  el.innerHTML = SOCIAL_LINKS.map(s => `
    <a href="${s.href}" class="social-link" aria-label="${s.label}" target="_blank" rel="noopener">
      <i class="${s.icon}"></i>
    </a>
  `).join("");
}

// ── RENDER: Marquee ───────────────────────────────────────────

function renderMarquee() {
  const track = qs("#marquee-track");
  if (!track) return;
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  track.innerHTML = doubled.map(item => `
    <span class="flex items-center gap-3 shrink-0">
      <span class="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0"></span>
      <span>${item}</span>
    </span>
  `).join("");
}

// ── Year ──────────────────────────────────────────────────────

function setYear() {
  const el = qs("#year");
  if (el) el.textContent = new Date().getFullYear();
}

// ── Navbar scroll ─────────────────────────────────────────────

function initNavbar() {
  const nav = qs("#navbar");
  if (!nav) return;
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 28);
  }, { passive: true });
}

// ── Progress bar ─────────────────────────────────────────────

function initProgressBar() {
  const bar = qs("#progress-bar");
  if (!bar) return;
  window.addEventListener("scroll", () => {
    const max  = document.documentElement.scrollHeight - window.innerHeight;
    const pct  = max > 0 ? (window.scrollY / max) * 100 : 0;
    bar.style.width = pct + "%";
  }, { passive: true });
}

// ── Mobile menu ───────────────────────────────────────────────

function initMobileMenu() {
  const toggle = qs("#menu-toggle");
  const menu   = qs("#mobile-menu");
  const icon   = qs("#menu-icon");
  if (!toggle || !menu) return;
  let open = false;

  toggle.addEventListener("click", () => {
    open = !open;
    menu.classList.toggle("closed", !open);
    menu.classList.toggle("open", open);
    icon.className = open ? "ri-close-line" : "ri-menu-3-line";
  });

  qsa(".mobile-link").forEach(link =>
    link.addEventListener("click", () => {
      open = false;
      menu.classList.add("closed");
      menu.classList.remove("open");
      icon.className = "ri-menu-3-line";
    })
  );
}

// ── Smooth scroll ─────────────────────────────────────────────

function initSmoothScroll() {
  qsa('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const id = a.getAttribute("href");
      if (id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
    });
  });
}

// ── GSAP ─────────────────────────────────────────────────────

function initGSAP() {
  gsap.registerPlugin(ScrollTrigger);

  // Hero entrance
  gsap.timeline({ defaults: { ease: "power3.out" } })
    .from("#hero-badge",  { opacity:0, y:22, duration:0.65 })
    .from("#hero-title",  { opacity:0, y:42, duration:0.75 }, "-=0.35")
    .from("#hero-sub",    { opacity:0, y:32, duration:0.65 }, "-=0.45")
    .from("#hero-cta",    { opacity:0, y:24, duration:0.55 }, "-=0.45")
    .from("#hero-stats",  { opacity:0, y:22, duration:0.5  }, "-=0.35");

  // Generic scroll reveal
  function revealOnScroll(selector, extraProps = {}) {
    gsap.utils.toArray(selector).forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: 44, ...extraProps.from },
        {
          opacity: 1, y: 0,
          duration: 0.72,
          delay: i * 0.07,
          ease: "power3.out",
          ...extraProps.to,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        }
      );
    });
  }

  setTimeout(() => {
    revealOnScroll(".reveal");
    revealOnScroll(".svc-card");

    // Service image cards with scale
    gsap.utils.toArray(".svc-card, #services-grid .card").forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: 50, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.65, delay: i * 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        }
      );
    });

    // Stat cards pop
    gsap.utils.toArray(".stat-card").forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: 28, scale: 0.92 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.6, delay: i * 0.09,
          ease: "back.out(1.5)",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        }
      );
    });

    // Footer CTA
    gsap.fromTo(".footer-cta",
      { opacity: 0, y: 56, scale: 0.96 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: "footer", start: "top 80%", once: true },
      }
    );

    // Section headings slide in
    gsap.utils.toArray("section h2").forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, x: -28 },
        {
          opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        }
      );
    });

    // Tech chips stagger
    gsap.fromTo(".tech-chip",
      { opacity: 0, scale: 0.85 },
      {
        opacity: 1, scale: 1,
        duration: 0.45, stagger: 0.04, ease: "back.out(1.3)",
        scrollTrigger: { trigger: ".tech-box", start: "top 88%", once: true },
      }
    );
  }, 120);
}

// ── INIT ─────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderMarquee();
  renderServicesHighlight();
  renderServicesVisual();
  renderFilters();
  renderProjects("All");
  renderTechStack();
  renderSocial();
  setYear();
  initNavbar();
  initProgressBar();
  initMobileMenu();
  initSmoothScroll();
  initGSAP();
});