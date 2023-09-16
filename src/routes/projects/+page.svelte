<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';

	import indeed from './images/indeed.png';
	import fl from './images/fl.jpeg';
</script>

<div class="card-container">
	<h2>Projects</h2>
	<ProjectCard heading="Indeed">
		<p>
			I am currently a Senior UX Developer at <a href="https://employers.indeed.com"
				>Indeed for Employers</a
			>.
		</p>
		<img src={indeed} alt="Indeed for Employers page" />
		<p>
			As a member of the <a href="https://indeed.design/article/what-is-a-design-technologist"
				>Design Technology</a
			>
			organization, I work closely with software engineers to realize designs created by UX designers.
			My primary focuses are <strong>usability, accessibility, and consistency</strong>.
		</p>
		<section>
			<h4>Technologies:</h4>
			<ul>
				<li>React</li>
				<li>Node</li>
				<li>css-in-js (Emotion)</li>
				<li>Jest</li>
			</ul>
		</section>
	</ProjectCard>

	<ProjectCard heading="Unbroken Studios">
		<p>
			I was a Senior Engineer responsible for architecting and implementing all in-game UI. I also
			did some gameplay programming.
		</p>
		<img src={fl} alt="Screenshot from Fractured Lands" />
		<section>
			<h4>Technologies:</h4>
			<ul>
				<li>C++</li>
				<li>Unreal Engine 4</li>
			</ul>
		</section>
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

	<ProjectCard heading="pogo.com">
		<p>Gameplay engineer</p>
	</ProjectCard>
</div>

<style>
	h2 {
		margin-bottom: 0;
	}

	p {
		font-size: var(--font-size-1);
	}

	img {
		width: 100%;
		object-fit: fill;
		box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.125);
	}

	.card-container {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-3);

		margin: auto;
		max-width: 64rem;
	}
</style>
