

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/experience/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.3d17e3eb.js","_app/immutable/chunks/scheduler.2cdf953d.js","_app/immutable/chunks/index.452094d6.js"];
export const stylesheets = ["_app/immutable/assets/3.dc9ab6e1.css"];
export const fonts = [];
