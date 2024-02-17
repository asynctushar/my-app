import { c as create_ssr_component, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
const css = {
  code: ".container.svelte-rr5o36{display:flex;flex-direction:column;align-items:center;width:420px;color:#868484;background:#fff;border-radius:8px;padding:30px 0;row-gap:20px}.date-input.svelte-rr5o36{width:auto;height:60px;color:#444;font-size:1.6rem;border-radius:8px;border:0.5px solid #949494;letter-spacing:8px;padding:10px 20px;box-sizing:border-box}.error-summary.svelte-rr5o36{color:green}button.calculate.svelte-rr5o36{text-align:center;font-weight:600;color:white;text-transform:uppercase;background-size:200% auto;background-color:#dc2743;background-image:linear-gradient(\r\n      to right,\r\n      #f09433 0%,\r\n      #e6683c 25%,\r\n      #dc2743 50%,\r\n      #cc2366 75%,\r\n      #bc1888 100%\r\n    );box-shadow:rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,\r\n      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;border:none;transition:560ms;border-radius:5px;cursor:pointer;padding:20px;margin-top:20px;&:hover {\r\n      background-position: right center;\r\n      -webkit-transform: scale(1.01);\r\n      -ms-transform: scale(1.01);\r\n      transform: scale(1.01);\r\n    };&:active,\r\n    &:focus {\r\n      -webkit-transform: scale(1.01);\r\n      -ms-transform: scale(1.01);\r\n      transform: scale(1.01);\r\n    };&:active {\r\n      background-position: right center;\r\n      -webkit-transform: scale(0.98);\r\n      -ms-transform: scale(0.98);\r\n      transform: scale(0.98);\r\n    }}.notification-modal.svelte-rr5o36{display:none}.notification-content.svelte-rr5o36{text-align:center;padding:0 1em}.btn.svelte-rr5o36{padding:10px 20px;background-color:#007bff;color:#fff;border:none;border-radius:5px;cursor:pointer;margin-top:20px}.btn.svelte-rr5o36:hover{background-color:#0056b3}",
  map: null
};
let dateFormat = "DD/MM/YYYY";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dateInput = "";
  let errorSummary = "";
  let keyCount = 0;
  let backspaceCount = 0;
  let timeTaken = 0;
  let averageSpeed = 0;
  $$result.css.add(css);
  return `<div class="container svelte-rr5o36"><h1 data-svelte-h="svelte-1w0lpz4">Enter your Birthday</h1> <input id="dateInput" class="date-input svelte-rr5o36" type="text"${add_attribute("placeholder", dateFormat, 0)} name="custom date input"${add_attribute("maxlength", dateFormat.length, 0)}${add_attribute("value", dateInput, 0)}>  <div class="notification-modal svelte-rr5o36" id="notificationModal"><div class="notification-content svelte-rr5o36"><h2 data-svelte-h="svelte-1f1n5w9">Take a Screenshot!</h2> <p data-svelte-h="svelte-p28aci">Please take a screenshot of your submission. Click below to proceed.</p> <button class="btn btn-primary svelte-rr5o36" data-svelte-h="svelte-p9golt">Proceed</button></div></div> <div class="${["svelte-rr5o36", ""].join(" ").trim()}">${escape(errorSummary)}</div> <div>Key Count: ${escape(keyCount)}</div> <div>Backspace Count: ${escape(backspaceCount)}</div> <div>Time Taken: ${escape(timeTaken)} milliseconds</div> <div>Average Speed: ${escape(averageSpeed.toFixed(2))} keys per second</div> <button class="calculate svelte-rr5o36" data-svelte-h="svelte-1ha0jhv">Validate</button> </div>`;
});
export {
  Page as default
};
