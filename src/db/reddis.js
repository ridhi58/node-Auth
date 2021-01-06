const redis = require('ioredis')

const redisclient = redis.createClient({
    port:6379,
    host:'localhost'
})

redisclient.on('connect',()=>{
    console.log("redis connected")
})

module.exports = redisclient