window.LogoView = Backbone.View.extend( {

  template: _.template( $( '#logo-template' ).html() ),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html( this.template() );
  }
} );
