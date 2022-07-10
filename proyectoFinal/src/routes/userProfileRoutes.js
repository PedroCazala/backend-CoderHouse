import { Router } from "express";
import passport from "passport";

const userProfile = Router()

userProfile.get('/login',(req,res) =>{
    res.render('login')
})
userProfile.post('/login',passport.authenticate('local-login',{
    successRedirect:'/profile',
    failureRedirect:'/error',
    passReqToCallback:true
}))
userProfile.get('/logout',(req,res) =>{
    res.render('logout')
})
userProfile.get('/register',(req,res) =>{
    res.render('register')
})
userProfile.post('/register',
    // (req,res) =>{
    //     const user = req.body
    //     res.send(user)
    // }
    passport.authenticate("local-signup",{
        successRedirect:'/profile',
        failureRedirect:'/register',
        passReqToCallback:true
    })
)
userProfile.get('/profile', (req, res) => {
    const user = req.user
    res.send(user)
})
userProfile.get('/infoUser',(req,res) =>{
    const user = req.user || {data:'proximamente será info de usuario'}
    res.send(user)
})

export {userProfile}