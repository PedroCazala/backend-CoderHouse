import express from 'express'
import multer from 'multer'
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./images/profileImages')
    },
    filename:(req,file,cb) => {
        cb(null,file)
    }
})

export const upload = multer({storage:storage})
