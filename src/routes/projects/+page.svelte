<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';

	import indeed from './images/indeed.png';
</script>

<h2>Projects</h2>

<div class="card-container">
	<ProjectCard heading="Indeed">
		<p>
			Senior UX Developer, <a href="https://employers.indeed.com">Indeed for Employers</a>. I help
			people get jobs
		</p>

		<img src={indeed} alt="Indeed for Employers page" />
	</ProjectCard>

	<ProjectCard heading="Unbroken Studios">
		<p>Senior UI Engineer responsible architecting and implementing all in-game UI</p>
	</ProjectCard>

	<ProjectCard heading="Gearbox Software">
		<p>UI Engineer for Borderlands 3 and Battleborn</p>
	</ProjectCard>

	<ProjectCard heading="EA Mobile">
		<p>Software Engineer for Monopoly Hotels and Dungeon Keeper</p>
	</ProjectCard>

	<ProjectCard heading="Zabu">
		<p>Lead Engineer for several online implementations of board games</p>
	</ProjectCard>

	<ProjectCard heading="pogo.com (Electronic Arts">
		<p>Gameplay engineer</p>
	</ProjectCard>
</div>

<style>
	img {
		width: 100%;
		object-fit: fill;
		box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.125);
	}

	p {
		margin-bottom: var(--spacing-md);
	}

	.card-container {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-lg);
	}
</style>
