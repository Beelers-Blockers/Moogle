var app = app || {};
var active = active || {};

$(document).ready(function() {
  active.collection = new app.Collection();
  active.collection = new app.searchCollection();
});
