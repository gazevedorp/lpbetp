import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com'],  // Adicionando o domínio das imagens externas
  },
};

export default nextConfig;
