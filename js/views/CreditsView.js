window.CreditsView = Backbone.View.extend( {

  el: $( '#content' ),

  template: _.template( $( '#credits-template' ).html() ),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html( this.$el.html() + this.template() ).fadeIn( 'slow' );
  }

} );
