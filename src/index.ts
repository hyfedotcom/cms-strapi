// import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    try {
      const knex = strapi.db.connection;

      await knex("components_global_section_rich_texts")
        .whereRaw(`content IS NULL OR content = '' OR content NOT LIKE '[%'`)
        .update({ content: "[]" });

      strapi.log.info("✅ Fixed invalid content in section-rich-text");
    } catch (err) {
      strapi.log.error("❌ Failed to fix content field:", err);
    }
  },
};
