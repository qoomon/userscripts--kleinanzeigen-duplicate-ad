// ==UserScript==
// @name         eBay Kleinanzeigen Dublicate Ad
// @namespace    https://qoomon.github.io
// @version      0.1
// @updateURL    https://github.com/qoomon/userscript-ebay-kleinanzeigen-duplicate-ad/raw/main/ebay-kleinanzeigen-duplicate-ad.user.js
// @downloadURL  https://github.com/qoomon/userscript-ebay-kleinanzeigen-duplicate-ad/raw/main/ebay-kleinanzeigen-duplicate-ad.user.js
// @description  Adds a dublicate ad button to edit ad page
// @author       qoomon
// @match        https://www.ebay-kleinanzeigen.de/p-anzeige-bearbeiten.html?adId=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ebay-kleinanzeigen.de
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const duplicateButton = document.createElement('button');
    duplicateButton.setAttribute('id', 'pstad-duplicate');
    duplicateButton.setAttribute('type', 'submit');
    duplicateButton.classList.add('button-secondary');
    duplicateButton.style.color = '#0064d2';
    duplicateButton.style.borderColor = '#0064d2';
    duplicateButton.innerText = 'Anzeige duplizieren';
    duplicateButton.addEventListener('click', (event) => {
        event.preventDefault();
        document.getElementById('postad-id').value = '';
        document.getElementById('adForm').submit();
    });

    const submitButton = document.getElementById('pstad-submit');
    submitButton.after(duplicateButton);
})();
