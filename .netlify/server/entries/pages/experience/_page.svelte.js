import { c as create_ssr_component, f as escape, v as validate_component, d as add_attribute } from "../../../chunks/ssr.js";
const ProjectCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "section.svelte-11an8sg{padding:var(--spacing-5)}.project-card-content.svelte-11an8sg{display:flex;flex-direction:column;gap:var(--spacing-4)}",
  map: null
};
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { heading } = $$props;
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  $$result.css.add(css$1);
  return `<section class="svelte-11an8sg"><h3>${escape(heading)}</h3> <div class="project-card-content svelte-11an8sg">${slots.default ? slots.default({}) : ``}</div> </section>`;
});
const indeed = "/_app/immutable/assets/indeed.09fa5972.png";
const fl = "/_app/immutable/assets/fl.7358a743.jpeg";
const bl3 = "/_app/immutable/assets/bl3.b02c8299.jpg";
const dk = "/_app/immutable/assets/dk.41a4945f.jpg";
const ts = "/_app/immutable/assets/ts.81e41c77.png";
const puck = "/_app/immutable/assets/puck.21d6a3da.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h2.svelte-r65xvp{margin-bottom:0}p.svelte-r65xvp{font-size:var(--font-size-1)}img.svelte-r65xvp{object-fit:fill;max-width:fit-content;box-shadow:0px 4px 16px 5px rgba(0, 0, 0, 0.125)}.card-container.svelte-r65xvp{display:flex;flex-direction:column;gap:var(--spacing-3);width:100%;max-width:54rem;margin:auto}.img-small.svelte-r65xvp{max-width:100%}@media screen and (min-width: 32rem){.img-small.svelte-r65xvp{align-self:center}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="card-container svelte-r65xvp"><h2 class="svelte-r65xvp" data-svelte-h="svelte-10mha1a">Experience</h2> ${validate_component(ProjectCard, "ProjectCard").$$render($$result, { heading: "Indeed" }, {}, {
    default: () => {
      return `<p class="svelte-r65xvp" data-svelte-h="svelte-1252dok">I am currently a Senior UX Developer at <a href="https://employers.indeed.com">Indeed for Employers</a>.</p> <img${add_attribute("src", indeed, 0)} alt="Indeed for Employers page" class="svelte-r65xvp"> <p class="svelte-r65xvp" data-svelte-h="svelte-grvbvu">As a member of the <a href="https://indeed.design/article/what-is-a-design-technologist">Design Technology</a>
			organization, I collaborate closely with software engineers to realize designs created by UX designers.
			My primary focuses are <strong>usability, accessibility, and consistency</strong>.</p> <div data-svelte-h="svelte-8xaz2f"><h4>Technologies:</h4> <ul><li>React</li> <li>Typescript</li> <li>CSS</li></ul></div>`;
    }
  })} ${validate_component(ProjectCard, "ProjectCard").$$render($$result, { heading: "Unbroken Studios" }, {}, {
    default: () => {
      return `<p class="svelte-r65xvp" data-svelte-h="svelte-sd6ywz">I was a Senior Engineer responsible for architecting and implementing all in-game UI for <a href="http://fractured-lands.com/">Fractured Lands</a>. I also briefly developed gameplay systems and tools for
			<a href="https://www.suicidesquadgame.com/en-us">Suicide Squad: Kill the Justice League</a>.</p> <img${add_attribute("src", fl, 0)} alt="Screenshot from Fractured Lands" class="svelte-r65xvp"> <div data-svelte-h="svelte-qdvog9"><h4>Technologies:</h4> <ul><li>C++</li> <li>Unreal Engine 4</li></ul></div>`;
    }
  })} ${validate_component(ProjectCard, "ProjectCard").$$render($$result, { heading: "Gearbox Software" }, {}, {
    default: () => {
      return `<p class="svelte-r65xvp" data-svelte-h="svelte-1ung6wx">I was a UI Programmer for <a href="https://borderlands.2k.com/borderlands-3/">Borderlands 3</a>
			and <a href="https://2k.com/en-US/game/battleborn-standard-edition/">Battleborn</a>. Some of
			the features I implemented in these games included the heads-up display (HUD), item menus, and
			map screen.</p> <img${add_attribute("src", bl3, 0)} alt="Screenshot from Borderlands 3" class="svelte-r65xvp"> <div data-svelte-h="svelte-vsk873"><h4>Technologies:</h4> <ul><li>C++</li> <li>Unreal Engine 3 &amp; 4</li> <li>Scaleform</li></ul></div>`;
    }
  })} ${validate_component(ProjectCard, "ProjectCard").$$render($$result, { heading: "EA Mobile" }, {}, {
    default: () => {
      return `<p class="svelte-r65xvp" data-svelte-h="svelte-are3zl">I was a Software Engineer for EA Mythic and worked primarily on <a href="https://en.wikipedia.org/wiki/Dungeon_Keeper_(2014_video_game)">Dungeon Keeper</a>, the studio&#39;s final game.</p> <img${add_attribute("src", dk, 0)} alt="Screenshot from Dungeon Keeper" class="svelte-r65xvp"> <div data-svelte-h="svelte-1hp2ck8"><h4>Technologies:</h4> <ul><li>C#</li> <li>Unity</li></ul></div>`;
    }
  })} ${validate_component(ProjectCard, "ProjectCard").$$render($$result, { heading: "Zabu" }, {}, {
    default: () => {
      return `<p class="svelte-r65xvp" data-svelte-h="svelte-sppzq8">I was a Lead Engineer for a startup that created online implementations of board games.</p> <img${add_attribute("src", ts, 0)} class="img-small svelte-r65xvp" alt="Screenshot from Thunderstone"> <div data-svelte-h="svelte-18c2fif"><h4>Technologies:</h4> <ul><li>Flash</li> <li>Java</li> <li>iOS</li></ul></div>`;
    }
  })} ${validate_component(ProjectCard, "ProjectCard").$$render($$result, { heading: "pogo.com" }, {}, {
    default: () => {
      return `<p class="svelte-r65xvp" data-svelte-h="svelte-9daltf">I was a Gameplay Engineer for <a href="https://www.pogo.com">pogo.com</a>, where I worked on
			the first Flash games for the site and established best practices.</p> <img${add_attribute("src", puck, 0)} class="img-small svelte-r65xvp" alt="Screenshot from Puck's Peak"> <div data-svelte-h="svelte-ahzi8l"><h4>Technologies:</h4> <ul><li>Flash</li> <li>Java</li></ul></div>`;
    }
  })} </div>`;
});
export {
  Page as default
};
