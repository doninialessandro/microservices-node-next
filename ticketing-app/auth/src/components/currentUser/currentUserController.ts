import { Request, Response } from 'express'

const currentUserController = () => {
  const getCurrentUser = async (req: Request, res: Response) => {
    res.send('Hi There')
  }

  return { getCurrentUser }
}

export default currentUserController
