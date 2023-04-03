"use strict";

/**
 * A set of functions called "actions" for `contents`
 */
const collectionType = "api::homepage.homepage";

module.exports = {
  getHero: async (ctx, next) => {
    try {
      const { Hero } = await strapi.entityService.findMany(collectionType, {
        fields: ["*"],
        populate: {
          Hero: {
            populate: "*",
          },
        },
      });
      return {
        title: Hero.title,
        description: Hero.description,
        image: Hero.image.url,
      };
    } catch (err) {
      ctx.throw(500, err);
    }
  },
  getFeatures: async (ctx, next) => {
    try {
      const { Features } = await strapi.entityService.findMany(collectionType, {
        fields: ["*"],
        populate: {
          Features: {
            populate: {
              jobs: {
                populate: "*",
              },
            },
          },
        },
      });

      const jobs = Features.jobs;
      let actualJobs = [];

      for (const key in jobs) {
        actualJobs[key] = {
          title: jobs[key].title,
          description: jobs[key].description || "",
          image: jobs[key].image.url,
        };
      }

      return {
        title: Features.title,
        description: Features.description,
        jobs: actualJobs,
      };
    } catch (err) {
      ctx.throw(500, err);
    }
  },
  getWorks: async (ctx, next) => {
    try {
      const { Works } = await strapi.entityService.findOne(collectionType, 1, {
        fields: ["*"],
        populate: {
          Works: {
            populate: "*",
          },
        },
      });
      const images = Works.images;
      let actualImages = [];
      for (const key in images) {
        actualImages[key] = images[key].url;
      }
      return { images: actualImages };
    } catch (err) {
      ctx.throw(500, err);
    }
  },
};
