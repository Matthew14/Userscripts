// ==UserScript==
// @name         hnNewTab
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Open HN Links in a new tab
// @author       Matthew
// @match        https://news.ycombinator.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var links = document.getElementsByClassName('storylink')
    for (var i = 0; i < links.length; i++ ) {
        links[i].target = '_blank';
    }
})();
