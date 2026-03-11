<script lang="ts">
	import AwardsPage from '../AwardsPage.svelte';
	import frankenstein from './images/frankenstein.jpg';
	import hamnet from './images/hamnet.jpg';
	import martysupreme from './images/martysupreme.jpg';
	import onebattle from './images/onebattle.jpg';
	import sinners from './images/sinners.jpg';

	const images = [frankenstein, hamnet, martysupreme, onebattle, sinners];
</script>

<AwardsPage {images} year={2026} />
