'use strict';
var mongoose = require('mongoose');

var PostsSchema = mongoose.Schema({

    title: String,
    content: String,
    date: Date

});

module.exports = mongoose.model('Posts', PostsSchema);