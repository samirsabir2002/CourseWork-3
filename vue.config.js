module.exports = {
  publicPath: "",
  transpileDependencies: true,
  pwa: {
    name: "AfterSchool",
    short_name: "AfterSchool",
    workboxPluginMode: "GenerateSW",
    skipWaiting: true,
    workboxOptions: {
      runtimeCaching: [
        {
          // Routing via a matchCallback function:
          urlPattern: ({ request }) => request.destination === "image",
          handler: "StaleWhileRevalidate"
        },
        {
          urlPattern: ({ url }) =>
            url.origin === "https://coursework-2-after-school.onrender.com" &&
            url.pathname === "/collection/products",
          handler: "StaleWhileRevalidate",
          options: {
            cacheName: "api-cache"
          }
        }
      ]
    }
  }
};
