const session = require('express-session')
// const redisclient = require('../db/reddis')
// const redisStore = require('connect-redis')(session)



module.exports = session({
    name:"mySession",
    key:process.env.SESSION_KEY,
    // store:new redisStore({
    //     host:process.env.REDIS_IP,
    //     port:process.env.REDIS_PORT,
    //     client:redisclient
    // }),
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:10000*60,
        sameSite:true,
        secure:false
        // domain:'localhost'
    }
})

