import productsModel from '../Models/productModel'
import multer from 'multer'
import sharp from 'sharp'
import fs from 'fs'

async function getAll(req, res) {
  try {
    const data = await productsModel.find()

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send({ msg: 'Deu Merda!!' })
  }
}

// async function deleteAll() {
//   try {
//     await productsModel.deleteMany()
//     return res.send('Donw deleteall')
//   } catch (error) {
//     return error
//   }
// }

async function create(req, res) {
  try {
    const { filename: image } = req.file

    const [name] = image.split('.')
    const filename = `${name}.jpg`

    await productsModel.create({
      image: filename,
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
    })

    return res.status(201).send({ msg: 'Product created successfully' })
  } catch (error) {
    return res.status(400).send({ error: error })
  }
}

export default { getAll, create }
