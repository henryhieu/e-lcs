var menu = $('#menu_list'), // スライドインするメニューを指定
menuBtn = $('#menu'), // メニューボタンを指定
body = $(document.body),
menuWidth = menu.outerWidth();
 
// メニューボタンをクリックした時の動き
menuBtn.on('click', function(){
  // body に open クラスを付与する
  body.toggleClass('open');
  if(body.hasClass('open')){
    // open クラスが body についていたらメニューをスライドインする
    body.animate({'right' : menuWidth }, 300);
    menu.animate({'right' : 0 }, 300);
    $('#menu').html('<img src="/resource/img/menu_close.png" alt="メニュー" class="menu pc"><img src="/resource/img/sp/menu_close.png" alt="メニュー" class="menu sp">');
  } else {
    // open クラスが body についていなかったらスライドアウトする
    menu.animate({'right' : -menuWidth }, 300);
    body.animate({'right' : 0 }, 300);
    $('#menu').html('<img src="/resource/img/menu.png" alt="メニュー" class="menu pc"><img src="/resource/img/sp/menu.png" alt="メニュー" class="menu sp">');
  }
});
