import { c as create_ssr_component } from "../../chunks/index-2835083a.js";
var app = "";
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"drawer"}"><input id="${"my-drawer-3"}" type="${"checkbox"}" class="${"drawer-toggle"}"> 
  <div class="${"drawer-content flex flex-col"}">
    <div class="${"w-full navbar bg-base-300 z-30"}"><div class="${"flex-none lg:hidden"}"><label for="${"my-drawer-3"}" class="${"btn btn-square btn-ghost"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" class="${"inline-block w-6 h-6 stroke-current"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M4 6h16M4 12h16M4 18h16"}"></path></svg></label></div> 
      <div class="${"flex-1 px-2 mx-2"}"><a href="${"/"}" class="${"text-xl"}">Nicholas Kreitz</a></div>
      <div class="${"lg:hidden"}"><a href="${"/contact"}" class="${"btn btn-primary rounded"}">Contact Me</a></div>
      <div class="${"flex-none hidden lg:block z-30"}"><ul class="${"menu menu-horizontal"}">
          <li><a href="${"/"}">Home</a></li>
          <li><a href="${"/projects"}">Projects</a></li>
          <li><a href="${"/nmi"}">NMI Portfolio</a></li>
          <li><a href="${"/resume"}">Resume</a></li>
          <li><a href="${"/contact"}" class="${"btn btn-primary rounded"}">Contact Me</a></li></ul></div></div>
    
    ${slots.default ? slots.default({}) : ``}</div> 
  <div class="${"drawer-side"}"><label for="${"my-drawer-3"}" class="${"drawer-overlay"}"></label> 
    <ul class="${"menu p-4 overflow-y-auto w-80 bg-base-100"}">
      <div class="${""}"><li><div class="${"text-2xl font-bold"}">Nicholas Kreitz</div></li>
        <div class="${"divider m-2"}"></div>
        <li><a href="${"/"}">Home</a></li>
        <div class="${"divider m-2"}"></div>
        <li><a href="${"/projects"}">Projects</a></li>
        <div class="${"divider m-2"}"></div>
        <li><a href="${"/nmi"}">NMI Portfolio</a></li>
        <div class="${"divider m-2"}"></div>
        <li><a href="${"/resume"}">Resume</a></li>  
        <div class="${"divider m-2"}"></div>
        <li><a href="${"/contact"}">Contact</a></li>
        <div class="${"divider m-2"}"></div>
        <li><a href="${"/vault"}">Vault</a></li></div></ul></div></div>`;
});
export { _layout as default };
