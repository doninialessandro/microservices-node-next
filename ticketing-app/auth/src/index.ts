import express from 'express'
import 'express-async-errors'

import connection from './startup/connection'
import routes from './middlewares/routes'
import errorHandler from './middlewares/errorHandler'

const app = express()
const port = process.env.PORT || '5000'
const dbHost = process.env.DB_HOST || 'auth-mongo-srv'
const dbPort = process.env.DB_PORT || '27017'
const dbName = process.env.DB_NAME || 'auth'

routes(app)
errorHandler(app)
connection(app, port, dbHost, dbPort, dbName)
