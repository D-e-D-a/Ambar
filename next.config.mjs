const nextConfig = {
  images: {
    loader: "default",
    remotePatterns: [
      {
        hostname: "utfs.io",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
