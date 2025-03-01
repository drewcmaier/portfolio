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
		background: white;
		display: flex;
		flex-direction: column;
		margin-inline: auto;
		margin-block: 4rem;

		padding-inline: 8rem;
		padding-block-start: 2rem;
		padding-block-end: 4rem;
		max-width: fit-content;
	}

	h1 {
		font-family: 'Futura';
		font-size: 4rem;
		color: #e9c760;
		/* filter: drop-shadow(); */
		text-transform: uppercase;
		text-align: center;
		margin-block-end: 2rem;
	}

	img:not(:last-of-type) {
		margin-block-end: 4rem;
	}
</style>
