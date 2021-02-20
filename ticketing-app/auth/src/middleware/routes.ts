import { Express } from 'express'
import { json } from 'body-parser'
import userAPI from '../components/users/usersAPI'

export default (app: Express): void => {
  app.use(json())
  app.use('/api/users', userAPI)
}
