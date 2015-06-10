Meteor.publish('lists', function () {
  return Lists.find({});
});

Meteor.publish('singleList', function (slug) {
  return Lists.find({slug: slug});
});