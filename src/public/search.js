let d1 = document.querySelector(".sort_first");
let b1 = document.querySelector(".book_relative");
let d2 = document.querySelector(".sort_second");
let b2 = document.querySelector(".book_date");
let d3 = document.querySelector(".sort_third");
let b3 = document.querySelector(".book_sell");

d1.addEventListener("click", ()=>{
    d1.children[0].src = "./images/check.svg"
    b1.style.display = "block";
    d2.children[0].src = "./images/uncheck.svg"
    b2.style.display = "none";
    d3.children[0].src = "./images/uncheck.svg"
    b3.style.display = "none";
});

d2.addEventListener("click", ()=>{
    d1.children[0].src = "./images/uncheck.svg"
    b1.style.display = "none";
    d2.children[0].src = "./images/check.svg"
    b2.style.display = "block";
    d3.children[0].src = "./images/uncheck.svg"
    b3.style.display = "none";
});

d3.addEventListener("click", ()=>{
    d1.children[0].src = "./images/uncheck.svg"
    b1.style.display = "none";
    d2.children[0].src = "./images/uncheck.svg"
    b2.style.display = "none";
    d3.children[0].src = "./images/check.svg"
    b3.style.display = "block";
});