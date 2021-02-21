import { scrypt, randomBytes } from 'crypto'
import { promisify } from 'util'

const toHash = async (password: string): Promise<string> => {
  const scryptAsync = promisify(scrypt)
  const salt = randomBytes(8).toString('hex')
  const buf = (await scryptAsync(password, salt, 64)) as Buffer

  return `${buf.toString('hex')}.${salt}`
}

const compare = async (
  storedPassword: string,
  suppliedPassword: string
): Promise<boolean> => {
  const scryptAsync = promisify(scrypt)
  const [hashedPassword, salt] = storedPassword.split('.')
  const buf = (await scryptAsync(suppliedPassword, salt, 64)) as Buffer

  return buf.toString('hex') === hashedPassword
}

export { toHash, compare }
