import { Router } from 'express'
import usersController from './usersController'

const router = Router()

router.get('/current-user', usersController().getCurrentUser)

export default router
