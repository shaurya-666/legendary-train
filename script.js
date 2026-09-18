// Mobile menu

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
});


// Tradition modal

const cards = document.querySelectorAll(".tradition-card");

const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");

const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");


cards.forEach(function (card) {

    const button = card.querySelector(".learn-btn");

    button.addEventListener("click", function () {

        modalTitle.textContent = card.dataset.title;

        modalDescription.textContent =
            card.dataset.description;

        modal.classList.add("active");

    });

});


closeBtn.addEventListener("click", function () {

    modal.classList.remove("active");

});


modal.addEventListener("click", function (event) {

    if (event.target === modal) {
        modal.classList.remove("active");
    }

});