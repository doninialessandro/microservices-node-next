import { Router } from 'express'
import usersController from './usersController'

const router = Router()

router.get('/currentuser', usersController().getCurrentUser)

export default router
