// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");
    });

}

const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
    });

});


// =========================
// TRADITION MODAL
// =========================

const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");

const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

const exploreButtons = document.querySelectorAll(".explore-btn");


exploreButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const card = button.parentElement;

        const title = card.getAttribute("data-title");
        const description = card.getAttribute("data-description");

        modalTitle.textContent = title;
        modalDescription.textContent = description;

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


// =========================
// ECO SCORE
// =========================

const ecoOptions = document.querySelectorAll(".eco-option");
const score = document.getElementById("score");

let ecoScore = 0;

ecoOptions.forEach(function (option) {

    option.addEventListener("click", function () {

        if (option.classList.contains("selected")) {

            option.classList.remove("selected");
            ecoScore--;

        } else {

            option.classList.add("selected");
            ecoScore++;

        }

        score.textContent = ecoScore;

    });

});


// =========================
// LIGHT THE DIYA
// =========================

const lightBtn = document.getElementById("lightBtn");
const aarti = document.getElementById("aarti");
const aartiStatus = document.getElementById("aartiStatus");

if (lightBtn && aarti) {

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

}