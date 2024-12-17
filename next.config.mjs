const nextConfig = {
  reactStrictMode: true, // Enable React Strict Mode for development

  images: {
    loader: "default", // Use the default image loader
    remotePatterns: [
      {
        hostname: "utfs.io", // Allow images from utfs.io domain
        protocol: "https", // Ensure images are served over HTTPS
      },
    ],
    domains: ["utfs.io", "ambar-chi.vercel.app"], // Add any additional domains for external images
    formats: ["image/avif", "image/webp"], // Enable image formats for better performance
  },

  // Custom headers for SEO and security
  async headers() {
    return [
      {
        source: "/(.*)", // Apply to all routes
        headers: [
          {
            key: "X-Robots-Tag", // Robots meta tag header for SEO
            value: "index, follow", // Allow search engines to index and follow
          },
        ],
      },
    ];
  },
};

export default nextConfig;
