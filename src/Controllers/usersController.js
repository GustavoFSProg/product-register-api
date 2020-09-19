import md5 from 'md5'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import usersModel from '../Models/usersModel'
// import generateToken from '../utils'

dotenv.config()

async function getAllUsers(req, res) {
  try {
    const data = await usersModel.find()
    return res.status(200).send(data)
  } catch (error) {
    return res.send({ error })
  }
}

async function getById(req, res) {
  try {
    const data = await usersModel.findById(req.params.id, 'name email')
    return res.status(200).send(data)
  } catch (error) {
    return res.send({ error })
  }
}

async function removeById(req, res) {
  try {
    await usersModel.findByIdAndRemove(req.params.id)

    return res.status(200).send({ msg: 'Usuario deletado com sucesso' })
  } catch (error) {
    return error
  }
}

async function update(req, res) {
  try {
    await usersModel.findByIdAndUpdate(req.params.id, {
      $set: {
        name: req.body.name,
        email: req.body.email,
        // password: md5(req.body.password, process.env.GLOBAL_SALT_KEY),
      },
    })

    return res.status(200).send({ msg: 'Usuario editado com sucesso!' })
  } catch (error) {
    return res.status(400).send({ erro: 'Erro ao editar!' })
  }
}

async function generateToken(data) {
  const token = jwt.sign({ data }, process.env.GLOBAL_SALT_KEY, {
    expiresIn: '1d',
  })

  return token
}

async function login(req, res) {
  try {
    const { email, password } = req.body

    console.log(email)

    const data = await usersModel.findOne({
      email,
      password: md5(password, process.env.GLOBAL_SALT_KEY),
    })

    if (!data) return res.status(400).send({ msg: 'Usuario não encontrado!' })

    const token = await generateToken(data)

    console.log(token)

    return res.status(201).send({ email, Token: token })
  } catch (error) {
    return error
  }
}

async function create(req, res) {
  try {
    await usersModel.create({
      name: req.body.name,
      email: req.body.email,
      password: md5(req.body.password, process.env.GLOBAL_SALT_KEY),
    })

    return res.status(201).send({ msg: 'User created successfully' })
  } catch (error) {
    return res.status(400).send({ error })
  }
}

export default { getAllUsers, create, login, update, getById, removeById }
