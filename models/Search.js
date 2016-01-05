var mongoose = require('mongoose');

// default second tier categories which resides in search Schema
var defaultCriteriaSubschema = new mongoose.Schema({
  outdoor: Boolean,
  latenight: Boolean,
  byob: Boolean,
  alcohol: Boolean
});

// challenges subschema which resides in search Schema
var challengesSubschema = new mongoose.Schema({
  icon: String,
  imageURL: String,
  name: String,
  description: String,
  challenges: Boolean,
  defaultCriteria: [defaultCriteriaSubschema]
});

// foodtruck subschema which resides in search Schema
var foodtruckSubschema = new mongoose.Schema({
  icon: String,
  imageURL: String,
  name: String,
  description: String,
  foodtruck: Boolean,
  defaultCriteria: [defaultCriteriaSubschema]
});

// veggiesVegan subschema which resides in search Schema
var veggieVeganSubschema = new mongoose.Schema({
  icon: String,
  imageURL: String,
  name: String,
  description: String,
  veggieVegan: Boolean,
  defaultCriteria: [defaultCriteriaSubschema]
});

// allergies subschema which resides in search Schema
var allergiesSubschema = new mongoose.Schema({
  icon: String,
  imageURL: String,
  name: String,
  description: String,
  accomodates: Boolean,
  glutenFree: Boolean,
  defaultCriteria: [defaultCriteriaSubschema]
});

// meat subschema which resides in search Schema
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

// top (popular) subschema which resides in search Schema
var topSubschema = new mongoose.Schema({
  icon: String,
  imageURL: String,
  name: String,
  description: String,
  rating: Number,
  defaultCriteria: [defaultCriteriaSubschema]
});

// sides subschema which resides in search Schema
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

// cost subschema which resides in search Schema
var costSubschema = new mongoose.Schema({
  icon: String,
  imageURL: String,
  name: String,
  description: String,
  cost: Number,
  defaultCriteria: [defaultCriteriaSubschema]
});

// search schema
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
