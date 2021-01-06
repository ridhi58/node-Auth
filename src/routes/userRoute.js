const User = require('./../models/user')
const express = require('express')
const router = new express.Router()
const session = require('../middleware/session')
const auth = require('../middleware/auth')



router.post('/users', async(req,res)=>{
    const user = new User(req.body)
    try{ 
        await user.save()
        const token = await user.generateAuthToken()      
        res.send({user,token})
    }
    catch(e){
        res.status(400).send(e)}
})
router.use(session)
router.post('/login' , async(req,res)=>{
    try{
        
        const user = await User.findByCredentials(req.body.email , req.body.password)   
        const token = await user.generateAuthToken()  
        req.session.user = token      
        res.cookie("cookie-key","cookie-value",{
                  maxAge:10000*60
        })      
        res.send({user,token})   
    }
    catch(e){
        console.log(e)
        res.status(400).send(e)
    }
})




router.post('/logout',auth, async(req, res) => {
    try {
        console.log("logout called")
        req.user.tokens = req.user.tokens.filter((token) => token.token !== req.token)
        await req.user.save()
        req.session.destroy(function (err) {
        })
        res.clearCookie('mySession')
        res.clearCookie('cookie-key')
        res.status(200).send()
    }
    catch (error) { 
        
        res.status(400).send(error.message)
    }
})



module.exports = router
