// await Deno.writeTextFile("./archivo.txt", "Hola mundo, probando deno");

const text = await Deno.readTextFile("./archivo.txt");
console.log(text)