<script lang="ts">
	import AwardsPage from '../AwardsPage.svelte';
	import barbie from './images/barbie.jpg';
	import killers from './images/killers.jpg';
	import poorthings from './images/poorthings.jpg';
	import oscars from './images/oscars2024.jpg';

	const images = [oscars, barbie, killers, poorthings];
</script>

<AwardsPage {images} year={2024} />
