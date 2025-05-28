//Элементы бургер кнопки
let burgerEl = document.querySelector("#burgerMenuFormediaScreen");
let navEl = document.querySelector(".nav ul");

//Элементы для скролла девайсов
let nowrapControllersEl = document.querySelector(".nowrap");
let prevBtn = document.querySelector("#prev");
let nextBtn = document.querySelector("#next");

burgerEl.addEventListener("click", function showNavigation() {
    if (navEl.style.display === "flex") {
        navEl.style.display = "none";
    } else {
        navEl.style.display = "flex";
    }
});

prevBtn.addEventListener("click", () => {
    nowrapControllersEl.scrollBy({
        left: -150,
    });
});

nextBtn.addEventListener("click", () => {
    nowrapControllersEl.scrollBy({
        left: 100
    });
});
