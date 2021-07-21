var express = require('express');

var app = express();

var mongoose = require('mongoose');

var setupController = require('./controller/setupController');

var apiController = require('./controller/apiController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://Lavleen:Lavleen@nodetodo.x1l1v.mongodb.net/Nodetodo?retryWrites=true&w=majority');
setupController(app);

apiController(app);

app.listen(port);
