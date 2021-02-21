import { Request, Response } from 'express'
const signInController = () => {
  const signIn = async (req: Request, res: Response) => {
    res.send('Sign In')
  }

  return { signIn }
}

export default signInController
