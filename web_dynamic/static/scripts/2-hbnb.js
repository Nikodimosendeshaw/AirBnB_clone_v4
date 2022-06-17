$(function () {
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });

  const dict = {};
  $('input').change(function () {
    if (this.checked) {
      dict[($(this).attr('data-id'))] = $(this).attr('data-name');
    } else {
      delete dict[$(this).attr('data-id')];
    }
    let arr = '';
    let separator = '';
    for (const i in dict) {
      arr += separator;
      arr += dict[i];
      separator = ', ';
    }
    $('div.amenities h4').text(arr);
  });
});
