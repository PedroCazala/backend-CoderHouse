import {faker} from '@faker-js/faker'
const generateProduct = ()=>{
    return{
        title:faker.commerce.product(),
        price:faker.commerce.price(),
        img:faker.image.imageUrl()
    }
}
export default generateProduct