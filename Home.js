$(window).scroll(function() {
    $('nav').toggleClass('navscrolled', $(this).scrollTop() > 300);
    $('nav .menubarpages').toggleClass('scrolled', $(this).scrollTop() > 300);
    $('nav .menubarcontact').toggleClass('scrolled', $(this).scrollTop() > 300);
});


$('.gotoabout').on('click', function() {
    $('html, body').animate({ scrollTop: $(this.hash).offset().top - 50 }, 1000);
    return false;
});