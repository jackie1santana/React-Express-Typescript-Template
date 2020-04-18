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
const express = require('express')
const reload = require('reload')
const axios = require('axios')
const cors = require('cors')
require('./database/mongoose.js')
const path = require('path')
const app = express()




const port = process.env.PORT

app.use(cors())

//add mongoose in here (require it)
//add in separate routers (require it)
//add countrycases data
//add in postman for dev and prod
//set up environment variables
//merge mongoose and mongodb together, or should i put them in separate files
//res.status

const publicDirectoryPath = path.join(__dirname, '../client/build')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.sendFile(publicDirectoryPath)
})

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

    // const globalCases = new Covid
    const globalCases = new Covid(req.body)
    await globalCases.save(globalCases).then(() => {
      console.log(globalCases)
  }).catch((error) => {
      console.log('Error', error)
  })
  
   
    
})


app.get('/globalcases/:id', async (req, res) => {
  
  
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
      const cases = { 
        confirmed: response.data[0].confirmed,
        recovered: response.data[0].recovered,
        critical: response.data[0].critical,
        deaths: response.data[0].deaths,
        allCases: response.data
      }
      
      if(req.params.id == 'confirmed') {
        res.json(cases.confirmed)

      }else if (req.params.id == 'recovered') {
        res.json(cases.recovered)

      }else if (req.params.id == 'critical') {
        res.json(cases.critical)

      }else if (req.params.id == 'deaths') {
        res.json(cases.deaths)

      }else {
        res.json(cases.allCases)
      }
       
    })
    .catch((error)=>{
      console.log(error)
    })

    
   
})

app.get('/casesbycountry', async (req, res) => {
  await res.send('weather')
})

app.get('/casesbycountry/:id', async (req, res) => {
  await res.send('weather')
})

app.get('/weatherData', async (req, res) => {
    await res.send('weather')
})

app.get('/geocode', async (req, res) => {
  await res.send('geocode')
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})




reload(app)