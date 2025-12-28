<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';

	import indeed from './images/indeed.png';
	import unbroken from './images/unbroken.png';
	import gearbox from './images/gearbox.png';
	import ea from './images/ea.png';
	import zabu from './images/zabu.png';
	import pogo from './images/pogo.png';

	import employer from './images/employer.jpg';
	import fl from './images/fl.jpg';
	import bl3 from './images/bl3.jpg';
	import dk from './images/dk.jpg';
	import ts from './images/ts.jpg';
	import puck from './images/puck.jpg';
</script>

<div class="card-container">
	<h2 class="visually-hidden">Experience</h2>
	<ProjectCard
		logo={indeed}
		heading="Indeed"
		technologies={[
			'React',
			'Typescript',
			'HTML',
			'CSS (Emotion, Sass)',
			'WAI-ARIA',
			'Design systems'
		]}
	>
		{#snippet description()}
			<p>
				I'm currently a Staff Software Engineer at <a href="https://employers.indeed.com">Indeed</a
				>, where I work on the Employer product. Recently I helped build and launch
				<a href="https://www.indeed.com/employers/talentscout">Talent Scout</a>, an AI-powered tool
				that helps employers find candidates faster.
			</p>
			<img src={employer} class="project-img" alt="Indeed for Employers page" />
			<p>
				I collaborate closely with product owners to realize designs created by UX designers.
				Another aspect of my role is establishing best practices for usability, accessibility, and
				consistency.
			</p>
			<p>
				This role represented a significant career pivot for me, transitioning from the game
				industry to web development. After over a decade making games, I became interested in
				applying my frontend expertise in other contexts. I also wanted expand my breadth of
				knowledge by learning web technologies. While Indeed may not seem to have much in common
				with video games, I apply my background from game UI on a daily basis.
			</p>
		{/snippet}
	</ProjectCard>

	<ProjectCard
		logo={unbroken}
		heading="Unbroken Studios"
		technologies={['C++', 'Unreal Engine 4', 'Steamworks SDK']}
	>
		{#snippet description()}
			<p>
				As a Senior UI Engineer, I was responsible for architecting and implementing in-game UI for <a
					href="http://fractured-lands.com/">Fractured Lands</a
				>. This included the inventory menu, game map, and multiplayer party management screen.
			</p>
			<img src={fl} class="project-img" alt="Screenshot from Fractured Lands" />
		{/snippet}
	</ProjectCard>

	<ProjectCard
		logo={gearbox}
		heading="Gearbox Software"
		technologies={[
			'C++',
			'Unreal Engine 3',
			'Unreal Engine 4',
			'Scaleform',
			'Playstation SDK',
			'Xbox SDK'
		]}
	>
		{#snippet description()}
			<p>
				I developed 2 AAA games at Gearbox as a UI Programmer: <a
					href="https://borderlands.2k.com/borderlands-3/">Borderlands 3</a
				>
				and <a href="https://2k.com/en-US/game/battleborn-standard-edition/">Battleborn</a>. In both
				of these games, I implemented UI systems for the heads-up display (HUD), item menus, and map
				screens.
			</p>
			<img src={bl3} class="project-img" alt="Screenshot from Borderlands 3" />
			<p>
				Borderlands 3 was especially challenging to work on because it was Gearbox's first game
				developed with Unreal Engine 4.
			</p>
		{/snippet}
	</ProjectCard>

	<ProjectCard
		logo={ea}
		heading="EA Mobile"
		technologies={['C#', 'Unity', 'iOS SDK', 'Android SDK']}
	>
		{#snippet description()}
			<p>
				Returning to Electronic Arts, I was a Software Engineer for EA Mobile and worked primarily
				on <a href="https://en.wikipedia.org/wiki/Dungeon_Keeper_(2014_video_game)"
					>Dungeon Keeper</a
				>, the studio's final game, which released for iOS and Android.
			</p>
			<img src={dk} class="project-img" alt="Screenshot from Dungeon Keeper" />
			<p>
				While my stint at EA Mobile was short, I learned a lot about game development and working on
				a large team.
			</p>
		{/snippet}
	</ProjectCard>

	<ProjectCard
		logo={zabu}
		heading="Zabu"
		technologies={['Flash', 'Actionscript', 'Java', 'iOS SDK', 'Android SDK']}
	>
		{#snippet description()}
			<p>
				I was a Lead Engineer for Zabu, a startup that created licensed online adaptations of board
				games.
			</p>
			<img src={ts} class="project-img-small" alt="Screenshot from Thunderstone" />
			<p>
				Because this was a small company, I wore many hats: gameplay programmer, backend programmer,
				and occasional designer.
			</p>
		{/snippet}
	</ProjectCard>

	<ProjectCard logo={pogo} heading="Pogo" technologies={['Flash', 'Actionscript', 'Java']}>
		{#snippet description()}
			<p>
				My first tech job was as a Gameplay Engineer for <a href="https://www.pogo.com">pogo.com</a
				>, a subsidiary of Electronic Arts.
			</p>
			<img src={puck} class="project-img-small" alt="Screenshot from Puck's Peak" />
			<p>
				At Pogo, my most important contribution was migrating games from Java applets to Flash,
				where I became a subject matter expert and established best practices for future games.
			</p>
		{/snippet}
	</ProjectCard>
</div>

<style>
	img {
		object-fit: cover;
		object-position: top center;
		aspect-ratio: 16 / 9;
		box-shadow: var(--shadow-outer);
	}

	.card-container {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-7);
	}

	.project-img {
		width: 100%;
		height: auto;
		border-radius: var(--border-radius-sm);
	}

	.project-img-small {
		max-width: 100%;
	}

	@media screen and (min-width: 36rem) {
		.project-img-small {
			align-self: center;
		}
	}
</style>
