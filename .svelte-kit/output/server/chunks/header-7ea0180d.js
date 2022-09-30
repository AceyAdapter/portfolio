import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "./index-2835083a.js";
const Instagram = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style = "w-3" } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  return `<div class="${"hover:animate-spin ml-2 p-2 rounded-3xl bg-primary flex justify-center items-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 448 512"}"${add_attribute("class", style, 0)}><path d="${"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0\n      53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9\n      448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69\n      76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0\n      111.28 61.9 111.28 142.3V448z"}"></path></svg></div>`;
});
const Mail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style = "w-3" } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  return `<div class="${"hover:animate-spin ml-2 p-2 rounded-3xl bg-primary flex justify-center items-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 512 512"}"${add_attribute("class", style, 0)}><path d="${"M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512\n      419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM48 128V150.1L220.5\n      291.7C241.1 308.7 270.9 308.7 291.5 291.7L464 150.1V127.1C464 119.2 456.8\n      111.1 448 111.1H64C55.16 111.1 48 119.2 48 127.1L48 128zM48 212.2V384C48\n      392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V212.2L322\n      328.8C283.6 360.3 228.4 360.3 189.1 328.8L48 212.2z"}"></path></svg></div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { initTransparent = false } = $$props;
  let y = 0;
  if ($$props.initTransparent === void 0 && $$bindings.initTransparent && initTransparent !== void 0)
    $$bindings.initTransparent(initTransparent);
  return `<div class="${"sticky top-0 flex flex-row justify-between py-6 px-10 bg-base-100 z-50 " + escape(initTransparent || y > 70 ? "border-b-2 border-primary" : "")}"><div class="${"flex flex-row items-center"}"><a href="${"https://kreitzn.dev"}"><div class="${"text-primary font-poppins font-bold text-2xl"}">Kreitzn.dev
      </div></a>
    <div class="${"hidden lg:block text-primary font-poppins font-medium text-xl mx-2"}">|
    </div>
    <a href="${"/nmi"}"><div class="${"hover:underline hidden lg:block text-primary font-poppins font-medium text-xl"}">NMI Portfolio
      </div></a></div>
  <div class="${"flex flex-row"}"><a href="${"https://www.linkedin.com/in/nicholas-kreitz-3a13531a0/"}" target="${"_blank"}">${validate_component(Instagram, "Instagram").$$render($$result, { style: "w-5 h-5 fill-base-100" }, {}, {})}</a>
    <a href="${"mailto:nicholaskreitz@gmail.com"}">${validate_component(Mail, "Mail").$$render($$result, { style: "w-5 h-5 fill-base-100" }, {}, {})}</a></div></div>

`;
});
export { Header as H };
