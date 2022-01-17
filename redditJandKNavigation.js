// ==UserScript==
// @name         Reddit Vim Nav
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  add J for down and K for up on old.reddit.com
// @author       Matthew
// @match        https://old.reddit.com/r/*
// @icon         https://www.google.com/s2/favicons?domain=reddit.com
// @grant        none
// ==/UserScript==

var current = 0;
var standardBackColor = null;

(function() {

    'use strict';
    document.addEventListener('keyup', (e) => {
        var previous = current;
        if (e.code === "KeyJ"){
            current++;
        }
        else if (e.code === "KeyK") {
            current--;
        }
        else{
            return;
        }

        var entries = document.getElementsByClassName('entry');

        var thisEntry = entries[current];
        standardBackColor = thisEntry.style.backgroundColor;
        var previousEntry = entries[previous];
        var viewPanel = thisEntry.getElementsByClassName('expando')[0];
        var button = thisEntry.getElementsByClassName('expando-button')[0];

        if(! viewPanel){ // this is a link and not a self/picture
            thisEntry.style.backgroundColor = 'pink';
            return;
        }

        previousEntry.style.backgroundColor = standardBackColor;
        if (viewPanel.style.cssText === 'display: none;'){
            button.click();
        }
        thisEntry.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});

    });
})();