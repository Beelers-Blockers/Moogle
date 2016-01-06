var app = app || {};
var active = active || {};

app.Model = Backbone.Model.extend({

});

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
      console.log(view);
    });
    this.fetch();
  }
});

Backbone.Model.idAttributes = "_id";


$(document).ready(function() {
  active.collection = new app.Collection();
});
