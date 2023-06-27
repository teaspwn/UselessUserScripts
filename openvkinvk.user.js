// ==UserScript==
// @name         OpenVK)))
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://vk.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=vk.com
// @grant        none
// ==/UserScript==
var settingsbuttons = document.querySelector("#ui_rmenu_payments")
settingsbuttons.insertAdjacentHTML("beforeBegin", `
<a id="ui_rmenu_openvk" href="/settings?act=openvk" class="ui_rmenu_item _ui_item_openvk" onclick="location.href = 'https://vk.com/settings?act=openvk';">
  <span class="ui_rmenu_item_label "><span class="ui_rmenu_label-text">OpenVK</span></span>
</a>
`)
if (window.location.href.includes('https://vk.com/settings?act=openvk')) {
 document.title = "OpenVK";
 var openvkbutton = document.querySelector('#ui_rmenu_openvk');
 openvkbutton.classList.add("ui_rmenu_item_sel");
    var page = document.querySelector('.wide_column_wrap');
        page.innerHTML = `
 <iframe src="https://openvk.uk/" width="550" height="600"">
    иди нахуй. я не хочу с тобой работать
 </iframe>`
    }
