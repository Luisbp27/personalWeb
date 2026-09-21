// @ts-check
import { defineConfig, envField } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: "https://luisbarca.es",
    integrations: [sitemap()],
    adapter: vercel(),
    env: {
        schema: {
            RESEND_API_KEY: envField.string({
                context: "server",
                access: "secret",
            }),
            CONTACT_TO_EMAIL: envField.string({
                context: "server",
                access: "secret",
            }),
            CONTACT_FROM_EMAIL: envField.string({
                context: "server",
                access: "secret",
            }),
        },
    },
    vite: {
        plugins: [tailwindcss()],
    },
});
