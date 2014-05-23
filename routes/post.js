exports.thread = function (req, res) {
    var post = require('../data/post.json');

    var title = post.post.title + ' - Strava Forum';

    res.render('post', {
        title: title,
        heading: post.post.title,
        post: post.post
    });
};
