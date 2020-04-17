window.addEventListener("DOMContentLoaded", function() {
  const burgerMenu = document.querySelector(".burger-menu");
  const burgerMenuLine = document.querySelectorAll(".burger-menu__line");
  const menu = document.querySelector(".navbar__list");

  burgerMenu.addEventListener("click", function() {
    menu.classList.toggle("active");
    for (let i = 0; i < burgerMenuLine.length; i += 1) {
      burgerMenuLine[i].classList.toggle("active");
    }
  });
});

$(function() {
  // add smooth scrolling
  $(".navbar__link, .hero__arrow-wrapper").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      const hash = this.hash;
      const headerHeight = $(".header").outerHeight();
      const target = $(hash).offset().top - headerHeight;

      $("html, body").animate(
        {
          scrollTop: target,
        },
        400
      );
    }
  });
});
