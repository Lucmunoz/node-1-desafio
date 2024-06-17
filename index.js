const { leer, registrar } = require('./operaciones');

const command_line = process.argv.slice(2);

if (command_line[0].trim().toLowerCase() === undefined) {
  console.log('Error. Verifique la línea de comando ingresada');
} else {
  const accion = process.argv.slice(2)[0].trim().toLowerCase();

  if (accion === 'registrar') {
    const result = registrar(process.argv.slice(3));
    console.log(result);
  } else if (accion === 'leer') {
    const result = leer();
    console.log(result);
  } else {
    console.log('Error. Acción no encontrada');
  }
}
