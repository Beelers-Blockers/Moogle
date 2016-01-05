var app = app || {};
var active = active || {};

app.ModelView = Backbone.View.extend({
  initialize: function() {
    console.log("We have instantiated our model view.");
    this.render();
  },
  render: function() {
    // var data = this.model.attributes;
    var data = this.model;
    console.log(data);
    this.$el.append(data.name + '\n' + data.hours + '\n');
  }
});

app.CollectionView = Backbone.View.extend({
  el: document.getElementsByTagName('body')[0],
  initialize: function() {
    console.log("collection view has been instantiated");
    this.render();
  },
  render: function() {
    console.log("collection view render has been called");
    // var models = this.collection.models;
    var models = [{
      name: "Marty's Burger Palace",
      hours: "M-F 10am-10pm"
    },
    {
      name: "David's House of Burgs!",
      hours: "M-Forever 0am-0:30km"
    }
  ];
    console.log(models);
    for (var model in models) {
      new app.ModelView({
        model: models[model],
        el: this.el
      });
    }
  }
});
