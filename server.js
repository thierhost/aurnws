/**
 * Created by macbookpro on 06/01/2017.
 */
'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var _ = require('lodash');

var mongoose = require('mongoose');
mongoose.connect('mongodb://aurnws:aurnws@ds157288.mlab.com:57288/aurnws');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var User = require('./users');
var Posts = require('./posts');


// authentification

app.get('/login',function (req,res) {

    let login  = req.query.login;
    let password = req.query.password;
    User.find({'login':login,'password':password },function (err,users) {
        if(!err){
            if(users.length == 1){
                res.json('user',users[0]);
            }else{
                res.json('not-found',404);
            }
        }else{
            res.json('not-found',404);
        }
    })
});

// uupdate password

app.put('/password/:id',function (req,res) {
    User.findById(req.params.id, function(err, user) {
        if (err) {
            res.json('not-found',404);
        };
        if (user) {
            _.merge(user, req.body);
            user.save(function(err) {
                if (err) {
                    res.json('not-found',404);
                };
                res.json('user',user);
            });
        } else {
            res.json('not-found',404);
        }

    });
});


// get content

app.get('/content',function (req,res) {
    let id_user  = req.query.id;
    // verification que le user est connecte 
    User.findById(req.params.id, function(err, user) {
        if (err) {
            res.json('not-found', 404);
        }else{
            // le user existe
            if(user){
                Posts.find(function (err,posts) {
                    if(err) {
                        res.json('not-found', 404);
                    } else{
                        res.json('posts',posts);
                    }
                })

            }else{
               res.json('not-found', 404);
            }


         }
        
    });

    });

var server = app.listen(3000, function () {
    console.log('Server running at http://127.0.0.1:3000/');
});