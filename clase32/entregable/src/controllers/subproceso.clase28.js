
let number = 1e8
let generatedNumber = []
let objetoNumeros =[]
let noSeRepiten = []

process.on("message",numb=>{
     number = parseInt(numb) 
     console.log(number);
     // proceso() 
     proceso()
})
console.log(number);
function proceso() {
     //generar numeros
     for(let i =1; i <= number;i++){
          let aleatorio =parseInt( Math.random() * (1000 - 1) + 1);
          generatedNumber.push(aleatorio);
     }
     // generatedNumber[0]='alala'
     for(let i =1; i <= number;i++){
     const repe =generatedNumber.filter(numb=>numb==i).length
     if(repe != 0){
          objetoNumeros = [...objetoNumeros,{numb:i,repe}]
     }
     }
     for(let i =1; i <= 1000;i++){
     const repe =generatedNumber.filter(numb=>numb==i).length
     if(repe == 0){
          noSeRepiten.push(i)
     }
     }
     // console.log('entro', {number,objetoNumeros,noSeRepiten,generatedNumber});
     // console.log('lala');
     process.send({mens:{number,objetoNumeros,noSeRepiten,generatedNumber}})
}
