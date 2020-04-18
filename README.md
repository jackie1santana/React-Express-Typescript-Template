`npm run dev` runs typescript.ts in development mode

`npm run tsc` runs tsc server.ts --outDir server-dist -w

`npm run servers` runs both client side and server side in development mode

Side note: The backend server url is launched by `open-server-url` via `open` node package

`npm run build` transpile Typescript into js & runs nodemon on server.ts

`npm start` runs server-dist/server.js (Production Mode)

`@types` are installed both in React & Backend, so you can add custom types to React, Express & Node

I use `Concurrently` Node Package to run multiple commands simultaneuosly.

Typescript is Running in Node, so you can now use ES6 import modules, however this only works with a tsconfig.json file installed as well

Node/Express Custom Types added => `import express, { Application, Request, Response, NextFunction } from 'express'`

Node-Sass installed in React
`yarn add node-sass or  npm install -f node-sass`

if you have node-sass binary issues 
run `npm run rebuild-node-sass` via `node node_modules/node-sass/scripts/install.js` (manually) in the terminal via client folder

<pre>Kills All Node Processes: `ps aux | awk '/node/{print $2}' | xargs kill -9`</pre>

Install Particle.js for React `npm i react-particles.js`

to start database development ` brew services start mongodb-community@4.2 `

to restart database development ` brew services restart mongodb-community@4.2 `

to stop database development ` brew services stop mongodb-community@4.2 `

database Mac OS Catalina root/connection issues:

An alternative way to fix this Catalina Mac OS root & mongodb connection issue, do the following:

Install Homebrew, if you have it, reinstall it again

run the following commands in the terminal

<pre>/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

brew untap mongodb/brew && brew tap mongodb/brew

brew install mongodb-community@4.2
</pre>

The issue is mongo cannot find `/db/data` because there is no directory, so you have to create one:

`cd ~` (this should take you to your `Users` folder)

from the `Users` folder make your own db/data folder by running the follow commands:

`mkdir db` & cd inside `db folder`

inside the `db folder` run: `mkdir data` & cd inside `data folder`

run this command: `mongod --dbpath ~/data/db`
(inside the `Users/data/db/` folder you just created)

Now open a new tab & 
run: `cd ~` (brings you back to Users) -> now run : `cd .. & cd .. again (do this twice)`
(now you should be in the folder ***before Users***)

(now find `tmp folder`) cd into the `/tmp folder`

**delete the sock file (this is giving you connection issues)**

delete it by running: `rm -rf mongodb-27017.sock`

now run command: `mongo` (this should work now)

inside mongo shell run command: `db.verion()`
if you see a version, your connection works.

**From now on to run mongodb database & connection you will have to have to tabs open at all times whenever you want to work on your projects**

<pre>
Example:

in one tab run command -> mongod --dbpath ~/data/db 
(this starts the connection)

in the other tab run command: mongo
(this starts the shell)

</pre>
These both have to be running..

<pre>
Side Note:
you no longer need to start
the connection by running 
brew services start mongo-community anymore.
</pre>

remember `mongod --dbpath ~/data/db` is basically -> `mongod` command now.. The Mac OS Catalina Update created root permission problems, that is why `mongod` command alone never worked before.

Hope this helped you. Goodluck.

set up mongodb or mongodb w/mongoose in your vscode
npm install mongodb mongoose --save --save-exact
add node js driver to your app for a template set up or to view db commands

also add in mongoose to add validation and authentication

https://docs.mongodb.com/drivers/node

or

https://mongodb.github.io/node-mongodb-native/3.6/api/

for cheat sheet

https://gist.github.com/bradtraversy/f407d642bdc3b31681bc7e56d95485b6

mongoose docs
https://mongoosejs.com/

How to connect your connection and database and insert something

const mongodb = require('mongodb')
const mongoose = require('mongoose')
const mongooseValidator = require('mongoose-validator')
const JWT = require('jsonwebtoken')
const ObjectID = mongodb.ObjectID


const MongoClient = mongodb.MongoClient;


const id = ObjectID

// Connection url


const connectionUrl = 'mongodb://localhost:27017';


// Database Name
const database = 'weatherData'



// Connect using MongoClient


MongoClient.connect(connectionUrl, { useNewUrlParser:true, useUnifiedTopology: true }, (error, client) => {
    if(error){
        console.log("Unable to connect to database")
    }else{
        console.log('Database connected')
    }


    const db = client.db(database)


    db.collection('covidApi').insertOne({
       id,
        name: 'Andrew',
        age: 27
    })
})


this will send the data to your database


if u want a timestamp

const id = new ObjectID

//it needs to be a New object in order for the timestamp to work

console.log(id.getTimestamp()) or add on .getTimestamp().toLocaleTimeString()

 IF YOU WANT TO ADD API
const mongodb = require('mongodb')
const mongoose = require('mongoose')
const mongooseValidator = require('mongoose-validator')
const JWT = require('jsonwebtoken')
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID
const axios = require('axios')
// Connection url


const connectionUrl = 'mongodb://localhost:27017';


// Database Name
const database = 'weatherData'


const id = ObjectID


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
          const confirmed = response.data[0].confirmed
          
          db.collection('covidApi').insertOne({,
            id,
            confirmedCases: confirmed
        })


        })
        .catch((error)=>{
          console.log(error)
        })


    
})


