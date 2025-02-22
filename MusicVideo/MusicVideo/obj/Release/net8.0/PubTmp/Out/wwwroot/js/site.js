﻿// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
window.onload = function () {
    const title = document.getElementById('title');
    let opacity = 0;
    const fadeIn = setInterval(function () {
        if (opacity < 1) {
            opacity += 0.05;
            title.style.opacity = opacity;
        } else {
            clearInterval(fadeIn);
        }
        }
    }, 50);
};