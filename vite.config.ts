import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    visualizer({
      gzipSize: true,
      template: "treemap",
      filename: "stats/project-bundle-analyzer.html",
      title: "Project Bundle Analyzer",
    }) as PluginOption,
    react(),
  ],
});
