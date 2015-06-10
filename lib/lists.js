//  LISTS
//  -----

    Lists = new Mongo.Collection('lists');


//  before hooks
//  ------------
    Lists.before.insert(function (userId, list) {
      list.createdAt = new Date();
    });

    Lists.before.update(function (userId, list) {
      list.updatedAt = new Date();
    });