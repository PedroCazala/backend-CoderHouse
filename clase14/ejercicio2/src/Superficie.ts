export class Superficie{
    static cuadrado(a:number):number{
        return a * a
    }
    static rectangulo(a:number,b:number):number{
        return a * b
    }
    static triangulo(a:number,b:number):number{
        return (a * b)/2
    }
    static circulo(a:number):number{
        return Math.PI * (a*a)
    }
}