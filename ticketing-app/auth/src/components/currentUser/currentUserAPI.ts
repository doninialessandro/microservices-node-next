import { Router, Request, Response } from 'express'

import { currentUser } from '../../middlewares/currentUser'

const router = Router()
router.get('/currentuser', currentUser, (req: Request, res: Response) => {
  res.send({ currentUser: req.currentUser || null })
})

export default router
