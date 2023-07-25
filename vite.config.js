import { glob } from "glob";
import path from "node:path";
// import { fileURLToPath } from "node:url";

/** @type {import('vite').UserConfig} */
export default {
  base: "https://static.marcosdly.dev",
  build: {
    target: "es2015",
    publicDir: "public",
    outDir: "dist",
    assetsDir: "",
    emptyOutDir: true,
    cssMinify: true,
    minify: true,
    rollupOptions: {
      input: glob.sync("**/*.html", { ignore: ["dist/**", "public/**"] }),
      output: {
        chunkFileNames: "[name]-[hash].js",
        assetFileNames: "[hash][extname]",
      },
    },
  },
};
