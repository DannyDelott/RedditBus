/* ********
 * MODELS *
 * ********/

var subreddit = new Subreddit();

/* *******
 * VIEWS *
 * *******/

var logoView = new LogoView();

var inputView = new RedditInputView( {
  model: subredditModel
} );
