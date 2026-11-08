import type { NextConfig } from "next";
const securityHeaders = [
 {key:"X-DNS-Prefetch-Control",value:"on"},
 {key:"X-Content-Type-Options",value:"nosniff"},
 {key:"X-Frame-Options",value:"DENY"},
 {key:"Content-Security-Policy",value:"default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: https:; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self'; upgrade-insecure-requests"},
 {key:"Cross-Origin-Opener-Policy",value:"same-origin"},
 {key:"Cross-Origin-Resource-Policy",value:"same-origin"},
 {key:"Referrer-Policy",value:"strict-origin-when-cross-origin"},
 {key:"Permissions-Policy",value:"camera=(), microphone=(), geolocation=()"},
 {key:"Strict-Transport-Security",value:"max-age=63072000; includeSubDomains; preload"}
];
const nextConfig:NextConfig={reactStrictMode:true,poweredByHeader:false,async headers(){return [{source:"/:path*",headers:securityHeaders}];}};
export default nextConfig;
