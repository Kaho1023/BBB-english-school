$(function () {
  /*=================================================
        ハンバーガーメニュー
　　===================================================*/
  // ハンバーガーメニューのクリックイベント
  $(".toggle-btn").on("click", function () {
    // #headerにopenクラスが存在する場合
    if ($("#header").hasClass("open")) {
      // openクラスを削除
      // openクラスを削除すると、openクラスのCSSがはずれるため、
      // メニューが非表示になる
      $("#header").removeClass("open");

      // #headerにopenクラスが存在しない場合
    } else {
      // openクラスを追加
      // openクラスを追加すると、openクラスのCSSが適応されるため、
      // メニューが表示される
      $("#header").addClass("open");
    }
  });

  // メニューが表示されている時に画面をクリックした場合
  $("#mask").on("click", function () {
    // openクラスを削除して、メニューを閉じる
    $("#header").removeClass("open");
  });
});

/*=================================================
        セクションの最初まで来たらアニメーション開始
　　===================================================*/
$(window).scroll(function () {
  var section = $("#reason");
  var sectionTop = section.offset().top;
  var scrollPosition = $(document).scrollTop(); // document全体のスクロール位置を取得

  if (scrollPosition > sectionTop) {
    // セクションの最初までスクロールされた場合、アニメーションを開始
    $(".interview-slide-left, .interview-slide-right").addClass("animation");
  }
});

$(window).scroll(function () {
  var section = $("#voice");
  var sectionTop = section.offset().top;
  var scrollPosition = $(document).scrollTop(); // document全体のスクロール位置を取得

  if (scrollPosition > sectionTop) {
    // セクションの最後までスクロールされた場合、アニメーションを開始
    $(".balloon-text1, .balloon-text2,.balloon-text3").addClass(
      "animation-voice"
    );
  }
});
