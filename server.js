var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var fs = require("fs")


mongoose.connect('mongodb://localhost/boards');
var db =mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connected");
});

var boards = require('./router/contents');

app.set('views', __dirname + '/src');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);



var server = app.listen(3000, function(){
 console.log("Express server has started on port 3000")
});

app.use(express.static('./src/'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
 extended: true
}));
app.use('/boards', boards);

var router = require('./router/main')(app, fs);
