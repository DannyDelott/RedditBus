window.RedditInputView = Backbone.View.extend( {

  el: $( '#content' ),

  template: _.template( $( '#reddit-input-template' ).html() ),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html( this.$el.html() + this.template() ).fadeIn('slow');
  }
} );
