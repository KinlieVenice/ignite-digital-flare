import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  email: {
    config: {
      provider: 'strapi-provider-email-brevo', // or the specific community provider
      providerOptions: {
        apiKey: env('BREVO_API_KEY'),
      },
    //   settings: {
    //     defaultFrom: env('BREVO_DEFAULT_FROM'),
    //     defaultSenderName: env('BREVO_DEFAULT_FROM_NAME'),
    //     defaultTo: env('BREVO_DEFAULT_TO'),
    //     defaultReplyTo: env('BREVO_DEFAULT_REPLY_TO'),
    //   },
    },
  },

  'sortable-entries': {
    enabled: true,
  },
});

export default config;


// import type { Core } from '@strapi/strapi';

// const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({});

// export default config;
