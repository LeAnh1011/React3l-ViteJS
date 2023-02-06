import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "~bootstrap": resolve(__dirname, "node_modules/bootstrap"),
      "~antd": resolve(__dirname, "node_modules/antd"),
    },
  },
  plugins: [
    visualizer({
      gzipSize: true,
      template: "treemap",
      filename: "stats/project-bundle-analyzer.html",
      title: "Project Bundle Analyzer",
    }) as PluginOption,
    react({
      babel: {
        parserOpts: {
          plugins: ["decorators-legacy"],
        },
      },
    }),
  ],
});
