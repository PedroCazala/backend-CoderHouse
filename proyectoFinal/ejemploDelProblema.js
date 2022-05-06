class MiClase{
    static funcionALlamar(){
        console.log('lalala');
    }
}
class Extendida extends MiClase{
    static funcion(){
        // Aca quiero llamar a 
        super.funcionALlamar()
    }
}

Extendida.funcion()