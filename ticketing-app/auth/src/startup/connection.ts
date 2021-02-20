import { Express } from 'express'

export default (app: Express, port: string): void => {
  app.listen(JSON.parse(port), () =>
    console.log(`🚀 Express: AUTH SERVICE listening on port ${port}`)
  )
}
