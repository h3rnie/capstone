const withNextraAndNextPWA = require("nextra")(
    "nextra-theme-blog",
    "./theme.config.js"
);

module.exports = withNextraAndNextPWA({
    experimental: {
        runtime: "experimental-edge",
    },
    compress: true,
    poweredByHeader: true,
    generateEtags: true,
    trailingSlash: false,
    reactStrictMode: true,
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: false,
    },
});
