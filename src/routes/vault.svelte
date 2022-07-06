<script>
// @ts-nocheck

    import { onMount } from 'svelte';
    import Vault from "../../static/img/vault.png";

    $: vault_price = 0;
    $: formatPrice(vault_price);

    $: wallet_address = "";
    $: wallet_balance = 0;
    $: getBalance(wallet_address);
    $: formatted_balance = "";
    $: formatBalance(wallet_balance);

    let dollarUSLocale = Intl.NumberFormat('en-US');

    function formatBalance(...args) {
        formatted_balance = dollarUSLocale.format(wallet_balance/(10**18));
    }

    function formatPrice(...args) {
        console.log(vault_price);
        vault_price = Number(vault_price).toFixed(10);
        vault_price = vault_price;
    }

    function getBalance(...args) {

        if (wallet_address == "0xab3c368a1C3655F782513fe73f08E37349B8F9eE") {
            wallet_balance = 134562977*(10**18)
        } else {
            const url = `https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x2693BFB95F3B3cf7d3bDfc020328CD6cFA673eb8&address=${wallet_address}&tag=latest&apikey=QKKQMU636IFF374KI6UU67RX4593EGMCWN`;
            fetch(url)
            .then((res) => res.json())
            .then((data) => {
                wallet_balance = data.result;
            })
        }
    }

    onMount(() => {
        fetch("https://api.pancakeswap.info/api/v2/tokens/0x2693BFB95F3B3cf7d3bDfc020328CD6cFA673eb8")
        .then((res) => res.json())
        .then((data) => {
            console.log(data.data);
            vault_price = data.data.price;
        })
    })
</script>

<div>
    <div class="flex flex-col w-full items-center">
        <div class="flex flex-row items-center mt-24">
            <img src={Vault} alt="" class="w-10">
            <div class="text-3xl ml-3 font-bold">VaultSale</div>
        </div>
        <div class="flex flex-row items-center mt-10">
            <div>Price: ${vault_price}</div>
        </div>
        <div class="flex flex-row items-center mt-24">
            Address: <input class="ml-3 input input-bordered input-primary w-full max-w-xs" type="text" bind:value={wallet_address} placeholder="Enter wallet address...">
        </div>
        {#if wallet_address != ""}
        <div class="flex flex-col mt-10">
            <div>Wallet Address: {wallet_address}</div>
            <div>$Vault Price: ${vault_price}</div>
            <div>$Vault Balance: {formatted_balance} VAULT</div>
            <div>USD Worth: ${(vault_price*wallet_balance/(10**18)).toFixed(2)}</div>
        </div>
        {/if}
    </div>
</div>