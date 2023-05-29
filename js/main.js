// init Isotope
var $list = $('.collection-list').isotope({
  itemSelector: '.collection-item',
  layoutMode: 'fitRows'
}
);


// filter items on button click
$(".filter-button-group button").on("click", function () {
  var filterValue = $(this).attr("data-filter");
  reset();
  $(this).addClass("active-filter-btn");
  $list.isotope({ filter: filterValue });
});

// Remove 'active-filter-btn' class from all buttons
var filterBtns = $(".filter-button-group").find("button");
function reset() {
  filterBtns.each(function () {
    $(this).removeClass("active-filter-btn");
  });
}
