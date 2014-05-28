exports.comment = function (req, res) {
    var post = require('../data/post.json');

    var threads = post.post.threads;

    for(var i in threads){
        threads[i].content = threads[i].content.replace(/\n/gi,'<br><br>')
    }

    var title = post.post.title + ' - Strava Forum';

    res.render('newpost', {
        title: title,
        heading: post.post.title,
        post: post.post
    });
};
