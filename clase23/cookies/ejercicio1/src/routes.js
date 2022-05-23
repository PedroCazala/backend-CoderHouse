import { Router } from "express";
 
export class Rutas extends Router{
    constructor(){
        super()

        this.get('/set',(req,res)=>{
            res.cookie('server','express').send('cookie creada')
        })
        this.post('/set',(req,res)=>{
            const {name, value,time} =req.body
            if(name,value){
                time?
                    res.cookie(name,value,{maxAge:time}).send(`Se creó la siguiente cookie: ${`${name}: ${value},con una duración de: ${Number(time)} milisegundos`}`)
                :
                    res.cookie(name,value).send(`Se creó la siguiente cookie: ${`${name}: ${value}`}`)
            }else{
                res.send('Falta nombre o valor')
            }
        })
        this.get('/getCookies',(req,res)=>{
            res.send(req.cookies)
        })
        this.delete ('/delete',(req,res)=>{
            const deleteCookie = req.query.cookie
        
            res.clearCookie(deleteCookie).send(`La cookie ${deleteCookie}, se ha borrado`)
        })
    }
}