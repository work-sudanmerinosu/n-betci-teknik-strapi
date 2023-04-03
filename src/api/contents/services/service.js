"use strict";

/**
 * contents service
 */

module.exports = () => ({
  async getHero() {
    return await strapi.entityService.findOne("api::homepage.homepage", 1, {
      populate: { Hero: true },
    });
  },
});
