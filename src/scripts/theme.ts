const applyStoredTheme = () => {
    const stored = localStorage.getItem("theme");
    const dark = stored
        ? stored === "dark"
        : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", dark);
};

document.addEventListener("astro:after-swap", applyStoredTheme);

const handleThemeToggle = (event: MouseEvent) => {
    const target = event.target as HTMLElement | null;
    if (!target?.closest("[data-theme-toggle]")) return;

    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
};

document.addEventListener("click", handleThemeToggle);
