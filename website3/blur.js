document.addEventListener("DOMContentLoaded", function () {
    let cursorBlur = document.querySelector(".cursor-blur");

    window.addEventListener("mousemove", function (event) {
        cursorBlur.style.left = event.clientX + "px";
        cursorBlur.style.top = event.clientY + "px";
        });
    });
