$(document).ready(function () {
    // Sticky navbar on scroll
    $(window).scroll(function () {
      if ($(this).scrollTop() > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
  
      // Scroll-up button visibility
      if ($(this).scrollTop() > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
  
      // Fade-in animation on scroll
      $(".fadein").each(function () {
        const bottomOfElement = $(this).offset().top + $(this).outerHeight();
        const bottomOfWindow = $(window).scrollTop() + $(window).height();
  
        if (bottomOfWindow > bottomOfElement) {
          $(this).addClass("showme");
        } else {
          $(this).removeClass("showme");
        }
      });
    });
  
    // Scroll-up functionality
    $(".scroll-up-btn").click(function () {
      $("html, body").animate({ scrollTop: 0 }, "slow");
    });
  
    // Typing animation
    const typingOptions = {
      strings: ["Penetration Tester", "Red Teamer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    };
    new Typed(".typing", typingOptions);
    new Typed(".typing2", typingOptions);
  
    // Toggle navbar/menu
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
  
    // Project carousel setup
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: { items: 1, nav: false },
        600: { items: 2, nav: false },
        1000: { items: 3, nav: false },
      },
    });
  
    // Set the current year in the footer
    const currentYear = new Date().getFullYear();
    $("#year").text(currentYear);
  
    
  });