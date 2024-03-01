const nombre = 'franco'
const apellido = 'mac'

const nombreCompleto = `${nombre} ${apellido}`

console.log('%cindex.js line:6 nombreCompleto', 'color: #007acc;', nombreCompleto);

function getSaludo(nombre) {
    return 'Hola ' + nombre
}

console.log('%cindex.js line:12 Estes es un texto', 'color: #007acc;', `${ getSaludo(nombreCompleto)}`);