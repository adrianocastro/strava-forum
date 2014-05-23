exports.list = function (req, res) {
    var catlist = require('../data/catlist.json');

    res.render('topics', {
        title: 'Strava Forums',
        heading: 'Topics',
        topics: catlist.topics
    });
};
