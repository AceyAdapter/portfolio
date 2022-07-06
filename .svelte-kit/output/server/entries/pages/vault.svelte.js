import { c as create_ssr_component, a as add_attribute, e as escape } from "../../chunks/index-2835083a.js";
var Vault = "/_app/assets/vault-d1ae0534.png";
const Vault_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let vault_price;
  let wallet_address;
  let wallet_balance;
  let formatted_balance;
  let dollarUSLocale = Intl.NumberFormat("en-US");
  function formatBalance(...args) {
    formatted_balance = dollarUSLocale.format(wallet_balance / 10 ** 18);
  }
  function formatPrice(...args) {
    console.log(vault_price);
    vault_price = Number(vault_price).toFixed(10);
    vault_price = vault_price;
  }
  function getBalance(...args) {
    if (wallet_address == "0xab3c368a1C3655F782513fe73f08E37349B8F9eE") {
      wallet_balance = 134562977 * 10 ** 18;
    } else {
      const url = `https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x2693BFB95F3B3cf7d3bDfc020328CD6cFA673eb8&address=${wallet_address}&tag=latest&apikey=QKKQMU636IFF374KI6UU67RX4593EGMCWN`;
      fetch(url).then((res) => res.json()).then((data) => {
        wallet_balance = data.result;
      });
    }
  }
  vault_price = 0;
  {
    formatPrice(vault_price);
  }
  wallet_address = "";
  wallet_balance = 0;
  {
    getBalance(wallet_address);
  }
  formatted_balance = "";
  {
    formatBalance(wallet_balance);
  }
  return `<div class="${"w-full flex flex-row justify-center mb-20"}"><div class="${"flex flex-col w-full items-center bg-primary/20 drop-shadow-md lg:w-3/4 w-5/6 mt-24 rounded-xl"}"><div class="${"flex flex-row items-center mt-24"}"><img${add_attribute("src", Vault, 0)} alt="${""}" class="${"w-10"}">
            <div class="${"text-3xl ml-3 font-medium"}">VaultSale Tracker</div></div>
        <div class="${"flex flex-row items-center mt-10 font-medium text-lg"}"><div class="${"flex flex-col mx-4 lg:w-48 w-1/2"}"><div class="${"flex flex-col items-center mt-10"}"><div>Symbol:</div>
                    <div>VAULT</div></div>
                <div class="${"flex flex-col items-center mt-10"}"><div>Decimals:</div>
                    <div>18</div></div></div>
            <div class="${"flex flex-col mx-4 lg:w-48 w-1/2"}"><div class="${"flex flex-col items-center mt-10"}"><div>Price:</div>
                    <div>$${escape(vault_price)}</div></div>
                <div class="${"flex flex-col items-center mt-10"}"><div>Marketcap:</div>
                    <div>$${escape(dollarUSLocale.format(vault_price * 1e11))}</div></div></div></div>
        <div class="${"flex flex-col items-center mt-24 lg:w-full w-5/6 mb-10"}"><div>Enter Wallet Address: </div>
            <input class="${"input input-bordered input-primary w-full max-w-xs"}" type="${"text"}" placeholder="${"Enter wallet address..."}"${add_attribute("value", wallet_address, 0)}></div>
        ${wallet_address != "" ? `<div class="${"flex flex-col mb-10 w-98"}"><div class="${"divider my-0"}"></div>
            <div><span class="${"font-bold"}">VAULT Balance:</span> ${escape(formatted_balance)} VAULT</div>
            <div class="${"divider my-0"}"></div>
            <div><span class="${"font-bold"}">USD Worth:</span> $${escape((vault_price * wallet_balance / 10 ** 18).toFixed(2))}</div>
            <div class="${"divider my-0"}"></div></div>` : ``}</div></div>`;
});
export { Vault_1 as default };
