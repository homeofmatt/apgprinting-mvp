$(document).ready(function() {
  $("#testimonial-carousel").owlCarousel({
    singleItem : true,
    stopOnHover: true,
    navigation: false,
    autoPlay: true,
    pagination: true,
    paginationNumbers: false
  });

  $("#date-needed").datepicker({
    minDate: 0,
    dateFormat: "DD, MM d, yy"
  });
});