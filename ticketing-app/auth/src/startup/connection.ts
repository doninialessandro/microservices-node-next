import { Express } from 'express'
import mongoose from 'mongoose'

export default async (
  app: Express,
  port: string,
  dbHost: string,
  dbPort: string,
  dbName: string,
  jwtToken: string | undefined
): Promise<void> => {
  if (!jwtToken) {
    throw new Error('🔐 JWT_KEY must be defined')
  }

  try {
    await mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    console.log(
      `🗄️  MongoDB: connected to mongoDB on ${dbHost}:${dbPort}/${dbName}`
    )
  } catch (err) {
    console.error(err)
  }

  app.listen(JSON.parse(port), () =>
    console.log(`🚀 Express: listening on port ${port}`)
  )
}
