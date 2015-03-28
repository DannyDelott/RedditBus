window.RedditInputView = Backbone.View.extend( {

  template: _.template( $( '#reddit-input-template' ).html() ),

  //jQuery events
  events: {
    'keydown': 'keyAction'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html( this.$el.html() + this.template() );
  },

  keyAction: function( e ) {
    var code = e.keyCode || e.which;
    if ( code === 13 ) {

      // TODO:
      // Trigger model to query API
      console.log( this.model.get( 'subreddit' ) );

    }
  }
} );
