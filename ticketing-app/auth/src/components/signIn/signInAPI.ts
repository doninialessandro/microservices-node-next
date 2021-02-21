import { Router } from 'express'
import { body } from 'express-validator'
import signInController from './signInController'

import validateRequest from '../../middlewares/validateRequest'

const router = Router()
router.post(
  '/signin',
  [
    body('email').isEmail().withMessage('😤 Email must be valid...'),
    body('password')
      .trim()
      .notEmpty()
      .withMessage('😡 You must supply a password!')
  ],
  validateRequest,
  signInController().signIn
)

export default router
