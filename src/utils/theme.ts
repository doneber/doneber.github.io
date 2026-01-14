const getTheme = () => {
    if (
        typeof localStorage !== "undefined" &&
        localStorage.getItem("theme")
    ) {
        return localStorage.getItem("theme");
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
};

export const applyTheme = () => {
    const theme = getTheme();
    if (theme === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
};

export const handleToggleClick = () => {
    const element = document.documentElement;
    element.classList.toggle("dark");
    const isDark = element.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
};

let isSetup = false;
export const setupThemeToggle = () => {
    if (isSetup) return;

    document.addEventListener("click", (event) => {
        const target = event.target as HTMLElement;
        if (target.closest("[data-theme-toggle]")) {
            handleToggleClick();
        }
    });

    isSetup = true;
};