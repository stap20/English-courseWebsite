$(document).ready(function () {
  $("#home-carousel").carousel({ interval: 2000 });
  $("#carouselButton").click(function () {
    if ($("#carouselButton").children("span").hasClass("fa-pause")) {
      $("#home-carousel").carousel("pause");
      $("#carouselButton").children("span").removeClass("fa-pause");
      $("#carouselButton").children("span").addClass("fa-play");
    } else if ($("#carouselButton").children("span").hasClass("fa-play")) {
      $("#home-carousel").carousel("cycle");
      $("#carouselButton").children("span").removeClass("fa-play");
      $("#carouselButton").children("span").addClass("fa-pause");
    }
  });

  $("#loginButton").click(function () {
    $("#loginModal").modal("toggle");
  });
  $("#reserveTableButton").click(function () {
    $("#reserveTable").modal("toggle");
  });
});
