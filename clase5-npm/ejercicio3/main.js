const moment = require("moment");

const fechaDeNacimiento = moment(new Date('1998/09/13')).format('YYYY/MM/DD')
const fechaDeHoy = moment()

const diasDesdeMiNacimiento = fechaDeHoy.diff(fechaDeNacimiento,"days")
const añosDesdeMiNacimiento = fechaDeHoy.diff(fechaDeNacimiento,"years")

console.log('fechaDeNacimiento: ',fechaDeNacimiento)
console.log('fechaDeHoy: ',fechaDeNacimiento)
console.log('diasDesdeMiNacimiento: ',diasDesdeMiNacimiento)
console.log('añosDesdeMiNacimiento: ',añosDesdeMiNacimiento)