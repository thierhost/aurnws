'use strict';

var mongoose = require('mongoose');
mongoose.connect('mongodb://aurnws:aurnws@ds157288.mlab.com:57288/aurnws',{ config: { autoIndex: false } });

var User = require('./users');
var Posts = require('./posts');

//  creation dun user
var user = new User({
    login:'test@aurnws.net',
    password:'test'
});
user.save(function (err,user) {
    if(err){
        console.log(err);
    }else{
        if(user){
            console.log('user created '+ user);
        }else{
            console.log(' impossible de creer le user')
        }
    }
});

// creation des posts
for (let i = 0; i< 20; i++ ){
    let post = new Posts({
        title : ' Title for content number : '+(i+1),
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "

    });
    post.save(function (err,post) {
        if(err){
            console.log(err);
        }else{
            if(post){
                console.log(' content created '+ post);
            }else{
                console.log('Impossible de creer ce post');
            }
        }
    })
}
