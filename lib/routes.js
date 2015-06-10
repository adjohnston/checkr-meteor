//  routes
//  ======

//  home route
//  ----------
    FlowRouter.route('/', {
      name: 'home',
      
      action: function () {
        FlowLayout.render('mainLayout', {
          main: 'home'
        });
      }
    });


//  list routes
//  -----------
    listRoutes = FlowRouter.group({
      prefix: '/lists',
    });


    listRoutes.route('/', {
      name: 'lists',

      subscriptions: function () {
        this.register('lists', Meteor.subscribe('lists'));
      },

      action: function () {
        FlowLayout.render('mainLayout', {
          main: 'lists'
        });
      }
    });

    listRoutes.route('/:slug', {
      name: 'list',

      subscriptions: function (params) {
        this.register('singleList', Meteor.subscribe('singleList', params.slug));
      },

      action: function () {
        FlowLayout.render('mainLayout', {
          main: 'list'
        });
      }
    });