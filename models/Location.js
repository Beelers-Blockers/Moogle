var mongoose = require("mongoose");

// meat subSchema which resides in burger subSchema
var meatSchema = new mongoose.Schema({
    grassfed: Boolean,
    kobe: Boolean,
    bison: Boolean,
    angus: Boolean,
    turkey: Boolean,
    lamb: Boolean,
    elk: Boolean
});

// burger subSchema which resides in locationSchema
var burgerSchema = new mongoose.Schema({
    name: String,
    description: String,
    rating: Number,
    veggie: Boolean,
    vegan: Boolean,
    image: String,
    // Sub-Schemas
    meat: [meatSchema]
});

// sides subSchema which resides in locationSchema
var sidesSchema = new mongoose.Schema({
    duckFries: Boolean,
    tots: Boolean,
    macAndCheese: Boolean
});

// allergies subSchema which resides in locationSchema
var allergiesSchema = new mongoose.Schema({
    accommodates: Boolean,
    glutenFree: Boolean
});

// challenges subSchema which resides in locationSchema
var challengesSchema = new mongoose.Schema({
    exists: Boolean,
    name: String,
    description: String
});

// hours subSchema which resides in locationSchema
var hoursSchema = new mongoose.Schema({
    days: String,
    opening: String,
    closing: String,
    closed: Boolean
});

// MAIN locationSchema
var locationSchema = new mongoose.Schema({
    name: String,
    address: String,
    coords: {type: [Number], index: '2dsphere'},
    phone: String,
    website: String,
    price: Number,
    foodtruck: Boolean,
    byob: Boolean,
    alcohol: Boolean,
    latenight: Boolean,
    outdoor: Boolean,
    image: String,
    // Sub-Schemas
    burgers: [burgerSchema],
    sides: [sidesSchema],
    allergies: [allergiesSchema],
    challenges: [challengesSchema],
    hours: [hoursSchema]
});


module.exports = mongoose.model("Location", LocationSchema);
