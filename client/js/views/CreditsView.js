window.CreditsView = Backbone.View.extend( {

  template: _.template( $( '#credits-template' ).html() ),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html( this.$el.html() + this.template() ).fadeIn( 'slow' );
  }

} );
