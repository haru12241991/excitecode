jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  $(".header__btn").click(function () {
    //ボタンがクリックされたら
    $(this).toggleClass("active"); //ボタン自身に activeクラスを付与し
    $(".header__nav").toggleClass("panelactive"); //ナビゲーションにpanelactiveクラスを付与
    $(".header__background").toggleClass("circleactive"); //丸背景にcircleactiveクラスを付与
  });

  $("#g-nav a").click(function () {
    //ナビゲーションのリンクがクリックされたら
    $(".header__btn").removeClass("active"); //ボタンの activeクラスを除去し
    $(".header__nav").removeClass("panelactive"); //ナビゲーションのpanelactiveクラスを除去
    $(".header__background").removeClass("circleactive"); //丸背景のcircleactiveクラスを除去
  });

  /* Swiper */
  const swiper = new Swiper(".swiper", {
    loop: true /* 最後のスライドに戻ったらループする */,
    effect: 'fade', // フェード
    autoplay: { // 自動再生
      delay: 3000, // 1秒後に次のスライド（初期値：3000）
      disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    },

    // 前後の矢印
    /* navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }, */

    // ページネーション
    /* pagination: {
      el: ".swiper-pagination",
      clickable: true, // クリック有効化
    },
 */
    // スクロールバー
    /* scrollbar: {
      el: ".swiper-scrollbar",
    }, */
  });
});
