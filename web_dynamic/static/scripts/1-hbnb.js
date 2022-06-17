$(function () {
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
