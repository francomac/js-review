const persona = {
  nombre: "franco",
  apellido: "mac",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zipcode: "12345",
    lat: "14.2342",
    lng: "30.3423",
  },
};

const persona2 = { ...persona }; // spread operator

persona2.nombre = "leo";

console.log(persona2);
console.log(persona);
