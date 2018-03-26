const mongoose = require('mongoose');
const Promise = require('bluebird');
mongoose.Promise = require('bluebird');

let database = "airbnb"
let mongoServer = process.env.MONGO_SERVER || 'localhost';
let mongoPort = process.env.MONGO_PORT || '27017';

console.log('mongoServer', mongoServer);
console.log(`mongodb://${mongoServer}:${mongoPort}/${database}`);
let connection = mongoose.connect(`mongodb://${mongoServer}:${mongoPort}/${database}`);

const DescriptionSchema = mongoose.Schema(
  {
    "city": String,
    "_id": Number,
    "name": String,
    "user_first_name": String,
    "user_thumbnail_url": String,
    "bathrooms": Number,
    "bedrooms": Number,
    "beds": Number,
    "cancellation_policy": String,
    "person_capacity": Number,
    "property_type": String,
    "room_type": String,
    "room_type_category": String,
    "access": String,
    "amenities": [String],
    "amenities_ids": [Number],
    "description": String,
    "interaction": String,
    "listing_security_deposit_native": Number,
    "notes": String,
    "security_deposit_formatted": String,
    "space": String,
    "summary": String,
  }
);

var DescriptionModel = mongoose.model('listing', DescriptionSchema);

function findOne(roomId) {
  return DescriptionModel
    .findOne({id: roomId})
    .lean()
    .exec();
}


exports.findOne = findOne;
exports.connection = connection;

exports.DescriptionModel = DescriptionModel;
// exports.insertOne = insertOne;
