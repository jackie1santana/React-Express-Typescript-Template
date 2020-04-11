import express, { Application, Request, Response, NextFunction } from 'express'

const app: Application = express()

const PORT: any = process.env.PORT || 2300

app.get('/', async (req: Request, res: Response, next: NextFunction) => {
    await res.send('Welcome to Express yo  sds')
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

