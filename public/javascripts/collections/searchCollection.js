var app = app || {};
var active = active || {};

app.searchCollection = Backbone.Collection.extend({
  model: app.searchModel,
  url: "/search",
  initialize: function() {
    console.log("instantiation of backbone searchCollection extender");
    var self = this;
    this.on("sync", function() {
      console.log('sync working');
      var view = new app.searchCollectionView({
        collection: self
      });
    });
    this.fetch();
  }
});
