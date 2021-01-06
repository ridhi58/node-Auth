
const express = require('express')
require('./src/db/mongo')
const corsAllow = require('./src/config/corsAllow')
const dotenv = require('dotenv')

const userRoute = require('./src/routes/userRoute')
const app = express()
dotenv.config()
app.use(express.json())
app.use(corsAllow)

app.use(userRoute)

app.get('/' , (req,res)=>{
  res.send('hello nodes1-app API')
})

  const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log("connected on port 5000")
})