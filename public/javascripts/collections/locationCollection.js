var app = app || {};
var active = active || {};

app.locationCollection = Backbone.Collection.extend({
  model: app.locationModel,
  url: "/location",
  initialize: function() {
    // console.log("collection extender has been instantiated");
    // var self = this;
    // this.on("sync", function() {
    //   var view = new app.CollectionView({
    //     collection: self
    //   });
    //   console.log(view);
    // });
    this.fetch();
  }
});
