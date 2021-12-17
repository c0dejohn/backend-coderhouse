const express = require('express')
const app = express()
const apiRouter = express.Router()
const PORT = 8080

const Producto = require('./productos')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', apiRouter)
app.use('/static', express.static(__dirname + '/public'))

apiRouter.get('/productos', (req, res) => {
  res.send(Producto.listarProducto)
})

apiRouter.post('/productos', (req, res) => {
  let toAdd = req.body
  let prod = Producto.nuevoProducto(toAdd)
  res.send(prod)
})

apiRouter.get('/productos/:id', (req, res) => {
  let id = req.params.id
  res.send(Producto.mostrarProducto(id))
})

apiRouter.put('/productos/:id', (req, res) => {
  let toChange = req.body
  let id = req.params.id
  res.send(Producto.actualizarProducto(toChange, id))
})

apiRouter.delete('/productos/:id', (req, res) => {
  let id = req.params.id
  res.send(Producto.eliminarProducto(id))
})

app.listen(PORT, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Server listening on PORT', PORT)
  }
})
