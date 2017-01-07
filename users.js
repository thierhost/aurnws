'use strict';
var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({

    login: String,
    password: String

});

module.exports = mongoose.model('User', UserSchema);