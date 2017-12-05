'use strict';

var _ = require('lodash');
var Linechart = require('./linechart.model');

// Get list of linecharts
exports.index = function(req, res) {
  Linechart.find(function (err, linecharts) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(linecharts);
  });
};

// Get a single linechart
exports.show = function(req, res) {
  Linechart.findById(req.params.id, { _id: 0, __v: 0 },function (err, linechart) {
    if(err) { return handleError(res, err); }
    if(!linechart) { return res.status(404).send('Not Found'); }
    return res.json(linechart);
  });
};

// Creates a new linechart in the DB.
exports.create = function(req, res) {
  Linechart.create(req.body, function(err, linechart) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(linechart);
  });
};

// Updates an existing linechart in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Linechart.findById(req.params.id, function (err, linechart) {
    if (err) { return handleError(res, err); }
    if(!linechart) { return res.status(404).send('Not Found'); }
    var updated = _.merge(linechart, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(linechart);
    });
  });
};

// Deletes a linechart from the DB.
exports.destroy = function(req, res) {
  Linechart.findById(req.params.id, function (err, linechart) {
    if(err) { return handleError(res, err); }
    if(!linechart) { return res.status(404).send('Not Found'); }
    linechart.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}