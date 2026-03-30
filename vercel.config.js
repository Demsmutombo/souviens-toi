module.exports = {
  name: "souviens-toi",
  buildCommand: "npm run build",
  outputDirectory: "dist",
  framework: "vite",

  // Environment Variables
  env: {
    NODE_ENV: "production"
  },

  // Build Settings
  build: {
    env: {
      NODE_ENV: "production"
    }
  },

  // Headers for Security and Performance
  headers: [
    {
      source: "/static/(.*)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      source: "/(.*\\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot))",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      source: "/(.*)",
      headers: [
        {
          key: "X-Content-Type-Options",
          value: "nosniff"
        },
        {
          key: "X-Frame-Options",
          value: "DENY"
        },
        {
          key: "X-XSS-Protection",
          value: "1; mode=block"
        },
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin"
        }
      ]
    }
  ],

  // Routes for SPA
  routes: [
    {
      src: "/(.*)",
      dest: "/index.html"
    }
  ]
};
