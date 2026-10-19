export function initNavigation() {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#site-menu");

  if (!(toggle instanceof HTMLButtonElement) || !(menu instanceof HTMLElement)) return;

  const setOpen = (isOpen) => {
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    menu.classList.toggle("is-open", isOpen);
  };

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });

  window.matchMedia("(min-width: 721px)").addEventListener("change", () => setOpen(false));
}
