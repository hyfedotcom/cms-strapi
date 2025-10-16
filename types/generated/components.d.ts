import type { Schema, Struct } from '@strapi/strapi';

export interface CmsSectionHero extends Struct.ComponentSchema {
  collectionName: 'components_cms_section_heroes';
  info: {
    displayName: 'section.hero';
  };
  attributes: {
    content: Schema.Attribute.Component<'content.content-paragraph', true>;
    cta: Schema.Attribute.Component<'ui.ui-cta', true>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    media: Schema.Attribute.Component<'media.media-video', false>;
    sub_heading: Schema.Attribute.String;
  };
}

export interface CmsSectionWorkflow extends Struct.ComponentSchema {
  collectionName: 'components_cms_section_workflows';
  info: {
    displayName: 'section.workflow';
  };
  attributes: {
    card: Schema.Attribute.Component<'ui.ui-card-simple', true>;
    content: Schema.Attribute.Component<'content.content-paragraph', true>;
    cta: Schema.Attribute.Component<'ui.ui-cta', true>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    sub_heading: Schema.Attribute.String;
  };
}

export interface ContentContentParagraph extends Struct.ComponentSchema {
  collectionName: 'components_content_content_paragraphs';
  info: {
    displayName: 'content.paragraph';
  };
  attributes: {
    paragraph: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface GlobalSectionAccordion extends Struct.ComponentSchema {
  collectionName: 'components_global_section_accordions';
  info: {
    displayName: 'section.accordion';
  };
  attributes: {
    admin_label: Schema.Attribute.String;
    card: Schema.Attribute.Component<'ui.ui-card-simple', true>;
    content: Schema.Attribute.Component<'content.content-paragraph', true>;
    cta: Schema.Attribute.Component<'ui.ui-cta', true>;
    heading: Schema.Attribute.String;
    sub_heading: Schema.Attribute.String;
  };
}

export interface GlobalSectionCta extends Struct.ComponentSchema {
  collectionName: 'components_global_section_ctas';
  info: {
    displayName: 'section.cta';
  };
  attributes: {
    content: Schema.Attribute.Component<'content.content-paragraph', true>;
    cta: Schema.Attribute.Component<'ui.ui-cta', true>;
    heading: Schema.Attribute.String;
    sub_heading: Schema.Attribute.String;
    video: Schema.Attribute.Component<'media.media-video', false>;
  };
}

export interface GlobalSectionLinks extends Struct.ComponentSchema {
  collectionName: 'components_global_section_links';
  info: {
    displayName: 'section.links';
  };
  attributes: {
    card: Schema.Attribute.Component<'links.links-card', true>;
    content: Schema.Attribute.Component<'content.content-paragraph', true>;
    cta: Schema.Attribute.Component<'ui.ui-cta', true>;
    heading: Schema.Attribute.String;
    sub_heading: Schema.Attribute.String;
  };
}

export interface GlobalSectionPartners extends Struct.ComponentSchema {
  collectionName: 'components_global_section_partners';
  info: {
    displayName: 'section.partners';
  };
  attributes: {
    content: Schema.Attribute.Component<'content.content-paragraph', true>;
    cta: Schema.Attribute.Component<'ui.ui-cta', true>;
    heading: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
    sub_heading: Schema.Attribute.String;
  };
}

export interface GlobalSectionProps extends Struct.ComponentSchema {
  collectionName: 'components_global_section_props';
  info: {
    displayName: 'section.cards';
  };
  attributes: {
    admin_label: Schema.Attribute.String;
    card: Schema.Attribute.Component<'ui.ui-card-simple', true>;
    content: Schema.Attribute.Component<'content.content-paragraph', true>;
    cta: Schema.Attribute.Component<'ui.ui-cta', true>;
    heading: Schema.Attribute.String;
    sub_heading: Schema.Attribute.String;
  };
}

export interface GlobalSectionRichText extends Struct.ComponentSchema {
  collectionName: 'components_global_section_rich_texts';
  info: {
    displayName: 'section.rich-text';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GlobalSectionTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_global_section_testimonials';
  info: {
    displayName: 'section.testimonial';
  };
  attributes: {
    content: Schema.Attribute.Component<'content.content-paragraph', true>;
    cta: Schema.Attribute.Component<'ui.ui-cta', true>;
    heading: Schema.Attribute.String;
    sub_heading: Schema.Attribute.String;
    testimonials: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    >;
  };
}

export interface LayoutLayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_layout_footers';
  info: {
    displayName: 'layout.footer';
  };
  attributes: {
    columns: Schema.Attribute.Component<'links.column', true>;
    copyright: Schema.Attribute.String;
    policy_links: Schema.Attribute.Component<'links.links-nav', true>;
  };
}

export interface LayoutLayoutGeneralSettings extends Struct.ComponentSchema {
  collectionName: 'components_layout_layout_general_settings';
  info: {
    displayName: 'layout.general_settings';
  };
  attributes: {
    favicon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    logo_full: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    logo_icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    social_media: Schema.Attribute.Component<'links.links-social', true>;
  };
}

export interface LayoutLayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_layout_headers';
  info: {
    displayName: 'layout.header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'ui.ui-cta', false> &
      Schema.Attribute.Required;
    nav_links: Schema.Attribute.Component<'links.links-nav', true>;
  };
}

export interface LinksColumn extends Struct.ComponentSchema {
  collectionName: 'components_links_columns';
  info: {
    displayName: 'links.column';
  };
  attributes: {
    heading: Schema.Attribute.String;
    nav_links: Schema.Attribute.Component<'links.links-nav', true>;
  };
}

export interface LinksLinksCard extends Struct.ComponentSchema {
  collectionName: 'components_links_links_cards';
  info: {
    displayName: 'links.card';
  };
  attributes: {
    gradient_end: Schema.Attribute.String;
    gradient_start: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    link: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'files'>;
    paragraph: Schema.Attribute.Text;
  };
}

export interface LinksLinksNav extends Struct.ComponentSchema {
  collectionName: 'components_links_links_navs';
  info: {
    displayName: 'links.nav';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LinksLinksSocial extends Struct.ComponentSchema {
  collectionName: 'components_links_links_socials';
  info: {
    displayName: 'links.social';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    target: Schema.Attribute.Enumeration<
      ['x', 'facebook', 'youtube', 'linkedin']
    > &
      Schema.Attribute.Required;
  };
}

export interface MediaMediaImage extends Struct.ComponentSchema {
  collectionName: 'components_media_media_images';
  info: {
    displayName: 'media.image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface MediaMediaVideo extends Struct.ComponentSchema {
  collectionName: 'components_media_media_videos';
  info: {
    displayName: 'media.video';
  };
  attributes: {
    placeholder: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    video: Schema.Attribute.Media<'files' | 'videos'>;
  };
}

export interface MediaMediaZone extends Struct.ComponentSchema {
  collectionName: 'components_media_media_zones';
  info: {
    displayName: 'media.zone';
  };
  attributes: {
    image: Schema.Attribute.Component<'media.media-image', false> &
      Schema.Attribute.Required;
    media: Schema.Attribute.Enumeration<['video', 'image']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'video'>;
    video: Schema.Attribute.Component<'media.media-video', false> &
      Schema.Attribute.Required;
  };
}

export interface SeoSeoMeta extends Struct.ComponentSchema {
  collectionName: 'components_seo_seo_metas';
  info: {
    displayName: 'seo.meta';
  };
  attributes: {
    canonical_URL: Schema.Attribute.String;
    is_indexable: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    keywords: Schema.Attribute.Text;
    meta_description: Schema.Attribute.Text;
    meta_image: Schema.Attribute.Media<'images' | 'files'>;
    meta_robots: Schema.Attribute.String;
    meta_title: Schema.Attribute.String;
    meta_viewport: Schema.Attribute.String;
    structured_data: Schema.Attribute.JSON;
  };
}

export interface UiUiCardSimple extends Struct.ComponentSchema {
  collectionName: 'components_ui_ui_card_simples';
  info: {
    displayName: 'ui.card.simple';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    media: Schema.Attribute.Media<'images' | 'files'>;
    paragraph: Schema.Attribute.Text;
    sub_heading: Schema.Attribute.String;
  };
}

export interface UiUiCta extends Struct.ComponentSchema {
  collectionName: 'components_ui_ui_ctas';
  info: {
    displayName: 'ui.cta';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<['primary', 'white', 'gradient']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'primary'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/'>;
    type: Schema.Attribute.Enumeration<
      ['default', 'arrow-right', 'arrow-bottom']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'default'>;
    variant: Schema.Attribute.Enumeration<['solid', 'outline']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'solid'>;
  };
}

export interface UiUiMedia extends Struct.ComponentSchema {
  collectionName: 'components_ui_ui_medias';
  info: {
    displayName: 'ui.media';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    placeholder: Schema.Attribute.Media<'files' | 'images'> &
      Schema.Attribute.Private;
    type: Schema.Attribute.Enumeration<['image', 'video']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'image'>;
    video: Schema.Attribute.Media<'files' | 'videos'> &
      Schema.Attribute.Private;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cms.section-hero': CmsSectionHero;
      'cms.section-workflow': CmsSectionWorkflow;
      'content.content-paragraph': ContentContentParagraph;
      'global.section-accordion': GlobalSectionAccordion;
      'global.section-cta': GlobalSectionCta;
      'global.section-links': GlobalSectionLinks;
      'global.section-partners': GlobalSectionPartners;
      'global.section-props': GlobalSectionProps;
      'global.section-rich-text': GlobalSectionRichText;
      'global.section-testimonial': GlobalSectionTestimonial;
      'layout.layout-footer': LayoutLayoutFooter;
      'layout.layout-general-settings': LayoutLayoutGeneralSettings;
      'layout.layout-header': LayoutLayoutHeader;
      'links.column': LinksColumn;
      'links.links-card': LinksLinksCard;
      'links.links-nav': LinksLinksNav;
      'links.links-social': LinksLinksSocial;
      'media.media-image': MediaMediaImage;
      'media.media-video': MediaMediaVideo;
      'media.media-zone': MediaMediaZone;
      'seo.seo-meta': SeoSeoMeta;
      'ui.ui-card-simple': UiUiCardSimple;
      'ui.ui-cta': UiUiCta;
      'ui.ui-media': UiUiMedia;
    }
  }
}
