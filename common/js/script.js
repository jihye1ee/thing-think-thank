window.onload = function() {
  const $cursor = document.querySelector(".cursor");
  const $gnbItems = document.querySelectorAll(".gnb li a");
  const $circles = document.querySelectorAll(".circle-wrap .circle");
  const $backgrounds = document.querySelectorAll(".background-wrap .background");
  const $partnerAdmin = document.querySelector(".right-wrap > a");

  const animateText = (selector) => {
    gsap.to(selector, {
      top: 0,
      stagger: 0.1,
    });
  };

  const animateImage = (selector) => {
    gsap.to(selector, {
      top: 0,
      opacity: 1,
      stagger: 0.4,
    });
  };

  function cursorMove(e) {
    $cursor.style.top = e.clientY + "px";
    $cursor.style.left = e.clientX + "px";
  }

  function scrollAnimation() {
    const $aboutImglist = $(".about-sec3 .img-list");
    const $aboutImglistLi = $aboutImglist.find("li");
    const $aboutImgListLength = $aboutImglistLi.length;

    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();
    const scrollBottom = scrollTop + windowHeight;
    const aboutImgTop = $aboutImglist[0] ? $aboutImglist.offset().top : 0;
    const aboutImgBottom = aboutImgTop + $aboutImglist.height() + $(window).height();
    const activeDistance = (aboutImgBottom - aboutImgTop) / $aboutImgListLength;

    if (scrollBottom > aboutImgTop && scrollBottom < aboutImgBottom) {
      const nth = Math.floor((scrollBottom - aboutImgTop) / activeDistance);
      $aboutImglistLi.eq(nth).addClass("active").siblings().removeClass("active");
    }
  };

  window.addEventListener("mousemove", cursorMove);
  window.addEventListener("scroll", scrollAnimation);

  $gnbItems.forEach((item) => {
    item.addEventListener("mouseover", function() {
      $cursor.classList.add("hover");
    });
    item.addEventListener("mouseout", function() {
      $cursor.classList.remove("hover");
    });
  });

  $circles.forEach((circle, index) => {
    circle.addEventListener("mouseover", function() {
      $cursor.classList.add("hover");
      $backgrounds[index].classList.add("active");
    });
    circle.addEventListener("mouseout", function() {
      $cursor.classList.remove("hover");
      $backgrounds[index].classList.remove("active");
    });
  });

  $partnerAdmin.addEventListener("mouseover", function() {
    $cursor.classList.add("hover");
  });
  $partnerAdmin.addEventListener("mouseout", function() {
    $cursor.classList.remove("hover");
  });

  gsap.to(".about .about-sec1 .about-title > span", {
    top: 0,
    stagger: {
      amount: 0.3
    },
  });

  gsap.to(".about .about-sec1", {
    scrollTrigger: {
      trigger: ".about .about-sec1",
      targets: ".about .about-sec1",
      start: "top 0",
      scrub: true // 스크롤 속도에 따라 트윈을 맞춤
    },
    opacity: 0
  });

  gsap.to(".about .about-sec3 .text", {
    scrollTrigger: {
      trigger: ".about .about-sec3",
      targets: ".about .about-sec3 .text",
      start: "top 0"
    },
    top: 0,
    opacity: 1,
    stagger: {
      amount: 0.2
    }
  });

  gsap.to(".about .about-sec3 .scroll-wrap", {
    scrollTrigger: {
      trigger: ".about .about-sec3 .scroll-wrap",
      targets: ".about .about-sec3 .scroll-wrap",
      start: "top 30%",
      end: "bottom 100%",
      scrub: true
    },
    opacity: 1
  });

  ScrollTrigger.create({
    trigger: ".about-sec4",
    endTrigger: ".about-sec6",
    start: "top 30%",
    end: "bottom 70%",
    toggleClass: {
      targets: ".scroll-content",
      className: "background-color-ececec"
    }
  });

  ScrollTrigger.create({
    trigger: ".about-sec4",
    start: "top 30%",
    onUpdate: () => {
      const titleTimeline = gsap.timeline();
      const linkTimeline = gsap.timeline({delay: 0.4});
      const textTimeline = gsap.timeline({delay: 0.7});
      const aboutSubTimeline = gsap.timeline({delay: 1.4});

      titleTimeline.add(() => animateText(".about-sec4 .about-sub-title-wrap h2 p span"));
      linkTimeline.add(() => animateText(".about-sec4 .about-sub-title-wrap a span"));
      textTimeline.add(() => animateText(".about-sec4 .about-sub-text-wrap p span"));
      aboutSubTimeline.add(() => animateImage(".about-sec4 .about-sub-wrap .about-sub"));
    },
  });

  ScrollTrigger.create({
    trigger: ".about-sec5",
    start: "top 60%",
    onUpdate: () => {
      const titleTimeline = gsap.timeline();
      const linkTimeline = gsap.timeline({delay: 0.4});
      const textTimeline = gsap.timeline({delay: 0.7});

      titleTimeline.add(() => animateText(".about-sec5 .about-sub-title-wrap h2 p span"));
      linkTimeline.add(() => animateText(".about-sec5 .about-sub-title-wrap a span"));
      textTimeline.add(() => animateText(".about-sec5 .about-sub-text-wrap p span"));

      function showLastAboutSub() {
        gsap.to(".about-sec5 .about-sub-wrap .about-sub:last-of-type", {
          top: 0,
          opacity: 1
        });
      }

      function showLine() {
        gsap.to(".about-sec5 .about-sub-wrap .line", {
          width: 440,
          onComplete: showLastAboutSub
        });
      }

      gsap.to(".about-sec5 .about-sub-wrap .about-sub:first-of-type", {
        top: 0,
        opacity: 1,
        delay: 1.4,
        onComplete: showLine
      });
    },
  });

  ScrollTrigger.create({
    trigger: ".about-sec6",
    start: "top 30%",
    onUpdate: () => {
      const titleTimeline = gsap.timeline();
      const linkTimeline = gsap.timeline({delay: 0.4});
      const textTimeline = gsap.timeline({delay: 0.7});
      const aboutSubTimeline = gsap.timeline({delay: 1.4});

      titleTimeline.add(() => animateText(".about-sec6 .about-sub-title-wrap h2 p span"));
      linkTimeline.add(() => animateText(".about-sec6 .about-sub-title-wrap a span"));
      textTimeline.add(() => animateText(".about-sec6 .about-sub-text-wrap p span"));
      aboutSubTimeline.add(() => animateImage(".about-sec6 .about-sub-wrap .about-sub"));
    },
  });

  ScrollTrigger.create({
    trigger: ".about-sec7",
    start: "top 50%",
    onUpdate: () => {
      gsap.timeline().to(".about-sec7 h2 p", {top: 0})
      .to(".about-sec7 .attitude-wrap .attitude-item", {top: 0}, "+=0.25")
      .to(".about-sec7 .text em", {top: 0, stagger: 0.1}, "+=0.2");
    }
  });

  ScrollTrigger.create({
    trigger: ".about-sec8",
    endTrigger: ".about-sec10",
    start: "top 10%",
    toggleClass: {
      targets: ".scroll-content",
      className: "background-color-white"
    }
  });

  gsap.to(".about-sec8 > img:first-of-type", {
    scrollTrigger: {
      trigger: ".about-sec8",
      start: "top 60%"
    },
    opacity: 1
  });

  ScrollTrigger.create({
    trigger: ".about-sec8 h2",
    start: "top 50%",
    scrub: true,
    onUpdate: () => {
      gsap.timeline().to(".about-sec8 h2 > p em", {top: 0, stagger: 0.3})
      .to(".about-sec8 > img:nth-of-type(2)", {opacity: 1});
    }
  });

  ScrollTrigger.create({
    trigger: ".about-sec8 .text",
    start: "top 70%",
    onUpdate: () => {
      gsap.to(".about-sec8 .text p em", {top: 0, stagger: 0.1});
    }
  });

  ScrollTrigger.create({
    trigger: ".about-sec9",
    start: "top 50%",
    onUpdate: () => {
      $(".about-sec9").addClass("active");
      gsap.to(".about-sec9 .project-list .list-item .img-wrap img", {
        opacity: 1,
        delay: 0.6
      });
      gsap.to(".about-sec9 .project-list .list-item .video-wrap .video", {
        opacity: 1,
        delay: 0.6
      });
    }
  });

  ScrollTrigger.create({
    trigger: ".about-sec10",
    start: "top 80%",
    onUpdate: () => {
      $(".about-sec10").addClass("active");
      gsap.to(".about-sec10 h2 > div p", {
        top: 0,
        duration: 0.5,
        delay: 0.2
      });
      gsap.to(".about-sec10 h2 .arrow-wrap", {
        top: 0,
        duration: 0.5,
        delay: 0.2
      });
    }
  });
}
