//Escapes from XSS attacks
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

//Returns an html formate with information from given data
const createTweetElement = function (tweet) {
  let $tweet = `
  <article>
    <header>
      <div class="userInfo">
      <img src=${tweet.user.avatars} />
      <span>${tweet.user.name}</span>
      </div>
      <a href="">${tweet.user.handle}</a>
    </header>
    <p>${escape(tweet.content.text)}</p>
    <footer>
    <div>
      Tweeted : ${timeago.format(tweet.created_at)}
    </div>
    <div>
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
    </div>
    </footer>
  </article>
  `;
  return $tweet;
};

//Function that resets text box and text counter after new submittion
const resetText = () => {
  $("#tweet-text").val('');
  $('.counter').val(140);
};

//POST request for new tweet submittions to '/tweets' path
const submitTweets = function () {
  $('form').on('submit', function(e) {
    e.preventDefault();
    const tweetText = $("#tweet-text").val();
    if (!tweetText) {
        $('.no-text').slideDown('slow')
    } else if (tweetText.length > 140) {
      $('.over-max-text').slideDown('slow')
    } else {
      $.post("/tweets", $(this).serialize()).then(() => {
        $('.errors').slideUp()
        loadTweets();
        resetText();
      });
    }
  });
};

//GET request for loading tweets from the database
const loadTweets = function () {
  $.get("/tweets")
    .then((data) => {
      renderTweets(data);
    })
    .catch((e) => console.log(("Error: ", e)));
};

//Render tweets in an html format
const renderTweets = function (tweets) {
  //clears previously posted tweets from page
  $(".posted-tweets").empty();
  // loops through tweets
  for (tweet of tweets) {
    // calls createTweetElement for each tweet
    const newTweet = createTweetElement(tweet);
    // takes return value and appends it to the tweets container
    $(".posted-tweets").prepend(newTweet);
  }
};

//Call functions when DOM is ready
$(document).ready(function () {
  submitTweets();
  loadTweets();
});
