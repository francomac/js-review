const miPromesa = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Tenemos un valor en la promesa");
      // reject("REJECT en miPromesa");
    }, 1000);
  });
};

const detenerTiempoAsync = async () => {
  try {
    console.log("Inicio");

    const respuesta = await miPromesa();
    console.log(respuesta);

    console.log("Fin");

    return "fin de medir tiempo async";
  } catch (error) {
    // return 'catch en detenerTiempoAsync'
    throw "Error en detenerTiempoAsync";
  }
};

detenerTiempoAsync()
  .then((valor) => console.log("THEN Exitoso:", valor))
  .catch((err) => console.log("Error:", err));
