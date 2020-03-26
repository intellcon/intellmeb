var $page = $('html, body');
$('a[href*="#"]').click(function() {
  $page.animate({
    scrollTop: $($.attr(this, 'href')).offset().top - 60
  }, 400);
  return false;
});
