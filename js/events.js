const eventBtn = document.querySelector(".event__btn");
const cardList = document.querySelector(".event__list");

window.addEventListener("DOMContentLoaded", function () {
    eventBtn.addEventListener("click", function () {
        cardList.classList.toggle("event__list--active");
        eventBtn.classList.add("display-none");
    })
})