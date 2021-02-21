import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import { User } from '../../models/user/User'
import { BadRequestError } from '../../models/errors/BadRequestError'

const signUpController = () => {
  const signUp = async (req: Request, res: Response) => {
    const { email, password } = req.body

    const existingUser = await User.findOne({ email })

    if (existingUser) {
      throw new BadRequestError(
        '😩 Sorry, the email provided is already in use'
      )
    }

    const user = User.build({ email, password })
    await user.save()

    // Generate JWT
    const userJwt = jwt.sign(
      {
        id: user.id,
        email: user.email
      },
      process.env.JWT_KEY!
    )
    // Store it on session object
    req.session = {
      jwt: userJwt
    }

    console.log(`🥳 Welcome ${user.email}!!!`)
    res.status(201).send(user)
  }
  return { signUp }
}

export default signUpController
