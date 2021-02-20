// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const signInController = () => {
  const signIn = async (
    req: unknown,
    res: { send: (arg0: string) => void }
  ) => {
    res.send('Sign In')
  }

  return { signIn }
}

export default signInController
