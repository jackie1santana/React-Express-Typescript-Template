const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose')
const mongooseValidator = require('mongoose-validator')
const JWT = require('jsonwebtoken')
// Connection url

const url = 'mongodb://localhost:27017';

// Database Name

const dbName = 'test';

// Connect using MongoClient

MongoClient.connect(url, function(err, client) {

// Select the database by name

const testDb = client.db(dbName);

client.close();

})
