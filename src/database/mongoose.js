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

