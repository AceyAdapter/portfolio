import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../chunks/index-2835083a.js";
import { H as Header } from "../../chunks/header-05ed4e9f.js";
var nick_cutout = "/_app/assets/nick-cutout-04787eeb.png";
var stats_card = "/_app/assets/stats-card-dce19c10.png";
const Green_triangle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style = "w-3" } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  return `<div class="${""}"><svg viewBox="${"0 0 1218 838"}"${add_attribute("class", style, 0)} xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M611 0L1221.55 840H0.452087L611 0Z"}"></path></svg></div>`;
});
const White_triangle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style = "w-3" } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  return `<div class="${"z-10"}"><svg${add_attribute("class", style, 0)} viewBox="${"0 0 1218 838"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M611 840L1221.55 0H0.452087L611 840Z"}" fill="${"#D6D4DF"}"></path></svg></div>`;
});
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style = "w-screen h-screen" } = $$props;
  let { id = "#" } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<div${add_attribute("class", style, 0)}${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Developer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style = "w-4" } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  return `<div><svg${add_attribute("class", style, 0)} viewBox="${"0 0 1649 327"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M142.631 28.125L140.791 31.6767L140.8 31.6811L140.808 31.6856L142.631\n      28.125ZM184.556 68.1L181.07 70.061L181.084 70.087L181.099 70.1128L184.556\n      68.1ZM184.556 187.7L181.099 185.687L181.095 185.694L181.091\n      185.701L184.556 187.7ZM142.631 227.025L140.808 223.464L140.8\n      223.469L140.791 223.473L142.631 227.025ZM0.606153\n      241H-3.39385V245H0.606153V241ZM0.606153\n      14.15V10.15H-3.39385V14.15H0.606153ZM133.531 182.825L130.703\n      179.997L133.531 182.825ZM133.531 72.65L130.657 75.4317L130.668\n      75.4434L130.679 75.455L133.531 72.65ZM46.1062\n      52.5V48.5H42.1062V52.5H46.1062ZM46.1062\n      202.325H42.1062V206.325H46.1062V202.325ZM79.9062 18.15C103.212 18.15\n      123.469 22.7025 140.791 31.6767L144.471 24.5733C125.827 14.9142 104.267\n      10.15 79.9062 10.15V18.15ZM140.808 31.6856C158.33 40.6548 171.717 53.4329\n      181.07 70.061L188.042 66.139C177.896 48.1004 163.333 34.2285 144.454\n      24.5644L140.808 31.6856ZM181.099 70.1128C190.66 86.5323 195.506 105.75\n      195.506 127.9H203.506C203.506 104.55 198.385 83.901 188.013\n      66.0872L181.099 70.1128ZM195.506 127.9C195.506 150.05 190.66 169.268\n      181.099 185.687L188.013 189.713C198.385 171.899 203.506 151.25 203.506\n      127.9H195.506ZM181.091 185.701C171.746 201.9 158.357 214.481 140.808\n      223.464L144.454 230.586C163.306 220.935 177.867 207.3 188.021\n      189.699L181.091 185.701ZM140.791 223.473C123.469 232.447 103.212 237\n      79.9062 237V245C104.267 245 125.827 240.236 144.471 230.577L140.791\n      223.473ZM79.9062 237H0.606153V245H79.9062V237ZM4.60615\n      241V14.15H-3.39385V241H4.60615ZM0.606153\n      18.15H79.9062V10.15H0.606153V18.15ZM78.2812 206.325C102.847 206.325\n      122.406 199.607 136.36 185.653L130.703 179.997C118.657 192.043 101.382\n      198.325 78.2812 198.325V206.325ZM136.36 185.653C150.307 171.706 157.031\n      152.262 157.031 127.9H149.031C149.031 150.772 142.755 167.944 130.703\n      179.997L136.36 185.653ZM157.031 127.9C157.031 103.535 150.306 84 136.383\n      69.845L130.679 75.455C142.757 87.7333 149.031 105.032 149.031\n      127.9H157.031ZM136.406 69.8683C122.458 55.4562 102.884 48.5 78.2812\n      48.5V56.5C101.345 56.5 118.604 62.9771 130.657 75.4317L136.406\n      69.8683ZM78.2812 48.5H46.1062V56.5H78.2812V48.5ZM42.1062\n      52.5V202.325H50.1062V52.5H42.1062ZM46.1062\n      206.325H78.2812V198.325H46.1062V206.325ZM399.64\n      164.625V168.625H403.029L403.586 165.283L399.64 164.625ZM268.015\n      164.625V160.625H263.668L264.029 164.957L268.015 164.625ZM281.665\n      195.175L278.959 198.12L281.665 195.175ZM347.315\n      184.45V180.45H344.826L343.727 182.683L347.315 184.45ZM396.39\n      184.45L400.221 185.599L401.766 180.45H396.39V184.45ZM366.49 227.35L368.89\n      230.55L368.905 230.539L368.92 230.527L366.49 227.35ZM265.415\n      232.55L263.431 236.023L263.463 236.042L263.496 236.059L265.415\n      232.55ZM233.24 199.725L229.718 201.621L229.729 201.642L229.741\n      201.663L233.24 199.725ZM233.24 101.9L229.718 100.004L233.24 101.9ZM265.09\n      69.4L267.033 72.8966L265.09 69.4ZM358.04 69.075L356.117 72.5822L356.129\n      72.5887L356.14 72.5951L358.04 69.075ZM389.565 100.6L386.045 102.5L386.063\n      102.533L386.082 102.566L389.565 100.6ZM353.815\n      134.075V138.075H357.89L357.814 134.001L353.815 134.075ZM341.14\n      106.125L338.517 109.145L338.54 109.165L338.564 109.185L341.14\n      106.125ZM282.315 105.8L284.967 108.794L284.973 108.79L282.315\n      105.8ZM268.34 134.075L264.38 133.509L263.728\n      138.075H268.34V134.075ZM396.94 147.075C396.94 153.403 396.518 159.028\n      395.695 163.967L403.586 165.283C404.496 159.822 404.94 153.747 404.94\n      147.075H396.94ZM399.64 160.625H268.015V168.625H399.64V160.625ZM264.029\n      164.957C265.178 178.748 270.061 189.944 278.959 198.12L284.372\n      192.23C277.236 185.673 273.019 176.502 272.001 164.293L264.029\n      164.957ZM278.959 198.12C287.771 206.219 298.619 210.225 311.24\n      210.225V202.225C300.461 202.225 291.592 198.865 284.372 192.23L278.959\n      198.12ZM311.24 210.225C320.27 210.225 328.249 208.281 335.001\n      204.206C341.764 200.124 347.043 194.055 350.904 186.217L343.727\n      182.683C340.437 189.361 336.129 194.18 330.867 197.357C325.594 200.539\n      319.11 202.225 311.24 202.225V210.225ZM347.315\n      188.45H396.39V180.45H347.315V188.45ZM392.559 183.301C387.607 199.806\n      378.143 213.404 364.06 224.173L368.92 230.527C384.304 218.763 394.773\n      203.761 400.221 185.599L392.559 183.301ZM364.09 224.15C350.159 234.598\n      332.948 239.925 312.215 239.925V247.925C334.383 247.925 353.355 242.202\n      368.89 230.55L364.09 224.15ZM312.215 239.925C295.486 239.925 280.557\n      236.272 267.334 229.041L263.496 236.059C278.007 243.995 294.277 247.925\n      312.215 247.925V239.925ZM267.4 229.077C254.401 221.649 244.193 211.246\n      236.739 197.787L229.741 201.663C237.887 216.371 249.129 227.851 263.431\n      236.023L267.4 229.077ZM236.762 197.829C229.537 184.411 225.865 168.831\n      225.865 150.975H217.865C217.865 169.953 221.776 186.872 229.718\n      201.621L236.762 197.829ZM225.865 150.975C225.865 132.894 229.541 117.207\n      236.762 103.796L229.718 100.004C221.773 114.759 217.865 131.789 217.865\n      150.975H225.865ZM236.762 103.796C243.992 90.3691 254.068 80.0991 267.033\n      72.8966L263.148 65.9034C248.812 73.8676 237.655 85.2642 229.718\n      100.004L236.762 103.796ZM267.033 72.8966C280.011 65.6867 295.033 62.025\n      312.215 62.025V54.025C293.864 54.025 277.47 57.9467 263.148\n      65.9034L267.033 72.8966ZM312.215 62.025C328.74 62.025 343.34 65.5754\n      356.117 72.5822L359.963 65.5677C345.874 57.8413 329.924 54.025 312.215\n      54.025V62.025ZM356.14 72.5951C369.104 79.5912 379.049 89.5363 386.045\n      102.5L393.085 98.7003C385.348 84.3637 374.276 73.2921 359.94\n      65.5549L356.14 72.5951ZM386.082 102.566C393.282 115.321 396.94 130.118\n      396.94 147.075H404.94C404.94 128.932 401.015 112.746 393.048\n      98.6336L386.082 102.566ZM357.814 134.001C357.579 121.26 352.916 110.812\n      343.717 103.065L338.564 109.185C345.831 115.305 349.618 123.49 349.816\n      134.149L357.814 134.001ZM343.763 103.105C334.732 95.2625 323.699 91.4\n      310.915 91.4V99.4C321.964 99.4 331.081 102.688 338.517 109.145L343.763\n      103.105ZM310.915 91.4C298.753 91.4 288.251 95.1721 279.658 102.81L284.973\n      108.79C291.98 102.561 300.544 99.4 310.915 99.4V91.4ZM279.663\n      102.806C271.228 110.276 266.218 120.642 264.38 133.509L272.3\n      134.641C273.928 123.241 278.235 114.757 284.967 108.794L279.663\n      102.806ZM268.34 138.075H353.815V130.075H268.34V138.075ZM509.226\n      199.075L505.427 200.326L509.226 211.86L513.025 200.326L509.226\n      199.075ZM554.726 60.95V56.95H551.832L550.927 59.6985L554.726\n      60.95ZM603.151 60.95L606.902 62.3382L608.896 56.95H603.151V60.95ZM536.526\n      241V245H539.311L540.277 242.388L536.526 241ZM481.276 241L477.522\n      242.382L478.486 245H481.276V241ZM414.976 60.95V56.95H409.241L411.222\n      62.3322L414.976 60.95ZM463.726 60.95L467.525 59.6985L466.62\n      56.95H463.726V60.95ZM513.025 200.326L558.525 62.2015L550.927\n      59.6985L505.427 197.824L513.025 200.326ZM554.726\n      64.95H603.151V56.95H554.726V64.95ZM599.4 59.5618L532.775 239.612L540.277\n      242.388L606.902 62.3382L599.4 59.5618ZM536.526\n      237H481.276V245H536.526V237ZM485.03 239.618L418.73 59.5678L411.222\n      62.3322L477.522 242.382L485.03 239.618ZM414.976\n      64.95H463.726V56.95H414.976V64.95ZM459.927 62.2015L505.427 200.326L513.025\n      197.824L467.525 59.6985L459.927 62.2015ZM794.782\n      164.625V168.625H798.17L798.727 165.283L794.782 164.625ZM663.157\n      164.625V160.625H658.81L659.171 164.957L663.157 164.625ZM676.807\n      195.175L674.1 198.12L676.807 195.175ZM742.457\n      184.45V180.45H739.968L738.868 182.683L742.457 184.45ZM791.532\n      184.45L795.363 185.599L796.908 180.45H791.532V184.45ZM761.632\n      227.35L764.032 230.55L764.047 230.539L764.062 230.527L761.632\n      227.35ZM660.557 232.55L658.572 236.023L658.605 236.042L658.638\n      236.059L660.557 232.55ZM628.382 199.725L624.86 201.621L624.871\n      201.642L624.883 201.663L628.382 199.725ZM628.382 101.9L624.86\n      100.004L628.382 101.9ZM660.232 69.4L662.174 72.8966L660.232 69.4ZM753.182\n      69.075L751.258 72.5822L751.27 72.5887L751.282 72.5951L753.182\n      69.075ZM784.707 100.6L781.187 102.5L781.205 102.533L781.223\n      102.566L784.707 100.6ZM748.957 134.075V138.075H753.031L752.956\n      134.001L748.957 134.075ZM736.282 106.125L733.659 109.145L733.682\n      109.165L733.705 109.185L736.282 106.125ZM677.457 105.8L680.109\n      108.794L680.114 108.79L677.457 105.8ZM663.482 134.075L659.522\n      133.509L658.87 138.075H663.482V134.075ZM792.082 147.075C792.082 153.403\n      791.659 159.028 790.836 163.967L798.727 165.283C799.637 159.822 800.082\n      153.747 800.082 147.075H792.082ZM794.782\n      160.625H663.157V168.625H794.782V160.625ZM659.171 164.957C660.32 178.748\n      665.202 189.944 674.1 198.12L679.513 192.23C672.378 185.673 668.16 176.502\n      667.143 164.293L659.171 164.957ZM674.1 198.12C682.913 206.219 693.761\n      210.225 706.382 210.225V202.225C695.603 202.225 686.734 198.865 679.513\n      192.23L674.1 198.12ZM706.382 210.225C715.412 210.225 723.39 208.281\n      730.143 204.206C736.905 200.124 742.185 194.055 746.045 186.217L738.868\n      182.683C735.579 189.361 731.271 194.18 726.008 197.357C720.736 200.539\n      714.252 202.225 706.382 202.225V210.225ZM742.457\n      188.45H791.532V180.45H742.457V188.45ZM787.7 183.301C782.749 199.806\n      773.284 213.404 759.202 224.173L764.062 230.527C779.446 218.763 789.915\n      203.761 795.363 185.599L787.7 183.301ZM759.232 224.15C745.3 234.598\n      728.089 239.925 707.357 239.925V247.925C729.524 247.925 748.496 242.202\n      764.032 230.55L759.232 224.15ZM707.357 239.925C690.628 239.925 675.699\n      236.272 662.476 229.041L658.638 236.059C673.148 243.995 689.419 247.925\n      707.357 247.925V239.925ZM662.541 229.077C649.543 221.649 639.335 211.246\n      631.881 197.787L624.883 201.663C633.028 216.371 644.27 227.851 658.572\n      236.023L662.541 229.077ZM631.904 197.829C624.679 184.411 621.007 168.831\n      621.007 150.975H613.007C613.007 169.953 616.918 186.872 624.86\n      201.621L631.904 197.829ZM621.007 150.975C621.007 132.894 624.682 117.207\n      631.904 103.796L624.86 100.004C616.914 114.759 613.007 131.789 613.007\n      150.975H621.007ZM631.904 103.796C639.134 90.3691 649.21 80.0991 662.174\n      72.8966L658.289 65.9034C643.954 73.8676 632.796 85.2642 624.86\n      100.004L631.904 103.796ZM662.174 72.8966C675.152 65.6867 690.175 62.025\n      707.357 62.025V54.025C689.005 54.025 672.611 57.9467 658.289\n      65.9034L662.174 72.8966ZM707.357 62.025C723.881 62.025 738.481 65.5754\n      751.258 72.5822L755.105 65.5677C741.016 57.8413 725.065 54.025 707.357\n      54.025V62.025ZM751.282 72.5951C764.245 79.5912 774.191 89.5363 781.187\n      102.5L788.227 98.7003C780.49 84.3637 769.418 73.2921 755.081\n      65.5549L751.282 72.5951ZM781.223 102.566C788.424 115.321 792.082 130.118\n      792.082 147.075H800.082C800.082 128.932 796.156 112.746 788.19\n      98.6336L781.223 102.566ZM752.956 134.001C752.72 121.26 748.057 110.812\n      738.858 103.065L733.705 109.185C740.973 115.305 744.76 123.49 744.957\n      134.149L752.956 134.001ZM738.904 103.105C729.874 95.2625 718.841 91.4\n      706.057 91.4V99.4C717.106 99.4 726.223 102.688 733.659 109.145L738.904\n      103.105ZM706.057 91.4C693.895 91.4 683.392 95.1721 674.799 102.81L680.114\n      108.79C687.121 102.561 695.685 99.4 706.057 99.4V91.4ZM674.805\n      102.806C666.37 110.276 661.36 120.642 659.522 133.509L667.442\n      134.641C669.07 123.241 673.377 114.757 680.109 108.794L674.805\n      102.806ZM663.482 138.075H748.957V130.075H663.482V138.075ZM874.793\n      0.499996H878.793V-3.5H874.793V0.499996ZM874.793\n      241V245H878.793V241H874.793ZM829.293 241H825.293V245H829.293V241ZM829.293\n      0.499996V-3.5H825.293V0.499996H829.293ZM870.793\n      0.499996V241H878.793V0.499996H870.793ZM874.793\n      237H829.293V245H874.793V237ZM833.293\n      241V0.499996H825.293V241H833.293ZM829.293\n      4.5H874.793V-3.5H829.293V4.5ZM952.897 232.55L950.936 236.036L950.957\n      236.048L950.978 236.059L952.897 232.55ZM920.072 199.725L916.573\n      201.663L916.584 201.683L916.596 201.704L920.072 199.725ZM920.397\n      102.225L916.944 100.206L916.932 100.226L916.921 100.246L920.397\n      102.225ZM953.872 69.725L955.768 73.2469L955.789 73.2356L955.81\n      73.2242L953.872 69.725ZM1048.12 69.725L1046.18 73.2242L1046.2\n      73.2356L1046.23 73.2469L1048.12 69.725ZM1081.27 102.225L1077.8\n      104.204L1077.81 104.224L1077.82 104.244L1081.27 102.225ZM1080.95\n      199.725L1077.52 197.667L1077.51 197.687L1077.49 197.706L1080.95\n      199.725ZM1047.15 232.55L1049.04 236.072L1049.05 236.067L1049.06\n      236.062L1047.15 232.55ZM1022.77 198.425L1024.69 201.937L1024.71\n      201.927L1024.72 201.917L1022.77 198.425ZM1040.32 180.225L1043.84\n      182.127L1040.32 180.225ZM1033.17 111.65L1030.28 114.41L1030.31\n      114.445L1030.34 114.478L1033.17 111.65ZM967.522 111.65L964.627\n      108.89L964.625 108.891L967.522 111.65ZM967.197 190.625L964.234\n      193.312L964.267 193.348L964.3 193.384L967.197 190.625ZM999.697\n      239.925C982.968 239.925 968.039 236.272 954.816 229.041L950.978\n      236.059C965.488 243.995 981.759 247.925 999.697 247.925V239.925ZM954.858\n      229.064C941.636 221.626 931.213 211.211 923.548 197.746L916.596\n      201.704C924.964 216.405 936.424 227.874 950.936 236.036L954.858\n      229.064ZM923.571 197.787C916.144 184.378 912.372 168.812 912.372\n      150.975H904.372C904.372 169.971 908.399 186.906 916.573 201.663L923.571\n      197.787ZM912.372 150.975C912.372 133.156 916.244 117.606 923.873\n      104.204L916.921 100.246C908.516 115.011 904.372 131.961 904.372\n      150.975H912.372ZM923.85 104.244C931.72 90.7817 942.345 80.4745 955.768\n      73.2469L951.975 66.2031C937.231 74.1422 925.54 85.5016 916.944\n      100.206L923.85 104.244ZM955.81 73.2242C969.255 65.7776 984.288 62.025 1001\n      62.025V54.025C983.039 54.025 966.655 58.0723 951.934 66.2258L955.81\n      73.2242ZM1001 62.025C1017.71 62.025 1032.74 65.7776 1046.18\n      73.2242L1050.06 66.2258C1035.34 58.0723 1018.95 54.025 1001\n      54.025V62.025ZM1046.23 73.2469C1059.64 80.4694 1070.15 90.7638 1077.8\n      104.204L1084.75 100.246C1076.37 85.5195 1064.77 74.1473 1050.02\n      66.2031L1046.23 73.2469ZM1077.82 104.244C1085.65 117.639 1089.62 133.174\n      1089.62 150.975H1097.62C1097.62 131.942 1093.36 114.978 1084.72\n      100.206L1077.82 104.244ZM1089.62 150.975C1089.62 168.757 1085.55 184.278\n      1077.52 197.667L1084.38 201.783C1093.24 187.005 1097.62 170.026 1097.62\n      150.975H1089.62ZM1077.49 197.706C1069.63 211.162 1058.89 221.587 1045.23\n      229.038L1049.06 236.062C1064 227.913 1075.8 216.454 1084.4 201.744L1077.49\n      197.706ZM1045.25 229.028C1031.81 236.268 1016.65 239.925 999.697\n      239.925V247.925C1017.84 247.925 1034.32 243.999 1049.04 236.072L1045.25\n      229.028ZM999.697 208.275C1008.59 208.275 1016.94 206.161 1024.69\n      201.937L1020.86 194.913C1014.3 198.489 1007.27 200.275 999.697\n      200.275V208.275ZM1024.72 201.917C1032.81 197.4 1039.18 190.756 1043.84\n      182.127L1036.8 178.323C1032.8 185.727 1027.47 191.217 1020.82\n      194.933L1024.72 201.917ZM1043.84 182.127C1048.56 173.393 1050.82 162.953\n      1050.82 150.975H1042.82C1042.82 161.964 1040.75 171.023 1036.8\n      178.323L1043.84 182.127ZM1050.82 150.975C1050.82 133.16 1046.07 118.894\n      1036 108.822L1030.34 114.478C1038.47 122.606 1042.82 134.557 1042.82\n      150.975H1050.82ZM1036.07 108.89C1026.42 98.7725 1014.43 93.675 1000.35\n      93.675V101.675C1012.27 101.675 1022.16 105.894 1030.28 114.41L1036.07\n      108.89ZM1000.35 93.675C986.265 93.675 974.273 98.7725 964.627\n      108.89L970.417 114.41C978.537 105.894 988.428 101.675 1000.35\n      101.675V93.675ZM964.625 108.891C955.026 118.97 950.522 133.21 950.522\n      150.975H958.522C958.522 134.507 962.684 122.53 970.418 114.409L964.625\n      108.891ZM950.522 150.975C950.522 168.723 954.908 183.029 964.234\n      193.312L970.16 187.938C962.586 179.587 958.522 167.461 958.522\n      150.975H950.522ZM964.3 193.384C973.751 203.307 985.645 208.275 999.697\n      208.275V200.275C987.749 200.275 977.976 196.143 970.093 187.866L964.3\n      193.384ZM1172.5 86.95H1168.5V99.4856L1175.76 89.2668L1172.5 86.95ZM1196.55\n      66.475L1198.43 70.0065L1198.44 69.9994L1198.45 69.9922L1196.55\n      66.475ZM1273.57 69.4L1271.48 72.8087L1271.49 72.8168L1271.51\n      72.8248L1273.57 69.4ZM1303.15 101.9L1299.58 103.711L1299.6 103.744L1299.62\n      103.777L1303.15 101.9ZM1303.15 199.4L1299.59 197.568L1299.59\n      197.579L1299.58 197.589L1303.15 199.4ZM1273.57 232.225L1271.46\n      228.826L1271.45 228.835L1271.44 228.843L1273.57 232.225ZM1196.87\n      235.8L1194.96 239.314L1194.98 239.323L1194.99 239.331L1196.87\n      235.8ZM1172.5 215.325L1175.68 212.898L1168.5 203.49V215.325H1172.5ZM1172.5\n      326.8V330.8H1176.5V326.8H1172.5ZM1127 326.8H1123V330.8H1127V326.8ZM1127\n      60.95V56.95H1123V60.95H1127ZM1172.5\n      60.95H1176.5V56.95H1172.5V60.95ZM1260.9 122.375L1257.38 124.277L1257.41\n      124.334L1257.44 124.39L1260.9 122.375ZM1243.35 104.175L1241.35\n      107.641L1241.37 107.654L1241.4 107.667L1243.35 104.175ZM1196.55\n      104.5L1198.54 107.966L1198.56 107.957L1198.58 107.948L1196.55 104.5ZM1179\n      122.7L1175.52 120.726L1175.5 120.762L1175.48 120.798L1179 122.7ZM1179\n      179.25L1175.48 181.152L1175.5 181.188L1175.52 181.224L1179 179.25ZM1196.55\n      197.775L1194.47 201.196L1194.53 201.232L1194.6 201.267L1196.55\n      197.775ZM1243.35 197.45L1241.32 194.002L1241.3 194.016L1241.27\n      194.029L1243.35 197.45ZM1260.9 178.925L1257.42 176.951L1257.4\n      176.987L1257.38 177.023L1260.9 178.925ZM1175.76 89.2668C1181.2 81.608\n      1188.71 75.1728 1198.43 70.0065L1194.67 62.9435C1184.02 68.6105 1175.5\n      75.8253 1169.24 84.6332L1175.76 89.2668ZM1198.45 69.9922C1208.2 64.7115\n      1219.34 62.025 1231.97 62.025V54.025C1218.17 54.025 1205.69 56.9718\n      1194.64 62.9578L1198.45 69.9922ZM1231.97 62.025C1246.66 62.025 1259.8\n      65.6361 1271.48 72.8087L1275.67 65.9913C1262.65 57.9973 1248.05 54.025\n      1231.97 54.025V62.025ZM1271.51 72.8248C1283.38 79.9916 1292.74 90.2423\n      1299.58 103.711L1306.71 100.089C1299.25 85.391 1288.9 73.9751 1275.64\n      65.9753L1271.51 72.8248ZM1299.62 103.777C1306.63 116.973 1310.2 132.449\n      1310.2 150.325H1318.2C1318.2 131.367 1314.4 114.56 1306.68 100.023L1299.62\n      103.777ZM1310.2 150.325C1310.2 168.197 1306.63 183.912 1299.59\n      197.568L1306.7 201.232C1314.4 186.288 1318.2 169.286 1318.2\n      150.325H1310.2ZM1299.58 197.589C1292.74 211.066 1283.37 221.439 1271.46\n      228.826L1275.68 235.624C1288.91 227.411 1299.26 215.901 1306.71\n      201.211L1299.58 197.589ZM1271.44 228.843C1259.76 236.217 1246.64 239.925\n      1231.97 239.925V247.925C1248.07 247.925 1262.68 243.833 1275.71\n      235.607L1271.44 228.843ZM1231.97 239.925C1219.31 239.925 1208.28 237.335\n      1198.75 232.269L1194.99 239.331C1205.84 245.098 1218.2 247.925 1231.97\n      247.925V239.925ZM1198.78 232.286C1189.26 227.112 1181.59 220.642 1175.68\n      212.898L1169.32 217.752C1175.97 226.474 1184.55 233.655 1194.96\n      239.314L1198.78 232.286ZM1168.5\n      215.325V326.8H1176.5V215.325H1168.5ZM1172.5\n      322.8H1127V330.8H1172.5V322.8ZM1131 326.8V60.95H1123V326.8H1131ZM1127\n      64.95H1172.5V56.95H1127V64.95ZM1168.5\n      60.95V86.95H1176.5V60.95H1168.5ZM1271.72 150.325C1271.72 138.925 1269.32\n      128.883 1264.35 120.36L1257.44 124.39C1261.57 131.467 1263.72 140.058\n      1263.72 150.325H1271.72ZM1264.42 120.473C1259.75 111.844 1253.38 105.2\n      1245.3 100.683L1241.4 107.667C1248.05 111.383 1253.38 116.873 1257.38\n      124.277L1264.42 120.473ZM1245.34 100.708C1237.57 96.2336 1229.08 94\n      1219.95 94V102C1227.71 102 1234.82 103.883 1241.35 107.641L1245.34\n      100.708ZM1219.95 94C1210.97 94 1202.48 96.3717 1194.52 101.052L1198.58\n      107.948C1205.35 103.962 1212.46 102 1219.95 102V94ZM1194.55\n      101.034C1186.71 105.547 1180.38 112.163 1175.52 120.726L1182.48\n      124.674C1186.72 117.204 1192.08 111.687 1198.54 107.966L1194.55\n      101.034ZM1175.48 120.798C1170.78 129.5 1168.5 139.603 1168.5\n      150.975H1176.5C1176.5 140.681 1178.55 131.933 1182.52 124.602L1175.48\n      120.798ZM1168.5 150.975C1168.5 162.347 1170.78 172.45 1175.48\n      181.152L1182.52 177.348C1178.55 170.017 1176.5 161.269 1176.5\n      150.975H1168.5ZM1175.52 181.224C1180.37 189.773 1186.68 196.473 1194.47\n      201.196L1198.62 194.354C1192.11 190.41 1186.72 184.76 1182.48\n      177.276L1175.52 181.224ZM1194.6 201.267C1202.54 205.708 1211.01 207.95\n      1219.95 207.95V199.95C1212.42 199.95 1205.28 198.075 1198.5 194.283L1194.6\n      201.267ZM1219.95 207.95C1229.12 207.95 1237.64 205.587 1245.42\n      200.871L1241.27 194.029C1234.76 197.979 1227.68 199.95 1219.95\n      199.95V207.95ZM1245.38 200.898C1253.41 196.17 1259.76 189.441 1264.42\n      180.827L1257.38 177.023C1253.37 184.442 1248.02 190.063 1241.32\n      194.002L1245.38 200.898ZM1264.38 180.899C1269.33 172.172 1271.72 161.93\n      1271.72 150.325H1263.72C1263.72 160.82 1261.57 169.645 1257.42\n      176.951L1264.38 180.899ZM1513.34 164.625V168.625H1516.72L1517.28\n      165.283L1513.34 164.625ZM1381.71 164.625V160.625H1377.36L1377.73\n      164.957L1381.71 164.625ZM1395.36 195.175L1392.65 198.12L1395.36\n      195.175ZM1461.01 184.45V180.45H1458.52L1457.42 182.683L1461.01\n      184.45ZM1510.09 184.45L1513.92 185.599L1515.46\n      180.45H1510.09V184.45ZM1480.19 227.35L1482.59 230.55L1482.6\n      230.539L1482.62 230.527L1480.19 227.35ZM1379.11 232.55L1377.13\n      236.023L1377.16 236.042L1377.19 236.059L1379.11 232.55ZM1346.94\n      199.725L1343.41 201.621L1343.43 201.642L1343.44 201.663L1346.94\n      199.725ZM1346.94 101.9L1343.41 100.004L1346.94 101.9ZM1378.79 69.4L1380.73\n      72.8966L1378.79 69.4ZM1471.74 69.075L1469.81 72.5822L1469.82\n      72.5887L1469.84 72.5951L1471.74 69.075ZM1503.26 100.6L1499.74\n      102.5L1499.76 102.533L1499.78 102.566L1503.26 100.6ZM1467.51\n      134.075V138.075H1471.59L1471.51 134.001L1467.51 134.075ZM1454.84\n      106.125L1452.21 109.145L1452.24 109.165L1452.26 109.185L1454.84\n      106.125ZM1396.01 105.8L1398.66 108.794L1398.67 108.79L1396.01\n      105.8ZM1382.04 134.075L1378.08 133.509L1377.42\n      138.075H1382.04V134.075ZM1510.64 147.075C1510.64 153.403 1510.21 159.028\n      1509.39 163.967L1517.28 165.283C1518.19 159.822 1518.64 153.747 1518.64\n      147.075H1510.64ZM1513.34 160.625H1381.71V168.625H1513.34V160.625ZM1377.73\n      164.957C1378.87 178.748 1383.76 189.944 1392.65 198.12L1398.07\n      192.23C1390.93 185.673 1386.71 176.502 1385.7 164.293L1377.73\n      164.957ZM1392.65 198.12C1401.47 206.219 1412.32 210.225 1424.94\n      210.225V202.225C1414.16 202.225 1405.29 198.865 1398.07 192.23L1392.65\n      198.12ZM1424.94 210.225C1433.97 210.225 1441.94 208.281 1448.7\n      204.206C1455.46 200.124 1460.74 194.055 1464.6 186.217L1457.42\n      182.683C1454.13 189.361 1449.83 194.18 1444.56 197.357C1439.29 200.539\n      1432.81 202.225 1424.94 202.225V210.225ZM1461.01\n      188.45H1510.09V180.45H1461.01V188.45ZM1506.26 183.301C1501.3 199.806\n      1491.84 213.404 1477.76 224.173L1482.62 230.527C1498 218.763 1508.47\n      203.761 1513.92 185.599L1506.26 183.301ZM1477.79 224.15C1463.86 234.598\n      1446.64 239.925 1425.91 239.925V247.925C1448.08 247.925 1467.05 242.202\n      1482.59 230.55L1477.79 224.15ZM1425.91 239.925C1409.18 239.925 1394.25\n      236.272 1381.03 229.041L1377.19 236.059C1391.7 243.995 1407.97 247.925\n      1425.91 247.925V239.925ZM1381.1 229.077C1368.1 221.649 1357.89 211.246\n      1350.44 197.787L1343.44 201.663C1351.58 216.371 1362.83 227.851 1377.13\n      236.023L1381.1 229.077ZM1350.46 197.829C1343.23 184.411 1339.56 168.831\n      1339.56 150.975H1331.56C1331.56 169.953 1335.47 186.872 1343.41\n      201.621L1350.46 197.829ZM1339.56 150.975C1339.56 132.894 1343.24 117.207\n      1350.46 103.796L1343.41 100.004C1335.47 114.759 1331.56 131.789 1331.56\n      150.975H1339.56ZM1350.46 103.796C1357.69 90.3691 1367.76 80.0991 1380.73\n      72.8966L1376.84 65.9034C1362.51 73.8676 1351.35 85.2642 1343.41\n      100.004L1350.46 103.796ZM1380.73 72.8966C1393.71 65.6867 1408.73 62.025\n      1425.91 62.025V54.025C1407.56 54.025 1391.17 57.9467 1376.84\n      65.9034L1380.73 72.8966ZM1425.91 62.025C1442.44 62.025 1457.04 65.5754\n      1469.81 72.5822L1473.66 65.5677C1459.57 57.8413 1443.62 54.025 1425.91\n      54.025V62.025ZM1469.84 72.5951C1482.8 79.5912 1492.75 89.5363 1499.74\n      102.5L1506.78 98.7003C1499.04 84.3637 1487.97 73.2921 1473.64\n      65.5549L1469.84 72.5951ZM1499.78 102.566C1506.98 115.321 1510.64 130.118\n      1510.64 147.075H1518.64C1518.64 128.932 1514.71 112.746 1506.74\n      98.6336L1499.78 102.566ZM1471.51 134.001C1471.27 121.26 1466.61 110.812\n      1457.41 103.065L1452.26 109.185C1459.53 115.305 1463.31 123.49 1463.51\n      134.149L1471.51 134.001ZM1457.46 103.105C1448.43 95.2625 1437.4 91.4\n      1424.61 91.4V99.4C1435.66 99.4 1444.78 102.688 1452.21 109.145L1457.46\n      103.105ZM1424.61 91.4C1412.45 91.4 1401.95 95.1721 1393.35 102.81L1398.67\n      108.79C1405.68 102.561 1414.24 99.4 1424.61 99.4V91.4ZM1393.36\n      102.806C1384.92 110.276 1379.91 120.642 1378.08 133.509L1386\n      134.641C1387.62 123.241 1391.93 114.757 1398.66 108.794L1393.36\n      102.806ZM1382.04 138.075H1467.51V130.075H1382.04V138.075ZM1593.35\n      88.9H1589.35V103.066L1596.76 90.9921L1593.35 88.9ZM1616.1 66.475L1614.12\n      62.9972L1614.1 63.007L1614.09 63.017L1616.1 66.475ZM1648.6\n      58.35H1652.6V54.35H1648.6V58.35ZM1648.6\n      106.125V110.125H1652.6V106.125H1648.6ZM1604.07 116.2L1601.38\n      113.244L1601.36 113.264L1601.33 113.285L1604.07 116.2ZM1593.35\n      241V245H1597.35V241H1593.35ZM1547.85 241H1543.85V245H1547.85V241ZM1547.85\n      60.95V56.95H1543.85V60.95H1547.85ZM1593.35\n      60.95H1597.35V56.95H1593.35V60.95ZM1596.76 90.9921C1602.27 82.0006 1609.39\n      75.0043 1618.11 69.933L1614.09 63.017C1604.18 68.7791 1596.12 76.7327\n      1589.94 86.8079L1596.76 90.9921ZM1618.07 69.9528C1626.94 64.9139 1637.08\n      62.35 1648.6 62.35V54.35C1635.85 54.35 1624.32 57.2028 1614.12\n      62.9972L1618.07 69.9528ZM1644.6 58.35V106.125H1652.6V58.35H1644.6ZM1648.6\n      102.125H1636.57V110.125H1648.6V102.125ZM1636.57 102.125C1621.7 102.125\n      1609.75 105.614 1601.38 113.244L1606.77 119.156C1613.13 113.353 1622.84\n      110.125 1636.57 110.125V102.125ZM1601.33 113.285C1592.97 121.144 1589.35\n      134.244 1589.35 151.3H1597.35C1597.35 134.989 1600.88 124.69 1606.81\n      119.115L1601.33 113.285ZM1589.35 151.3V241H1597.35V151.3H1589.35ZM1593.35\n      237H1547.85V245H1593.35V237ZM1551.85\n      241V60.95H1543.85V241H1551.85ZM1547.85\n      64.95H1593.35V56.95H1547.85V64.95ZM1589.35\n      60.95V88.9H1597.35V60.95H1589.35Z"}" fill="${"black"}" fill-opacity="${"0.2"}"></path></svg></div>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
  <div class="${"mb-[-84px]"}">${validate_component(Section, "Section").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"absolute right-0 bottom-0"}">${validate_component(Green_triangle, "GreenTriangle").$$render($$result, { style: "w-[1000px] fill-primary" }, {}, {})}</div>
      <div class="${"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block"}">${validate_component(Developer, "Developer").$$render($$result, { style: "w-[1400px]" }, {}, {})}</div>
      <div class="${"absolute lg:right-32 right-10 bottom-0"}"><img${add_attribute("src", nick_cutout, 0)} class="${"lg:w-96 w-60"}" alt="${""}"></div>
      <div class="${"absolute lg:bottom-28"}"><div class="${"ml-20 flex flex-col text-primary font-poppins font-bold text-5xl"}"><div class="${"mb-1"}">Hello!</div>
          <div class="${"mb-2"}">I&#39;m Nick</div>
          <a href="${"#"}" class="${"btn btn-primary w-36"}">Work with me</a></div></div>`;
    }
  })}</div>
  ${validate_component(Section, "Section").$$render($$result, { style: "w-screen h-screen bg-primary" }, {}, {
    default: () => {
      return `<div class="${"z-10 relative"}"><div class="${"z-10 absolute right-0 top-0 flex flex-col justify-center"}">${validate_component(White_triangle, "WhiteTriangle").$$render($$result, { style: "w-[1000px] fill-primary" }, {}, {})}
        <div class="${"z-20 hidden lg:block ml-[325px] mt-[-450px]"}"><img${add_attribute("src", stats_card, 0)} class="${"w-[350px]"}" alt="${""}"></div></div></div>
    <div class="${"z-30 lg:hidden"}"><img${add_attribute("src", stats_card, 0)} class="${"w-[350px]"}" alt="${""}"></div>
    <div class="${"flex flex-row justify-between"}"><div class="${"flex flex-col justify-start w-full lg:pl-20 pt-72"}"><div class="${"w-1/3 text-base-100 lg:text-6xl font-poppins font-bold"}">student, programmer, advocate for innovation
        </div>
        <a href="${"/nmi"}" class="${"mt-5 rounded-2xl text-lg h-10 w-48 bg-base-100 text-primary font-bold font-poppins flex justify-center items-center"}">View My Work
        </a></div></div>`;
    }
  })}</div>`;
});
export { Routes as default };
