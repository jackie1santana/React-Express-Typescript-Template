import express = require('express')

const app = express()

const PORT = process.env.PORT || 2300

app.get('/', async (req, res) => {
    await res.send('Welcome to Express yo  sds')
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})