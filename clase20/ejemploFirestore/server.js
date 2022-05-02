var admin = require("firebase-admin");

var serviceAccount = require("./db/backend-clase20-firebase-adminsdk-w6327-430fb97d48.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://backend-clase20.firebaseio.com"
});

crud();

async function crud(){
    const db =admin.firestore()
    const query =db.collection('usuarios')
    try{
        //CREATE
        const dataUsuario = {
            nombre:'Juan',
            dni:'141515154'
        }
        let doc =query.doc()
        await doc.create(dataUsuario)
        console.log('Usuario creado');
    }catch(err){

    }
}
