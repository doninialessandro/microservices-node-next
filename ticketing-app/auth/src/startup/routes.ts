import { Express } from 'express'
import { json } from 'body-parser'

export default (app: Express): void => {
  app.use(json())
}
