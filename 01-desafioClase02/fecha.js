const fs = require('fs')

try{
	fs.writeFileSync('./fyh.txt', new Date().toLocaleString())
}catch(error){
	throw new Error(error.message)
}

const read = fs.readFileSync('./fyh.txt', 'utf-8')
console.log(read)



