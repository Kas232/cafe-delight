// Reservation Form

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("reservationForm");

    if (form) {
        form.addEventListener("submit", function (e) {

            e.preventDefault();

            alert("Thank you! Your table has been reserved at Cafe Delight.");

            form.reset();

        });
    }

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});

// Back To Top Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (topBtn) {

        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}