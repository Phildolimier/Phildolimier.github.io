var express = require('express');
var bodyParser = require('body-parser');
var dataUtil = require("./data-utils");
var logger = require('morgan');
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');
var dotenv = require('dotenv');
var Visitor = require('./model/visitor');
var where = require('node-where');


// Load environment variables

dotenv.load();

// Connect to MongoDB
console.log(process.env.MONGODB)
mongoose.connect(process.env.MONGODB);
mongoose.connection.on('error', function() {
    console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
    process.exit(1);
});


var app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use('/images', express.static('images'));
app.use('/projects', express.static('projects'));

//endpoint for welcome page
 app.get('/', function(req, res) {
    // Create new visitor
    var city,state_region,state_region_code,zip,country,country_code,lat,lng;

    console.log("The current time is " + Date.now());

    where.is(req.ip, function(err, result) {
      if (result) {
        city =  result.get('city');
        state_region = result.get('region');
        state_region_code = result.get('regionCode');
        zip = result.get('postalCode');
        country =  result.get('country');
        country_code =  result.get('countryCode');
        lat = result.get('lat');
        lng = result.get('lng');
      }
    });

    var visitor = new Visitor({
        Ip: req.ip,
        City: city,
        State: state_region,
        State_RegionCode: state_region_code,
        Zip: zip,
        Country: country,
        CountryCode: country_code,
        Lat: lat,
        Lng: lng,
        date: Date.now() //- 14400000 //eastern standard time
    });

    // Save visitor to database
    visitor.save(function(err) {
        if (err) throw err;
        return res.render('main');
    });
});

app.listen(3000, function() {
    console.log('Personal Site listening on port 3000!');
});
