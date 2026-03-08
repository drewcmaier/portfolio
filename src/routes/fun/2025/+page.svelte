<script lang="ts">
	import AwardsPage from '../AwardsPage.svelte';
	import brutalist from './images/brutalist.png';
	import completeunknown from './images/complete-unknown.png';
	import dune2 from './images/dune2.png';
	import perez from './images/perez.png';
	import wicked from './images/wicked.png';

	const images = [brutalist, completeunknown, dune2, perez, wicked];
</script>

<AwardsPage {images} year={2025} />
