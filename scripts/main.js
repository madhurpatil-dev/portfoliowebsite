import { initNavigation } from "./modules/navigation.js";
import { initTheme } from "./modules/theme.js";
import { initMotion } from "./modules/motion.js";
import { initBackToTop } from "./modules/back-to-top.js";

initNavigation();
initTheme();
initMotion();
initBackToTop();

const year = document.querySelector("#current-year");
if (year) year.textContent = String(new Date().getFullYear());
