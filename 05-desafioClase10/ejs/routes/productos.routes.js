const express = require('express')
const { redirect } = require('express/lib/response')
const apiRouter = express.Router()

const Producto = require('../controller/productos.js')

apiRouter.get('/productos', (req, res) => {
  res.render('index', { productos: Producto.listarProducto })
})

apiRouter.post('/productos', (req, res) => {
  let toAdd = req.body
  Producto.nuevoProducto(toAdd)
  res.redirect('productos')
})

apiRouter.get('/productos/:id', (req, res) => {
  let id = req.params.id
  res.status(200).json(Producto.mostrarProducto(id))
})

apiRouter.put('/productos/:id', (req, res) => {
  let toChange = req.body
  let id = req.params.id
  res.status(200).json(Producto.actualizarProducto(toChange, id))
})

apiRouter.delete('/productos/:id', (req, res) => {
  let id = req.params.id
  res.status(200).json(Producto.eliminarProducto(id))
})

module.exports = apiRouter
