 const chai = require('chai')
 const assert  = chai.assert
 const should  = chai.should()
 const expect  = chai.expect
 const calculadora = require('../calculadora')

 describe('testeando assert function',function(){
    describe("Chequeamos la función suma",function(){
        it('Chequeamos que el resultado sea igual a la suma de los dos números',function () {
            result = calculadora.suma(1,4)
            assert.equal(result,5)
        })
    })
 })
 describe('testeando assert function',function(){
    describe("Chequeamos la función suma",function(){
        it('Chequeamos que el resultado sea igual a la suma de los dos números',function () {
            result = calculadora.suma(1,4)
            result.should.be.equal(5)
        })
    })
 })

 describe('testeando assert function',function(){
    describe("Chequeamos la función suma",function(){
        it('Chequeamos que el resultado sea igual a la suma de los dos números',function () {
            result = calculadora.suma(1,4)
            expect(result).to.equal(5)
        })
    })
 })