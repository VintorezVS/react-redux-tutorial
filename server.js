var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');

var app = new (require('express'))();
var port = 3000;

var photos = {
    '2014': ['2014photo1', '2014photo2', '2014photo3'],
    '2015': ['2015photo1', '2015photo2', '2015photo3'],
    '2016': ['2016photo1', '2016photo2', '2016photo3']
};

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.get("*", function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get("/photos/:year", function (req, res) {
    res.send(JSON.stringify({ photos: photos[req.params.year] }));
});

app.listen(port, function (error) {
    if (error) {
        console.error(error);
    } else {
        console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
    }
});