import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::inquiry.inquiry', ({ strapi }) => ({
    async create(ctx) {
        // 1. Let Strapi do the default work (Save the entry to the DB)
        const response = await super.create(ctx);

        // 2. Pull the data from the request
        const { data } = ctx.request.body;
        const docId = response.data.documentId; // Get the document ID of the newly created document

        // 3. Send the notification to yourself via Brevo
        try {
            await strapi.plugin('email').service('email').send({
                to: process.env.BREVO_DEFAULT_TO,
                from: process.env.BREVO_DEFAULT_FROM,
                replyTo: data.email, // This is key! When you click reply in Gmail, it goes to the customer.
                subject: `New Inquiry from ${data.name}`,
                html: `
                    <h3>You have a new inquiry!</h3>
                    <p><strong>Name:</strong> ${data.name}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>Contact:</strong> ${data.contact}</p>
                    <p><strong>Service:</strong> ${data.service}</p>
                    <p><strong>Message:</strong></p>
                    <p>${data.message}</p>
                    <hr />
                    <p>
                        <small>
                            View this message in <a href="${process.env.APP_URL}/admin/content-manager/collection-types/api::inquiry.inquiry/${docId}">Nexflare Admin</a>
                        </small>
                    </p>
                `,
            });

            await strapi.documents('api::inquiry.inquiry').update({
                documentId: docId,
                status: 'published',
                data: {
                    emailStatus: 'Success',
                },
            });
        } catch (err) {
            console.error("Brevo Email Error:", err.response?.body || err.message);

            await strapi.documents('api::inquiry.inquiry').update({
                documentId: docId,
                status: 'published',
                data: {
                    emailStatus: 'Failed',
                },
            });
        }

        return response;
    },
}));



/**
 * inquiry controller
 */

// import { factories } from '@strapi/strapi';

// export default factories.createCoreController('api::inquiry.inquiry');
