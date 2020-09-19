import md5 from 'md5'
import jwt from 'jsonwebtoken'
// import User from '../models/User'
import dotenv from 'dotenv'

dotenv.config()

export function encryptPassword(password) {
  return md5(password, process.env.GLOBAL_SAL_KEY)
}

export function isEmail(email) {
  // eslint-disable-next-line no-useless-escape
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}

export function isPassword(password) {
  const valid = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/
  if (valid.test(password)) return true
  return false
}

export async function generateToken(data) {
  const token = jwt.sign({ data }, process.env.GLOBAL_SALT_KEY, {
    expiresIn: '1d',
  })

  return token
}

export async function decodeToken(token) {
  return jwt.decode(token, process.env.GLOBAL_SAL_KEY)
}

export function verifyToken(token) {
  return jwt.verify(token, process.env.GLOBAL_SAL_KEY, (error, decode) => {
    if (error) return { error }
    return { decode }
  })
}
