const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.config');
const express = require('express');

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../example/index.html'));
});

app.listen(8080, 'localhost', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Dev server started at http://localhost:8080');
});