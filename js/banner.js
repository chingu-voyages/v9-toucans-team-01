$('#banner-carousel').on('slide.bs.carousel', function () {
    const motivacional = $('#banner-carousel .carousel-inner .carousel-item .motivacional')
    motivacional.hide();
 })
$('#banner-carousel').on('slid.bs.carousel', function () {
   const motivacional = $('#banner-carousel .carousel-inner .carousel-item.active .motivacional')
    motivacional.hide();
    motivacional.fadeIn(1000);
})