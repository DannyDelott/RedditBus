window.Subreddit = Backbone.Model.extend({

  defaults: {
    subreddit: 'explainlikeimfive',
    day: 'Thursday',
    time: '1427527289',
    data: {
      posts: {}
    },

  },

  initialize: function() {

    console.log('subreddit model');
  }

});
