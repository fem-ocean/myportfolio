var hamburger = document.querySelector(".hamburger");
var mainMenu = document.querySelector(".menu-items");
var closeMenu = document.querySelector(".closeMenu");

hamburger.addEventListener("click", show);
closeMenu.addEventListener("click", cancel);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}

function cancel() {
  mainMenu.style.top = "-100%";
}

// vars
("use strict");
var testim = document.getElementById("testimonial"),
  testimDots = Array.prototype.slice.call(
    document.getElementById("testimonial-dots").children
  ),
  testimContent = Array.prototype.slice.call(
    document.getElementById("testimonial-content").children
  ),
  testimleftArrow = document.getElementById("left-arrow"),
  testimRightArrow = document.getElementById("right-arrow"),
  testimSpeed = 3000,
  currentSlide = 0,
  currentActive = 0,
  testimTimer;

window.onload = function () {
  // Testim Script
  function playSlide(slide) {
    for (var k = 0; k < testimDots.length; k++) {
      testimContent[k].classList.remove("active");
      testimContent[k].classList.remove("inactive");
      testimDots[k].classList.remove("active");
    }
    if (slide < 0) {
      slide = currentSlide = testimContent.length - 1;
    }
    if (slide > testimContent.length - 1) {
      slide = currentSlide = 0;
    }
    if (currentActive != currentSlide) {
      testimContent[currentActive].classList.add("inactive");
    }
    testimContent[slide].classList.add("active");
    testimDots[slide].classList.add("active");

    currentActive = currentSlide;

    clearTimeout(testimTimer);
    testimTimer = setTimeout(function () {
      playSlide((currentSlide += 1));
    }, testimSpeed);
  }
  
  // 
  testimleftArrow.addEventListener("click", function () {
    playSlide((currentSlide -= 1));
  });
  testimRightArrow.addEventListener("click", function () {
    playSlide((currentSlide += 1));
  });

  for (var l = 0; l < testimDots.length; l++) {
    testimDots[l].addEventListener("click", function () {
      playSlide((currentSlide = testimDots.indexOf(this)));
    });
  }
  playSlide(currentSlide);
};
