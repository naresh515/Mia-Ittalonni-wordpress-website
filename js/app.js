$(document).ready(function () {
  var currentImgIndex = 0;
  var imgs = $(".img-overlay-container a img");

  $(".img-overlay-container").click(function () {
    var imgSrc = $(this).find("img").attr("src");
    currentImgIndex = imgs.index(this);
    $(".img-overlay-area").css("display", "flex");
    $(".zoom-img").append("<img  src='" + imgSrc + "' alt=''>");
    $("body").addClass("overlay-open");
  });

  $(".close-btn").click(function () {
    $(".img-overlay-area img").remove();
    $(".img-overlay-area").css("display", "none");
    $("body").removeClass("overlay-open");
  });

  $(".img-overlay-area").click(function () {
    $(".img-overlay-area img").remove();
    $(".img-overlay-area").css("display", "none");
    $("body").removeClass("overlay-open");
  });

  $(".toggle").click(function () {
    $(".toggle").toggleClass("is-active");
    $(".mobile-menu-area").toggleClass("active");
  });

  var scrollTop = $(".scroll-top");
  $(window).scroll(function () {
    var topPos = $(this).scrollTop();
    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");
    } else {
      $(scrollTop).css("opacity", "0");
    }
  });

  $(scrollTop).click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
    return false;
  });

  var items = $(".menu-item-items");
  var numItems = items.length;
  var perPage = 7;

  items.slice(perPage).hide();

  $(".pagination").pagination({
    items: numItems,
    itemsOnPage: perPage,
    prevText: "&#8249 &nbsp; PREVIOUS PAGE",
    nextText: "NEXT PAGE &nbsp; &#8250",
    onPageClick: function (pageNumber) {
      var showFrom = perPage * (pageNumber - 1);
      var showTo = showFrom + perPage;
      items.hide().slice(showFrom, showTo).show();
    },
  });

  $(".img-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrow: true,
  });
});

const video = document.getElementById("myVideo");

function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
}
video.addEventListener("click", togglePlayPause);
