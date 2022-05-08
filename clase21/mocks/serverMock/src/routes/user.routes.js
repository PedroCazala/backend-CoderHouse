import express from 'express'

export class userRoute extends express.Router{
    constructor(){
        super();

        this.post('/popular')
        this.get('/:id?')
        this.post('/')
        this.put('/:id')
        this.delete('/:id') 
    }
}