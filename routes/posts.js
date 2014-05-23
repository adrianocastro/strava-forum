exports.list = function (req, res) {
    var postslist = require('../data/posts.json');

    res.render('posts', {
        title: 'Cycling Gear - Strava Forum',
        heading: 'Cycling Gear',
        posts: postslist.posts
    });
};
