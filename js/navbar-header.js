$(window).scroll(e => {
    const navbar = $('#navbar-header')
    if ($(window).scrollTop() > 300) {
        if (!navbar.hasClass('full-width-fixed'))
            navbar.addClass('full-width-fixed')
    }
    else {
        if (navbar.hasClass('full-width-fixed'))
            navbar.removeClass('full-width-fixed')
    }
})