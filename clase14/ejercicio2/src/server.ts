import express from "express";
import { IRespuesta } from "./IRespuesta";
import { getTime } from "./lib/utils";
import {Perimetro} from "./Perimetro";
import {Superficie} from "./Superficie";

let a:number =4
const b:number =5
const c:number =6


const app = express();
app.get("/", (req, res) => {
    res.send({ 
        time: getTime(),
        Cuadrado:{   
            lados: a,
            perimetro: Perimetro.cuadrado(a),
            superficie: Superficie.cuadrado(a)
        }
        ,
        rectangulo:{   
            base: a,
            altura: b,
            perimetro: Perimetro.rectangulo(a,b),
            superficie: Superficie.rectangulo(a,b)
        }
        ,
        triangulo:{   
            ladoA: a,
            ladoB: b,
            ladoC:c,
            base:a,
            altura:b,
            perimetro: Perimetro.triangulo(a,b,c),
            superficie:Superficie.triangulo(a,b)
        }
        ,
        circulo:{   
            radio: a,
            perimetro: Perimetro.circulo(a),
            superficie:Superficie.circulo(a),
        }

    });
});

app.get("/perimetro/cuadrado",(req,res)=>{
    const lado = req.query.lado;
    // const respuesta: IRespuesta = {
    //     tipoDeCalculo: "Perimetro",
    //     resultado: Perimetro.cuadrado(lado),
    //     figura: "Cuadrado",
    //     parametros: [
    //         {
    //             lado: lado
    //         }
    //     ],
    // }
    // res.send(respuesta);
})

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`conectado al puerto: ${PORT}`);
});
