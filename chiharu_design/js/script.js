$(function () {
    $(".hamburger").click(function () {
        $(".hamburger").toggleClass("open");
        $(".header__nav-sp").fadeToggle();
    });

    //galleryスライダー
    $(".works__wrap").slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        centerMode: true,
        centerPadding: "10%",
        appendArrows: $(".arrow_box"),
        prevArrow: '<div class="slide-arrow prev-arrow"></div>',
        nextArrow: '<div class="slide-arrow next-arrow"></div>',
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "13%",
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "25%",
                },
            },
        ],
    });
});

//
// scroll 初回のみ表示
//
function initScrollReveal(isFirstVisit) {
    if (isFirstVisit) {
        ScrollReveal().reveal(".catch", {
            duration: 1600,
            origin: "bottom",
            distance: "300px",
            scale: 0.5,
            reset: false,
            delay: 300,
            beforeReveal: function (el) {
                el.style.visibility = "visible";
            },
            afterReveal: function (el) {
                el.style.transform = "translate(-50%, -50%)"; // 位置も戻す
            },
        });
        ScrollReveal().reveal(".rabbit", {
            duration: 1600,
            delay: 700,
            origin: "bottom",
            distance: "300px",
            reset: false,
            beforeReveal: function (el) {
                el.style.visibility = "visible";
            },
            afterReveal: function (el) {
                el.classList.add("swing");
            },
        });
        ScrollReveal().reveal(".ballon", {
            duration: 1600,
            delay: 1200,
            origin: "bottom",
            distance: "300px",
            reset: false,
            beforeReveal: function (el) {
                el.style.visibility = "visible";
            },
            afterReveal: function (el) {
                el.classList.add("fuwa4-wrapper");
            },
        });
    }
    //
    // scroll
    //

    ScrollReveal().reveal(".lead", {
        duration: 1600,
        viewFactor: 0.3,
        origin: "bottom",
        distance: "300px",
        reset: false,
        beforeReveal: function (el) {
            el.style.visibility = "visible";
        },
    });
    ScrollReveal().reveal(".me-photo", {
        duration: 1600,
        origin: "left",
        distance: "300px",
        reset: false,
    });
    ScrollReveal().reveal(".me-text_title", {
        duration: 1600,
        origin: "right",
        distance: "300px",
        reset: false,
    });
    ScrollReveal().reveal(".me-text", {
        duration: 1600,
        origin: "right",
        distance: "300px",
        reset: false,
    });

    ScrollReveal().reveal(".works__top", {
        duration: 1600,
        delay: 200,
        origin: "bottom",
        distance: "300px",
        reset: false,
    });
    ScrollReveal().reveal(".works__title", {
        duration: 1600,
        delay: 200,
        origin: "bottom",
        distance: "300px",
        reset: false,
    });

    ScrollReveal().reveal(".skills__title", {
        duration: 1600,
        delay: 200,
        origin: "bottom",
        distance: "100px",
        reset: false,
    });
    ScrollReveal().reveal(".skills__inner", {
        duration: 1600,
        viewFactor: 0.3,
        origin: "bottom",
        distance: "100px",
        reset: false,
    });
    ScrollReveal().reveal(".contact", {
        duration: 1600,
        viewFactor: 0.3,
        origin: "bottom",
        distance: "50px",
        reset: true,
    });

    ScrollReveal().reveal(".fade-in01", {
        duration: 1600,
        delay: 200,
        origin: "bottom",
        distance: "300px",
        reset: false,
        desktop: true,
        mobile: false,
    });
    ScrollReveal().reveal(".fade-in02", {
        duration: 1600,
        delay: 300,
        origin: "bottom",
        distance: "300px",
        reset: false,
        desktop: true,
        mobile: false,
    });
    ScrollReveal().reveal(".fade-in03", {
        duration: 1600,
        delay: 400,
        origin: "bottom",
        distance: "300px",
        reset: false,
        desktop: true,
        mobile: false,
    });
    ScrollReveal().reveal(".fade-in-mobile", {
        duration: 1600,
        origin: "bottom",
        distance: "50px",
        reset: false,
        desktop: false,
        mobile: true,
    });
    ScrollReveal().reveal(".works__title__wrap", {
        duration: 1600,
        origin: "top",
        distance: "50px",
        scale: 0.5,
        reset: true,
    });
    ScrollReveal().reveal(".bear", {
        duration: 1600,
        delay: 300,
        origin: "right",
        distance: "300px",
        reset: false,
        mobile: true,
        afterReveal: function (el) {
            el.classList.add("walking");
        },
    });
    ScrollReveal().reveal(".panda", {
        duration: 1600,
        delay: 300,
        origin: "right",
        distance: "300px",
        reset: false,
        mobile: true,
        afterReveal: function (el) {
            el.classList.add("walking2");
        },
    });
}
//loadingアニメーション

// ローディング画面の取得;
const loading = document.querySelector(".loading");
const heart = document.querySelector(".heart");
const rabbit = document.querySelector(".rabbit");
const ballon = document.querySelector(".ballon");
const body = document.body;
const hasVisited = sessionStorage.getItem("hasVisited");

heart.style.display = "none";

if (!hasVisited) {
    window.addEventListener("load", () => {
        setTimeout(() => {
            heart.style.display = "";
        }, 2000);

        setTimeout(() => {
            loading.classList.add("loaded");
        }, 3000);

        setTimeout(() => {
            heart.classList.add("loaded");
        }, 4000);

        setTimeout(() => {
            body.classList.add("pageOn");

            // 初回だけ .catch/.rabbit/.ballon 含めて実行
            initScrollReveal(true);
        }, 3000);
    });

    sessionStorage.setItem("hasVisited", "true");
} else {
    // 2回目以降
    loading.classList.add("loaded");
    heart.classList.add("loaded");
    heart.style.display = "none";
    body.classList.add("pageOn");

    initScrollReveal(true);

    document
        .querySelectorAll(".catch, .rabbit, .ballon, .lead")
        .forEach((el) => {
            el.style.opacity = "1";
            el.style.visibility = "visible";
        });
    document.querySelectorAll(".catch").forEach((el) => {
        el.style.transform = "translate(-50%, -50%)";
    });
}
