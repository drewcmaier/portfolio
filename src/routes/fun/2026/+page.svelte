<script lang="ts">
	import AwardsPage from '../AwardsPage.svelte';
	import frankenstein from './images/frankenstein.png';
	import hamnet from './images/hamnet.png';
	import martysupreme from './images/martysupreme.png';
	import sinners from './images/sinners.png';

	const images = [frankenstein, hamnet, martysupreme, sinners];
</script>

<AwardsPage {images} year={2026} />
