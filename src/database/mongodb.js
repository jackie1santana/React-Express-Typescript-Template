const mongodb = require('mongodb')
const mongoose = require('mongoose')
const mongooseValidator = require('mongoose-validator')
const JWT = require('jsonwebtoken')
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID
const axios = require('axios')
// Connection url



const connectionUrl = process.env.CONNECTION;

// Database Name
const database = 'weatherData'

const id = new ObjectID



// Connect using MongoClient

MongoClient.connect(connectionUrl, { useNewUrlParser:true, useUnifiedTopology: true }, (error, client) => {
    if(error){
        console.log("Unable to connect to database")
    }else{
        console.log('Database connected')
    }

    const db = client.db(database)

     axios({
        "method":"GET",
        "url":"https://covid-19-data.p.rapidapi.com/totals",
        "headers":{
        "content-type":"application/json",
        "x-rapidapi-host":"covid-19-data.p.rapidapi.com",
        "x-rapidapi-key":"a8b09fdfc0mshd6f279d5c7cefd6p11f240jsn27ee495e8d1c"
        },"params":{
        "format":"undefined"
        }
        })
        .then((response)=>{
        //   const confirmed = response.data[0].confirmed
          
        //   db.collection('covidApi').insertOne({
        //     id,
        //     confirmedCases: confirmed
        // })

        })
        .catch((error)=>{
          console.log(error)
        })

    
})

 


