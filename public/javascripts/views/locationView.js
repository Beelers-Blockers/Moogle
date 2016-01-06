var app = app || {};
var active = active || {};

app.ModelView = Backbone.View.extend({
  initialize: function() {
    console.log("We have instantiated our model view.");
    this.render();
  },
  render: function() {
    // var data = this.model.attributes;
    console.log("Rendering ModelView");
    var data = this.model.attributes;
    console.log("Grabbing template");
    var template = document.getElementById('location-template').innerHTML;
    console.log("Transforming template");
    var compiledTemplate = _.template(template);
    console.log("Creating HTML from template and model data...");
    var html = compiledTemplate(data);
    this.el.innerHTML = this.el.innerHTML + html;
  }
});

app.CollectionView = Backbone.View.extend({
  el: document.getElementById('location-list'),
  initialize: function() {
    console.log("collection view has been instantiated");
    this.render();
  },
  render: function() {
    console.log("collection view render has been called");
    // var models = this.collection.models;
    var models = this.collection.models;
    for (var model in models) {
      console.log(models[model]);
      new app.ModelView({
        model: models[model],
        el: this.el
      });
    }
  }
});
