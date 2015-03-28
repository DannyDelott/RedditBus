    window.CenterBoxView = Backbone.View.extend( {

      id: 'center-box',

      initialize: function() {
        this.render();
      },

      render: function() {

        // First: Append the CenterBoxView onto the <body> element
        this.$el.appendTo( $( 'body' ) );

        // Then: Nest additional views inside.
        this.logoView = new LogoView( {
          el: this.$el
        } );
        this.inputView = new RedditInputView( {
          model: subreddit,
          el: this.$el
        } );
        this.creditsView = new CreditsView( {
          el: this.$el
        } );

        return this;
      }

    } );
