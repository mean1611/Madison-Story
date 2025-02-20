/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // ✅ ใช้ 'export' เพื่อให้รองรับ static export แทน next export
    images: {
      unoptimized: true, // ✅ จำเป็นสำหรับ GitHub Pages เพื่อปิด image optimization
    },
    basePath: "/Madison-Story", // ✅ ตั้ง basePath ให้ตรงกับ GitHub Pages repository
    assetPrefix: "/Madison-Story", // ✅ ทำให้ asset โหลดได้ถูกต้อง
  };
  
  module.exports = nextConfig;
  