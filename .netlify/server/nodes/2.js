

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.bf03783d.js","_app/immutable/chunks/scheduler.2cdf953d.js","_app/immutable/chunks/index.452094d6.js"];
export const stylesheets = ["_app/immutable/assets/2.925451ab.css"];
export const fonts = [];
