const cluster = require('cluster')
const http = require('http')
const numCPUs = require('os').cpus().length

if(cluster.isMaster){
    console.log(`I am a master ${process.pid}`);
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }
}else{
    console.log(`I am a worker ${process.pid}`);
    process.exit()
}