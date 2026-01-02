

(function () {
  const root = document.documentElement;
  const systemMedia = window.matchMedia("(prefers-color-scheme: dark)");
  const savedTheme = localStorage.getItem("theme");

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else if (theme === "light") {
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme");
      if (systemMedia.matches) {
        root.setAttribute("data-theme", "dark");
      }
    }
  }

  if (savedTheme === "dark" || savedTheme === "light") {
    applyTheme(savedTheme);
  } else {
    applyTheme(null);
  }

  systemMedia.addEventListener("change", () => {
    const savedTheme = localStorage.getItem("theme");
    if (!savedTheme) {
      applyTheme(null);
    }
  });
})();


document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-switcher-three");
  if (!toggle) return;

  const root = document.documentElement;

  toggle.checked =
    root.getAttribute("data-theme") === "dark" ||
    (!root.hasAttribute("data-theme") &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  toggle.addEventListener("change", () => {
    const theme = toggle.checked ? "dark" : "light";
    localStorage.setItem("theme", theme);
    root.setAttribute("data-theme", theme);
  });
});
