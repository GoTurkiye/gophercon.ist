$(function () {
  $(".menu-toggle").on("click", function () {
    $(".mobile-menu").css({ display: "flex" });
  });
  $(".close-menu").on("click", function () {
    $(".mobile-menu").css({ display: "none" });
  });
  $(".mobile-menu ul li a").on("click", function () {
    $(".mobile-menu").css({ display: "none" });
  });
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoWidth: false,
    nav: true,
    items: 5,
    navText: [
      "<img class='chevron' src='assets/img/left.svg' alt='left' />",
      "<img class='chevron' src='assets/img/right.svg' alt='right' />",
    ],
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 5,
      },
    },
  });
  $('.menu li a[href^="#"]').on("click", function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      500
    );
  });
});
