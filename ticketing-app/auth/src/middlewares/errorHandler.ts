import { Express, Request, Response, NextFunction } from 'express'
import { CustomError } from '../models/errors/CustomError'

export default (app: Express): void => {
  const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    if (err instanceof CustomError) {
      return res.status(err.statusCode).send({ errors: err.serializeErrors() })
    }

    res.status(400).send({
      errors: [{ message: 'Something went wrong' }]
    })
  }

  app.use(errorHandler)
}
