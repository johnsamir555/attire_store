// init Isotope
var $grid = $(".collection-list").isotope({
  // options
});
// filter items on button click
$(".filter-button-group").on("click", "button", function () {
  var filterValue = $(this).attr("data-filter");
  reset();
  $(this).addClass("active-filter-btn");
  $grid.isotope({ filter: filterValue });
});
// Remove 'active-filter-btn' class from all buttons
var filterBtns = $(".filter-button-group").find("button");
function reset() {
  filterBtns.each(function () {
    $(this).removeClass("active-filter-btn");
  });
}
