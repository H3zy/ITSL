const otazka1 = document.getElementById("otazka1");
const otazka2 = document.getElementById("otazka2");
const otazka3 = document.getElementById("otazka3");
const otazka4 = document.getElementById("otazka4");
const otazka5 = document.getElementById("otazka5");

const odpoved1 = document.getElementById("odpoved1");
const odpoved2 = document.getElementById("odpoved2");
const odpoved3 = document.getElementById("odpoved3");
const odpoved4 = document.getElementById("odpoved4");
const odpoved5 = document.getElementById("odpoved5");

otazka1.addEventListener("click", function () {
    if (odpoved1.style.display === "none" || odpoved1.style.display === "") {
        odpoved1.style.display = "block";
    } else {
        odpoved1.style.display = "none";
    }
});

otazka2.addEventListener("click", function () {
    if (odpoved2.style.display === "none" || odpoved2.style.display === "") {
        odpoved2.style.display = "block";
    } else {
        odpoved2.style.display = "none";
    }
});

otazka3.addEventListener("click", function () { 
    if (odpoved3.style.display === "none" || odpoved3.style.display === "") {
        odpoved3.style.display = "block";
    } else {
        odpoved3.style.display = "none";
    }
});

otazka4.addEventListener("click", function () {
    if (odpoved4.style.display === "none" || odpoved4.style.display === "") {
        odpoved4.style.display = "block";
    } else {
        odpoved4.style.display = "none";
    }
});

otazka5.addEventListener("click", function () {
    if (odpoved5.style.display === "none" || odpoved5.style.display === "") {
        odpoved5.style.display = "block";
    } else {
        odpoved5.style.display = "none";
    }
});