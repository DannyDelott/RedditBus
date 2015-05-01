window.LogoView = Backbone.View.extend({

  template: 'partials/logo.html',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.load(this.template).html();
  }
});
