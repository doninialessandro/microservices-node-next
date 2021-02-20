import express from 'express'
import 'express-async-errors'

import connection from './startup/connection'
import routes from './middlewares/routes'
import errorHandler from './middlewares/errorHandler'

const app = express()
const port = process.env.PORT || '5000'

routes(app)
errorHandler(app)
connection(app, port)
