import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import { User } from '../../models/user/User'
import { BadRequestError } from '../../models/errors/BadRequestError'

import { compare } from '../../utils/password'

const signInController = () => {
  const signIn = async (req: Request, res: Response) => {
    const { email, password } = req.body

    const existingUser = await User.findOne({ email })
    if (!existingUser) {
      throw new BadRequestError('🧙🏻‍♂️ You shall not pass!')
    }

    const passwordsMatch = await compare(existingUser.password, password)
    if (!passwordsMatch) {
      throw new BadRequestError('🧙🏻‍♂️ You shall not pass!')
    }

    // Generate JWT
    const userJwt = jwt.sign(
      {
        id: existingUser.id,
        email: existingUser.email
      },
      process.env.JWT_KEY!
    )
    // Store it on session object
    req.session = {
      jwt: userJwt
    }

    console.log(`🥳 User ${existingUser.email} logged in!!!`)
    res.status(200).send(existingUser)
  }

  return { signIn }
}

export default signInController
