import { books } from "../../../data";

// eslint-disable-next-line import/no-anonymous-default-export
export default (req,res)=>{
    switch(req.method){
        case "GET":
            getBook(req,res)
            break;
        case "POST":
            createBook(req,res)
            break
    }
}

const getBook = (req,res)=>{
    res.status(200).json(books)
}

const createBook = (req,res)=>{
    const {id,name,author} = req.body
    const book ={id,name,author}
    books.push(book)
    res.status(201).json(book)
}