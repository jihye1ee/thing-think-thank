window.onload = function() {
  const cursor = document.querySelector(".cursor");
  const gnbItems = document.querySelectorAll(".gnb li a");
  const circles = document.querySelectorAll(".circle-wrap .circle");
  const backgrounds = document.querySelectorAll(".background-wrap .background");
  const partnerAdmin = document.querySelector(".right-wrap > a");

  function cursorMove(e) {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
  }

  function scrollAnimation() {
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();
    const scrollBottom = scrollTop + windowHeight;

    const aboutImglist = $(".about-sec3 .img-list");
    const aboutImglistLi = aboutImglist.find("li");
    const aboutImgListLength = aboutImglistLi.length; // 30
    const aboutImgTop = aboutImglist[0] ? aboutImglist.offset().top : 0;
    const aboutImgBottom = aboutImgTop + aboutImglist.height() + $(window).height();
    const activeDistance = (aboutImgBottom - aboutImgTop) / aboutImgListLength;

    if (scrollBottom > aboutImgTop && scrollBottom < aboutImgBottom) {
      const nth = Math.floor((scrollBottom - aboutImgTop) / activeDistance);
      aboutImglistLi.eq(nth).addClass("active").siblings().removeClass("active");
    }
  };

  window.addEventListener("mousemove", cursorMove);
  window.addEventListener("scroll", scrollAnimation);

  gnbItems.forEach((item) => {
    item.addEventListener("mouseover", function() {
      cursor.classList.add("hover");
    });
    item.addEventListener("mouseout", function() {
      cursor.classList.remove("hover");
    });
  });

  circles.forEach((circle, index) => {
    circle.addEventListener("mouseover", function() {
      cursor.classList.add("hover");
      backgrounds[index].classList.add("active");
    });
    circle.addEventListener("mouseout", function() {
      cursor.classList.remove("hover");
      backgrounds[index].classList.remove("active");
    });
  });

  partnerAdmin.addEventListener("mouseover", function() {
    cursor.classList.add("hover");
  });
  partnerAdmin.addEventListener("mouseout", function() {
    cursor.classList.remove("hover");
  });

  let swiper = new Swiper(".mySwiper", {
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 5000,
    loop: true,
    loopAdditionalSlides: 1,
    slidesPerView: 1,
  });
}
