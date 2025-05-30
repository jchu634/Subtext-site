import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                lexend: ["Lexend Deca Variable", ...fontFamily.sans],
                funnel: ["Funnel Display", ...fontFamily.sans],
                sans: [
                    "Inter",
                    "Roboto",
                    "Helvetica Neue",
                    "Arial Nova",
                    "Nimbus Sans",
                    "Arial",
                    "sans-serif",
                ],
                mono: [
                    "ui-monospace",
                    "Cascadia Code",
                    "Source Code Pro",
                    "Menlo",
                    "Consolas",
                    "DejaVu Sans Mono",
                    "monospace",
                ],
            },
        },
    },
    plugins: [],
};
