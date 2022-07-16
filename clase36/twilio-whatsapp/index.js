require('dotenv/config')
const accountSid = 'AC37d79788c122b2c5e991017acfee0911'; 
const authToken = process.env.TWILIO_TOKEN; 
const client = require('twilio')(accountSid, authToken); 

// client.messages 
//     .create({ 
//        body: 'Mensaje desde nodejs, proyecto twilio whatsapp, clase36', 
//        mediaUrl: [      'https://res.cloudinary.com/hdsqazxtw/image/upload/v1559681445/logo_coderhouse_2_bmqbet.png' ],
//        from: 'whatsapp:+14155238886',       
//        to: `whatsapp:${process.env.PHONE}` 
//      }) 
//     .then(message => console.log(message.sid)) 
//     .done();

client.messages 
    .create({ 
       body: 'Prueba con numero de celular en *variable de entorno*', 
       from: 'whatsapp:+14155238886',       
       to: `whatsapp:${process.env.PHONE}` 
     }) 
    .then(message => console.log(message.sid)) 
    .done();
