await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "igivkjgfrelcauvcnwhl.supabase.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default config;
