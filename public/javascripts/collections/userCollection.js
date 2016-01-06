var app = app || {};
var active = active || {};

app.userCollection = Backbone.Collection.extend({
  model: app.userModel,
  url: "/",
  initialize: function() {
    // var self = this;
    // this.on("sync", function() {
    //   var view = new app.userCollectionView({
    //     collection: self
    //   });
    // });
    this.fetch();
    console.log(this);
  }
});
