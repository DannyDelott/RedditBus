window.LogoView = Backbone.View.extend( {

  el: $( '#content' ),

  template: _.template( $( '#logo-template' ).html() ),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html( this.template() );
  }
} );
