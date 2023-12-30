<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';

	import indeed from './images/indeed.jpg';
	import fl from './images/fl.jpg';
	import bl3 from './images/bl3.jpg';
	import dk from './images/dk.jpg';
	import ts from './images/ts.jpg';
	import puck from './images/puck.jpg';
</script>

<div class="card-container">
	<h2 class="visually-hidden">Experience</h2>
	<ProjectCard heading="Indeed">
		<svelte:fragment slot="description">
			<p>
				I am currently a Senior UX Developer at <a href="https://employers.indeed.com">Indeed</a>.
			</p>
			<img src={indeed} alt="Indeed for Employers page" />
			<p>
				As a member of the <a href="https://indeed.design/article/what-is-a-design-technologist"
					>Design Technology</a
				>
				organization, I collaborate closely with software engineers to realize designs created by UX
				designers. Another aspect of my role is establishing best practices for
				<strong>usability</strong>,
				<strong>accessibility</strong>, and
				<strong>consistency</strong>.
			</p>
			<p>
				This role was a career pivot for me from the game industry to web development. After over a
				decade making games, I had become interested in applying my frontend expertise in other
				contexts. I also wanted expand my breadth of knowledge by learning web technologies. While
				Indeed may not seem to have much in common with video games, I apply my background from game
				UI on a daily basis.
			</p>
		</svelte:fragment>
		<svelte:fragment slot="technologies">
			<li>React</li>
			<li>Typescript</li>
			<li>HTML</li>
			<li>CSS (Emotion, theme-ui, Sass)</li>
			<li>WAI-ARIA</li>
			<li>Design systems</li>
		</svelte:fragment>
	</ProjectCard>

	<ProjectCard heading="Unbroken Studios">
		<svelte:fragment slot="description">
			<p>
				As a Senior UI Engineer, I was responsible for architecting and implementing in-game UI for <a
					href="http://fractured-lands.com/">Fractured Lands</a
				>. This included the inventory menu, game map, and multiplayer party management screen.
			</p>
			<img src={fl} alt="Screenshot from Fractured Lands" />
			<p>
				I also briefly developed gameplay systems and tools for
				<a href="https://www.suicidesquadgame.com/en-us">Suicide Squad: Kill the Justice League</a>,
				which will release in February 2024.
			</p>
		</svelte:fragment>
		<svelte:fragment slot="technologies">
			<li>C++</li>
			<li>Unreal Engine 4</li>
			<li>Steamworks SDK</li>
		</svelte:fragment>
	</ProjectCard>

	<ProjectCard heading="Gearbox Software">
		<svelte:fragment slot="description">
			<p>
				I developed 2 AAA games at Gearbox as a UI Programmer: <a
					href="https://borderlands.2k.com/borderlands-3/">Borderlands 3</a
				>
				and <a href="https://2k.com/en-US/game/battleborn-standard-edition/">Battleborn</a>. In both
				of these games, I implemented UI systems for the heads-up display (HUD), item menus, and map
				screens. Borderlands 3 was especially challenging to work on because it was Gearbox's first
				game developed with Unreal Engine 4.
			</p>
			<img src={bl3} alt="Screenshot from Borderlands 3" />
		</svelte:fragment>
		<svelte:fragment slot="technologies">
			<li>C++</li>
			<li>Unreal Engine 3</li>
			<li>Unreal Engine 4</li>
			<li>Scaleform</li>
			<li>Playstation SDK</li>
			<li>Xbox SDK</li>
		</svelte:fragment>
	</ProjectCard>

	<ProjectCard heading="EA Mobile">
		<svelte:fragment slot="description">
			<p>
				Returning to Electronic Arts, I was a Software Engineer for EA Mobile and worked primarily
				on <a href="https://en.wikipedia.org/wiki/Dungeon_Keeper_(2014_video_game)"
					>Dungeon Keeper</a
				>, the studio's final game, which released for iOS and Android.
			</p>
			<img src={dk} alt="Screenshot from Dungeon Keeper" />
		</svelte:fragment>
		<svelte:fragment slot="technologies">
			<li>C#</li>
			<li>Unity</li>
			<li>iOS</li>
			<li>Android</li>
		</svelte:fragment>
	</ProjectCard>

	<ProjectCard heading="Zabu">
		<svelte:fragment slot="description">
			<p>
				I was a Lead Engineer for Zabu, a startup that created licensed online adaptations of board
				games. Because this was a small company, I wore many hats: gameplay programmer, backend
				programmer, and occasional designer.
			</p>
			<img src={ts} class="img-small" alt="Screenshot from Thunderstone" />
		</svelte:fragment>
		<svelte:fragment slot="technologies">
			<li>Flash</li>
			<li>Actionscript</li>
			<li>Java</li>
			<li>iOS</li>
			<li>Android</li>
		</svelte:fragment>
	</ProjectCard>

	<ProjectCard heading="pogo.com">
		<svelte:fragment slot="description">
			<p>
				My first tech job was as a Gameplay Engineer for <a href="https://www.pogo.com">pogo.com</a
				>, a subsidiary of Electronic Arts. At Pogo, my most important contribution was migrating
				games from Java Applets to Flash, where I became a subject matter expert and established
				best practices for future games.
			</p>
			<img src={puck} class="img-small" alt="Screenshot from Puck's Peak" />
		</svelte:fragment>
		<svelte:fragment slot="technologies">
			<li>Flash</li>
			<li>Actionscript</li>
			<li>Java</li>
		</svelte:fragment>
	</ProjectCard>
</div>

<style>
	img {
		object-fit: fill;
		max-width: fit-content;
		box-shadow: var(--shadow-outer);
	}

	li {
		list-style: square inside;
		font-size: var(--font-size-2);
	}

	.card-container {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-4);
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
