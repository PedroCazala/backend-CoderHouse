import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'ricky.oberbrunner21@ethereal.email',
        pass: '3quYPE1JsRQRFfFnkC'
    }
});

const mailOptions = {
    from: 'Servidor Node.js',
    to: 'cazalapedro@hotmail.com.ar',
    subject: 'Mail de prueba desde Node.js',
    html: '<h1 style="color: blue;">Contenido de prueba desde <span style="color: green;">Node.js con Nodemailer</span></h1>'
 }
 
 try {
    const info = await transporter.sendMail(mailOptions)
    console.log(info)
 } catch (error) {
    console.log(error)
 }
 