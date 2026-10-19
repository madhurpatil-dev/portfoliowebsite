export function initBackToTop() {
  const button = document.querySelector(".back-to-top");
  if (!(button instanceof HTMLButtonElement)) return;

  const footer = document.querySelector(".site-footer");
  let frame = 0;

  const updateVisibility = () => {
    frame = 0;
    const footerIsVisible = footer instanceof HTMLElement
      && footer.getBoundingClientRect().top < window.innerHeight;
    const isVisible = window.scrollY > 300 && !footerIsVisible;
    button.classList.toggle("is-visible", isVisible);
    button.setAttribute("aria-hidden", String(!isVisible));
    button.tabIndex = isVisible ? 0 : -1;
  };

  const scheduleVisibilityUpdate = () => {
    if (frame) return;
    frame = window.requestAnimationFrame(updateVisibility);
  };

  window.addEventListener("scroll", scheduleVisibilityUpdate, { passive: true });
  updateVisibility();

  button.addEventListener("click", () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    document.querySelector(".site-header .brand")?.focus({ preventScroll: true });
  });
}
