/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["eng", "fa"],
    defaultLocale: "eng",
    localeDetection: false,
  },
}

module.exports = nextConfig
