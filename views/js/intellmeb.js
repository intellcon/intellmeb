var $page = $('html, body');
$('a[href*="#"]').click(function() {
  $page.animate({
    scrollTop: $($.attr(this, 'href')).offset().top - 60
  }, 400);
  return false;
});

$('[data-target="#myModal"]').on("click", function(e) {
  $('input').val('');
  $('textarea').val('');
  $('.form-group>p').css('display', 'none');
});
$('#recipient-phone').mask(" +7 (999) 999-99-99");
$("#sendForm").on('click', function(e) {
  var data = {};
  data.name = $('#recipient-name').val();
  data.phone= $('#recipient-phone').val();
  data.message= $('#message-text').val();
  e.preventDefault();
  if ((data.name !== '') && (data.phone !== '')) {
    $.ajax({
      url:"/",
      type: "POST",
      data: data,
      success: function(res) {
        console.log(res);
      }
    });
    $('#myModal').modal('toggle');
    $('#okModal').modal('toggle');
  } else {
    if (data.name == '') {
      $('#res-name>p').css('display', 'block');
    } else {
      $('#res-name>p').css('display', 'none');
    }
    if (data.phone == '') {
      $('#res-phone>p').css('display', 'block');
    } else {
      $('#res-phone>p').css('display', 'none');
    }
  }
});
