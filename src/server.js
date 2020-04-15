const express = require('express')
const reload = require('reload')
const axios = require('axios')
const cors = require('cors')
require('./database/mongodb.js')
const app = express()

const PORT = process.env.PORT || 2300

app.use(cors())

//separate routers 
//add countrycases data

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

})


app.get('/globalcases/:id', async (req, res) => {
  console.log(req.params.id)
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

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})




reload(app)