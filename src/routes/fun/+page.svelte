<script lang="ts">
	import brutalist from './images/brutalist.png';
	import completeunknown from './images/complete-unknown.png';
	import dune2 from './images/dune2.png';
	import perez from './images/perez.png';
	import wicked from './images/wicked.png';
</script>

<article>
	<h1>The Dogcademy Awards 2025</h1>
	<img src={brutalist} alt="" />
	<img src={completeunknown} alt="" />
	<img src={dune2} alt="" />
	<img src={perez} alt="" />
	<img src={wicked} alt="" />
</article>

<style>
	article {
		--fun-padding: 1rem;
		background: white;
		display: flex;
		flex-direction: column;
		padding: var(--fun-padding);

		& * {
			max-inline-size: 48rem;
			margin-inline: 0;
		}
	}

	@media screen and (min-width: 52rem) {
		article {
			--fun-padding: 2rem;

			& * {
				margin-inline: auto;
			}
		}
	}

	h1 {
		font-family: 'Futura';
		font-size: clamp(var(--font-size-1), 12vw, var(--font-size-7));
		color: #e9c760;
		text-transform: uppercase;
		text-align: center;
		margin-block-end: var(--fun-padding);
	}

	img {
		margin-block-end: var(--fun-padding);
	}
</style>
