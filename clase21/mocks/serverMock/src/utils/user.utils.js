import { faker } from '@faker-js/faker';

 export default function generateUser(){
     return{
         nombre: faker.name.firstName(),
         email: faker.internet.email(),
         website: faker.internet.url(),
         image: faker.image.imageUrl()
     }
 }
 