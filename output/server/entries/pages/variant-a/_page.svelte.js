import { c as create_ssr_component, i as createEventDispatcher, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
const css = {
  code: '.text-center.svelte-93sdo5.svelte-93sdo5{text-align:center}.form-group.svelte-93sdo5.svelte-93sdo5{margin-bottom:20px}.date-picker.svelte-93sdo5.svelte-93sdo5{display:flex;justify-content:center;align-items:center}.form-group.svelte-93sdo5 label.svelte-93sdo5{margin-right:10px}.form-group.svelte-93sdo5 input.svelte-93sdo5{padding:8px;border:1px solid #ccc;border-radius:5px;width:50px;text-align:center}.form-group.svelte-93sdo5 input[type="number"].svelte-93sdo5::-webkit-inner-spin-button,.form-group.svelte-93sdo5 input[type="number"].svelte-93sdo5::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.btn.svelte-93sdo5.svelte-93sdo5{padding:10px 20px;background-color:#007bff;color:#fff;border:none;border-radius:5px;cursor:pointer;margin-top:20px;margin-bottom:20px}.btn.svelte-93sdo5.svelte-93sdo5:hover{background-color:#0056b3}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let day = "";
  let month = "";
  let year = "";
  let keyCount = 0;
  let backspaceCount = 0;
  let timeTaken = null;
  let averageTypingSpeed = 0;
  $$result.css.add(css);
  return `<div class="text-center mt-5 svelte-93sdo5"><h1 data-svelte-h="svelte-1w0lpz4">Enter your Birthday</h1> <div class="form-group svelte-93sdo5"><div class="date-picker form-inline svelte-93sdo5"><div class="form-group svelte-93sdo5"><label for="day" class="svelte-93sdo5" data-svelte-h="svelte-10m6lki">Day</label> <input id="day" class="date-picker--day svelte-93sdo5" type="number" min="1" max="31" placeholder="dd" maxlength="2"${add_attribute("value", day, 0)}></div> <div class="form-group svelte-93sdo5"><label for="month" class="svelte-93sdo5" data-svelte-h="svelte-trxhhu">Month</label> <input id="month" class="date-picker--month svelte-93sdo5" type="number" min="1" max="12" placeholder="mm" maxlength="2"${add_attribute("value", month, 0)}></div> <div class="form-group svelte-93sdo5"><label for="year" class="svelte-93sdo5" data-svelte-h="svelte-11k8a8u">Year</label> <input id="year" class="date-picker--year svelte-93sdo5" type="number" placeholder="yyyy" maxlength="4"${add_attribute("value", year, 0)}></div></div></div>  <div class="notification-modal" id="notificationModal"><div class="notification-content"><h2 data-svelte-h="svelte-1f1n5w9">Take a Screenshot!</h2> <p data-svelte-h="svelte-1xekju0">Please take a screenshot of your submission. Click below to proceed to Variant B.</p> <button class="btn btn-primary svelte-93sdo5" data-svelte-h="svelte-1oi0m1b">Proceed to Variant B</button></div></div> <div>Key Count: ${escape(keyCount)}</div> <div>Backspace Count: ${escape(backspaceCount)}</div> <div>Time Taken: ${escape((timeTaken / 1e3).toFixed(2))} seconds</div> <div>Average Typing Speed: ${escape(averageTypingSpeed.toFixed(2))} keys per second</div> <button class="btn btn-primary mt-3 svelte-93sdo5" data-svelte-h="svelte-1wunwhh">Submit</button> </div>`;
});
export {
  Page as default
};
