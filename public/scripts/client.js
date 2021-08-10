
$(document).ready(function() {
  $(".posted-tweets").append(renderTweets(data)); 
});
// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const createTweetElement = function(tweet) {
  let $tweet = `
  <article>
  <header>
  <label for=""><img src=${tweet.user.avatars} />${tweet.user.name}</label>
  <a href="">${tweet.user.handle}</a>
  </header>
  <p>${tweet.content.text}</p>
  <footer>
  <div>
  Posted : ${timeago.format(new Date())}
  </div>
  <div>
  <i class="fas fa-flag"></i>
  <i class="fas fa-retweet"></i>
  <i class="fas fa-heart"></i>
  </div>
  </footer>
  </article>
  `
  return $tweet;
}

const renderTweets = function(tweets) {
  // loops through tweets
  for(tweet of tweets) {
    // calls createTweetElement for each tweet
    const newTweet = createTweetElement(tweet);
    // takes return value and appends it to the tweets container
    $('.posted-tweets').append(newTweet)
  }
}