// Shared by every page: mod counts and the slide-in animations.
// Needs js/modules.js loaded first.

// Fill in mod counts wherever a page has data-count="alpha", "beta" or "total".
document.querySelectorAll('[data-count="alpha"]').forEach(el => el.textContent = ALPHA_MODS.length);
document.querySelectorAll('[data-count="beta"]').forEach(el => el.textContent = BETA_MODS.length);
document.querySelectorAll('[data-count="total"]').forEach(el => el.textContent = Math.floor(ALL_MODS.length / 10) * 10);

// Slide-in on scroll. Groups slide in one after another (stagger); the two edition cards
// come in from opposite sides. Without IntersectionObserver, or with "reduce motion" on,
// everything simply shows.
(function revealOnScroll() {
  const groups = [
    [".section h2", 0], [".section .lead", 0],
    [".card", 0.08], ["#download .steps li", 0.1], ["#faq details", 0.07],
    [".filters", 0], [".mod-list", 0], [".section .cta", 0], [".beta-key h3", 0], [".edition-note", 0],
  ];
  const targets = [];
  const mark = (el, delay, extra) => {
    if (el.classList.contains("reveal")) return;
    el.classList.add("reveal");
    if (extra) el.classList.add(extra);
    if (delay) el.style.setProperty("--delay", `${delay}s`);
    targets.push(el);
  };
  for (const [selector, step] of groups) {
    document.querySelectorAll(selector).forEach((el, i) => mark(el, Math.min(i * step, 0.5)));
  }
  document.querySelectorAll(".edition-alpha").forEach(el => mark(el, 0, "from-left"));
  document.querySelectorAll(".edition.featured").forEach(el => mark(el, 0.12, "from-right"));

  const show = el => {
    el.classList.add("is-visible");
    // Once in place, drop the reveal styles so hover effects (card lift) work normally again.
    el.addEventListener("transitionend", () => {
      el.classList.remove("reveal", "from-left", "from-right", "is-visible");
      el.style.removeProperty("--delay");
    }, { once: true });
  };
  if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
    targets.forEach(el => el.classList.remove("reveal", "from-left", "from-right"));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      show(entry.target);
      observer.unobserve(entry.target);
    }
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.12 });
  targets.forEach(el => observer.observe(el));
})();
