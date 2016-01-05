var app = app || {};
var active = active || {};

Backbone.Model.idAttributes = "_id";


$(document).ready(function() {
  active.collection = new app.Collection();
});
