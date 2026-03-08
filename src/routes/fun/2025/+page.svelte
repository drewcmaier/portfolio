<script lang="ts">
	import AwardsPage from '../AwardsPage.svelte';
	import brutalist from './images/brutalist.jpg';
	import completeunknown from './images/complete-unknown.jpg';
	import dune2 from './images/dune2.jpg';
	import perez from './images/perez.jpg';
	import wicked from './images/wicked.jpg';

	const images = [brutalist, completeunknown, dune2, perez, wicked];
</script>

<AwardsPage {images} year={2025} />
