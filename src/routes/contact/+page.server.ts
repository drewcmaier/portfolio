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
		const website = data.get('website')?.toString();
		const phone = data.get('phone')?.toString();
		const timestamp = data.get('timestamp')?.toString();

		if (!name || !email || !message) {
			return fail(400, { error: 'All fields are required.', name, email, message });
		}

		// Honeypot field checks
		if (website && website.trim() !== '') {
			return { success: true };
		}
		if (phone && phone.trim() !== '') {
			return { success: true };
		}

		// Time-based validation (forms submitted too quickly are likely bots)
		if (timestamp) {
			const submitTime = Date.now();
			const formTime = parseInt(timestamp);
			const timeDiff = submitTime - formTime;

			// If submitted in less than 3 seconds, likely a bot
			if (timeDiff < 3000) {
				return { success: true };
			}
		}

		// Basic spam content detection
		const spamPatterns = [
			/\b(?:viagra|casino|lottery|winner|prize|brand)\b/i,
			/\b(?:http|https|www\.)\..*\.(?:ru|cn|tk|ml|ga|cf)\b/i,
			/<(?:script|iframe|object|embed)/i
		];

		const combinedText = `${name} ${email} ${message}`.toLowerCase();
		if (spamPatterns.some((pattern) => pattern.test(combinedText))) {
			return { success: true };
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
		`
		});

		return { name, email, message, success: true };
	}
};
