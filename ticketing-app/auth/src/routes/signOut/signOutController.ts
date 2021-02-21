import { Request, Response } from 'express'
const signOutController = () => {
  const signOut = async (req: Request, res: Response) => {
    res.send('sign out')
  }

  return { signOut }
}

export default signOutController
