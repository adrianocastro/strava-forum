exports.index = function (req, res) {
    res.render('index', {
        title: 'Strava Forum',
        heading: 'Strava Forum'
    });
};
