import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { createMpaPlugin, createPages } from "vite-plugin-virtual-mpa";

/**
 * This function simply converts the arguments to an array and returns them.
 * It helps creating pages configuration with type hints independently outside plugin function.
 * It may also simplify your configurations because you can manage them uniformly somewhere.
 */
const pages = createPages([
  {
    name: "index",
    /**
     * filename is optional, default is `${name}.html`, which is the relative path of `build.outDir`.
     */
    filename: "index.html", // output into sites/fruits/index.html at build time.
    // entry: "/src/fruits/index/index.js",
    data: {
      title: "This is Index page",
    },
  },
]);

export default defineConfig({
  plugins: [
    tailwindcss(),
    createMpaPlugin({
      htmlMinify: false,
      pages,
    }),
  ],
});
