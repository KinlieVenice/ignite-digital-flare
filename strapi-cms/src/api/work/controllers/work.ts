import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::work.work', ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params; // This is "vilsons" from your URL

    // We tell Strapi: "Search the database for an entry where the slug matches this ID"
    const entity = await strapi.db.query('api::work.work').findOne({
      where: { slug: id },
      populate: true, 
    });

    // If we found it, format it correctly for the API response
    if (entity) {
      return this.transformResponse(entity);
    }

    // If not found by slug, try the default behavior (searching by ID)
    return super.findOne(ctx);
  },
}));


/**
 * work controller
 */

// import { factories } from '@strapi/strapi';

// export default factories.createCoreController('api::work.work');
