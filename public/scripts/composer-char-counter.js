$(document).ready(function() {
  $('#tweet-text').on('input', (e) => {
    const counter = e.target.value.length
    $('.counter').text(140 - counter)
    if(counter > 140) {
      $('.counter').css('color', 'red')
    } else {
      $('.counter').css('color', 'black')
    }
  })
});