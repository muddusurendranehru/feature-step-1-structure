import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(process.cwd()),
  experimental: {
    serverActions: { bodySizeLimit: "10mb" },
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Reduce Watchpack errors on Windows (EINVAL for pagefile.sys, swapfile.sys)
      const prev = config.watchOptions ?? {};
      const existing = Array.isArray(prev.ignored) ? prev.ignored : [];
      config.watchOptions = {
        ...prev,
        ignored: [
          ...existing,
          "**/node_modules/**",
          "**/.next/**",
          "**/.git/**",
          "**/pagefile.sys",
          "**/swapfile.sys",
        ],
      };
    }
    return config;
  },
};

export default nextConfig;
