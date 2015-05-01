window.CreditsView = Backbone.View.extend({

  template: 'partials/credits.html',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.load(this.template).html();
  }

});
