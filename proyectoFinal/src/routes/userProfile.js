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
userProfile.post('/register',(req,res) =>{
    const user = req.body
    res.send(user)
})
userProfile.get('/infoUser',(req,res) =>{
    const user = req.user || {data:'proximamente será info de usuario'}
    res.send(user)
})

export {userProfile}