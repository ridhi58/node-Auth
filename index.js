
const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
require('./src/db/mongo')
const corsAllow = require('./src/config/corsAllow')

const userRoute = require('./src/routes/userRoute')
const app = express()

app.use(express.json())
app.use(corsAllow)

app.use(userRoute)

app.get('/' , (req,res)=>{
  res.send('hello nodes1-app API')
})

  const Port = process.env.PORT || 5000

app.listen(Port,()=>{
    console.log("connected on port" + Port)
})