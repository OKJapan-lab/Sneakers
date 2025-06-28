//375px 未満は JS で viewport を固定する
// =============================
(function () {
  const viewport = document.querySelector('meta[name="viewport"]');

  function switchViewport() {
    const value =
      window.outerWidth > 375
        ? "width=device-width,initial-scale=1"
        : "width=375";
    if (viewport.getAttribute("content") !== value) {
      viewport.setAttribute("content", value);
    }
  }
  addEventListener("resize", switchViewport, false);
  switchViewport();
})();

// ハンバーガーボタンとドロワー
jQuery("#js-drawer-icon").on("click", function () {
  jQuery(this).toggleClass("is-checked");
  jQuery("#js-drawer-content").slideToggle(300);
  if (jQuery("#js-drawer-icon").hasClass("is-checked")) {
    // クラスが付いている場合の処理
    // 背景を固定してスクロールさせない
    document.body.style.overflow = "hidden";
  } else {
    // クラスが付いていない場合の処理
    // 背景の固定を解除
    document.body.style.overflow = "auto";
  }
});

jQuery("#js-drawer-content").on("click", function () {
  jQuery("#js-drawer-content").slideUp(300);
  jQuery("#js-drawer-icon").removeClass("is-checked");
  document.body.style.overflow = "auto";
});

jQuery('a[href^="#"]').on("click", function (e) {
  const speed = 300;
  const id = jQuery(this).attr("href");
  // idが#ならhtmlをターゲットにする。
  const target = jQuery(id == "#" ? "html" : id);
  // 要素の位置を取得
  const position = jQuery(target).offset().top;
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    speed,
    "swing" //swing or liner
  );
});

jQuery(window).on("scroll", function () {
  // 100ピクセルを超えてスクロールされた
  if (100 < jQuery(window).scrollTop()) {
    jQuery("#js-pagetop").addClass("is-show");
  } else {
    jQuery("#js-pagetop").removeClass("is-show");
  }
});

jQuery(document).ready(function () {
  jQuery("#js-slider").slick({
    centerMode: true, // 中央表示
    initialSlide: 2, //1枚目はゼロ
    speed: 2000, // アニメーションの速度（ミリ秒）
    autoplay: true, // 自動再生ON
    autoplaySpeed: 1000000, // 待機時間なし
    cssEase: "linear", // 一定速度
    infinite: true, // 無限ループ
    slidesToShow: 1, // 表示枚数
    slidesToScroll: 1, // スクロール単位
    arrows: false, // 矢印非表示
    dots: false, // ドット非表示
    pauseOnHover: false, // ホバーで止めない
    swipe: false, // スワイプ無効
    variableWidth: true, // スライド幅を自動
  });
});

// img等を下から出現させる
// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime() {
  // ふわっ
  jQuery(".js-fadeUpTrigger").each(function () {
    //fadeUpTriggerというクラス名が
    var elemPos = jQuery(this).offset().top + 0; //要素より、0px上の
    var scroll = jQuery(window).scrollTop();
    var windowHeight = jQuery(window).height();
    if (scroll >= elemPos - windowHeight) {
      jQuery(this).addClass("fadeUp"); // 画面内に入ったらfadeUpというクラス名を追記
    } else {
      jQuery(this).removeClass("fadeUp"); // 画面外に出たらfadeUpというクラス名を外す
    }
  });
}

jQuery(window).scroll(function () {
  fadeAnime(); /* アニメーション用の関数を呼ぶ*/
});