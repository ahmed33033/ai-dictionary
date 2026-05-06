import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  basePath: "/ai-dictionary",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
