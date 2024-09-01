import { fileURLToPath } from "url";
import { dirname, join } from "path";

/** @type {import('next').NextConfig} */

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
  basePath: "",
  // basePath: "/future-world-store",
  // output: "export",
  sassOptions: {
    includePaths: [join(__dirname, "src/sass")],
    prependData: `@import "main.sass"`,
  },
  // TODO: check this image config
  images: {
    remotePatterns: [{ hostname: "cdn.shopify.com", protocol: "https" }],
  },
};

export default nextConfig;
