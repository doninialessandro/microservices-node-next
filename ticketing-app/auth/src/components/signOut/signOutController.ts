import { Request, Response } from 'express'

const signOutController = () => {
  const signOut = async (req: Request, res: Response) => {
    req.session = null
    console.log(`👋 User logged out!!!`)
    res.send({})
  }

  return { signOut }
}

export default signOutController
