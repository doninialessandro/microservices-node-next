import { Request, Response, NextFunction } from 'express'
import { NotAuthorizedError } from '../models/errors/NotAuthorizedError'

export default (req: Request, res: Response, next: NextFunction) => {
  if (!req.currentUser) {
    throw new NotAuthorizedError()
  }

  next()
}
