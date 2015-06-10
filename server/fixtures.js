//  FIXTURES
//  --------

    Meteor.startup(function () {

      var listDescId, listId, privateListId;

      if (Lists.find().count() === 0) {

        console.log('!!! --- Adding List fixtures --- !!!');

        listDescId = Lists.insert({
          name:     'List with description',
          slug:     getSlug('List with description'),
          desc:     'A basic list with a description, nothing too fancy',
          isPublic: true
        });

        listId = Lists.insert({
          name:     'List',
          slug:     getSlug('List'),
          isPublic: true
        });

        privateListId = Lists.insert({
          name:     'Private List',
          slug:     getSlug('Private List'),
          isPublic: false
        });

        console.log('!!! --- List fixtures added --- !!!');

      }

      if (Items.find().count() === 0) {

        console.log('!!! --- Adding Item fixtures --- !!!');

        Items.insert({
          name:   'Gift',
          slug:   getSlug('Gift'),
          desc:   'A birthday present',
          listId: listDescId
        });

        Items.insert({
          name:   'Present',
          slug:   getSlug('Present'),
          desc:   'A birthday gift',
          listId: listDescId
        });

        Items.insert({
          name:   'Faith no More Album',
          slug:   getSlug('Faith no More Album'),
          listId: listId
        });

        Items.insert({
          name:   'Paradise Lost',
          slug:   getSlug('Paradise Lost'),
          desc:   'Latest Paradise Lost album',
          listId: listId
        });

        Items.insert({
          name:   'Book holiday',
          slug:   getSlug('Book holiday'),
          desc:   'Somewhere sunny!',
          listId: privateListId
        });

        console.log('!!! --- Item fixtures added --- !!!');

      }

    });