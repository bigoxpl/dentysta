$(function() {
  $(document).scroll(function() {
    var $nav = $("#navigation");
    $nav.toggleClass("container mt-4", $(this).scrollTop() < $nav.height());
  });
});
