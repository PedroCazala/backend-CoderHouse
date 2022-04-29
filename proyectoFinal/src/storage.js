const memory = 'memory'
const fileSystem = 'fileSystem'
const mongoDB = 'mongoDB'
const firebase = 'firebase'

const storage = fileSystem
const useStorage =()=>{
    switch (storage) {
        case 'memory':
            console.log('Se ejecutara la aplicación con memory');
            break;
        case 'fileSystem':
            console.log('Se ejecutara la aplicación con fileSystem');
            break;
        case 'mongoDB':
            console.log('Se ejecutara la aplicación con mongoDB');
            break;
        case 'firebase':
            console.log('Se ejecutara la aplicación con firebase');
            break;
    
        default:
            break;
    }
}