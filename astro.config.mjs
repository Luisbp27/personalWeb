// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: "https://luisbarca.es",
    integrations: [sitemap()],
    redirects: {
        "/contact": "https://www.linkedin.com/in/luisbarcapons/",
    },
    vite: {
        plugins: [tailwindcss()],
    },
});
