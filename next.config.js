/** @type {import('next').NextConfig} */

const withPlugins = require("nextra", "@next/build-analyzer")({
    theme: "nextra-theme-blog",
    themeConfig: "./theme.config.js",
    unstable_staticImage: true,
    enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
    experimental: {
        runtime: "experimental-edge",
    },
    compress: true,
    generateEtags: true,
    optimizeFonts: true,
    poweredByHeader: true,
    reactStrictMode: true,
    swcMinify: true,
    trailingSlash: false,
    devIndicators: {
        buildActivity: true,
        buildActivityPosition: "bottom-left",
    },
    i18n: {
        locales: [
            "en-029",
            "en-AU",
            "en-BZ",
            "en-CA",
            "en-cb",
            "en-GB",
            "en-IE",
            "en-IN",
            "en-JM",
            "en-MT",
            "en-MY",
            "en-NZ",
            "en-PH",
            "en-SG",
            "en-TT",
            "en-US",
            "en-ZA",
            "en-ZW",
        ],
        defaultLocale: "en-GB",
        localeDetection: true,
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: false,
    },
};

module.exports = withPlugins(nextConfig);
