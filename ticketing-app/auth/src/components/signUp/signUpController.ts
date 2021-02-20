import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
const signUpController = () => {
  const signUp = async (req: Request, res: Response) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).send(errors.array())
    }

    const { email, password } = req.body
    console.log('Creating a user...')

    res.send({})
  }

  return { signUp }
}

export default signUpController
