import { defineConfig, type PluginOption, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { resolve } from "path";

export default defineConfig((context) => {
  process.env = loadEnv(context.mode, process.cwd());

  return {
    base: "/prod",
    server: {
      port: 8080,
    },
    define: {
      "process.env": process.env,
    },
    resolve: {
      alias: {
        "~bootstrap": resolve(__dirname, "node_modules/bootstrap"),
        "~antd": resolve(__dirname, "node_modules/antd"),
        assets: resolve(__dirname, "./src/assets/"),
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
  };
});
