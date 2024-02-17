import * as server from '../entries/pages/sverdle/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sverdle/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sverdle/+page.server.js";
export const imports = ["_app/immutable/nodes/3.4LEkfP94.js","_app/immutable/chunks/scheduler.nqFHKhAu.js","_app/immutable/chunks/index.UoHRYquQ.js","_app/immutable/chunks/entry.TBtegcFL.js"];
export const stylesheets = ["_app/immutable/assets/3.zpJKtCAG.css"];
export const fonts = [];
