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
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
let currentButton = document.querySelector("#button1");

button1.addEventListener('click',() => {
  button1.style.background = "#00bfe7";
  currentButton.style.background = "rgb(226, 226, 226)";
  currentButton = button1;
})

button2.addEventListener('click',() => {
  button2.style.background = "#00bfe7";
  currentButton.style.background = "rgb(226, 226, 226)";
  currentButton = button2;
})

button3.addEventListener('click',() => {
  button3.style.background = "#00bfe7";
  currentButton.style.background = "rgb(226, 226, 226)";
  currentButton = button3
})

// Classes Buttons
const class1 = document.querySelector("#class1");
const class2 = document.querySelector("#class2");
const class3 = document.querySelector("#class3");
const class4 = document.querySelector("#class4");
const class5 = document.querySelector("#class5");
let currentClass = document.querySelector("#class1");

const class101 = document.querySelector("#class_wrapper101");
const class114 = document.querySelector("#class_wrapper114");
const class214 = document.querySelector("#class_wrapper214");
const class216 = document.querySelector("#class_wrapper216");
const class220 = document.querySelector("#class_wrapper220");
let currentClassProject = document.querySelector("#class_wrapper101");

// class1.addEventListener('click',() => {
//   class1.style.background = "rgb(80, 80, 80)";
//   class1.style.color = "whitesmoke";
//   currentClass.style.background = "rgb(226, 226, 226)";
//   currentClass.style.color = "#000";
//   currentClass = class1;
//   class101.style.visibility = "visible";
//   class101.style.position = "relative";
//   currentClassProject.style.visibility = "hidden";
//   currentClassProject.style.position = "fixed";
//   currentClassProject = class101;
// })

// class2.addEventListener('click',() => {
//   class2.style.background = "rgb(80, 80, 80)";
//   class2.style.color = "whitesmoke";
//   currentClass.style.background = "rgb(226, 226, 226)";
//   currentClass.style.color = "#000";
//   currentClass = class2;
//   class114.style.visibility = "visible";
//   class114.style.position = "relative";
//   currentClassProject.style.visibility = "hidden";
//   currentClassProject.style.position = "fixed";
//   currentClassProject = class114;
// })

// class3.addEventListener('click',() => {
//   class3.style.background = "rgb(80, 80, 80)";
//   class3.style.color = "whitesmoke";
//   currentClass.style.background = "rgb(226, 226, 226)";
//   currentClass.style.color = "#000";
//   currentClass = class3
//   class214.style.visibility = "visible";
//   class214.style.position = "relative";
//   currentClassProject.style.visibility = "hidden";
//   currentClassProject.style.position = "fixed";
//   currentClassProject = class214;
// })

// class4.addEventListener('click',() => {
//   class4.style.background = "rgb(80, 80, 80)";
//   class4.style.color = "whitesmoke";
//   currentClass.style.background = "rgb(226, 226, 226)";
//   currentClass.style.color = "#000";
//   currentClass = class4;
//   class216.style.visibility = "visible";
//   class216.style.position = "relative";
//   currentClassProject.style.visibility = "hidden";
//   currentClassProject.style.position = "fixed";
//   currentClassProject = class216;
// })

// class5.addEventListener('click',() => {
//   class5.style.background = "rgb(80, 80, 80)";
//   class5.style.color = "whitesmoke";
//   currentClass.style.background = "rgb(226, 226, 226)";
//   currentClass.style.color = "#000";
//   currentClass = class5;
//   class220.style.visibility = "visible";
//   class220.style.position = "relative";
//   currentClassProject.style.visibility = "hidden";
//   currentClassProject.style.position = "fixed";
//   currentClassProject = class220;
// })
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});