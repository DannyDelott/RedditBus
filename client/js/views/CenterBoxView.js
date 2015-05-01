    window.CenterBoxView = Backbone.View.extend({

      id: 'center-box',

      logoView: new LogoView({
        el: this.$el
      }),
      inputView: new RedditInputView({
        model: new Subreddit(),
        el: this.$el
      }),
      creditsView: new CreditsView({
        el: this.$el
      }),

      initialize: function() {
        this.render();
      },

      render: function() {

        // First: Append the CenterBoxView onto the <body> element
        this.$el.appendTo($('body'));

        // Then: Nest additional views inside.
        this.$el.append(this.logoView.$el);
        this.$el.append(this.inputView.$el);
        this.$el.append(this.creditsView.$el);

        this.$el.fadeIn('slow');
        return this;
      }

    });
