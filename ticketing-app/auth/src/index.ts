import express from 'express'
import 'express-async-errors'

import connection from './startup/connection'
import routes from './middlewares/routes'
import errorHandler from './middlewares/errorHandler'

const port = process.env.PORT || '5000'
const dbHost = process.env.DB_HOST || 'auth-mongo-srv'
const dbPort = process.env.DB_PORT || '27017'
const dbName = process.env.DB_NAME || 'auth'
const jwtToken = process.env.JWT_KEY

const app = express()
app.set('trust proxy', true)

routes(app)
errorHandler(app)
connection(app, port, dbHost, dbPort, dbName, jwtToken)
