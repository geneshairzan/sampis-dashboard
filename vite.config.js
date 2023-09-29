import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";
import path from "path";

export default defineConfig({
  server: { https: true, port: 3001 },
  // base: mode == "production" ? `/public/` : "",
  // base: "/",
  define: {
    global: "window",
    BUILD_TIMESTAMP: new Date(),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@component": path.resolve(__dirname, "./src/component"),
      "@gh": path.resolve(__dirname, "./src/component/gh"),
      "@img": path.resolve(__dirname, "./src/assets/img"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@context": path.resolve(__dirname, "./src/component/context"),
    },
  },
  plugins: [react(), mkcert()],
});
