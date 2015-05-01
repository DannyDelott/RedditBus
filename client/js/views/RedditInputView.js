window.RedditInputView = Backbone.View.extend({

  template: 'partials/subreddit-input.html',

  //jQuery events
  events: {
    'keydown': 'keyAction'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.load(this.template).html();
  },

  keyAction: function(e) {
    var code = e.keyCode || e.which;
    if(code === 13) {

      // Trigger model to query API
      console.log(this.model.get('subreddit'));

    }
  }
});
