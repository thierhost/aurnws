'use strict';
var mongoose = require('mongoose');

var PostsSchema = mongoose.Schema({

    title: String,
    content: String

});

module.exports = mongoose.model('Posts', PostsSchema);