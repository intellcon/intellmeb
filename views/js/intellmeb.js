var $page = $('html, body');
$('a[href*="#"]').click(function() {
  $page.animate({
    scrollTop: $($.attr(this, 'href')).offset().top - 60
  }, 400);
  return false;
});

$('[data-target="#myModal"]').on("click", function() {
  $('input').val('');
});
//$('input').on('keydown', function(e){
  //alert(e.keyCode);
  //e.preventDefault();
//})
//$('#myModal').on('show.bs.modal', function (event) {
  //var button = $(event.relatedTarget) // Button that triggered the modal
  //var recipient = button.data('whatever') // Extract info from data-* attributes
  //// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  //// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  //var modal = $(this)
  //modal.find('.modal-title').text('New message to ' + recipient)
  //modal.find('.modal-body input').val(recipient)
//})
