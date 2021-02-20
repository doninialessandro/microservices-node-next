import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import { RequestValidationError } from '../../models/errors/RequestValidationError'
import { DatabaseConnectionError } from '../../models/errors/DatabaseConnectionError'

const signUpController = () => {
  const signUp = async (req: Request, res: Response) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array())
    }

    throw new DatabaseConnectionError()

    res.send({})
  }

  return { signUp }
}

export default signUpController
