setTimeout(() => {
    process.send( {mensaje: `👶 Hola soy un hijo, mi processId es: ${process.pid}`}/* console.log('👶',{mensaje}) */)
},2000)

