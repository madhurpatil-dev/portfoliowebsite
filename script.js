const nav = document.querySelector("nav");
const scrollBtn = document.querySelector(".scroll-button a");
const navBar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const navLinks = document.querySelectorAll(".menu li a");

menuBtn.setAttribute("role", "button");
menuBtn.setAttribute("aria-label", "Open navigation menu");
menuBtn.setAttribute("tabindex", "0");
cancelBtn.setAttribute("role", "button");
cancelBtn.setAttribute("aria-label", "Close navigation menu");
cancelBtn.setAttribute("tabindex", "0");

const setMenuState = (isOpen) => {
  navBar.classList.toggle("active", isOpen);
  menuBtn.setAttribute("aria-expanded", String(isOpen));
  document.body.style.overflow = isOpen ? "hidden" : "";
};

const updateScrollState = () => {
  const isScrolled = window.scrollY > 20;
  nav.classList.toggle("sticky", isScrolled);
  scrollBtn.classList.toggle("is-visible", isScrolled);
  scrollBtn.style.display = isScrolled ? "grid" : "none";
};

window.addEventListener("scroll", updateScrollState, { passive: true });
updateScrollState();

menuBtn.addEventListener("click", () => setMenuState(true));
cancelBtn.addEventListener("click", () => setMenuState(false));
menuBtn.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") setMenuState(true);
});
cancelBtn.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") setMenuState(false);
});
navLinks.forEach((link) => link.addEventListener("click", () => setMenuState(false)));

