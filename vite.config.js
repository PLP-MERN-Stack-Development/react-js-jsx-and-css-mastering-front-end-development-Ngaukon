import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/react-js-jsx-and-css-mastering-front-end-development-Ngaukon/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})