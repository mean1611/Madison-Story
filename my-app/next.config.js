/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // ✅ ใช้ static export สำหรับ GitHub Pages
    images: {
      unoptimized: true, // ✅ ปิด image optimization
    },
    basePath: "/Madison-Story", // ✅ GitHub Pages repository name
    assetPrefix: "/Madison-Story", // ✅ ให้ asset โหลดถูกต้อง
  };
  
  module.exports = nextConfig;
  