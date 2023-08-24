const showNavMenu = document.getElementById("navMenu");

function showNav() {
    showNavMenu.classList.remove("hidden")
}

function closeNav() {
    showNavMenu.classList.add("hidden")
}

const dropdown1 = document.getElementById("dropdownNav_1")
const dropdown2 = document.getElementById("dropdownNav_2")
const dropdown1Mobile = document.getElementById("dropdownNavMobile_1")
const dropdown2Mobile = document.getElementById("dropdownNavMobile_2")
const arrowIcon = document.getElementsByClassName("arrowIcon")


function collapse1() {
    dropdown1.classList.toggle("hidden");
    dropdown1Mobile.classList.toggle("hidden");
    arrowIcon[0].classList.toggle("rotate-180");
    arrowIcon[2].classList.toggle("rotate-180");
    
}

function collapse2() {
    dropdown2.classList.toggle("hidden");
    dropdown2Mobile.classList.toggle("hidden");
    arrowIcon[1].classList.toggle("rotate-180");
    arrowIcon[3].classList.toggle("rotate-180");
}







