await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  /**
   * If using external images, you will need to add their domains to the remotePatterns array.
   * You can do this by adding a new object to the array with the following properties:
   * - protocol: The protocol of the image (e.g. https)
   * - hostname: The hostname of the image (e.g. aceternity.com)
   * - port: The port of the image (e.g. 80)
   * - pathname: The pathname of the image (e.g. /**)
   */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aceternity.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "imgur.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        port: "",
        pathname: "/**",
      }
    ],
  },
};

export default config;
