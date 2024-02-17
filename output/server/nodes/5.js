import * as universal from '../entries/pages/variant-a/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/variant-a/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/variant-a/+page.js";
export const imports = ["_app/immutable/nodes/5.XEZ6S_gA.js","_app/immutable/chunks/index.30ImaL5r.js","_app/immutable/chunks/scheduler.nqFHKhAu.js","_app/immutable/chunks/index.UoHRYquQ.js"];
export const stylesheets = ["_app/immutable/assets/5.WXle9xMG.css"];
export const fonts = [];
