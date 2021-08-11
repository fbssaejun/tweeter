//POST request for new tweet submittions to '/tweets' directory
const submitTweets = function () {
  $("form").on("submit", function (event) {
    event.preventDefault();
    const tweetText = $("#tweet-text").val();
    if (!tweetText) {
      alert("There is no text to be submitted!");
    } else if (tweetText.length > 140) {
      alert("You have exceeded maximum charaters!");
    } else {
      $.post("/tweets", $(this).serialize());
    }
  });
};

//GET request for loading tweets from the database
const loadTweets = function () {
  $.get("/tweets")
    .then((data) => {
      renderTweets(data);
      timeago.render(document.querySelectorAll(".posts"));
    })
    .catch((e) => console.log(("Error: ", e)));
};

//Returns an html formate with information from given data
const createTweetElement = function (tweet) {
  let $tweet = `
  <article>
    <header>
      <label for=""><img src=${tweet.user.avatars} />${tweet.user.name}</label>
      <a href="">${tweet.user.handle}</a>
    </header>
    <p>${tweet.content.text}</p>
    <footer>
    <div>
      <span class="posts">Posted : ${timeago.format(new Date())}</span>
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

//Render tweets in an html format
const renderTweets = function (tweets) {
  // loops through tweets
  for (tweet of tweets) {
    // calls createTweetElement for each tweet
    const newTweet = createTweetElement(tweet);
    // takes return value and appends it to the tweets container
    $(".posted-tweets").append(newTweet);
  }
};

//Call functions when DOM is ready
$(document).ready(function () {
  submitTweets();
  loadTweets();
});
