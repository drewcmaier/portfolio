import { c as create_ssr_component, b as subscribe, v as validate_component, e as each, d as add_attribute, f as escape } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const Footer_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "footer.svelte-1bj0s4a.svelte-1bj0s4a{display:flex;justify-content:space-between;font-size:var(--font-size-0);color:var(--color-text-inverse);background-color:var(--color-primary);padding:var(--spacing-3)}footer.svelte-1bj0s4a a.svelte-1bj0s4a{color:var(--color-text-inverse)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<footer class="svelte-1bj0s4a" data-svelte-h="svelte-19kxmiu"><p>©2023 Drew Maier</p> <p>Created with <a href="https://kit.svelte.dev/" class="svelte-1bj0s4a">Sveltekit</a></p> </footer>`;
});
const Hamburger_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "svg.svelte-piosjm{margin-top:6px}",
  map: null
};
const Hamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<svg viewBox="0 0 50 50" width="32" height="28" class="svelte-piosjm"><rect y="0" width="100" height="4"></rect><rect y="20" width="100" height="4"></rect><rect y="40" width="100" height="4"></rect></svg>`;
});
const X_svelte_svelte_type_style_lang = "";
const Nav_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "nav.svelte-zs1rh5{background-color:var(--color-primary);color:var(--color-text-inverse);fill:var(--color-text-inverse);border-bottom:var(--border-normal);display:flex;align-items:center;justify-content:space-between;padding:var(--spacing-3);position:fixed;inset:0 0 auto}h1.svelte-zs1rh5{text-align:center}ul.svelte-zs1rh5{max-width:var(--breakpoint-lg);margin:0 auto;padding:0;position:fixed;inset:0;background-color:var(--color-primary);border:var(--border-normal);display:flex;flex-direction:column;justify-content:center;justify-items:center;align-items:center;gap:4rem;transition:opacity 0.2s}li.svelte-zs1rh5{list-style-type:none}a.svelte-zs1rh5,a.svelte-zs1rh5:visited{color:var(--color-text-inverse);text-decoration:none;font-weight:var(--font-weight-normal);font-size:var(--font-size-3)}a.active.svelte-zs1rh5{text-decoration:underline}button.svelte-zs1rh5{z-index:1;margin:0;cursor:pointer;border:0;background-color:transparent;padding:0.5rem;margin:-0.5rem}.nav-menu--closed.svelte-zs1rh5{opacity:0;left:-9999px;top:-9999px}@media screen and (min-width: 32rem){nav.svelte-zs1rh5{position:static}ul.svelte-zs1rh5{flex-direction:row;position:static;backdrop-filter:none;justify-content:flex-end;gap:2rem;margin:0;background-color:transparent;border:0}button.svelte-zs1rh5{display:none}.nav-menu--closed.svelte-zs1rh5{opacity:1;display:flex}}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const routes = [{ path: "/", label: "About me" }, { path: "/experience", label: "Experience" }];
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header><nav class="svelte-zs1rh5"><a href="/" class="svelte-zs1rh5" data-svelte-h="svelte-4zj7vd"><h1 class="svelte-zs1rh5">dm</h1></a> <button aria-label="Menu" role="menu" aria-controls="nav-menu-list" class="svelte-zs1rh5">${`${validate_component(Hamburger, "Hamburger").$$render($$result, {}, {}, {})}`}</button> <ul id="nav-menu-list" class="${["svelte-zs1rh5", "nav-menu--closed"].join(" ").trim()}">${each(routes, (route) => {
    return `<li class="svelte-zs1rh5"><a${add_attribute("href", route.path, 0)} class="${["svelte-zs1rh5", $page.route.id === route.path ? "active" : ""].join(" ").trim()}">${escape(route.label)}</a> </li>`;
  })}</ul></nav></header>  ${$$result.head += `<!-- HEAD_svelte-l7x4dh_START -->${``}<!-- HEAD_svelte-l7x4dh_END -->`, ""}`;
});
const style = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-10biyiu{padding:var(--spacing-3);background-color:var(--color-background);flex:1;display:flex;flex-direction:column;padding:var(--spacing-3);padding-top:calc(71px + var(--spacing-3))}@media screen and (min-width: 32rem){main.svelte-10biyiu{padding-top:var(--spacing-3)}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})} <main class="svelte-10biyiu">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
