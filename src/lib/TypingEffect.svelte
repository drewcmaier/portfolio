<script lang="ts">
	import type { Snippet } from 'svelte';

	interface TypingEffectProps {
		children: Snippet;
	}

	let { children }: TypingEffectProps = $props();
</script>

<span class="typing-animation">
	{@render children()}
</span>

<style>
	@media (prefers-reduced-motion: no-preference) {
		/* Adapted from https://css-tricks.com/snippets/css/typewriter-effect/ */
		.typing-animation {
			overflow: hidden;
			white-space: nowrap;
			animation: typing 1s steps(20, end);
		}

		@keyframes typing {
			from {
				width: 0;
			}
			to {
				width: 100%;
			}
		}
	}
</style>
