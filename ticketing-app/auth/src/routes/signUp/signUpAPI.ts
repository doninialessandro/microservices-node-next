import { Router } from 'express'
import { body } from 'express-validator'
import signUpController from './signUpController'

const router = Router()

router.post(
  '/signup',
  [
    body('email').isEmail().withMessage('😤 Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('😡 Password must be between 4 and 20 characters')
  ],
  signUpController().signUp
)

export default router
