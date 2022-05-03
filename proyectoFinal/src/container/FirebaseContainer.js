import admin from 'firebase-admin'
import serviceAccount from '../../POSTMAN.postman_collection.json'

export class FirebaseContainer{
}
export function connectFirebase(){
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://backend-clase20.firebaseio.com"
    });
    console.log('Base de datos Firebase conectada');
}
export {admin}