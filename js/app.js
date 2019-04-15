"use strict";

const sContainer = document.querySelector(".slider-container");
const sItems = Array.from(sContainer.children);
const prevButton = document.querySelector(".slider-button-left");
const nextButton = document.querySelector(".slider-button-right");
let itemSize = sItems[0].getBoundingClientRect();
console.log(itemSize);

// const setSliderPosition = (item, index) => {
//     item.style.left = index * itemSize.width + "px";
// };

// sItems.forEach(setSliderPosition);

for (let i = 0; i < sItems.length; i++) {
    setSliderPos(sItems[i], i);
}

function setSliderPos(item, index) {
    item.style.left = index * itemSize.width + "px";
}

// Click prev button, slider move to the left
prevButton.addEventListener("click", function (e) {
    let activeItem = sContainer.querySelector(".active-slide");
    if (activeItem.previousElementSibling) {
        let prevItem = activeItem.previousElementSibling;
        prevItem.classList.add("active-slide");
        activeItem.classList.remove("active-slide");

        prevItem.querySelector(".slider-content").classList.add("animated", "bounceInLeft");
        activeItem.querySelector(".slider-content").classList.remove("animated", "bounceInLeft", "bounceInRight");
        sContainer.style.transform = "translateX(-" + prevItem.style.left + ")";
    }
});
// Click next button, slider move to the right
nextButton.addEventListener("click", function (e) {
    let activeItem = sContainer.querySelector(".active-slide");
    if (activeItem.nextElementSibling) {
        let nextItem = activeItem.nextElementSibling;
        nextItem.classList.add("active-slide");
        activeItem.classList.remove("active-slide");

        nextItem.querySelector(".slider-content").classList.add("animated", "bounceInRight");
        activeItem.querySelector(".slider-content").classList.remove("animated", "bounceInRight", "bounceInLeft");
        sContainer.style.transform = "translateX(-" + nextItem.style.left + ")";
        console.log(nextItem);

        if (!nextItem.nextElementSibling) {
            console.log(sContainer.style.transitionDuration);
            setTimeout(function () {
                sContainer.style.transform = "translateX(0)";
                sContainer.style.transitionDuration = "0s";
                sItems[sItems.length - 1].classList.remove("active-slide");
                sItems[0].classList.add("active-slide");
            }, 750);

            setTimeout(function () {
                sContainer.style.transitionDuration = "0.7s";
            }, 800);
        }
    }
});