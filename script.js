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

// Eco score

const ecoOptions = document.querySelectorAll(".eco-option");
const score = document.getElementById("score");

let ecoScore = 0;


ecoOptions.forEach(function (option) {

    option.addEventListener("click", function () {

        if (!option.classList.contains("selected")) {

            option.classList.add("selected");

            ecoScore++;

            score.textContent = ecoScore;

        }

    });

});

// Aarti interaction

const lightBtn = document.getElementById("lightBtn");
const aarti = document.querySelector(".aarti");
const aartiStatus = document.getElementById("aartiStatus");


lightBtn.addEventListener("click", function () {

    aarti.classList.toggle("lit");

    if (aarti.classList.contains("lit")) {

        lightBtn.textContent = "AARTI IS LIT";

        aartiStatus.textContent =
            "May the light bring wisdom, peace and joy.";

    } else {

        lightBtn.textContent = "LIGHT THE DIYA";

        aartiStatus.textContent = "";

    }

});