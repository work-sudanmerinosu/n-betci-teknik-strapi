module.exports = {
  routes: [
    {
      method: "GET",
      path: "/contents/getHero",
      handler: "contents.getHero",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/contents/getFeatures",
      handler: "contents.getFeatures",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/contents/getWorks",
      handler: "contents.getWorks",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
