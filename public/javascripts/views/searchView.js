var app = app || {};
var active = active || {};

app.searchModelView = Backbone.View.extend({
  initialize: function() {
      console.log("instantiation of our model searchView has occurred");
      this.render();
  },
  render: function() {
    var data = this.model;
    console.log(data);
    this.$el.append(data.allergies + ' ' + data.foodtruck);
  }
});


app.searchCollectionView = Backbone.View.extend({
  el: document.getElementById('burgerSearch'),
  initialize: function() {
    console.log("instantiation of our collection searchView has occurred");
    var models = [{
      challenges: "Hell YES",
      foodtruck: "sometimes",
      veggie: "are you feeling lucky?",
      allergies: "absolutely accommodate",
      meats: "all the meats",
      top: "trending to the bottom",
      sides: "we dig sides",
      cost: "more than you want to know"
    },
    {
      challenges: "ehh",
      foodtruck: "affirmative",
      veggie: "quinoa is cool",
      allergies: "gluten-free welcome",
      meats: "grass fed organic",
      top: "tip-top!!",
      sides: "fries for days",
      cost: "dollar dollar bills"
    }
  ];
    console.log(models);
    for (var model in models) {
      new app.searchModelView({
        model: models[model],
        el: this.el
      });
    }
  }
});
