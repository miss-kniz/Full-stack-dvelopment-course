/* ============================================================
   DevCraft — main.js
   ============================================================ */

// ── Data ────────────────────────────────────────────────────

const SERVICES = [
  {
    id: 1,
    title: "UI / UX Design",
    description: "Pixel-perfect interfaces backed by research and user psychology. We design experiences that feel intuitive and convert.",
    icon: "ri-layout-masonry-line",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    tags: ["Figma", "Prototyping", "Design Systems"],
  },
  {
    id: 2,
    title: "Landing Pages",
    description: "High-converting landing pages engineered for speed, clarity, and measurable growth — live in days, not weeks.",
    icon: "ri-pages-line",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["Conversion-Focused", "SEO", "Performance"],
  },
  {
    id: 3,
    title: "SaaS Products",
    description: "From idea to production-grade SaaS. We architect, build, and ship scalable web applications your users will love.",
    icon: "ri-cloud-line",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["React", "Node.js", "Databases"],
  },
  {
    id: 4,
    title: "Frontend Development",
    description: "Blazing-fast, accessible, and maintainable front-ends built with modern frameworks and best-in-class tooling.",
    icon: "ri-code-s-slash-line",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    id: 5,
    title: "Full-Stack Engineering",
    description: "End-to-end product engineering. We own everything from database schemas to the final deploy, so you don't have to.",
    icon: "ri-stack-line",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
    tags: ["APIs", "Auth", "DevOps"],
  },
  {
    id: 6,
    title: "Product Strategy",
    description: "Not sure where to start? We help you define the MVP, prioritise features, and validate ideas before writing a line of code.",
    icon: "ri-compass-3-line",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    tags: ["Discovery", "Roadmapping", "Consulting"],
  },
];

const PROJECTS = [
  {
    id: 1,
    title: "Luminary – SaaS Dashboard",
    description: "Analytics platform with real-time insights for e-commerce teams.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    category: "SaaS",
    link: "#",
  },
  {
    id: 2,
    title: "Nova – Landing Page",
    description: "Award-winning launch page with 38% conversion rate for a B2B startup.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    category: "Landing page",
    link: "#",
  },
  {
    id: 3,
    title: "Forma – Design System UI",
    description: "Component library and Figma design system for a fintech product.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    category: "UI",
    link: "#",
  },
  {
    id: 4,
    title: "ShipFast – Frontend App",
    description: "React SPA with complex state management for a logistics company.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    category: "Frontend",
    link: "#",
  },
  {
    id: 5,
    title: "Nexus – Full Stack Platform",
    description: "Event management system with payments, auth, and admin portal.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
    category: "Full stack",
    link: "#",
  },
  {
    id: 6,
    title: "Orbit – SaaS CRM",
    description: "Customer relationship tool built for remote-first sales teams.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    category: "SaaS",
    link: "#",
  },
  {
    id: 7,
    title: "Pixel – Portfolio UI Kit",
    description: "Open-source UI kit featuring 60+ components in light and dark mode.",
    image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=800&q=80",
    category: "UI",
    link: "#",
  },
  {
    id: 8,
    title: "TractionX – Landing Page",
    description: "Conversion-optimised landing page for a growth-hacking SaaS.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f5a07e?w=800&q=80",
    category: "Landing page",
    link: "#",
  },
  {
    id: 9,
    title: "BuildAI – Full Stack App",
    description: "AI-powered code review tool with GitHub integration and SSO.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    category: "Full stack",
    link: "#",
  },
];

const SOCIAL_LINKS = [
  { icon: "ri-twitter-x-line",  href: "#", label: "Twitter / X" },
  { icon: "ri-github-line",      href: "#", label: "GitHub" },
  { icon: "ri-linkedin-box-line",href: "#", label: "LinkedIn" },
  { icon: "ri-dribbble-line",    href: "#", label: "Dribbble" },
  { icon: "ri-instagram-line",   href: "#", label: "Instagram" },
];

const TECH_STACK = [
  "React", "Next.js", "TypeScript", "Node.js", "Tailwind",
  "PostgreSQL", "Figma", "GSAP", "Vercel", "Docker",
];

const MARQUEE_ITEMS = [
  "UI Design", "Frontend Dev", "SaaS Apps", "Landing Pages",
  "Full Stack", "Design Systems", "Web Performance", "Product Strategy",
];

const FILTERS = ["All", "UI", "Landing page", "SaaS", "Frontend", "Full stack"];

// ── Helpers ─────────────────────────────────────────────────

const qs  = (s) => document.querySelector(s);
const qsa = (s) => document.querySelectorAll(s);

// ── Render Services ──────────────────────────────────────────

function renderServices() {
  const grid = qs("#services-grid");
  grid.innerHTML = SERVICES.map((s, i) => `
    <div class="service-card reveal" style="--i:${i}">
      <div class="overflow-hidden">
        <img src="${s.image}" alt="${s.title}" class="service-img" loading="lazy" />
      </div>
      <div class="p-6">
        <div class="flex items-center gap-3 mb-3">
          <span class="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center text-primary-light text-lg shrink-0">
            <i class="${s.icon}"></i>
          </span>
          <h3 class="font-display font-bold text-white" style="font-size:clamp(1rem,2vw,1.15rem)">${s.title}</h3>
        </div>
        <p class="text-muted text-sm leading-relaxed mb-4">${s.description}</p>
        <div class="flex flex-wrap gap-2">
          ${s.tags.map(t => `<span class="project-tag">${t}</span>`).join("")}
        </div>
      </div>
    </div>
  `).join("");
}

// ── Render Projects ──────────────────────────────────────────

let activeFilter = "All";

