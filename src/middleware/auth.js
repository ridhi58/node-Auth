const User = require('../models/user')
const jwt = require('jsonwebtoken')


const auth = async(req,res,next)=>{
try{
console.log('hit')
const token = req.session.user 
console.log(token)

const decode = jwt.verify(token,process.env.JWT_TOKEN)

const user = await User.findOne({_id:decode._id,'tokens.token':token})

if(!user){
    throw new Error()
}

req.user = user
req.token = token

next()
}
catch(error){
res.status(400).send({error:"Please Login"})
}
}

module.exports = auth