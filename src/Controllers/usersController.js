import usersModel from '../Models/usersModel'

async function getAll(req, res) {
  try {
    const data = await usersModel.find()

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send({ msg: 'Deu Merda!!' })
  }
}

async function create(req, res) {
  try {
    // const [name] = image.split('.')
    // const filename = `${name}.jpg`

    await usersModel.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })

    return res.status(201).send({ msg: 'Product created successfully' })
  } catch (error) {
    return res.status(400).send({ error })
  }
}

export default { getAll, create }
