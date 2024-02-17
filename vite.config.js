import { defineConfig } from "vite";

export default defineConfig({
  base: "/goiteens-markup-test",
  plugins: [],
  root: "./public",
  server: {
    port: 4080,
    open: true,
  },
});
