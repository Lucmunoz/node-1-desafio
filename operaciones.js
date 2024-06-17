const fs = require('fs');

const leer = () => {
  try {
    const data = fs.readFileSync('citas.json', 'utf8')
    return data.toString()
  } catch (err) {
    return 'Error, no es posible leer la data'
  }
};

const registrar = (data) => {
  try {
    const response = fs.readFileSync('citas.json', 'utf8');
    const citas = JSON.parse(response);
    try {
      if (data === undefined || Array.from(data).length != 5) {
        throw 'Revisa los datos a ingresar en la command line';
        /*La validación anerior se podría "obviar" o eliminar asignando
        valores por defecto o null si en caso faltan datos. */
      } else {
        citas.push({
          nombre: data[0],
          edad: data[1],
          tipo: data[2],
          color: data[3],
          enfermedad: data[4],
        });
        try {
          fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2));
          return 'Información agregada exitosamente';
        } catch (err) {
          return 'No fue posible guardar la data';
        }
      }
    } catch (err) {
      return err;
    }
  } catch (err) {
    return 'Error, no es posible leer la data';
  }
};

module.exports = { leer, registrar };
