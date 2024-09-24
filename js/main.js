var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  // var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "block";  
  // dots[slideIndex-1].className += " active";
}

window.onload= function () {
  setInterval(function(){ 
     plusSlides(1);
  }, 3000);
 }

// Project Sort By Buttons
// const button1 = document.querySelector("#button1");
// const button2 = document.querySelector("#button2");
// const button3 = document.querySelector("#button3");
// let currentButton = document.querySelector("#button1");

// button1.addEventListener('click',() => {
//   button1.style.background = "#00bfe7";
//   currentButton.style.background = "rgb(226, 226, 226)";
//   currentButton = button1;
// })

// button2.addEventListener('click',() => {
//   button2.style.background = "#00bfe7";
//   currentButton.style.background = "rgb(226, 226, 226)";
//   currentButton = button2;
// })

// button3.addEventListener('click',() => {
//   button3.style.background = "#00bfe7";
//   currentButton.style.background = "rgb(226, 226, 226)";
//   currentButton = button3
// })

// // Classes Buttons
// const class1 = document.querySelector("#class1");
// const class2 = document.querySelector("#class2");
// const class3 = document.querySelector("#class3");
// const class4 = document.querySelector("#class4");
// const class5 = document.querySelector("#class5");
// let currentClass = document.querySelector("#class1");

// const class101 = document.querySelector("#class_wrapper101");
// const class114 = document.querySelector("#class_wrapper114");
// const class214 = document.querySelector("#class_wrapper214");
// const class216 = document.querySelector("#class_wrapper216");
// const class220 = document.querySelector("#class_wrapper220");
// let currentClassProject = document.querySelector("#class_wrapper101");

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

// DAY LOGGER
let slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  let i;
  let slides2 = document.getElementsByClassName("mySlides2");
  if (n > slides2.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  slides2[slideIndex2-1].style.display = "block";
}

// ASSIGN ME
let slideIndex3 = 1;
showSlides3(slideIndex3);

// Next/previous controls
function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

// Thumbnail image controls
function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
  let i;
  let slides3 = document.getElementsByClassName("mySlides3");
  if (n > slides3.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = slides3.length}
  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";
  }
  slides3[slideIndex3-1].style.display = "block";
}

// DDOS
let slideIndex4 = 1;
showSlides4(slideIndex4);

// Next/previous controls
function plusSlides4(n) {
  showSlides4(slideIndex4 += n);
}

// Thumbnail image controls
function currentSlide4(n) {
  showSlides4(slideIndex4 = n);
}

function showSlides4(n) {
  let i;
  let slides4 = document.getElementsByClassName("mySlides4");
  if (n > slides4.length) {slideIndex4 = 1}
  if (n < 1) {slideIndex4 = slides4.length}
  for (i = 0; i < slides4.length; i++) {
    slides4[i].style.display = "none";
  }
  slides4[slideIndex4-1].style.display = "block";
}

// MAPBOOK
let slideIndex5 = 1;
showSlides5(slideIndex5);

// Next/previous controls
function plusSlides5(n) {
  showSlides5(slideIndex5 += n);
}

// Thumbnail image controls
function currentSlide5(n) {
  showSlides5(slideIndex5 = n);
}

function showSlides5(n) {
  let i;
  let slides5 = document.getElementsByClassName("mySlides5");
  if (n > slides5.length) {slideIndex5 = 1}
  if (n < 1) {slideIndex5 = slides5.length}
  for (i = 0; i < slides5.length; i++) {
    slides5[i].style.display = "none";
  }
  slides5[slideIndex5-1].style.display = "block";
}

// VITAL
let slideIndex6 = 1;
showSlides6(slideIndex6);

// Next/previous controls
function plusSlides6(n) {
  showSlides6(slideIndex6 += n);
}

// Thumbnail image controls
function currentSlide6(n) {
  showSlides6(slideIndex6 = n);
}

function showSlides6(n) {
  let i;
  let slides6 = document.getElementsByClassName("mySlides6");
  if (n > slides6.length) {slideIndex6 = 1}
  if (n < 1) {slideIndex6 = slides6.length}
  for (i = 0; i < slides6.length; i++) {
    slides6[i].style.display = "none";
  }
  slides6[slideIndex6-1].style.display = "block";
}

// DOSETY
let slideIndex7 = 1;
showSlides7(slideIndex7);

// Next/previous controls
function plusSlides7(n) {
  showSlides7(slideIndex7 += n);
}

// Thumbnail image controls
function currentSlide7(n) {
  showSlides7(slideIndex7 = n);
}

function showSlides7(n) {
  let i;
  let slides7 = document.getElementsByClassName("mySlides7");
  if (n > slides7.length) {slideIndex7 = 1}
  if (n < 1) {slideIndex7 = slides7.length}
  for (i = 0; i < slides7.length; i++) {
    slides7[i].style.display = "none";
  }
  slides7[slideIndex7-1].style.display = "block";
}