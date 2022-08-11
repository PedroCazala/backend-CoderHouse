const args = Deno.args.map(num => Number(num));

const numeros = args.sort((a, b) => a - b);

const minimo = numeros[0];
const maximo = numeros[numeros.length - 1];

const promedio = (() => {
    let suma = 0;
    numeros.forEach(num => (suma += num));
})

const texto:string[] =[]