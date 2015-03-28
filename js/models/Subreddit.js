window.Subreddit = Backbone.Model.extend( {

  defaults: {
    subreddit: 'explainlikeimfive',
    day: 'Thursday',
    time: 'Fri Mar 27 2015 21:58:29 GMT-0700 (PDT)',
    data: {
      posts: {}
    },

  },

  initialize: function() {

    console.log( 'subreddit model' );
  }

} );
