//  ITEMS
//  -----

    Items = new Mongo.Collection('items');


//  before hooks
//  ------------
    Items.before.insert(function (userId, item) {
      item.isChecked = false;
      item.createdAt = new Date();
    });

    Items.before.update(function (userId, item) {
      item.updatedAt = new Date();
    });