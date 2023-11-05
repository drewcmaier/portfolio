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
	<h2>Experience</h2>
	<ProjectCard heading="Indeed">
		<p>
			I am currently a Senior UX Developer at <a href="https://employers.indeed.com">Indeed</a>.
		</p>
		<p>
			As a member of the <a href="https://indeed.design/article/what-is-a-design-technologist"
				>Design Technology</a
			>
			organization, I collaborate closely with software engineers to realize designs created by UX designers.
			Another aspect of my role is establishing best practices for <strong>usability</strong>,
			<strong>accessibility</strong>, and
			<strong>consistency</strong>.
		</p>
		<img src={indeed} alt="Indeed for Employers page" />
		<aside>
			<h4>Technologies:</h4>
			<ul>
				<li>React</li>
				<li>Typescript</li>
				<li>CSS</li>
			</ul>
		</aside>
	</ProjectCard>

	<ProjectCard heading="Unbroken Studios">
		<p>
			As a Senior UI Engineer, I was responsible for architecting and implementing in-game UI for <a
				href="http://fractured-lands.com/">Fractured Lands</a
			>. I also briefly developed gameplay systems and tools for
			<a href="https://www.suicidesquadgame.com/en-us">Suicide Squad: Kill the Justice League</a>.
		</p>
		<img src={fl} alt="Screenshot from Fractured Lands" />
		<aside>
			<h4>Technologies:</h4>
			<ul>
				<li>C++</li>
				<li>Unreal Engine 4</li>
			</ul>
		</aside>
	</ProjectCard>

	<ProjectCard heading="Gearbox Software">
		<p>
			I developed 2 AAA games at Gearbox as a UI Programmer: <a
				href="https://borderlands.2k.com/borderlands-3/">Borderlands 3</a
			>
			and <a href="https://2k.com/en-US/game/battleborn-standard-edition/">Battleborn</a>. In both
			of these games, I implemented UI systems for the heads-up display (HUD), item menus, and map
			screens.
		</p>
		<img src={bl3} alt="Screenshot from Borderlands 3" />
		<aside>
			<h4>Technologies:</h4>
			<ul>
				<li>C++</li>
				<li>Unreal Engine</li>
				<li>Scaleform</li>
			</ul>
		</aside>
	</ProjectCard>

	<ProjectCard heading="EA Mobile">
		<p>
			Returning to EA, I was a Software Engineer for EA Mythic and worked primarily on <a
				href="https://en.wikipedia.org/wiki/Dungeon_Keeper_(2014_video_game)">Dungeon Keeper</a
			>, the studio's final game.
		</p>
		<img src={dk} alt="Screenshot from Dungeon Keeper" />
		<aside>
			<h4>Technologies:</h4>
			<ul>
				<li>C#</li>
				<li>Unity</li>
			</ul>
		</aside>
	</ProjectCard>

	<ProjectCard heading="Zabu">
		<p>
			I was a Lead Engineer for Zabu, a startup that created licensed online adaptations of board
			games. Because this was a small company, I wore many hats: gameplay programmer, backend
			programmer, and occasional designer.
		</p>
		<img src={ts} class="img-small" alt="Screenshot from Thunderstone" />
		<aside>
			<h4>Technologies:</h4>
			<ul>
				<li>Flash</li>
				<li>Java</li>
				<li>iOS</li>
			</ul>
		</aside>
	</ProjectCard>

	<ProjectCard heading="pogo.com (EA)">
		<p>
			My first tech job was as a Gameplay Engineer for <a href="https://www.pogo.com">pogo.com</a>.
			At Pogo, my most important contribution was migrating games from Java applets to Flash, where
			I became a subject matter expert and established best practices for future games.
		</p>
		<img src={puck} class="img-small" alt="Screenshot from Puck's Peak" />
		<aside>
			<h4>Technologies:</h4>
			<ul>
				<li>Flash</li>
				<li>Java</li>
			</ul>
		</aside>
	</ProjectCard>
</div>

<style>
	h2 {
		margin-bottom: 0;
	}

	p,
	aside,
	h4 {
		font-size: var(--font-size-2);
	}

	img {
		object-fit: fill;
		max-width: fit-content;
		box-shadow: 0px 4px 16px 5px rgba(0, 0, 0, 0.125);
	}

	li {
		list-style: square inside;
	}

	.card-container {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-3);
		width: 100%;
		max-width: var(--breakpoint-lg);
		margin: auto;
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
