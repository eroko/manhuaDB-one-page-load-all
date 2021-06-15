// ==UserScript==
// @name         manhuaDB Show All Imgs
// @version      0.1
// @description  This script will load full chapter in one page. Default speed is 4s per page. Only for manhuaDB.
// @author       Eroko
// @match        https://www.manhuadb.com/manhua/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    for (let i = page; i < img_data_arr.length; i++) {
        setTimeout(function () {
            let url3 = img_host + "/static/" + p_ccid + "/" + p_id + "/" + img_data_arr[i]["img_webp"]
            let k = i + 1
            var html = '<div><img src=' + url3 + '></div><div><h4>第' + k + '页</h4>></div>>'
            $(".comic-viewer-toc").append(html);
            console.log("Img Number" + k + "Loaded")
            console.log("The Img Url Is:  " + url3)
        }, 4000)
    }
})();