<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';

	import indeed from './images/indeed.png';
	import fl from './images/fl.jpeg';
	import bl3 from './images/bl3.jpg';
	import dk from './images/dk.jpg';
	import ts from './images/ts.png';
	import puck from './images/puck.png';
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
			organization, I collaborate closely with software engineers to realize designs created by UX designers.
			My primary focuses are <strong>usability, accessibility, and consistency</strong>.
		</p>
		<section>
			<h4>Technologies:</h4>
			<ul>
				<li>React</li>
				<li>Typescript</li>
				<li>CSS</li>
			</ul>
		</section>
	</ProjectCard>

	<ProjectCard heading="Unbroken Studios">
		<p>
			I was a Senior Engineer responsible for architecting and implementing all in-game UI for <a
				href="http://fractured-lands.com/">Fractured Lands</a
			>. I also briefly developed gameplay systems and tools for
			<a href="https://www.suicidesquadgame.com/en-us">Suicide Squad: Kill the Justice League</a>.
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
		<p>
			I was a UI Programmer for <a href="https://borderlands.2k.com/borderlands-3/">Borderlands 3</a
			>
			and <a href="https://2k.com/en-US/game/battleborn-standard-edition/">Battleborn</a>. Some of
			the features I implemented in these games included the heads-up display (HUD), item menus, and
			map screen.
		</p>
		<img src={bl3} alt="Screenshot from Borderlands 3" />
		<section>
			<h4>Technologies:</h4>
			<ul>
				<li>C++</li>
				<li>Unreal Engine 3 & 4</li>
				<li>Scaleform</li>
			</ul>
		</section>
	</ProjectCard>

	<ProjectCard heading="EA Mobile">
		<p>
			I was a Software Engineer for EA Mythic and worked primarily on <a
				href="https://en.wikipedia.org/wiki/Dungeon_Keeper_(2014_video_game)">Dungeon Keeper</a
			>, the studio's final game.
		</p>
		<img src={dk} alt="Screenshot from Dungeon Keeper" />
		<section>
			<h4>Technologies:</h4>
			<ul>
				<li>C#</li>
				<li>Unity</li>
			</ul>
		</section>
	</ProjectCard>

	<ProjectCard heading="Zabu">
		<p>I was a Lead Engineer for a startup that created online implementations of board games.</p>
		<img src={ts} class="img-small" alt="Screenshot from Thunderstone" />
		<section>
			<h4>Technologies:</h4>
			<ul>
				<li>Flash</li>
				<li>Java</li>
				<li>iOS</li>
			</ul>
		</section>
	</ProjectCard>

	<ProjectCard heading="pogo.com">
		<p>
			I was a Gameplay Engineer for <a href="https://www.pogo.com">pogo.com</a>, where I worked on
			the first Flash games for the site and established best practices.
		</p>
		<img src={puck} class="img-small" alt="Screenshot from Puck's Peak" />
		<section>
			<h4>Technologies:</h4>
			<ul>
				<li>Flash</li>
				<li>Java</li>
			</ul>
		</section>
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
		object-fit: fill;
		max-width: fit-content;
		box-shadow: 0px 4px 16px 5px rgba(0, 0, 0, 0.125);
	}

	.card-container {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-3);

		margin: auto;
		max-width: 54rem;
	}

	.img-small {
		max-width: 100%;
	}

	@media screen and (min-width: 32rem) {
		.img-small {
			align-self: center;
		}
	}
</style>
