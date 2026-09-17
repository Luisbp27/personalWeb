const handleThemeToggle = (event: MouseEvent) => {
    const target = event.target as HTMLElement | null;
    if (!target?.closest("[data-theme-toggle]")) return;

    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
};

document.addEventListener("click", handleThemeToggle);
