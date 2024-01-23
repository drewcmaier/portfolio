<span class="typing-animation">
	<slot />
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
