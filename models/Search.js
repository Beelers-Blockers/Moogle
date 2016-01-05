var mongoose = require('mongoose');

// default second tier categories which resides in search Schema
var defaultCriteriaSchema = new mongoose.Schema({
  outdoor: Boolean,
  latenight: Boolean,
  byob: Boolean,
  alcohol: Boolean
});

// challenges subschema which resides in search Schema
var challengeSchema = new mongoose.Schema({
  icon: String,
  imageURL: String,
  name: String,
  description: String,
  challenges: Boolean,
  defaultCriteria: [defaultCriteriaSchema]
});

// foodtruck subschema which resides in search Schema
var foodtruckSchema = new mongoose.Schema({
  icon: String,
  imageURL: String,
  name: String,
  description: String,
  foodtruck: Boolean,
  defaultCriteria: [defaultCriteriaSchema]
});

// veggiesVegan subschema which resides in search Schema
var veggieSchema = new mongoose.Schema({
  icon: String,
  imageURL: String,
  name: String,
  description: String,
  veggie: Boolean,
  defaultCriteria: [defaultCriteriaSchema]
});

// allergies subschema which resides in search Schema
var allergySchema = new mongoose.Schema({
  icon: String,
  imageURL: String,
  name: String,
  description: String,
  accommodates: Boolean,
  glutenFree: Boolean,
  defaultCriteria: [defaultCriteriaSchema]
});

// meat subschema which resides in search Schema
var meatSchema = new mongoose.Schema({
  icon: String,
  imageURL: String,
  name: String,
  description: String,
  grassfed: Boolean,
  kobe: Boolean,
  bison: Boolean,
  angus: Boolean,
  turkey: Boolean,
  lamb: Boolean,
  elk: Boolean,
  defaultCriteria: [defaultCriteriaSchema]
});

// top (popular) subschema which resides in search Schema
var topSchema = new mongoose.Schema({
  icon: String,
  imageURL: String,
  name: String,
  description: String,
  rating: Number,
  defaultCriteria: [defaultCriteriaSchema]
});

// sides subschema which resides in search Schema
var sideSchema = new mongoose.Schema({
  icon: String,
  imageURL: String,
  name: String,
  description: String,
  duckFries: Boolean,
  macAndCheese: Boolean,
  tots: Boolean,
  defaultCriteria: [defaultCriteriaSchema]
});

// cost subschema which resides in search Schema
var costSchema = new mongoose.Schema({
  icon: String,
  imageURL: String,
  name: String,
  description: String,
  cost: Number,
  defaultCriteria: [defaultCriteriaSchema]
});

// search schema
var searchSchema = new mongoose.Schema({
  challenges: [challengeSchema],
  foodtruck: [foodtruckSchema],
  veggie: [veggieSchema],
  allergies: [allergySchema],
  meats: [meatSchema],
  top: [topSchema],
  sides: [sideSchema],
  cost: [costSchema]
});

module.exports = mongoose.model('Search', searchSchema);
