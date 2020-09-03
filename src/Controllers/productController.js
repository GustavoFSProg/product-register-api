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

async function update(req, res) {
  try {
    await productsModel.findByIdAndUpdate(req.params.id, {
      $set: {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
      },
    })

    res.status(200).send({ Menssagem: 'Produto atualizado com sucesso!' })
  } catch (error) {
    res.status(200).send({ Menssagem: ' erro Produto não atualizado!' })
  }
}

async function getById(req, res) {
  try {
    const data = await productsModel.findById(req.params.id)

    return res.status(200).send(data)
  } catch (error) {
    return res.stuatus(400).send({ error })
  }
}

async function removerProduto(req, res) {
  try {
    await productsModel.findByIdAndRemove(req.params.id)
    return res.send('Produto deletado com sucesso!')
  } catch (error) {
    return error
  }
}

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

export default { getAll, create, update, getById, removerProduto }
