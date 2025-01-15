/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['localhost'], // Eğer resimler localhost'tan yükleniyorsa
    },
  };
  
  export default nextConfig;