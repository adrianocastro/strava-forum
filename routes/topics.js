exports.list = function (req, res) {
    var topicsList = require('../data/topics.json');

    res.render('topics', {
        title: 'Forums – Strava',
        heading: 'Strava Forums',
        topics: topicsList.topics
    });
};
