import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* React Compiler is intentionally off: it forces the slower Babel build path
     (a likely cause of silent, log-less stalls on CI/Vercel) and gives negligible
     benefit for a small static marketing page. Re-enable only if you need it. */
  reactCompiler: false,
};

export default nextConfig;
