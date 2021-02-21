import { Request, Response } from 'express'

const signOutController = () => {
  const signOut = async (req: Request, res: Response) => {
    req.session = null
    console.log(`👋 User logged out!!!`)
    res.status(200).send({ message: '👋 User logged out!!!' })
  }

  return { signOut }
}

export default signOutController
