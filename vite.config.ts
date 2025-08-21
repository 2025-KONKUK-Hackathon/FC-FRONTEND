import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@components": path.resolve(__dirname, "./src/shared/components"),
      "@constant": path.resolve(__dirname, "./src/shared/constant"),
      "@hooks": path.resolve(__dirname, "./src/shared/hooks"),
      "@styles": path.resolve(__dirname, "./src/shared/styles"),
      "@types": path.resolve(__dirname, "./src/shared/types"),
      "@utils": path.resolve(__dirname, "./src/shared/utils"),
    },
  },
});
