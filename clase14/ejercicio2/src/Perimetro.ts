export class Perimetro {
    // constructor()
    static cuadrado(lado:number):number{
        return lado * 4
    }
    static rectangulo(a:number,b:number):number{
        return (a * 2) + (b * 2)
    }
    static triangulo(a:number,b:number,c:number):number{
        return a + b + c
    }
    static circulo(a:number):number{
        return 2 * Math.PI * a
    }
}