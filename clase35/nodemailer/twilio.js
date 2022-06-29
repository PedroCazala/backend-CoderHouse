import twilio from 'twilio'

const accountSid = 'AC37d79788c122b2c5e991017acfee0911'
const authToken = '097f0d9c26dbf7fe27b1da8bde9f46ad'

const client = twilio(accountSid, authToken)

try {
   const message = await client.messages.create({
      body: 'Hola soy un SMS desde Node.js!',
      from: '+19805528248',
      to: '+5492325689691'
   })
   console.log(message)
} catch (error) {
   console.log(error)
}