import { Router } from 'express'
import currentUserController from './currentUserController'

const router = Router()
router.get('/currentuser', currentUserController().getCurrentUser)

export default router
