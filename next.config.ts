import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep development artifacts separate from production builds. This avoids
  // stale CSS and React manifests when `next build` runs while dev is open.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  outputFileTracingRoot: __dirname,
  // This app is fully static and does not use standalone/serverless output.
  // Avoid tracing the whole Next.js server dependency tree on OneDrive.
  outputFileTracingExcludes: {
    "next-server": ["**/*"],
  },
  // On Windows projects synchronized by OneDrive, the isolated webpack worker
  // can stall while resolving modules. Running the compiler in the main
  // process avoids that deadlock and keeps production builds deterministic.
  experimental: {
    webpackBuildWorker: false,
    cpus: 1,
  },
};

export default nextConfig;
