import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	CONTACT_TO_EMAIL: {},
	RESEND_API_KEY: {}
});
