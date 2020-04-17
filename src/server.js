const express = require('express')
const reload = require('reload')
const axios = require('axios')
const cors = require('cors')
require('./database/mongoose.js')
const app = express()

const port = process.env.PORT

app.use(cors())

//add mongoose in here (require it)
//add in separate routers (require it)
//add countrycases data
//add in postman
//set up environment variables
//merge mongoose and mongodb together, or should i put them in separate files

app.get('/', (req, res) => {
  res.send('Hello Express')
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

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})




reload(app)