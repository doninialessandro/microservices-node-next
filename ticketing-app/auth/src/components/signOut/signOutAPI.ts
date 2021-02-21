import { Router } from 'express'
import signOutController from './signOutController'

const router = Router()
router.get('/signout', signOutController().signOut)

export default router
