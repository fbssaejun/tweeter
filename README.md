# Tweeter Project

- Tweeter is a simple, single-page Twitter clone. Tweeter allows users to post short tweets under 140 characters. 
- Through this interface, users can flag, share, or like a tweet they choose to. 
- Tweeter is a responsive website, which has different layouts depending on the screen size of the user's device.


### Homepage
- Users can type anything in the text box and share their tweets, and see other people's tweets!
- Toggling the arrow icon under 'Wrtie a new tweet' will display / hide the new tweet post-box.
- The blue arrow on the right bottom corner will appear when the user scrolls, and clicking it will navigate the user to the top of the page.

!["Desktop interface"](https://github.com/fbssaejun/tweeter/blob/master/docs/dt-home.png)

### Icons
- Users can use different icons to flag, share, or like a post.
![""](https://github.com/fbssaejun/tweeter/blob/master/docs/dt-icon.png)

### Warning messages 
- Users are not allowed to submit empty text and it should be under 140 characters.
![""](https://github.com/fbssaejun/tweeter/blob/master/docs/dt-max-warning.png)
- Input field checks if the input area is empty. Also checks the input value and prevents XSS attacks before submittion. 
![""](https://github.com/fbssaejun/tweeter/blob/master/docs/dt-no-input.png)


### Mobile interface
- Homepage (Mobile)
![""](https://github.com/fbssaejun/tweeter/blob/master/docs/mobile-home.png)
- Posts (Mobile)
![""](https://github.com/fbssaejun/tweeter/blob/master/docs/mobile-posts.png)

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- Body parser
- Chance
- md5
- saas
