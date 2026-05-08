import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  basePath: process.env.NEXT_PUBLIC_BASEPATH,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
