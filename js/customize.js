 /*------------------------------------*/
    /////gotoCenter on focus跳到 content/////
    /*------------------------------------*/
$('a.goCenter').keydown(function(e) {
    if (e.which == 13) {
        $('#aC').focus();
        $('html, body')
        .stop(true, true)
        .animate({ scrollTop: $('.main').find('.accesskey').offset().top }, 800, 'easeOutExpo');
    }
});