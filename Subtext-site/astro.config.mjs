// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: [
        "@fontsource-variable/*",
        "@fontsource-variable/funnel-display",
        "@fontsource-variable/lexend-deca",
      ],
    },
  },
  experimental: {
    svg: true,
  },

  integrations: [react()],
  site: "https://subtextapp.cc",
});
