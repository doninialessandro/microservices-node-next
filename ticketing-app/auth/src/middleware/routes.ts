import { Express } from 'express'
import { json } from 'body-parser'
import { currentUser, signIn, signOut, signUp } from '../components'

export default (app: Express): void => {
  app.use(json())

  app.use('/api/users', currentUser)
  app.use('/api/users', signIn)
  app.use('/api/users', signOut)
  app.use('/api/users', signUp)
}
