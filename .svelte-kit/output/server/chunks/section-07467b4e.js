import { c as create_ssr_component, a as add_attribute } from "./index-c5e2452c.js";
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style = "w-screen h-screen" } = $$props;
  let { id = "#" } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<div${add_attribute("class", style, 0)}${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
export { Section as S };
