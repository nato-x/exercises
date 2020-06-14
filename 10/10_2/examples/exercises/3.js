const getPlanet = (callback) => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  return callback(mars);
};
const makePhare =  ({ name, distanceFromSun:{ value, measurementUnit}}) =>  console.log(`${name}, is ${value} ${measurementUnit}, from the sun`)

setTimeout(() => getPlanet(makePhare), 4000); // imprime Marte depois de 4 segundos
