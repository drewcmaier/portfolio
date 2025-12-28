<script lang="ts">
	import { enhance } from '$app/forms';
	import Card from '$lib/Card.svelte';
	import type { PageProps } from './$types';

	let { form }: PageProps = $props();
</script>

<Card playTransitionIn={true}>
	<form method="POST" use:enhance>
		<fieldset disabled={form?.success}>
			<legend class="visually-hidden">Contact me</legend>

			<label for="contact-name">Name</label>
			<input id="contact-name" name="name" value={form?.name ?? ''} required />

			<label for="contact-email">Email</label>
			<input id="contact-email" name="email" type="email" required value={form?.email ?? ''} />

			<label for="contact-message">Message</label>
			<textarea id="contact-message" name="message" required>{form?.message ?? ''}</textarea>
		</fieldset>
		{#if !form?.success}
			<button type="submit" class="button-primary">
				<span class="button-primary-text">Send message</span>
			</button>
		{/if}
	</form>

	{#if form?.success}
		<p class="submit-success">Thanks! I’ll get back to you.</p>
	{/if}

	{#if form?.error}
		<p class="error">{form.error}</p>
	{/if}
</Card>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-4);
	}

	fieldset {
		display: flex;
		flex-direction: column;
		border: none;
		font-size: var(--font-size-1);
		font-weight: var(--font-weight-normal);
		margin: 0;
		padding: 0;
	}

	fieldset:disabled {
		opacity: 0.7;
	}

	input {
		max-width: 100%;
	}

	textarea {
		min-height: 8rem;
		resize: vertical;
	}

	button {
		align-self: stretch;
	}

	.submit-success {
		color: var(--color-primary);
		font-weight: var(--font-weight-bold);
		font-size: var(--font-size-2);
	}

	@media screen and (min-width: 36rem) {
		input {
			max-width: 50%;
		}

		button {
			align-self: flex-start;
		}
	}
</style>
