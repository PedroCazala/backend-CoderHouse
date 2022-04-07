export const newId = (products)=>{
    let arraysIds = products.map(prod =>prod.id).sort((a,b)=>a-b)
    console.log(arraysIds);
    let generatedId = ''
    for(let i=1 ; i <= products.length; i++){
        const id = arraysIds.find(element => element == i)
        console.log(id);
        if(!id){
            generatedId =i
        }
    }
    return generatedId
    // console.log(arraysIds)
}