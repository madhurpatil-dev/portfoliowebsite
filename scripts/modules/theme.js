export function initTheme() {
  const toggle = document.querySelector(".theme-toggle");
  if (!(toggle instanceof HTMLButtonElement)) return;

  const root = document.documentElement;
  const setTheme = (theme) => {
    const isLight = theme === "light";
    root.dataset.theme = isLight ? "light" : "dark";
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", isLight ? "#f6f5f0" : "#141a18");
    toggle.setAttribute("aria-pressed", String(isLight));
    toggle.setAttribute(
      "aria-label",
      isLight ? "Switch to dark theme" : "Switch to light theme",
    );
  };

  setTheme(root.dataset.theme || "dark");
  toggle.addEventListener("click", () => {
    setTheme(root.dataset.theme === "light" ? "dark" : "light");
  });
}
