$(function () {
    $(".hamburger").click(function () {
        $(".hamburger").toggleClass("open");
        $(".header__nav-sp").fadeToggle();
    });
});

//スクロール
ScrollReveal().reveal(".about-me_title", {
    duration: 1600,
    origin: "bottom",
    distance: "50px",
    scale: 0.5,
    reset: true,
});
ScrollReveal().reveal(".cloud-left", {
    duration: 1600,
    delay: 400,
    origin: "left",
    distance: "300px",
    reset: true,
});

ScrollReveal().reveal(".cloud-right", {
    duration: 1600,
    delay: 400,
    origin: "right",
    distance: "300px",
    reset: true,
});

ScrollReveal().reveal(".introduction", {
    duration: 1600,
    delay: 900,
    origin: "bottom",
    distance: "300px",
    reset: false,
});

ScrollReveal().reveal(".speechBubble", {
    duration: 1600,
    delay: 200,
    origin: "right",
    distance: "300px",
    reset: false,
});

ScrollReveal().reveal(".bear", {
    duration: 1600,
    delay: 500,
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
    delay: 500,
    origin: "right",
    distance: "300px",
    reset: false,
    mobile: true,
    afterReveal: function (el) {
        el.classList.add("walking2");
    },
});

//走る車

$(function () {
    var scrollStart = $(".history").offset().top; //ページ上部からの距離を取得
    var distance = 0;

    $(document).scroll(function () {
        distance = $(this).scrollTop(); //スクロールした距離を取得

        if (scrollStart <= distance) {
            //スクロール距離が『.history』の位置を超えたら
            $(".car-sp").addClass("fixed"); //class『fixed』を追加
        } else if (scrollStart >= distance) {
            //スクロールが『.history』の範囲外
            $(".car-sp").removeClass("fixed"); //class『fixed』を削除
        }
    });
});