function renderProjects(filter = "All") {
  const grid = qs("#projects-grid");
  const filtered = filter === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.category.toLowerCase() === filter.toLowerCase());

  grid.innerHTML = filtered.map((p, i) => `
    <div class="project-card reveal" style="--i:${i}" data-category="${p.category}">
      <div class="overflow-hidden">
        <img src="${p.image}" alt="${p.title}" class="project-img" loading="lazy" />
      </div>
      <div class="p-5">
        <div class="flex items-start justify-between gap-3 mb-2">
          <h3 class="font-display font-bold text-white" style="font-size:clamp(0.95rem,2vw,1.1rem)">${p.title}</h3>
          <a href="${p.link}" class="shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-muted hover:text-white hover:border-primary/60 transition-all" aria-label="View project">
            <i class="ri-arrow-right-up-line text-sm"></i>
          </a>
        </div>
        <p class="text-muted text-sm leading-relaxed mb-3">${p.description}</p>
        <span class="project-tag">${p.category}</span>
      </div>
    </div>
  `).join("");

  // Re-trigger GSAP reveal on new cards
  gsap.fromTo(
    "#projects-grid .project-card",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.5, stagger: 0.07, ease: "power3.out" }
  );
}

// ── Render Filters ───────────────────────────────────────────

function renderFilters() {
  const container = qs("#filter-btns");
  container.innerHTML = FILTERS.map(f => `
    <button class="filter-btn px-4 py-2 ${f === "All" ? "active" : ""}" data-filter="${f}">
      ${f}
    </button>
  `).join("");

  container.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    const filter = btn.dataset.filter;
    if (filter === activeFilter) return;
    activeFilter = filter;
    qsa(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(filter);
  });
}

// ── Render Tech Stack ────────────────────────────────────────

function renderTechStack() {
  const container = qs("#tech-stack");
  container.innerHTML = TECH_STACK.map(t => `
    <span class="text-xs font-display font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/8 text-muted/80">${t}</span>
  `).join("");
}

// ── Render Social Icons ───────────────────────────────────────

function renderSocial() {
  const container = qs("#social-icons");
  container.innerHTML = SOCIAL_LINKS.map(s => `
    <a href="${s.href}" class="social-icon-link" aria-label="${s.label}" target="_blank" rel="noopener">
      <i class="${s.icon}"></i>
    </a>
  `).join("");
}

// ── Render Marquee ────────────────────────────────────────────

function renderMarquee() {
  const track = qs("#marquee-track");
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  track.innerHTML = doubled.map(item => `
    <span class="flex items-center gap-3 shrink-0">
      <span class="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0"></span>
      <span>${item}</span>
    </span>
  `).join("");
}

// ── Year ─────────────────────────────────────────────────────

function setYear() {
  const el = qs("#year");
  if (el) el.textContent = new Date().getFullYear();
}

// ── Navbar scroll ─────────────────────────────────────────────

function initNavbar() {
  const nav = qs("#navbar");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 30);
  }, { passive: true });
}

// ── Mobile menu ───────────────────────────────────────────────

function initMobileMenu() {
  const toggle = qs("#menu-toggle");
  const menu   = qs("#mobile-menu");
  const icon   = qs("#menu-icon");
  let open = false;

  toggle.addEventListener("click", () => {
    open = !open;
    menu.classList.toggle("closed", !open);
    menu.classList.toggle("open", open);
    icon.className = open ? "ri-close-line" : "ri-menu-3-line";
  });

  // Close on link click
  qsa(".mobile-link").forEach(link => {
    link.addEventListener("click", () => {
      open = false;
      menu.classList.add("closed");
      menu.classList.remove("open");
      icon.className = "ri-menu-3-line";
    });
  });
}

// ── GSAP Animations ───────────────────────────────────────────

function initGSAP() {
  gsap.registerPlugin(ScrollTrigger);

  // ── Hero entrance
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  tl.from("#hero-badge",  { opacity: 0, y: 20, duration: 0.6 })
    .from("#hero-title",  { opacity: 0, y: 40, duration: 0.7 }, "-=0.3")
    .from("#hero-sub",    { opacity: 0, y: 30, duration: 0.6 }, "-=0.4")
    .from("#hero-cta",    { opacity: 0, y: 25, duration: 0.5 }, "-=0.4")
    .from("#hero-stats",  { opacity: 0, y: 20, duration: 0.5 }, "-=0.3");

  // ── Generic scroll reveals
  function setupReveal(selector) {
    gsap.utils.toArray(selector).forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 48 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        }
      );
    });
  }

  // Run after DOM is ready with rendered cards
  setTimeout(() => {
    setupReveal(".reveal");
    setupReveal(".service-card");
    setupReveal(".stat-card");

    // ── Section headers parallax
    gsap.utils.toArray("section").forEach((sec) => {
      const heading = sec.querySelector("h2");
      if (!heading) return;
      gsap.fromTo(
        heading,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
            once: true,
          },
        }
      );
    });

    // ── Stagger service cards
    gsap.utils.toArray(".service-card").forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          delay: i * 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            once: true,
          },
        }
      );
    });

    // ── Stat cards counter-like pop
    gsap.utils.toArray(".stat-card").forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30, scale: 0.93 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: i * 0.1,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            once: true,
          },
        }
      );
    });

    // ── Footer CTA pop-in
    gsap.fromTo(
      "footer .bg-surface-3",
      { opacity: 0, y: 60, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "footer",
          start: "top 80%",
          once: true,
        },
      }
    );
  }, 100);
}

// ── Smooth nav link behaviour ─────────────────────────────────

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const id = a.getAttribute("href");
      if (id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

// ── Init ─────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  renderMarquee();
  renderServices();
  renderFilters();
  renderProjects("All");
  renderTechStack();
  renderSocial();
  setYear();
  initNavbar();
  initMobileMenu();
  initSmoothScroll();
  initGSAP();
});