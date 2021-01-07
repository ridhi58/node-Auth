const session = require('express-session')
const redisclient = require('../db/reddis')
const redisStore = require('connect-redis')(session)



module.exports = session({
    name:"mySession",
    key:"session-key",
    store:new redisStore({
        host:process.env.REDIS_IP,
        port:process.env.REDIS_PORT,
        client:redisclient
    }),
    secret:'redis-secret',
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:10000*60,
        sameSite:true,
        secure:true,
        // domain:'localhost'
    }
})

