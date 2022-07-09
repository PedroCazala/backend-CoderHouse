import { Router } from "express";

const userProfile = Router()

userProfile.get('/login',(req,res) =>{
    res.render('login')
})
userProfile.get('/logout',(req,res) =>{
    res.render('logout')
})
userProfile.get('/register',(req,res) =>{
    res.render('register')
})

export {userProfile}