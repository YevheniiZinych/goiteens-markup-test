import { defineConfig } from "vite";
import nunjucks from "vite-plugin-nunjucks";

export default defineConfig({
  base: "/goiteens-markup-test",
  root: "./src",
  plugins: [nunjucks()],

  server: {
    port: 4040,
    open: true,
  },
});
