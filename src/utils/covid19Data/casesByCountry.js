const axios = require('axios')

const countryCasesByName = async () => {
   
   

axios({
    "method":"GET",
    "url":"https://covid-19-data.p.rapidapi.com/country",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"covid-19-data.p.rapidapi.com",
    "x-rapidapi-key":"a8b09fdfc0mshd6f279d5c7cefd6p11f240jsn27ee495e8d1c"
    },"params":{
    "format":"undefined",
    "name":"italy"
    }
    })
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })
}