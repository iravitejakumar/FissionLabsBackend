'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var LinechartSchema = new Schema({
  SERIES1: [{
    year: Number,
    value: Number
  }],
  SERIES2: [{
    year: Number,
    value: Number
  }],
  SERIES3: [{
    year: Number,
    value: Number
  }],
  SERIES4: [{
    year: Number,
    value: Number
  }]
});

module.exports = mongoose.model('Linechart', LinechartSchema);