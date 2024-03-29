import 'dotenv/config'
import express from 'express'
import rotas from './routes'
import cors from 'cors'


const app = express()
const port = process.env.PORT  || 3333

app.use(cors())
app.use(express.json())
app.use(rotas)

app.listen(port)

