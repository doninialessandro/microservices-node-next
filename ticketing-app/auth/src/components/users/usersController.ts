// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const usersController = () => {
  const getCurrentUser = async (
    req: unknown,
    res: { send: (arg0: string) => void }
  ) => {
    res.send('Hi There')
  }

  return { getCurrentUser }
}

export default usersController
