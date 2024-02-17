import * as universal from '../entries/pages/sverdle/how-to-play/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sverdle/how-to-play/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/sverdle/how-to-play/+page.js";
export const imports = ["_app/immutable/nodes/4.gN_bA0Op.js","_app/immutable/chunks/index.30ImaL5r.js","_app/immutable/chunks/scheduler.nqFHKhAu.js","_app/immutable/chunks/index.UoHRYquQ.js"];
export const stylesheets = ["_app/immutable/assets/4.lOqbKfPA.css"];
export const fonts = [];
