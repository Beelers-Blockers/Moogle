var mongoose = require('mongoose');

var defaultCriteriaSubschema = new mongoose.Schema({
  outdoor: Boolean,
  latenight: Boolean,
  byob: Boolean,
  alcohol: Boolean
});

var challengesSubschema = new mongoose.Schema({
  icon: String,
  imageURL: String,
  name: String,
  description: String,
  challenges: Boolean,
  defaultCriteria: [defaultCriteriaSubschema]
});

var foodtruckSubschema = new mongoose.Schema({
  icon: String,
  imageURL: String,
  name: String,
  description: String,
  foodtruck: Boolean,
  defaultCriteria: [defaultCriteriaSubschema]
});

var veggieVeganSubschema = new mongoose.Schema({
  icon: String,
  imageURL: String,
  name: String,
  description: String,
  veggieVegan: Boolean,
  defaultCriteria: [defaultCriteriaSubschema]
});

var allergiesSubschema = new mongoose.Schema({
  icon: String,
  imageURL: String,
  name: String,
  description: String,
  accomodates: Boolean,
  glutenFree: Boolean,
  defaultCriteria: [defaultCriteriaSubschema]
});

var meatSubschema = new mongoose.Schema({
  icon: String,
  imageURL: String,
  name: String,
  description: String,
  kobe: Boolean,
  grassfed: Boolean,
  lamb: Boolean,
  turkey: Boolean,
  defaultCriteria: [defaultCriteriaSubschema]
});

var topSubschema = new mongoose.Schema({
  icon: String,
  imageURL: String,
  name: String,
  description: String,
  rating: Number,
  defaultCriteria: [defaultCriteriaSubschema]
});

var sidesSubschema = new mongoose.Schema({
  icon: String,
  imageURL: String,
  name: String,
  description: String,
  duckfat: Boolean,
  macnCheese: Boolean,
  tatterTots: Boolean,
  defaultCriteria: [defaultCriteriaSubschema]
});

var costSubschema = new mongoose.Schema({
  icon: String,
  imageURL: String,
  name: String,
  description: String,
  cost: Number,
  defaultCriteria: [defaultCriteriaSubschema]
});


var searchSchema = new mongoose.Schema({
  challenges: [challengesSubschema],
  foodtruck: [foodtruckSubschema],
  veggieVegan: [veggieVeganSubschema],
  allergies: [allergiesSubschema],
  meat: [meatSubschema],
  top: [topSubschema],
  sides: [sidesSubschema],
  cost: [costSubschema]
});

module.exports = mongoose.model('Search', searchSchema);
