// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const signOutController = () => {
  const signOut = async (
    req: unknown,
    res: { send: (arg0: string) => void }
  ) => {
    res.send('sign out')
  }

  return { signOut }
}

export default signOutController
