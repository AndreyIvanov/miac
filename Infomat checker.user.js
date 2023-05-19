// ==UserScript==
// @name         Infomat checker
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  500 error reloader
// @author       ANeutralObserver
// @match        https://portal55.is-mis.ru/infomt/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=is-mis.ru
// @downloadURL  https://github.com/AndreyIvanov/miac/raw/main/Infomat%20checher.user.js
// @updateURL    https://github.com/AndreyIvanov/miac/raw/main/Infomat%20checher.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (localStorage.getItem('infomtid') == undefined){
        var infomtid = document.location.pathname.split('/')[2];
        localStorage.setItem('infomtid',infomtid);
    }
    var timers = null;
    clearInterval(timers)
    timers = setInterval(() => {
        var errtag = document.querySelector('.http_error');
        if (errtag != undefined){
            var now = new Date();
            console.log('500 error check', now);
            document.location=`https://portal55.is-mis.ru/infomt/${localStorage.getItem('infomtid')}`;
        } else
        {
            console.log('check');
        }
    }, 1000*5)

})();