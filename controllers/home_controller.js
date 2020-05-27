const Post = require('../models/post');

module.exports.home = function(req, res){

    // Post.find({}, function(err, posts){
    //     return res.render('home', {
    //         title: "Codeial | Home",
    //         posts: posts
    //     });
    // });

    // Populate the user for eaach post
    Post.find({}).populate('user').exec(function(err, posts){
        return res.render('home', {
            title: "Codeial | Home",
            posts: posts
        });
    })
}

// module.exports.bye = function(req, res) {
//     return res.end('<h1>Bye Bye....</h1>');
// }