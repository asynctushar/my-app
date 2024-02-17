import * as universal from '../entries/pages/variant-b/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/variant-b/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/variant-b/+page.js";
export const imports = ["_app/immutable/nodes/6.h_94PiUW.js","_app/immutable/chunks/index.30ImaL5r.js","_app/immutable/chunks/scheduler.nqFHKhAu.js","_app/immutable/chunks/index.UoHRYquQ.js"];
export const stylesheets = ["_app/immutable/assets/6.QSyKx-Z5.css"];
export const fonts = [];
