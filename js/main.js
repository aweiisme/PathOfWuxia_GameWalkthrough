$(document).ready(function () {


    //至頂 go top
    $('#gotop').click(function (e) {

        //停止一開始的連結動作
        e.preventDefault();

        //發現連結對象
        var target = $(e.currentTarget).attr("href");

        //確認連結對象位置
        var offset = $(target).offset();

        //執行scroll動畫往上滾動
        $('html, body').animate({ scrollTop: offset.top });

    })



    $('.character-figure').click(function (e) {

        e.preventDefault();

        var url = $(this).prop('href');
        var image = $('<img>');

        image.prop('src', url);

        $('.img-modal').html(image);
        $('.img-container').fadeIn();
    })
    $('.img-container').click(function (e) {
        $(this).fadeOut();
    });

});