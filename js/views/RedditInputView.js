window.RedditInputView = Backbone.View.extend( {

  el: $( '<div>', {
    id: 'subreddit-input-container'
  } ),

  template: _.template( $( '#subreddit_input_template' ).html() ),

  initialize: function() {
    this.render();
  },
  // Render the template and fade it in.
  render: function() {
    this.$el.html( this.template ).prependTo( document.body );
  }
} );
