var app = app || {};
var active = active || {};

app.searchModelView = Backbone.View.extend({
  initialize: function() {
      console.log("instantiation of our model searchView has occurred");
      this.render();
  },
  render: function() {
    console.log("rendering our searchModelView");
    var data = this.model.attributes;
    console.log("capturing search template");
    var searchTemplate = document.getElementById('search-template').innerHTML;
    console.log("doing more template stuff");
    var compiledSearchTemplate = _.template(searchTemplate);
    console.log("New HTML from template and my model");
    var html = compiledSearchTemplate(data);
    this.el.innerHTML = this.el.innerHTML + html;
  }
});


app.searchCollectionView = Backbone.View.extend({
  el: document.getElementById('search-list'),
  initialize: function() {
    console.log("instantiation of our collection searchView has occurred");
    this.render();
  },
  render: function() {
    console.log("collection view render has been called");
    var models = this.collection.models;
    for (var model in models) {
      console.log(models[model]);
      new app.searchModelView({
        model: models[model],
        el: this.el
      });
    }
  }
});
