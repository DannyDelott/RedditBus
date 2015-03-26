window.RedditInputView = Backbone.View.extend( {

  el: $( '<div>', {
    id: 'reddit-input-container'
  } ),

  template: _.template( $( '#reddit-input-template' ).html() ),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html( this.template ).prependTo( document.body );
  }
} );
