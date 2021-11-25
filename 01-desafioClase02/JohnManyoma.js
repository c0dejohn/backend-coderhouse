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
    return this.mascotas.push(mascota)
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

console.log(usuario.getFullName())
console.log(usuario.addMascota('perro'))
console.log(usuario.countMascota())
console.log(usuario.addBook('Sherlock Holmes', 'Arthur Conan Doyle'))
console.log(usuario.getBookNames())
