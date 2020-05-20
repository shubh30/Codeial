module.exports.home = function(req, res){
    return res.render('home', {
        title: "Home"
    })
}

// module.exports.bye = function(req, res) {
//     return res.end('<h1>Bye Bye....</h1>');
// }