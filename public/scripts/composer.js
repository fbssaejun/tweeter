//Checks character counts for new tweet submittions
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
  //Calls scroller function
  scroller();
});

//Goes to the textarea of the page when arrow is clicked
const scroller = function () {
  $(window).scroll(function() {
    //Displays the button, fades out after 5seconds
    $( ".scroll" ).css('display', 'inline')
  });

  $(".scroll").click(function() {
    $('html, body').animate({
        scrollTop: $(".new-tweet").offset().top
    }, 1000);
  });
}