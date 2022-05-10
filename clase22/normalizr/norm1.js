import { normalize,schema } from "normalizr"

const blogpost = {
    id: "1",
    title: "My blog post",
    description: "Short blogpost description",
    content: "Hello world",
    author: {
      id: "1",
      name: "John Doe"
    },
    comments: [
      {
        id: "1",
        author: "Rob",
        content: "Nice post!"
      },
      {
        id: "2",
        author: "Jane",
        content: "I totally agree with you!"
      }
    ]
   }

    const authorSchema = new schema.Entity('authors')
    const commentSchema = new schema.Entity('comments',{
        author:authorSchema
    })   
    const postSchema = new schema.Entity('posts',{
        author:authorSchema,
        comments:[commentSchema]
    })

    const dataNormalizada = normalize(blogpost,postSchema)
    console.log(dataNormalizada);

    import util from 'util'

    function printData (data){
        console.log(util.inspect(data,false,12,true));
    }
    
    printData(dataNormalizada)