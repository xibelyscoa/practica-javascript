const saludar = (nombre,apellido,funcion) => {
    console.log(`Hola ${nombre} ${apellido}`)
    funcion()
}

const finSaludo= () => {
    console.log( 'Luego de saludar se ejecuta el callback')

}
module.exports = saludar
module.exports = finSaludo