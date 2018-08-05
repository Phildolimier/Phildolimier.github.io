var mongoose = require('mongoose');
var ipAddressPlugin = require("mongoose-ip-address");

var VisitorSchema = new mongoose.Schema({
    Ip: {
        type: String,
        required: true
    },
    City: {
      type: String,
      required: false
    },
    State: {
      type: String,
      required: false
    },
    State_RegionCode: {
      type: String,
      required: false
    },
    Zip: {
      type: Number,
      required: false
    },
    Country: {
      type: String,
      required: false
    },
    CountryCode: {
      type: Number,
      required: false
    },
    Lat: {
      type: Number,
      required: false
    },
    Lng: {
      type: Number,
      required: false
    },
    date: {
      type : Date,
      required: false
    }
});

VisitorSchema.plugin(ipAddressPlugin, {fields: ["ip_address", "another_ip_address"]});

var Visitor = mongoose.model('Visitor', VisitorSchema);

module.exports = Visitor;
