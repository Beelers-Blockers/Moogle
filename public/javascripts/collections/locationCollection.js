var app = app || {};
var active = active || {};

app.Collection = Backbone.Collection.extend({
  model: app.Model,
  url: "/location",
  initialize: function() {
    console.log("collection extender has been instantiated");
    var self = this;
    this.on("sync", function() {
      var view = new app.CollectionView({
        collection: self
      });
    });
    this.fetch();
  }
});
