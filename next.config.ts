import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // importante para gerar /pagina/index.html
};

export default nextConfig;