USING MONGO WITH MONGOOSE

const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/weatherData', { useNewUrlParser:true, 
useUnifiedTopology: true,
useCreateIndex: true 
})


const Covid = mongoose.model('Covid', {
    confirmedCases: {
        type: String
    },
    recoveredCase : {
        type: String
    }
})


const globalCases = new Covid({
    confirmedCases: '123',
    recovered: '23'
})

//TO INSERT VALUES

globalCases.save(globalCases).then(() => {
    console.log(globalCases)
}).catch((error) => {
    console.log('Error', error)
})



//use the schema name to delete
Covid.deleteOne({ confirmedCases: '123'})
.then(() => {
    console.log(globalCases)
}).catch((error) => {
    console.log('Error', error)
})


DEPLOYMENT TO HEROKU & SWITCHING TO MONGODB ATLAS SERVER

DEVELOPMENT
1st step is to change everything to environment variables
switch your localhostport  to atlas server port
env does not get commited to github for secuirty purposes
so make a config file and make a dev.env

npm i env-cmd --save-dev --save-exact (for env files)
(this allows the dot.env file to load in the env to my process.env.PORT automatically) when using the DEV script only

"main": "./src/server.js", (this path has to be correct or the env-cmd wont work)

 "dev": "env-cmd -f ./config/dev.env nodemon src/server.js -e js,hbs",

Now add in JWT secret, any API key & the mongodb/mongoose connection string

PORT=2300
CONNECTION=mongodb://localhost:27017/weatherData

now put the dev.env file in .gitignore 

CREATE PRODUCTION FOR MONGODB ATLAS
the START script process.env.Port runs on heroku not env-cmd

Heroku does NOT automatically set and other env other than the PORT,
so you have to manually set up it up for mongo url and api keys

create local database (fill in field individually in compass)

once database is connected and ready to deploy

set up env variables for dev (env for port, api keys and database)

 go to MONGODB ATLAS 

create new project

 Create/build cluster

 in network access make sure you white list yur ip 0.0.0.0./0

 create database user in database accesss to admin atlas

 connect mongodb compass & copy connection string (make atlas database in compass) by creating a new connection and pasting in mongodb+srv://jackie:<password>@weatherdataatlas-injix.mongodb.net/test (make sure its srv record)

deploy to production and run database thru heroku

gitignore node_modules & config

ready for deployment

create github repo & switch to public or private & push up to github with original dev envs

in terminal..after github push is done-> run: heroku create <filename>

set env for heroku: heroku config:set key=value (places in key and value from dev.env)

(if you want to check if u have variables set run: heroku config) (to remove variables run: heroku config:unset key (just key name))

do NOT add PORT to heroku config..it does it automatically. everything else, copy exavtly how it says in dev.env to heroku config

when it comes to copying MONGO URL use the ATLAS STRING instead of localhost for heroku config .. copy the string from [CONNECT TO YOUR APPLICATION] not connect to compass
edit the string and add in password 

make sure you wrap the mongo atlas string in single or double qutoes

also remove 'test' word from string and replace it with the name of the loccalhost database name

heroku config:set CONNECTION='mongodb+srv://jackie:1234@weatherdataatlas-injix.mongodb.net/weatherData?retryWrites=true&w=majority'

now run: heroku config (to check status)

now push code up to heroku server: git push heroku master

(dont put anything in package.json that says 'build': ex->  "build": "concurrently \"npm run dev\" ") 

now copy the heroku url from terminal input

change api urls & set a proxy in client ex:  },
  "proxy": "http://localhost:2300"
} in client package.json

(IF U HAVE A REACT APP)
remove unregister.serviceworker() from index.js in react

ADD THIS IN EXPRESS server.js

cosnt path = require('path')
const publicDirectoryPath = path.join(__dirname, '../client/build')
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
  res.sendFile(publicDirectoryPath)
})

 add this in express package.json "start": "node src/server.js",
    "heroku-postbuild": "cd client && npm install && npm run build",
	
in terminal
git add .
git commit -m " "
git push -u origin master
git push heroku master


PASS IN MONGOOSE MODELS INTO SERVER.JS AND SAVE INSERS TO DATABASE VIA APP.GET()
mongoose
const mongoose = require('mongoose')


mongoose.connect(process.env.CONNECTION, { useNewUrlParser:true, 
useUnifiedTopology: true,
useCreateIndex: true 
})


const Covid = mongoose.model('Covid', {
    confirmedCases: {
        type: String
    },
    recoveredCase : {
        type: String
    }
})


const globalCases = new Covid({
    confirmedCases: '2300',
    recovered: '23'
})


globalCases.save(globalCases).then(() => {
    console.log(globalCases)
}).catch((error) => {
    console.log('Error', error)
})


module.exports = Covid

server.js

require('./database/mongoose.js')

app.get('/globalcases', async (req, res) => {
  
  await axios({
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
      
      const allCases = response.data
      res.json(allCases)
    })
    .catch((error)=>{
      console.log(error)
    })


   if(req.url == '/globalcases') {
    const globalCases = Covid
    globalCases.save(globalCases).then(() => {
      console.log(globalCases)
  }).catch((error) => {
      console.log('Error', error)
  })
   }
    
})







