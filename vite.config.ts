import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin({
      identifiers: "debug",
    }),
    visualizer({
      open: true,
      filename: "dist/stats.html",
    }),
    tsconfigPaths(),
  ],
});
