var express       = require('express')
    , routes      = require('./routes')
    , http        = require('http')
    , path        = require('path')
    // Using dust for templating
    , dust        = require('dustjs-linkedin')
    , kleiDust    = require('klei-dust');

// Define specific routes
var topics = require('./routes/topics');
var posts = require('./routes/posts');
var post = require('./routes/post');


// Create a new Express app
var app = express();

// Default app configs
app.configure(function(){
    app.set('port', process.env.PORT || 3000);

    // View settings
    // Don't suppress whitespace [https://github.com/linkedin/dustjs/wiki/Dust-Tutorial#Controlling_whitespace_suppression]
    dust.optimizers.format = function(ctx, node) { return node };
    kleiDust.setOptions({root: __dirname + '/views', extension: 'dust', cache: false});
    app.engine('dust', kleiDust.dust);
    app.set('view engine', 'dust');
    app.set('views', __dirname + '/views');

    app.use(express.favicon());
    app.use(express.logger('dev'));

    app.use(express.urlencoded());
    app.use(express.json());

    app.use(express.methodOverride());

    app.use(app.router);

    // Static assets server from public dir
    app.use(express.static(path.join(__dirname, 'public')));
});

// Dev app configs
app.configure('development', function(){
    app.use(express.errorHandler());
});

// Set up routing
app.use(app.router);

// Listen for routes
app.get('/', routes.index);
app.get('/forums', topics.list);
app.get('/topic', posts.list);
app.get('/post', post.thread);

// Create a server instance and start listening
var server = http.createServer(app);

server.listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});