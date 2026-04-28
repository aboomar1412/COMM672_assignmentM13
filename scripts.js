$(function () {
    //Add click event listener for header
    $('.accordion-header').click(function () {
        if ($(this).next('.accordion-content').is(':visible')) {
            //if content is visible, slide up
            $(this).next('.accordion-content').slideUp();
        } else {
            //slide up all other content
            $('.accordion-content').slideUp();
            //slide down clicked content
            $(this).next('.accordion-content').slideDown();
        }

    })
});

$(function () {
    $('.about-block').click(function () {
        $($(this).data('target')).show();
    });
    $('.close-btn').click(function () {
        $(this).closest('.modal').hide();
    });
    $(window).click(function () {
        if ($(event.target).is('.modal')) {
            $('.modal').hide();
        }
    });
});

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#backToTopBtn').fadeIn();
        } else {
            $('#backToTopBtn').fadeOut();
        }
    });
});