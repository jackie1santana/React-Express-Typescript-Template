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

Covid.deleteOne({ confirmedCases: '123'})
.then(() => {
    console.log(globalCases)
}).catch((error) => {
    console.log('Error', error)
})

