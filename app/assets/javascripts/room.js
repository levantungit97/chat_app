$(function() {
  $(document).on('ajax:success', '#new_room_message', function(a, b,c ) {
    $(this).find('input[type="text"]').val('');
  });
});
