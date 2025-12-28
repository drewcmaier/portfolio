import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { Resend } from 'resend';
import { CONTACT_TO_EMAIL, RESEND_API_KEY } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const name = data.get('name')?.toString();
		const email = data.get('email')?.toString();
		const message = data.get('message')?.toString();

		if (!name || !email || !message) {
			return fail(400, { error: 'All fields are required.', name, email, message });
		}

		await resend.emails.send({
			from: 'Drew Maier <contact@mail.drewmaier.dev>',
			to: `${CONTACT_TO_EMAIL}`,
			replyTo: email,
			headers: {
				'X-Entity-Ref-ID': crypto.randomUUID()
			},
			subject: `[Portfolio] Inquiry from ${name}`,
			text: `
		From: ${name} <${email}>

		${message}
		`,
		});

		return { name, email, message, success: true };
	}
};
