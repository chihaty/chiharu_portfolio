$(function () {
    $(".hamburger").click(function () {
        $(".hamburger").toggleClass("open");
        $(".header__nav-sp").fadeToggle();
    });
});

//フィルター
// データ属「data-filter」を持つ要素（ボタン）を全て取得
const filterButtons = document.querySelectorAll("[data-filter]");

// データ属「data-category」を持つ要素（コンテンツ）をすべて取得
const categoryContents = document.querySelectorAll("[data-category]");

// ボタンをクリックした時のイベントを関数で定義
filterButtons.forEach((filterButton) => {
    // ① ボタンのアクティブ状態を操作する関数
    filterButton.addEventListener("click", buttonSwitch);
    // ② コンテンツ部分の絞り込みの関数
    filterButton.addEventListener("click", categoryFilter);
});

// ボタンをクリックした時のイベント
function buttonSwitch() {
    filterButtons.forEach((filterButton) => {
        filterButton.classList.remove("is-active");
        this.classList.add("is-active");
    });
}

// クリックしたボタンのデータ属性の値を取得
function categoryFilter() {
    const buttonCategory = this.dataset.filter;
    const targetContents = document.querySelectorAll(
        '[data-category="' + buttonCategory + '"]'
    );

    // コンテンツ部分のアニメーション
    categoryContents.forEach((categoryContent) => {
        categoryContent.animate(
            [
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                },
            ],
            {
                duration: 600,
                fill: "forwards",
            }
        );

        // クリックしたデータ属性が「all」の場合、classを付与して全て表示
        if (buttonCategory == "all") {
            categoryContent.classList.add("is-show");
            // all以外の場合、クリックしたデータ属性と同じコンテンツを表示する
        } else {
            categoryContent.classList.remove("is-show");
            targetContents.forEach((targetContent) => {
                targetContent.classList.add("is-show");
            });
        }
    });
}

//スクロール
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
// ScrollReveal().reveal(".bear", {
//     duration: 1600,
//     delay: 300,
//     origin: "right",
//     distance: "300px",
//     reset: false,
//     mobile: true,
//     afterReveal: function (el) {
//         el.classList.add("walking");
//     },
// });
// ScrollReveal().reveal(".panda", {
//     duration: 1600,
//     delay: 300,
//     origin: "right",
//     distance: "300px",
//     reset: false,
//     mobile: true,
//     afterReveal: function (el) {
//         el.classList.add("walking2");
//     },
// });
// ScrollReveal().reveal(".btn", {
//     duration: 1600,
//     origin: "bottom",
//     distance: "50px",
//     reset: false,
//     mobile: true,
// });

function categoryFilter() {
    const buttonCategory = this.dataset.filter;
    const targetContents = document.querySelectorAll(
        '[data-category="' + buttonCategory + '"]'
    );

    categoryContents.forEach((categoryContent) => {
        categoryContent.animate([{ opacity: 0 }, { opacity: 1 }], {
            duration: 500,
            fill: "forwards",
        });

        if (buttonCategory === "all") {
            categoryContent.classList.add("is-show");
        } else {
            categoryContent.classList.remove("is-show");
            targetContents.forEach((targetContent) => {
                targetContent.classList.add("is-show");
            });
        }
    });

    // ここを追加：transformが残らないように強制上書き
    setTimeout(() => {
        document
            .querySelectorAll(".fade-in01, .fade-in02, .fade-in03")
            .forEach((el) => {
                el.style.transform = "none";
                el.style.opacity = "1";
            });
    }, 350); // 上の animate の duration より少し後がベスト
}
