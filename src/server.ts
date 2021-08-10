import express from 'express'
import { createCourser } from './routes'

const app = express()

app.get('/', createCourser)

app.listen(3333)