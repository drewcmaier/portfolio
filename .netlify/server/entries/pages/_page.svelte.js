import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const LinkedIn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M17.3188 14.8227C17.3188 16.3918 16.1377 17.6473 14.2412 17.6473H14.2064C12.3805 17.6473 11.2 16.3918 11.2 14.8227C11.2 13.2204 12.4164 12 14.277 12C16.1377 12 17.2835 13.2204 17.3188 14.8227ZM16.9605 19.8778V36.2196H11.5216V19.8778H16.9605ZM36.5752 36.2196L36.5754 26.8497C36.5754 21.8303 33.8922 19.4941 30.3131 19.4941C27.4254 19.4941 26.1325 21.0802 25.4107 22.1929V19.8783H19.9711C20.0428 21.4117 19.9711 36.22 19.9711 36.22H25.4107V27.0934C25.4107 26.605 25.446 26.1178 25.5898 25.7681C25.9829 24.7924 26.8779 23.7822 28.3805 23.7822C30.3494 23.7822 31.1365 25.2807 31.1365 27.4767V36.2196H36.5752Z" fill="white"></path></svg>`;
});
const GitHub = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg enable-background="new 0 0 512 512" id="Layer_1" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32"><g><circle cx="256" cy="256" r="256"></circle><g><path d="M256,93.9c-89.5,0-162.1,72.6-162.1,162.1c0,70.5,45,130.4,107.8,152.8c0.3,0.1,1.4,0.5,1.7,0.6    c0.9,0.3,1.9,0.5,2.9,0.5c5.3,0,9.5-4.3,9.5-9.5c0-0.3,0-0.5,0-0.8l0,0c0-8.6,0-19.5,0-28.2c-10.3,2.1-25.9,4.1-34.4,0    c-11-5.3-16.6-12.1-21.9-25.5c-6.6-16.3-21.8-20.8-22.4-23.6c-0.6-2.9,16.1-7.2,24.7,2.7c8.6,9.9,17.3,29.7,35.8,27.8    c9.1-0.9,15-2.4,18.7-3.5c0.7-6.4,2.8-14.3,8.1-19.9c-43.5-7.2-72.5-30.6-72.5-76.5c0-20.9,6-37.1,16.6-49.2    c-1.8-10-4.8-33.2,3.2-41.3c0,0,11.3-7,43.7,15.8c12.1-2.8,25.5-4.2,39.8-4.2l0,0c0.3,0,0.5,0,0.8,0c0.3,0,0.5,0,0.8,0l0,0    c14.4,0.1,27.8,1.5,39.8,4.2c32.4-22.8,43.7-15.8,43.7-15.8c8,8.2,5,31.4,3.2,41.3c10.6,12.2,16.6,28.4,16.6,49.2    c0,45.9-28.9,69.3-72.5,76.5c8.3,8.7,8.6,22.8,8.6,28.6c0,5.5,0,42.3,0,42.5c0,5.3,4.3,9.5,9.5,9.5c0.8,0,1.5-0.1,2.3-0.3    c0.2,0,0.8-0.2,1-0.3c63.5-22,109.1-82.3,109.1-153.3C418.1,166.4,345.5,93.9,256,93.9z" fill="#FFFFFF"></path></g></g></svg>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-10kcykg.svelte-10kcykg{flex:1;padding:var(--spacing-4);font-size:var(--font-size-2);background-color:var(--color-secondary)}.svelte-10kcykg.svelte-10kcykg:where(p, span):not(:last-child){margin-bottom:var(--spacing-4)}.svelte-10kcykg.svelte-10kcykg:where(p, span):last-child{margin-bottom:var(--spacing-5)}.hello.svelte-10kcykg.svelte-10kcykg{display:block;font-family:var(--font-mono);font-size:var(--font-size-6);margin:var(--spacing-5) 0}.contact-links.svelte-10kcykg.svelte-10kcykg{display:flex;list-style:none;padding:0;gap:var(--spacing-3);margin-block-start:var(--spacing-5)}.contact-links.svelte-10kcykg li.svelte-10kcykg{padding:var(--spacing-2);margin:calc(0px - var(--spacing-2))}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="svelte-10kcykg"><strong class="hello svelte-10kcykg" data-svelte-h="svelte-1kac8ue">Hello, world! 👋</strong> <p class="svelte-10kcykg" data-svelte-h="svelte-r0wny6"><span class="svelte-10kcykg">My name is</span> <strong class="svelte-10kcykg">Drew Maier</strong> <span class="svelte-10kcykg">and I am a UX Developer for <a href="https://www.indeed.com" class="svelte-10kcykg">Indeed</a> in the Greater Philadelphia
			area.</span></p> <p class="svelte-10kcykg" data-svelte-h="svelte-1jnc3s">Whether it&#39;s <strong class="svelte-10kcykg">websites</strong>, <strong class="svelte-10kcykg">games</strong>, or
		<strong class="svelte-10kcykg">mobile apps</strong>, frontend development is my passion. My goal is to create software
		that people enjoy using.</p> <ul class="contact-links svelte-10kcykg"><li class="svelte-10kcykg"><a href="https://www.linkedin.com/in/drew-maier" class="svelte-10kcykg">${validate_component(LinkedIn, "LinkedIn").$$render($$result, {}, {}, {})}</a></li> <li class="svelte-10kcykg"><a href="https://github.com/drewcmaier" class="svelte-10kcykg">${validate_component(GitHub, "GitHub").$$render($$result, {}, {}, {})}</a></li></ul> </section>`;
});
export {
  Page as default
};
