class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre
    this.apellido = apellido
    this.libros = libros
    this.mascotas = mascotas
  }

  getFullName() {
    return `
      Nombres: ${this.nombre}
      Apellidos: ${this.apellido}`
  }

  addMascota(mascota) {
    this.mascotas.push(mascota)
  }

  countMascota() {
    return this.mascotas.length
  }

  addBook(book, autor) {
    return this.libros.push({ nombre: book, autor: autor })
  }

  getBookNames() {
    return this.libros.map((book) => book.nombre)
  }
}
let usuario = new Usuario(
  'John',
  'Manyoma',
  [{ nombre: 'La Metamorfosis', autor: 'Franz Kafka' }],
  ['gato']
)

usuario.getFullName()
usuario.addMascota('perro')
usuario.countMascota()
usuario.addBook('Sherlock Holmes', 'Arthur Conan Doyle')
usuario.getBookNames()
