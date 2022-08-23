var $grid = $('.grid').isotope({
});

$('.gallary-item-area').on('click', 'li', function() {
    $(this).addClass( 'active' ).siblings().removeClass('active');
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});

$('.grid').isotope({
    itemSelector: '.gallary-item',
    percentPosition: true,
    masonry: {
        columnwidth: '.gitem'
    }
});