function menuShow(){
    let menuMobile = document.querySelector(".mobile-menu");
    if(menuMobile.classList.contains("open")) {
        menuMobile.classList.remove("open");
        document.querySelector(".icon").src = "menu_white_36dp.svg";
    } else {
        menuMobile.classList.add("open")
        document.querySelector(".icon").src = "close_white_36dp.svg";
    }
}


/* end of navigation-bar */
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".prev")

const currentEl = document.querySelector(".current")
const totalEl = document.querySelector(".total")

let currentIndex = 0;
const totalSlides = slides.length;

totalEl.textContent = String(totalSlides).padStart(2, "0");

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");

    currentEl.textContent = String(index + 1).padStart (2, "0");
}

nextBtn.addEventListener("click", () => {
    currentIndex++;

    if (currentIndex >= totalSlides){
        currentIndex = 0;
        console.log(currentIndex)
    }

    showSlide(currentIndex);
})

prevBtn.addEventListener("click", () => {
    currentIndex--;

    if(currentIndex < 0) {
        currentIndex = totalSlides - 1;
        console.log(currentIndex)
    }

    showSlide(currentIndex);
})

showSlide(currentIndex);