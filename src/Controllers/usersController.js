import usersModel from '../Models/usersModel'
import md5 from 'md5'
import dotenv from 'dotenv'

dotenv.config()

async function getAllUsers(req, res) {
  try {
    const data = await usersModel.find()
    return res.status(200).send({ data })
  } catch (error) {
    return res.send({ error })
  }
}

// async function deleteAll(req, res) {
//   try {
//     await usersModel.deleteMany()

//     return res.status(200).send({ msg: 'Tudo apagado!!!' })
//   } catch (error) {
//     return res.status(400).send({ msg: 'Erro Tudo cagado!!!' })
//   }
// }

async function getById(req, res) {
  try {
    const data = await usersModel.findById(req.params.id, 'name email')
    return res.status(200).send({ data })
  } catch (error) {
    return res.send({ error })
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

export default { getAllUsers, create, update, getById }
