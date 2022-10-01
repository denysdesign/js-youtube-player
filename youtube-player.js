"use strict";

import './scss/youtube-player.scss';

export default function youtubePlayer(el) {
    function fn(item, i, all) {
       if (typeof item.parentNode !== 'undefined') {
            const addElem = document.createElement('div'),
                to = all || i === len - 1 ? addElem : addElem.cloneNode(true);

            addElem.classList.add("js-youtube-player-embed");

            item = item.parentNode.replaceChild(to, item);

            to.appendChild(item);

            item.classList.add("js-youtube-player-embed-item");

            const url = item.getAttribute("src");
            item.setAttribute("src", url);
        }
    }

    const yt = 'youtube.com',
        elemYotube = document.querySelectorAll(`${el} iframe[src*='${yt}'], ${el} iframe[src^='https://www.${yt}'], ${el} iframe[src^='//www.${yt}'], ${el} iframe[src^='//${yt}']`),
        len = elemYotube.length;

    return len ? Array.prototype.forEach.call(elemYotube, fn) : fn(elemYotube);
}