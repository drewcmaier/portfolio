

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.32573c57.js","_app/immutable/chunks/scheduler.2cdf953d.js","_app/immutable/chunks/index.452094d6.js","_app/immutable/chunks/stores.6f99ba77.js","_app/immutable/chunks/singletons.9e5ccbe5.js"];
export const stylesheets = [];
export const fonts = [];
