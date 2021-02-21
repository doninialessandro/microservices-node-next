import { Router } from 'express'
import signInController from './signInController'

const router = Router()
router.get('/signin', signInController().signIn)

export default router
